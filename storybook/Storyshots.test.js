/* @noflow */
import initStoryshots, {
  multiSnapshotWithOptions,
  Stories2SnapsConverter,
} from '@storybook/addon-storyshots';

initStoryshots({
  configPath: 'storybook',
  stories2snapsConverter: new Stories2SnapsConverter({
    snapshotsDirName: './',
  }),
  test: multiSnapshotWithOptions({}),
});
