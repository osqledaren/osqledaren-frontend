/* eslint-disable @typescript-eslint/camelcase */
const RSSParser = require('rss-parser');

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest },
  options
) => {
  const { createNode } = actions;
  console.log('Fetching podcast data');

  const rss = new RSSParser();
  if (options.podcasts.length <= 0) return;
  const podcastFeeds = await Promise.all(
    options.podcasts.map(podcast => rss.parseURL(podcast))
  );
  podcastFeeds.forEach(({ items, ...meta }) => {
    const content = JSON.stringify(meta);
    const podcastNodeId = createNodeId(`gatsby-source-podcast-${meta.title}`);
    const episodeNodes = items.map(episode => {
      const content = JSON.stringify(episode);
      return {
        ...episode,
        id: createNodeId(`gatsby-source-podcast-episode-${episode.title}`),
        podcast___NODE: podcastNodeId,
        internal: {
          type: 'PodcastEpisode',
          mediaType: 'text/html',
          description: meta.description,
          content,
          contentDigest: createContentDigest(content),
        },
      };
    });
    createNode({
      ...meta,
      id: podcastNodeId,
      episodes___NODE: episodeNodes.map(episode => episode.id),
      internal: {
        type: 'Podcast',
        mediaType: 'text/html',
        description: meta.description,
        content,
        contentDigest: createContentDigest(content),
      },
    });
    episodeNodes.forEach(node => {
      createNode(node);
    });
  });
  return;
};
