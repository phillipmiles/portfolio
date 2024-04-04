import type { NextPage } from 'next';
import Head from 'next/head';
import PageContentWrap from '../../components/generic/PageContentWrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TestSVG from './test.svg';
import {
  faAws,
  faCss3,
  faGit,
  faGithub,
  faHtml5,
  faJs,
  faJsSquare,
  faNode,
  faNodeJs,
  faReact,
  faShopify,
} from '@fortawesome/free-brands-svg-icons';

import Banner from '../../components/Banner';
import ProjectCard from '../../components/ProjectCard';
import ProjectCardWide from '../../components/ProjectCardWide';
import PageTitle from '../../components/PageTitle';
import PageIntro from '../../components/PageIntro';
import projects from '../../data/projects';
import s from './index.module.css';
import Heading from '../../components/Heading';
import {
  faAlignJustify,
  faArrowUpWideShort,
  faBackward,
  faBackwardStep,
  faForward,
  faForwardFast,
  faForwardStep,
  faPause,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
import Flex from '../../components/generic/Flex';
import useAudio from '../../hooks/useAudio';
import { useEffect, useRef, useState } from 'react';

import useAudioLevel from '../../hooks/useAudioLevel';
import Image from 'next/image';
import AudioSoundGraph from '../../components/generic/AudioSoundGraph';
import useDragContained from '../../hooks/useDragContained';
import { getTimeString } from '../../utils/time';
import useMediaElementAudioSource from '../../hooks/useMediaElementAudioSource';
import { fetchAudioLevels } from '../../hooks/useAudioFuncs';
import { toPercent } from '../../utils/math';

const Projects: NextPage = () => {
  //   a: audioObject.current,
  //   progress: progress,
  //   setTime: changeTime,
  //   buffered: buffered,
  //   currentTimeString: currentTimeString,
  //   durationTimeString: durationTimeString,
  //   load: loadAudio,
  //   play: play,
  //   pause: pause,
  //   audioState: audioState,
  // const audio = useAudio('/audio/trying-to-make-a-song.mp3');
  // const decibals = useAudioLevel('/audio/trying-to-make-a-song.mp3');
  // const audio = useAudio('/audio/mixaund-hope.mp3');
  // const decibals = useAudioLevel('/audio/mixaund-hope.mp3');

  // const { audioState, load, play, pause, levels, progress } = useAudio(
  //   '/audio/letra-echoes.wav'
  // );
  // const { audioRef, load } = useAudio('/audio/letra-echoes.wav');

  const audioRef = useRef<HTMLMediaElement>();

  const {
    audioSourceNode,
    connectAudio,
    playAudio,
    pauseAudio,
    audioState,
    audioProgress,
    currentAudioTime,
    currentAudioTimeString,
    audioDuration,
  } = useAudio(audioRef);
  const [audioLevels, setAudioLevels] = useState<number[]>([]);

  const elementRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isOverGraph, setIsOverGraph] = useState(false);
  const [graphIndicator, setGraphIndicator] = useState(0);
  const [graphIndicatorTimeString, setGraphIndicatorTimeString] =
    useState('0:00');

  useEffect(() => {
    if (!containerRef.current) return;
    const localRef = containerRef.current;

    const handleGraphMouseLeave = () => {
      localRef.addEventListener('mouseover', handleGraphMouseOver);
    };
    const handleGraphMouseMove = (event: any) => {
      const boundingBox = localRef.getBoundingClientRect();
      if (!elementRef.current) return;

      const cursorPosX = event.clientX - boundingBox.left;
      const posX = cursorPosX - elementRef.current.offsetWidth / 2;

      const progress = posX / boundingBox.width;
      const secondsIntoTrack = audioDuration * progress;

      // Fix calculation sometimes going into the negative when graph is
      // compressed by small screen sizes.
      const limitedSecondsIntoTrack =
        secondsIntoTrack < 0 ? 0 : secondsIntoTrack;
      const timeString = getTimeString(limitedSecondsIntoTrack);

      setGraphIndicator(posX);
      setGraphIndicatorTimeString(timeString);
    };
    const handleGraphMouseOver = () => {
      localRef.removeEventListener('mouseover', handleGraphMouseMove);
      localRef.addEventListener('mousemove', handleGraphMouseMove);
      localRef.addEventListener('mouseleave', handleGraphMouseLeave);
      setIsOverGraph(true);
    };

    localRef.addEventListener('mouseover', handleGraphMouseOver);

    return () => {
      if (!localRef) return;
      localRef.removeEventListener('mouseover', handleGraphMouseOver);
      if (isOverGraph) {
        localRef.removeEventListener('mousemove', handleGraphMouseMove);
        localRef.removeEventListener('mouseleave', handleGraphMouseLeave);
      }
    };
  }, [isOverGraph, audioDuration]);

  useEffect(() => {
    const run = async () => {
      setAudioLevels(await fetchAudioLevels('/audio/letra-echoes.wav'));
    };

    run();
  }, []);

  const togglePlay = () => {
    if (!audioSourceNode) {
      connectAudio();
      playAudio();
    } else if (audioState === 'playing') {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  return (
    <>
      <Head>
        <title>Projects | Phillip Miles React Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Banner />
      <PageContentWrap>
        {/* <div style={{ marginBottom: 96 }}> */}
        <div style={{ textAlign: 'center', marginTop: 64, marginBottom: 96 }}>
          <PageTitle>React Construct</PageTitle>
          <PageIntro>Made with React Construct</PageIntro>
        </div>

        <Flex className={s.contentBox}>
          <Flex className={s.left}>
            <PageContentWrap>
              <Heading tag="h2" as="h4">
                Audio Player
              </Heading>
              <p>Made with</p>
              <ul>
                <li>useAudio</li>
                <li>useAudioLevel</li>
                <li>useDragContained</li>
                <li>AudioSoundGraph</li>
              </ul>
            </PageContentWrap>
          </Flex>
          <div className={s.right}>
            {/* <Flex
                style={{
                  gap: '4px',
                  alignItems: 'flex-end',
                  height: '200px',
                  marginBottom: '24px',
                }}
              >
                {audio.audioState === 'play' &&
                  audio.getAnalyserData().map((data) => {
                    return (
                      <div
                        style={{
                          width: '8px',
                          height: `${data / 2}px`,
                          backgroundColor: '#d33c94',
                          flexShrink: 0,
                        }}
                      />
                    );
                  })}
              </Flex> */}
            <Flex className={s.playerContainer}>
              <Flex className={s.playerTopContainer}>
                <div>
                  <div
                    className={s.albumArt}
                    style={{
                      width: '300px',
                      height: '300px',
                    }}
                  >
                    <div className={s.box}>
                      <Image src="/audioTest2.jpg" fill alt="" />
                    </div>
                  </div>
                  <Heading
                    tag="h3"
                    as="heading6"
                    style={{
                      marginTop: ' 48px',
                      marginBottom: 0,
                      fontSize: '24px',
                      textAlign: 'center',
                    }}
                  >
                    Echoes
                  </Heading>
                  <span
                    style={{
                      display: 'block',
                      marginTop: '8px',
                      // fontSize: '16px',
                      opacity: 0.7,
                      textAlign: 'center',
                      // color: '#775588',
                      color: 'white',
                    }}
                  >
                    Letra
                  </span>
                </div>
              </Flex>

              <div
                style={{
                  backgroundColor: '#442255',
                  height: '120px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '32px',
                }}
              >
                <Flex style={{ alignItems: 'center', position: 'relative' }}>
                  <button className={s.button}>
                    <FontAwesomeIcon
                      icon={faBackwardStep}
                      style={{ height: '16px', width: '16px' }}
                    />
                  </button>
                  <button
                    className={s.button}
                    onClick={togglePlay}
                    style={{
                      height: '64px',
                      width: '64px',
                      background: '#d33c94',
                    }}
                  >
                    {audioState === 'playing' && (
                      <FontAwesomeIcon
                        icon={faPause}
                        style={{ height: '20px', width: '20px' }}
                      />
                    )}
                    {audioState !== 'playing' && (
                      <FontAwesomeIcon
                        icon={faPlay}
                        style={{ height: '20px', width: '20px' }}
                      />
                    )}
                  </button>

                  <button className={s.button}>
                    <FontAwesomeIcon
                      icon={faForwardStep}
                      style={{ height: '16px', width: '16px' }}
                    />
                  </button>
                </Flex>
                <div className={s.graphContainer}>
                  <div
                    ref={elementRef}
                    className={s.dragElement}
                    style={{
                      left: `${graphIndicator}px`,

                      // top: position.yOffset,
                      // ...(isDragging && { background: 'rgb(243, 78, 95)' }),
                    }}
                  >
                    <div />
                    <span>{graphIndicatorTimeString}</span>
                  </div>
                  <div
                    ref={containerRef}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      position: 'relative',
                      flexGrow: 1,
                      height: '60px',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {/*
                  <div
                    style={{
                      position: 'absolute',
                      // background: 'red',
                      // filter: 'hue-rotate(90deg)',
                      left: 0,
                      top: 0,
                      bottom: 0,
                      right: 0,
                      overflow: 'hidden',
                      width: `${audio.progress}%`,
                      // width: '100%',
                      // marginRight: '50%',
                    }}
                  >
                    <Flex
                      style={{
                        alignItems: 'center',
                        flexWrap: 'nowrap',
                        width: '100%',
                        height: '100%',
                      }}
                    >
                      {decibals.map((seg) => (
                        <div
                          style={{
                            flexGrow: 1,
                            flexShrink: 0,
                            // height: `${(Math.abs(seg) - 50) * 4}px`,
                            height: `${seg}%`,
                            // background: '#d33c94',
                            background: '#d33c94',
                            // filter: 'hue-rotate(90deg)',
                          }}
                        />
                      ))}
                    </Flex>
                  </div>
                  <Flex
                    style={{
                      alignItems: 'center',

                      flexGrow: 1,
                    }}
                  >
                    {decibals.map((seg) => (
                      <div
                        style={{
                          flexGrow: 1,
                          // height: `${(Math.abs(seg) - 50) * 4}px`,
                          height: `${seg}%`,
                          // background: '#d33c94',
                          background: '#775588',
                          // filter: 'hue-rotate(90deg)',
                        }}
                      />
                    ))}
                  </Flex>
                   */}

                    <AudioSoundGraph
                      data={audioLevels}
                      progress={audioProgress / 100}
                    />
                  </div>
                </div>
              </div>
            </Flex>
            <audio
              ref={audioRef}
              src="/audio/letra-echoes.wav"
              controls
              style={{ width: '100%' }}
            >
              <source type="audio/mpeg" src="/audio/letra-echoes.wav" />
            </audio>
          </div>
        </Flex>
      </PageContentWrap>

      {/* </div> */}
    </>
  );
};

export default Projects;
