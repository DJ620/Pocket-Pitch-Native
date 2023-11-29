import React from "react";
import A from "./Audio/A.mp3";
import As from "./Audio/As.mp3";
import B from "./Audio/B.mp3";
import C2 from "./Audio/C2.mp3";
import C1 from "./Audio/C1.mp3";
import Cs from "./Audio/Cs.mp3";
import D from "./Audio/D.mp3";
import Ds from "./Audio/Ds.mp3";
import E from "./Audio/E.mp3";
import F from "./Audio/F.mp3";
import Fs from "./Audio/Fs.mp3";
import G from "./Audio/G.mp3";
import Gs from "./Audio/Gs.mp3";
import defaultA from "./Images/DefaultNotes/A-Button.png";
import defaultAs from "./Images/DefaultNotes/A-Sharp-Button.png";
import defaultB from "./Images/DefaultNotes/B-Button.png";
import defaultD from "./Images/DefaultNotes/D-Button.png";
import defaultCs from "./Images/DefaultNotes/D-Sharp-Button.png";
import defaultE from "./Images/DefaultNotes/E-Button.png";
import defaultDs from "./Images/DefaultNotes/E-Sharp-Button.png";
import defaultF from "./Images/DefaultNotes/F-Button.png";
import defaultFs from "./Images/DefaultNotes/F-Sharp-Button.png";
import defaultG from "./Images/DefaultNotes/G-Button.png";
import defaultGs from "./Images/DefaultNotes/G-Sharp-Button.png";
import defaultC5 from "./Images/DefaultNotes/High-C-Button.png";
import defaultC4 from "./Images/DefaultNotes/Low-C-Button.png";

import activeA from "./Images/ActiveNotes/A-Button.png";
import activeAs from "./Images/ActiveNotes/A-Sharp-Button.png";
import activeB from "./Images/ActiveNotes/B-Button.png";
import activeD from "./Images/ActiveNotes/D-Button.png";
import activeCs from "./Images/ActiveNotes/D-Sharp-Button.png";
import activeE from "./Images/ActiveNotes/E-Button.png";
import activeDs from "./Images/ActiveNotes/E-Sharp-Button.png";
import activeF from "./Images/ActiveNotes/F-Button.png";
import activeFs from "./Images/ActiveNotes/F-Sharp-Button.png";
import activeG from "./Images/ActiveNotes/G-Button.png";
import activeGs from "./Images/ActiveNotes/G-Sharp-Button.png";
import activeC5 from "./Images/ActiveNotes/High-C-Button.png";
import activeC4 from "./Images/ActiveNotes/Low-C-Button.png";
import dot from "./Images/Miscellaneous/Little-Dot.png";

import styles from "./noteStyles";

const allNotes = [
    {
      src: C1,
      id: 'audio-C1',
      note: "C4",
      style: styles.C1,
      defaultImg: defaultC4,
      activeImg: activeC4,
      play: true
    },
    {
      src: Cs,
      id: 'audio-Cs',
      note: "#/b",
      style: styles.Cs,
      defaultImg: defaultCs,
      activeImg: activeCs,
      play: true
    },
    {
      src: D,
      id: 'audio-D',
      note: "D",
      style: styles.D,
      defaultImg: defaultD,
      activeImg: activeD,
      play: true
    },
    {
      src: Ds,
      id: 'audio-Ds',
      note: "#/b",
      style: styles.Ds,
      defaultImg: defaultDs,
      activeImg: activeDs,
      play: true
    },
    {
      src: E,
      id: 'audio-E',
      note: "E",
      style: styles.E,
      defaultImg: defaultE,
      activeImg: activeE,
      play: true
    },
    {
      src: F,
      id: 'audio-F',
      note: "F",
      style: styles.F,
      defaultImg: defaultF,
      activeImg: activeF,
      play: true
    },
    {
      src: Fs,
      id: 'audio-Fs',
      note: "#/b",
      style: styles.Fs,
      defaultImg: defaultFs,
      activeImg: activeFs,
      play: true
    },
    {
      src: G,
      id: 'audio-G',
      note: "G",
      style: styles.G,
      defaultImg: defaultG,
      activeImg: activeG,
      play: true
    },
    {
      src: Gs,
      id: 'audio-Gs',
      note: "#/b",
      style: styles.Gs,
      defaultImg: defaultGs,
      activeImg: activeGs,
      play: true
    },
    {
      src: A,
      id: 'audio-A',
      note: "A",
      style: styles.A,
      defaultImg: defaultA,
      activeImg: activeA,
      play: true
    },
    {
      src: As,
      id: 'audio-As',
      note: "#/b",
      style: styles.As,
      defaultImg: defaultAs,
      activeImg: activeAs,
      play: true
    },
    {
      src: B,
      id: 'audio-B',
      note: "B",
      style: styles.B,
      defaultImg: defaultB,
      activeImg: activeB,
      play: true
    },
    {
      src: C2,
      id: 'audio-C2',
      note: "C5",
      style: styles.C2,
      defaultImg: defaultC5,
      activeImg: activeC5,
      play: true
    },
    {
      src: dot,
      id: 'littleDot',
      note: "dot",
      style: styles.littleDot,
      defaultImg: dot,
      activeImg: dot,
      play: false
    }
  ]

  export default allNotes;