import React from 'react'
import Timeline from '../Reusable/Timeline'

const timeline = [
  {
    id: 1,
    date: '10 - 26 Juni ',
    title: 'Open Registration BCC'
  },
  {
    id: 2,
    date: '27 Juni ',
    title: 'Distribusi Case BCC'
  },
  {
    id: 3,
    date: '27 Juni - 11 Juli ',
    title: 'Pengerjaan Paper'
  },
  {
    id: 4,
    date: '12 - 22 Juli ',
    title: 'Pemeriksaan Oleh Juri '
  },
  {
    id: 5,
    date: '23 Juli ',
    title: 'Pengumuman Finalis'
  },
  {
    id: 6,
    date: '23 Juli - 13 Agustus ',
    title: 'Pengerjaan Presentasi'
  },
  {
    id: 7,
    date: '19 Agustus ',
    title: 'Pitching'
  },
  {
    id: 8,
    date: '2 September ',
    title: 'Main Event INFEST 2023'
  },
]

const InfestTimeline = () => {
  return (
    <Timeline array={timeline} />
  )
}

export default InfestTimeline