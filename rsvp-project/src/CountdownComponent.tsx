import React from 'react'
import Countdown from 'react-countdown'
import moment from 'moment'

interface CountdownProps {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const targetDate = moment('2023-11-18 19:00:00')

const CountdownComponent: React.FC = () => {
  const renderer = ({ days, hours, minutes, seconds }: CountdownProps) => (
    <div className="text-center text-gray-600">
      <h1 className="text-base font-bold">
        Fortaleza dos Nogueiras, MA -
        <br />
        18 de Novembro de 2023 às 19:00
      </h1>
      <div className="flex justify-center mt-4 grid-cols-4 gap-4 ">
        <div className="text-lg">
          <span className="text-xl font-bold">{days}</span> <br /> dias
        </div>
        <div className="text-lg">
          <span className="text-xl font-bold">{hours}</span> <br /> horas
        </div>
        <div className="text-lg">
          <span className="text-xl font-bold">{minutes}</span> <br /> minutos
        </div>
        <div className="text-lg">
          <span className="text-xl font-bold">{seconds}</span> <br /> segundos
        </div>
      </div>
    </div>
  )

  return (
    <div className="p-4 border rounded-lg shadow-lg">
      <Countdown date={targetDate.toDate()} renderer={renderer} />
    </div>
  )
}

export default CountdownComponent
