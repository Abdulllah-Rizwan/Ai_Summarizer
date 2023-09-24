import {logo} from '../assets'
function Hero() {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
     <nav className='flex justify-between items-center w-full pt-3 mb-10'>
        <img src={logo} alt="logo" className='object-contain w-28' />
        <button className='black_btn' type='button' onClick={() => window.open('https://github.com/Abdulllah-Rizwan/Ai_Summarizer','_blank')}>
            Source Code
        </button>
     </nav>

     <h1 className='head_text'>
      Summarize Article with <br className='max-md:hidden' />
      <span className='orange_gradient'>OpenAi GPT4</span>
     </h1>
     <h2 className="desc">
      Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries
     </h2>
    </header>
  )
}

export default Hero
