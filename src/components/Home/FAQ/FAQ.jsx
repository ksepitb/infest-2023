import React, { useState } from 'react'

// import css
import './FAQ.css'

// import icons
import { AiFillCaretDown } from 'react-icons/ai'
import { AiFillCaretUp } from 'react-icons/ai'

const question = [
    {
        id: 1,
        title: 'INFEST itu acara apa sih?',
        answer: 'INFEST atau Investment Festival adalah kegiatan yang bertujuan untuk mengajak masyarakat berinvestasi. INFEST memiliki rangkaian perlombaan dengan puncak acara berupa seminar dan diskusi panelis mengenai hal-hal seputar investasi.        '
    },
    {
        id: 2,
        title: 'Acara INFEST bakal diadain online/offline?',
        answer: 'Acara INFEST akan diadakan secara hybrid di mana audiens dapat mengikuti secara offline maupun online melalui media Zoom Meeting.'
    },
    {
        id: 3,
        title: 'Kapan acara INFEST dilaksanakan?',
        answer: 'Timeline rangkaian acara dan main event INFEST akan dipublish melalui akun Instagram @infest.bdg dan website infestitb2023.com, jadi stay tuned yaa!'
    },
    {
        id: 4,
        title: 'Kenapa sih harus ikut acara INFEST?',
        answer: 'Acara INFEST punya banyak banget benefit. Sebagai pemula dalam berinvestasi, INFEST memberikan banyak pengetahuan dasar mengenai langkah-langkah menjadi investor yang baik. Selain itu, INFEST juga berfokus pada isu dalam dunia perekonomian yang sedang naik daun, sehingga bukan hanya pemula yang dapat menambah wawasan baru melalui acara ini.'
    },
    {
        id: 5,
        title: 'Siapa aja speaker acara INFEST?',
        answer: 'Materi dan topik yang seru ini pastinya akan dibawakan oleh speaker yang handal dan seru juga. Jadi pantengin terus akun Instagram @infest.bdg, yaa!'
    }
]

const FAQ = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);

  return (
    <div className='FAQ'>
        <h1>FAQ</h1>
        <div className='questions' data-aos='zoom-in-down'>
            <div className='question'>
                <h3 onClick={() => setIsOpen1(!isOpen1)}>{question[0].title} {isOpen1 ?  <AiFillCaretDown /> : <AiFillCaretUp />}</h3>
                {isOpen1 &&
                    <p>{question[0].answer}</p>
                }
            </div>
            <div className='question'>
                <h3 onClick={() => setIsOpen2(!isOpen2)}>{question[1].title} {isOpen2 ?  <AiFillCaretDown /> : <AiFillCaretUp />}</h3>
                {isOpen2 &&
                    <p>{question[1].answer}</p>
                }
            </div>
            <div className='question'>
                <h3 onClick={() => setIsOpen3(!isOpen3)}>{question[2].title} {isOpen3 ?  <AiFillCaretDown /> : <AiFillCaretUp />}</h3>
                {isOpen3 &&
                    <p>{question[2].answer}</p>
                }
            </div>
            <div className='question'>
                <h3 onClick={() => setIsOpen4(!isOpen4)}>{question[3].title} {isOpen4 ?  <AiFillCaretDown /> : <AiFillCaretUp />}</h3>
                {isOpen4 &&
                    <p>{question[3].answer}</p>
                }
            </div>
            <div className='question'>
                <h3 onClick={() => setIsOpen5(!isOpen5)}>{question[4].title} {isOpen5 ?  <AiFillCaretDown /> : <AiFillCaretUp />}</h3>
                {isOpen5 &&
                    <p>{question[4].answer}</p>
                }
            </div>
        </div>
    </div>
  )
}

export default FAQ