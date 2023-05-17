// Work around react-player having hydration issue.
// https://github.com/cookpete/react-player/issues/1455#issuecomment-1207154843
import { LegacyRef, Ref, RefObject } from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player/lazy';

interface Props {
  playerRef: LegacyRef<ReactPlayer> | undefined;
}

const VideoPlayer = ({
  playerRef,
  ...props
}: ReactPlayerProps): JSX.Element => <ReactPlayer ref={playerRef} {...props} />;

export default VideoPlayer;
