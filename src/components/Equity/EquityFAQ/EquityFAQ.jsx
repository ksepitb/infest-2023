import React, { useState } from 'react'

// import css
import '../../Home/FAQ/FAQ.css'

// import icons
import { AiFillCaretDown } from 'react-icons/ai'
import { AiFillCaretUp } from 'react-icons/ai'

const question = [
    {
        id: 1,
        title: 'Bagaimana skema perlombaan yang akan dilakukan?',
        answer: 'Equity Research Competition akan melalui dua sesi, yaitu sesi preliminary dan sesi final. Pada sesi preliminary, peserta membuat paper dan dikumpulkan secara online sedangkan pada sesi final, peserta membuat paper dan melakukan presentasi secara offline di ITB'
    },
    {
        id: 2,
        title: 'Apa saja emiten yang akan dianalisis?',
        answer: 'MENYUSUL'
    },
    {
        id: 3,
        title: 'Berapa kelompok yang akan maju ke sesi final?',
        answer: 'Setelah melalui sesi preliminary, akan ada 5 kelompok yang maju ke sesi final'
    },
    {
        id: 4,
        title: 'Apakah dari pihak penyelenggara menyediakan biaya transport?',
        answer: 'Biaya transportasi sepenuhnya ditanggung oleh peserta. Pihak penyelenggara tidak menyediakan biaya akomodasi untuk peserta hadir di lokasi final karena hadiah yang ditawarkan sudah sesuai.'
    },
    {
        id: 5,
        title: 'Untuk Equity Research Competition, apakah tim dapat memilih salah satu dari 3 pilihan emiten yang disediakan secara bebas?',
        answer: 'Ya, tim dapat memilih salah satu emiten secara bebas.'
    }
]

const EquityFAQ = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);

    const [isOpen6, setIsOpen6] = useState(false);

  return (
    <div className='FAQ'>
        <h1>FAQ</h1>
        <div className='questions'>
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
            {isOpen6 &&
            <div className='faq-more'>
                <div className='faq-more-content'>
                    <div className='more-q'>
                        <h3>Apakah peserta dapat mengikuti Equity Research Competition dan Business Case Competition sekaligus?</h3>
                        <p>⇒  Ya, peserta diperbolehkan mengikuti 2 lomba sekaligus.</p>
                    </div>
                    <div className='more-q'>
                        <h3>Sejak kapan tim dapat mulai mengerjakan paper?</h3>
                        <p>⇒  Untuk Equity Research Competition, peserta dapat langsung mengerjakan setelah melakukan pembayaran. Sedangkan, untuk Business Case Competition, peserta baru dapat mengerjakan setelah case didistribusikan pada 27 Juni 2023.</p>
                    </div>
                    <div className='more-q'>
                        <h3>Apakah seluruh peserta akan mendapatkan sertifikat?</h3>
                        <p>⇒ Ya, semua peserta akan mendapatkannya. Sertifikat akan dikirimkan melalui e-mail ketua kelompok.</p>
                    </div>
                    <div className='more-q'>
                        <h3>Di mana lokasi pelaksanaan kedua lomba?</h3>
                        <p>⇒ Equity Research Competition akan dilaksanakan secara online untuk babak penyisihan dan secara onsite di Institut Teknologi Bandung untuk babak final. Sedangkan, Business Case Competition akan dilaksanakan secara full online.</p>
                    </div>
                    <button onClick={() => setIsOpen6(!isOpen6)}>Close</button>
                </div>
            </div>
            }
        </div>
        <div>
            <p className='faq-selengkapnya' onClick={() => setIsOpen6(!isOpen6)}>Selengkapnya mengenai competition</p>
        </div>
    </div>
  )
}

export default EquityFAQ