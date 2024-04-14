import '../../styles/clock.css'

interface Props {
  setClock: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Clock({ setClock }: Props) {
  return (
    <>
      <img
        className="clockimg"
        src="/clock-inside-closeup.png"
        alt="inside clock has a lantern and a piece of a puzzle"
      />
      <button className="clockBodCloseButton" onClick={() => setClock(false)}>
        x
      </button>
    </>
  )
}
