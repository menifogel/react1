import './App.css'
import Headr from './Headr'
import Min from './Min'
import Footer from './Footer'


function App() {
    const books = [
        {
          id: 1,
          title: "חזון איש",
          imgSrc: "./emuna.jpg",
          text: "אמונה וביטחון"
        },
        {
          id: 2,
          title: "מדינת היהודים",
          imgSrc: "./herzel.jpg",
          text: "ספרו החשוב של הרצל"
        },
        {
            id: 3,
            title: "תיאום כוונות",
            imgSrc: "./sabato1.jpg",
            text: "ספר על מלחמת יום כיפור"
        },
        {
            id: 4,
            title: "מקום תחת השמש",
            imgSrc: "./bibi.jpg",
            text: "משנתו הביטחונית של בנימין נתניהו"
        },

      ];
    return (
    <>
      <Headr />
      <Min books={books}/>
      <Footer/>
    </>
  )
}

export default App
