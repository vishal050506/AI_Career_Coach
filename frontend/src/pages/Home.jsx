import React,{useState} from 'react'
import Caursal from '../components/Caursal'
import Hero from '../components/Hero'
import Internjobs from '../components/Internjobs';
import AIAssistant from "../components/AIAssistant";
import WithoutLogin from '../components/WithoutLogin';
import Road from '../components/Road';
import CounterSection from '../components/CounterSection';

const Home = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      {showModal && <WithoutLogin onClose={() => setShowModal(false)} />}
      <AIAssistant />
      <Hero />
      <Internjobs />
      <Caursal />
      <Road />
      <CounterSection />
    </>
  );
}

export default Home
