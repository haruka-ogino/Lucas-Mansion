import { useEffect, useState } from 'react'
import Jigsaw from './GamePopups/Jigsaw'
import Matching from './GamePopups/Matching'
import MatchingExample from './GamePopups/MatchingExample'
import Clock from './GamePopups/Clock'
import CombinationLock from './GamePopups/CombinationLock'

//clues:
import ClockFace from './CluePopups/ClockFace'
import Gnome from './CluePopups/Gnome'
import Stool from './CluePopups/Stool'
import Chest from './CluePopups/Chest'
import Duck from './CluePopups/Duck'
import Mirror from './CluePopups/Mirror'
import Pumpkin from './CluePopups/Pumpkin'
import Chandelier from './CluePopups/Chandelier'
import Inventory from './CluePopups/Inventory'

//style:
import '../styles/popup.css'
import '../styles/main.css'
import '../styles/dinner.css'

export default function Dinner() {
  const [block, setBlock] = useState(true)

  //game popups:
  const [jigsaw, setJigsaw] = useState(false)
  const [jigsawWin, setJigsawWin] = useState(false)
  const [matching, setMatching] = useState(false)
  const [matchingWin, setMatchingWin] = useState(false)
  const [matchingE, setMatchingE] = useState(false)
  const [lockNum, setLockNum] = useState(false)

  // paper states
  const [foundPapers, setFoundPapers] = useState([false, false, false])

  //clue popups:
  const [clockFace, setClockFace] = useState(false)
  const [clock, setClock] = useState(false)
  const [gnome, setGnome] = useState(false)
  const [stool, setStool] = useState(false)
  const [chest, setChest] = useState(false)
  const [duck, setDuck] = useState(false)
  const [mirror, setMirror] = useState(false)
  const [pumpkin, setPumpkin] = useState(false)
  const [chandelier, setChandelier] = useState(false)
  const [inventory, setInventory] = useState(false)

  useEffect(() => {
    if (jigsawWin) {
      document.body.style.backgroundImage = "url('/highangle.png')"
    } else {
      document.body.style.backgroundImage = "url('/highangle-paper.png')"
    }
    if (
      !jigsaw &&
      !matchingE &&
      !matching &&
      !clock &&
      !lockNum &&
      !clockFace &&
      !gnome &&
      !stool &&
      !chest &&
      !duck &&
      !mirror &&
      !pumpkin &&
      !chandelier &&
      !inventory
    ) {
      setBlock(false)
    } else {
      setBlock(true)
    }
  }, [
    jigsaw,
    jigsawWin,
    matching,
    matchingE,
    clock,
    lockNum,
    block,
    clockFace,
    gnome,
    stool,
    chest,
    matchingWin,
    duck,
    mirror,
    pumpkin,
    chandelier,
    inventory,
  ])

  return (
    <div className="dinner">
      {jigsaw && (
        <div className="popup-overlay">
          <div className="map-popup">
            <Jigsaw
              foundPapers={foundPapers}
              setJigsaw={setJigsaw}
              win={jigsawWin}
              setWin={setJigsawWin}
            />
          </div>
        </div>
      )}

      <button className="clue frame" onClick={() => setJigsaw(true)}>
        <img
          src={
            jigsawWin ? '/lucas-no-map.png' : '/dinner-images/lucas-map2.png'
          }
          className={block ? 'block' : 'frame'}
          alt="frame with map"
        />
      </button>

      {lockNum && (
        <div className="popup-overlay">
          <div className="game-popup">
            <CombinationLock setLockNum={setLockNum} />
          </div>
        </div>
      )}
      <button className="clue lock" onClick={() => setLockNum(true)}>
        <img
          className={block ? 'block' : 'lock noMap'}
          src="/dinner-images/door-handle.png"
          alt="frame with map"
        />
      </button>

      {clock && (
        <div className="popup-overlay">
          <div className="clockbod-popup">
            <Clock
              setClock={setClock}
              win={matchingWin}
              foundPapers={foundPapers}
              setFoundPapers={setFoundPapers}
            />
          </div>
        </div>
      )}

      <button className="clue clockbod" onClick={() => setClock(true)}>
        <img
          className={block ? 'block' : 'clockbod'}
          src="/dinner-images/clock-body.png"
          alt="frame with map"
        />
      </button>

      {matchingE && (
        <div className="popup-overlay">
          <div className="game-popup">
            <MatchingExample setMatchingE={setMatchingE} />
          </div>
        </div>
      )}

      <button className="clue plateL" onClick={() => setMatchingE(true)}>
        <img
          className={block ? 'block' : 'plateL'}
          src="/dinner-images/plate-left.png"
          alt="frame with map"
        />
      </button>

      {matching && (
        <div className="popup-overlay">
          <div className="game-popup">
            <Matching
              setMatching={setMatching}
              win={matchingWin}
              setWin={setMatchingWin}
            />
          </div>
        </div>
      )}
      <button className="clue plateR" onClick={() => setMatching(true)}>
        <img
          className={block ? 'block' : 'plateR'}
          src="/dinner-images/plate-right.png"
          alt="frame with map"
        />
      </button>

      {clockFace && (
        <div className="popup-overlay">
          <div className="clockface-popup">
            <ClockFace setClockFace={setClockFace} />
          </div>
        </div>
      )}
      <button className="clue clockface" onClick={() => setClockFace(true)}>
        <img
          className={block ? 'block' : 'clockface'}
          src="/dinner-images/clock-face.png"
          alt="frame with map"
        />
      </button>

      {gnome && (
        <div className="popup-overlay">
          <div className="piece-clue-popup">
            <Gnome
              setGnome={setGnome}
              foundPapers={foundPapers}
              setFoundPapers={setFoundPapers}
            />
          </div>
        </div>
      )}
      <button className="clue gnome" onClick={() => setGnome(true)}>
        <img
          className={block ? 'block' : 'gnome'}
          src="/dinner-images/gnome.png"
          alt="frame with map"
        />
      </button>

      {stool && (
        <div className="popup-overlay">
          <div className="clue-popup">
            <Stool setStool={setStool} />
          </div>
        </div>
      )}
      <button className="clue stool" onClick={() => setStool(true)}>
        <img
          className={block ? 'block' : 'stool'}
          src="/dinner-images/fallen-stool.png"
          alt="frame with map"
        />
      </button>

      {chest && (
        <div className="popup-overlay">
          <div className="clue-popup">
            <Chest setChest={setChest} />
          </div>
        </div>
      )}
      <button className="clue chest" onClick={() => setChest(true)}>
        <img
          className={block ? 'block' : 'chest'}
          src="/dinner-images/chest.png"
          alt="frame with map"
        />
      </button>
      {duck && (
        <div className="popup-overlay">
          <div className="clue-popup">
            <Duck setDuck={setDuck} />
          </div>
        </div>
      )}
      <button className="clue duck" onClick={() => setDuck(true)}>
        <img
          className={block ? 'block' : 'duck'}
          src="/dinner-images/duck.png"
          alt="frame with map"
        />
      </button>
      {mirror && (
        <div className="popup-overlay">
          <div className="piece-clue-popup">
            <Mirror
              setMirror={setMirror}
              foundPapers={foundPapers}
              setFoundPapers={setFoundPapers}
            />
          </div>
        </div>
      )}
      <button className="clue mirror" onClick={() => setMirror(true)}>
        <img
          className={block ? 'block' : 'mirror'}
          src="/dinner-images/mirror.png"
          alt="frame with map"
        />
      </button>
      {pumpkin && (
        <div className="popup-overlay">
          <div className="clue-popup">
            <Pumpkin setPumpkin={setPumpkin} />
          </div>
        </div>
      )}
      <button className="clue pumpkin" onClick={() => setPumpkin(true)}>
        <img
          className={block ? 'block' : 'pumpkin'}
          src="/dinner-images/pumpkins.png"
          alt="frame with map"
        />
      </button>

      {chandelier && (
        <div className="popup-overlay">
          <div className="clue-popup">
            <Chandelier setChandelier={setChandelier} />
          </div>
        </div>
      )}

      <button className="clue chandelier" onClick={() => setChandelier(true)}>
        <img
          className={block ? 'block' : 'chandelier'}
          src="/dinner-images/chandelier.png"
          alt="frame with map"
        />
      </button>

      {inventory && (
        <div className="popup-overlay">
          <div className="duck-popup">
            <Inventory setInventory={setInventory} />
          </div>
        </div>
      )}
      <button className="clue inventory" onClick={() => setInventory(true)}>
        <img
          className={block ? 'block' : 'inventory'}
          src="/dinner-images/backpack.png"
          alt="frame with map"
        />
      </button>
    </div>
  )
}
