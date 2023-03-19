import logo from './logo.svg';
import './App.css';
import img1 from './Graph 2 1.jpg'
import img2 from './google-2015a 1.jpg'
import img3 from './airbnb 1.jpg'
import img4 from './Group.jpg'
import img5 from './hubspot 1.jpg'
import img6 from './slack-2 1.jpg'
import img7 from './Group 25.jpg'
import img8 from './Layer 2.jpg'
import img9 from './Group-2.jpg'
import img10 from './Group 21.jpg'
import img11 from './Group 19.jpg'
import img12 from './Group 19.jpg'
import img13 from './Group 22.jpg'
import img14 from './Group 23.jpg'
import img15 from './Group 24.jpg'
import img16 from './Group 26.jpg'
import img17 from './Ellipse 5.jpg'
import img18 from './Ellipse 6.jpg'
import img19 from './Ellipse 7.jpg'
import img20 from './google-play-badge 1.jpg'
import img21 from './Group-1.jpg'
import img22 from './copyright-logo.png'
import img23 from './insta-logo.png'
import img24 from './twitter-logo.png'
import img25 from './yt-logo.png'
import img26 from './hamburger-menu-icon.webp'
import img27 from './down-arrow.png'
function App() {
  function Index()
  {
      console.log("Clicked")
      const burger=document.querySelector("#burger");
      const menu=document.querySelector("#menu");
          if(menu.classList.contains("hidden"))
          {
              menu.classList.remove("hidden")
          }
          else{
              menu.classList.add("hidden")
          }
      }
      function Drop()
  {
      console.log("Clicked")
     
      const dmenu=document.querySelector("#drop-menu");
          if(dmenu.classList.contains("hidden"))
          {
              dmenu.classList.remove("hidden")
          }
          else{
              dmenu.classList.add("hidden")
          }
      }
      function Drop1()
  {
      console.log("Clicked")
     
      const dmenu=document.querySelector("#drop-menu1");
          if(dmenu.classList.contains("hidden"))
          {
              dmenu.classList.remove("hidden")
          }
          else{
              dmenu.classList.add("hidden")
          }
      }
      function Drop2()
  {
      console.log("Clicked")
     
      const dmenu=document.querySelector("#drop-menu2");
          if(dmenu.classList.contains("hidden"))
          {
              dmenu.classList.remove("hidden")
          }
          else{
              dmenu.classList.add("hidden")
          }
      }
  return (
    <div>
      <div className='sm:flex sm:flex-row  '>
        <div className='flex flex-row'>
        <h1 className="sm:text- text-2xl sm:ml-40 mt-12 ml-12">team.flow</h1>
        <img id='burger' onClick={Index} className='sm:hidden w-7 h-7 mt-12 ml-48' src={img26}></img>
        </div>
        <p className='sm:hidden block ml-80 px-4 '>MENU</p>
        <div className=' hidden  bg-gray-300 sm:bg-white sm:flex sm:flex-row ' id='menu'>
        <div>
          <ul className='ml-40 sm:flex sm:flex-row sm:mt-12 mt-3'>
            <li className='sm:ml-16 ml-40 pt-3 sm:pt-0 hover:bg-gray-400 '>How it works</li>
            <li className='sm:ml-16 ml-40 hover:bg-gray-400'>Product</li>
            <li className='sm:ml-16 ml-40 hover:bg-gray-400'>Pricing</li>
            <li className='sm:ml-16 ml-40 hover:bg-gray-400'>Resources</li>
          </ul>
        </div>
        <div>
          <ul className='sm:flex sm:flex-row sm:mt-10 sm:ml-28 ml-72'>
            <li className='ml-8 sm:mt-2 hover:bg-gray-400'>Log in</li>
            <li className='sm:ml-10 sm:text-violet-600 sm:bg-slate-100 hover:bg-gray-400 sm:p-2'>Get started Free</li>
          </ul>
        </div>
        </div>
        </div>
        <div>
          <ul className='sm:flex sm:flex-row mt-16 sm:ml-96 sm:px-56'>
          <li className='hidden sm:block sm:bg-green-400 sm:border-1 sm:rounded-3xl sm:py-1 sm:px-3'>Save 90%</li>
          <li className=' sm:rounded-3xl bg-gray-100 sm:py-1 sm:px-3 w-40 ml-28 sm:ml-0 px-3 rounded-2xl'>Get account of $59</li>
          </ul>
          <div className='sm:ml-28'>
            <h1 className='sm:ml-64 sm:text-5xl font-bold text-gray-700 mt-8 sm:px-20 ml-12 text-2xl'><span className='ml-20'>Manage the team</span><br></br>everyone wants to be learn</h1>
            <p className='sm:ml-96 text-gray-500 mt-5 ml-16 w-68 sm:w-96 '>Simple platforms that lets you master what great managers do best ,as develop trusts,colloborate, and drive team perfomance</p>
            <div className='sm:px-24'>
              <input className='border-2 border-black p-3.5 pr-7 sm:ml-80 mt-16 ml-20' type="text" placeholder="name@yourcompany.com"></input>
              <button className='border-1 bg-violet-600 text-white p-3.5 sm:px-9 text-1.5xl ml-20 mt-6 px-20 sm:py-4 sm:ml-0'>Try it free</button>
            </div>
          </div>
        </div>
        <img src={img1} className='w-fit sm:ml-56 mt-4 ml-2'></img>
        <h2 className='sm:ml-96 sm:px-36 mt-12 ml-16'>TRUSTED BY OVER <b>10,000+</b> WORLD'S BEST TEAMS</h2>
        <div className='flex flex-row mt-12 sm:ml-40 mb-16 sm:px-12 ml-2'>
          <img className='sm:ml-8 ml-3' src={img2}></img>
          <img className='sm:ml-36 ml-7' src={img3}></img>
          <img className='sm:ml-36 ml-6' src={img4}></img>
          <img className='sm:ml-36 ml-6' src={img5}></img>
          <img className='hidden sm:block sm:ml-36 ml-6' src={img6}></img>
        </div>
      <div className='sm:flex sm:flex-row bg-slate-100 sm:p-8'>
      <img className='sm:ml-36 p-3 pt-6' src={img7}></img>
      <div className='mt-12 sm:ml-36 ml-3'>
        <div className='bg-slate-200 sm:ml-6 sm:border-l-8 border-b-8 sm:p-4 pl-4 pt-4 pb-4 border-violet-700 sm:border-b-0'>
          <h1 className='ml-16 sm:ml-0'><b>Survey Your team</b></h1>
          <p className='ml-3 sm:ml-0'>Powerful questions trhat get to the heart<br></br>of how team mambers really well feel</p>
        </div>
        <div className='mt-5 sm:ml-6 pl-4 pt-4'>
          <h1 className='ml-16 sm:ml-0'><b>Resolves issues quickly</b></h1>
          <p className='ml-3 sm:ml-0'>Anomnymous messaging that connects<br></br>managers and employees</p>
        </div>
        <hr></hr>
        <div className='mt-5 sm:ml-6 pl-4 pt-4'>
          <h1 className='ml-16 sm:ml-0'><b>Plan your 1-on-1s</b></h1>
          <p className='ml-3 sm:ml-0'>Plan meeting together and give a stake<br></br>employees and teams</p>
        </div> 
        <hr></hr>
        <div className='mt-5 sm:ml-6 pl-4 pt-4'>
          <h1 className='ml-16 sm:ml-0'><b>Track your progress</b></h1>
          <p className='ml-3 sm:ml-0'>easy to-read reports an sharable<br></br>results help managers and teams</p>
        </div>
      </div>
      </div>
      <h1 className='mt-16 sm:ml-96 sm:px-40 sm:text-3xl font-size-md ml-16 text-2xl'>Make your work easier</h1>
      <div className='sm:flex sm:flex-row '>   
        <div className='mt-12 ml-20 sm:ml-44 mr-20'>
         <div className='mb-12'>
          <img className='ml-12' src={img10}></img>
          <h1 className='ml-16'><b>Team Surveys and Reports</b></h1>
          <p>Short,anonymous surveys track your<br></br>team's needs weekly so youy can focus.</p>
        </div>
        <div>
          <img className='ml-12' src={img13}></img>
          <h1 className='ml-6'><b>Anonymous Messaging</b></h1>
          <p>Develop trust in a safe channels for<br></br>important conversations.</p>
        </div>
        </div>
        <div className='mt-16 ml-20 mr-24 mb-20'>
         <div className='mb-12'>
          <img className='ml-12' src={img11}></img>
          <h1 className='ml-6'><b>Collaborative 1:1</b></h1>
          <p>Build relationships by planning<br></br>1-on1-s and start meetings</p>
        </div>
        
        <div>
          <img className='ml-12' src={img14}></img>
          <h1 className='ml-6'><b>Conversation engine</b></h1>
          <p>Communicate confidently with<br></br>recommended talking points</p>
        </div>
        </div>
        <div className='mt-12 ml-20 sm:ml-24 mr-16'>
         <div className='mb-12'>
          <img className='ml-12' src={img12} ></img>
          <h1 className='ml-6'><b>Learning centre</b></h1>
          <p>Quickly ghet solutions tailored to your<br></br>personal challenges from the managers</p>
        </div>
        <div className="pb-8"> 
          <img className='ml-12' src={img15}></img>
          <h1 className='ml-6'><b>Exclusives Managers</b></h1>
          <p>Access manager tips,activities and<br></br>best practices from out team of experts</p>
        </div>
        
        </div>
      </div>
      <div className='sm:flex sm:flex-row flex-row  bg-violet-50 p-10'>
      <div>
        <img className='sm:hidden' src={img16}></img>
      </div>
        <div className='mt-24 sm:ml-28 sm:mr-44 ml-12 '>
          <h1 className='sm:text-3xl text-3xl font-semibold w-64 ml-4 sm:ml-0 sm:font-bold'>We work how you work everyday</h1>
          <p className='mt-8 text-1xl w-80 '>Since the easiest things to use actually get used,we  adapts to the way your team works-not the otherway around</p>
          <button className='mt-6 border-2 bg-violet-600 text-white rounded-sm p-3 sm:px-5 px-20'>Get Started Free</button>
        </div>
        <img className='hidden sm:block ml-40' src={img16}></img>
      </div>
      <div>
        <div className='mt-28 sm:ml-96 sm:px-28'>
          <h1 className='sm:text-4xl  text-3xl sm:font-bold font-semibold ml-20 sm:w-96'>Why Customers love working with us</h1>
          <p className="mt-8 ml-16 w-72">"It's amazing what has helped me learn about my team.<span className='sm:ml-4'>I don't worry about blindspots anymore ,and 1-on-1's have never been</span>more productive.The team loves it."</p>
        </div>
        <div className='flex flex-row mt-24 '>
          <div className='sm:ml-64 mr-44 ml-28 sm:flex sm:flex-row w-72 sm:border-t-4 sm:border-t-black'>
            <img className='mt-4 sm:ml-4 ml-12' src={img17}></img>
            <div className='ml-4 sm:mt-6 mt-3 w-40'>
              <h1><b>Jorge Robertson</b></h1>
              <h1 className='ml-4'>CS At Google</h1>
            </div>
          </div>
          <div className='hidden sm:mr-44 sm:flex sm:flex-row sm:w-72'>
            <img className='mt-4 ml-4' src={img18}></img>
            <div className='ml-4 mt-6'>
              <h1>Francisco Bell</h1>
              <h1>Designer at Micropsoft</h1>
            </div>
          </div>
          <div className=' hidden sm:flex sm:flex-row sm:w-72'>
            <img className='mt-4 ml-4' src={img19}></img>
            <div className='ml-4 mt-6'>
              <h1>Beth Fox</h1>
              <h1>Developer at Airbnb</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='sm:flex sm:flex-row sm:ml-16  mt-20 bg-violet-500 sm:p-5 rounded-lg w-fit pb-8'>
        <h1 className='text-white font-semibold ml-8 sm:ml-20 text-2xl sm:mr-44 py-5  '>84% of employees who use trust their direct manager</h1>
        <img className='h-16 mr-7 mt-3 ml-24 rounded-md' src={img20}></img>
        <img className='h-16 mr-7 mt-3 ml-24 rounded-md ' src={img21}></img>
      </div>
      <div className='bg-black text-white mt-16'>
      <div className='sm:flex sm:flex-row sm:pb-12'>
        <div>
          <ul className='sm:ml-60 ml-28 mt-16 pt-12 sm:pt-0'>
          <div className='flex flex-row' >
            <li className='mb-6'><b>Company</b></li>
            <img className='sm:hidden w-5 h-3 mt-2 ml-1 ' id='down-arr' onClick={Drop} src={img27}></img>
          </div>
          <div className='hidden sm:block' id='drop-menu'>
            <li className='mb-6 '>About Us</li>
            <li className='mb-6 '>Blog</li>
            <li className='mb-6'>Careers</li>
            <li className='mb-6'>Contact Us</li>
            </div>
          </ul>
        </div>
        <div>
          <ul className='ml-28 mt-4 sm:mt-16'>
          <div className='flex flex-row'>
            <li className='mb-6'><b>Support</b></li>
            <img className='sm:hidden w-5 h-3 mt-2 ml-1'id='down-arr' onClick={Drop1} src={img27}></img>
            </div>
            <div className='hidden sm:block' id='drop-menu1'>
            <li className='mb-6 '>Help center</li>
            <li className='mb-6 '>Safety center</li>
            <li className='mb-6 '>Community</li>
            </div>
          </ul>
        </div>
        <div >
          <ul className='ml-28 mt-4'>
            <div className='flex flex-row sm:mt-16'>
            <li className='mb-6'><b>Legal</b></li>
            <img className='sm:hidden w-5 h-3 mt-2 ml-1' onClick={Drop2} id='down-arr' src={img27}></img>
            </div>
            <div className='hidden sm:block' id='drop-menu2'>
            <li className='mb-6 '>Cookies</li>
            <li className='mb-6 '>Privacy</li>
            <li className=''>Terms of services</li>
            </div>
          </ul>
        </div>
        <div>
          <ul className='sm:ml-36 ml-28 mt-16 pb-7'>
            <li className='mb-6'><b>Install App</b></li>
            <li className='mb-6'><img src={img8}></img></li>
            <li><img src={img9}></img></li>
          </ul>
        </div>
      </div>
      <hr ></hr>
      <div className='flex flex-row py-12'>
        <div className='flex flex-row ml-16'>
         <img className='w-6 h-6' src={img22}></img>
        <p className='text-gray-200 ml-1'>2020-All rights Reserved</p>
        </div>
        <div>
          <ul className='hidden sm:flex sm:flex-row sm:ml-96 sm:px-80 '>
            <li className='w-6 h-6 mr-16'><img src={img23}></img></li>
            <li className='w-6 h-3 mr-16'><img src={img24}></img></li>
            <li className='w-8 h-8'><img src={img25}></img></li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
