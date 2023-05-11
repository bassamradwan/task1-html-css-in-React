import React from 'react'
import img1 from '../imgs/image 7.png'
import img2 from '../imgs/image 6.png'
import vector1 from '../imgs/Vector 1.svg'
import vector2 from '../imgs/Vector 2.svg'
import vector8 from '../imgs/Vector 8.svg'
import Subtract from '../imgs/Subtract.svg'
import vector3 from '../imgs/Vector 3.svg'

import './styles.css'
import Card from '../components/card'
export default function Home() {
  return (
    <div className='container'>
      <section>
        <img className='vector1' src={vector1} />
        <img className='vector2' src={vector2} />
        <div>
          <img className='img2' src={img2} />
          <img className='img1' src={img1} />
        </div>
        <div className='groub-16'>
          <h1 className='groub-16-h1'>Get Your Payment Faster</h1>
          <p className='groub-16-p'>Blinqpay helps businesses in Africa get paid by anyone, anywhere in the world</p>
          <button className='groub-3'>Start Now</button>
        </div>
        
      </section>
      <section>
        <div className='group-17'>
          <h3 className='group-17-h3'>Make & Share Payments With Community</h3>
          <p className='group-17-p'>Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem adipiscing inw</p>
          <button> <img src={vector8} />Learn more</button>
        </div>
        <div className='group11'>
        <Card/>
        </div>
        <div className='group12'>
          <Card/>
        </div>
        <div className='group10'>
          <Card/>
        </div>
        <div className='group8'>
          <Card/>
        </div>
      
      </section>
      <section>
        <img className='vector3' src={vector3}/>
      </section>

      {/* <div class="background">h</div>
      <div class="background2"></div> */}
    </div >
  )
}
