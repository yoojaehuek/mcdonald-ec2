import './HappyMeal.scss'
import Card from '../../../components/Card/Card';

const tmps = [
  {table: "happymeal", prodNum: 1, prodImg: "/upload/whatsNew/happyMeal/1698301310196.jpg", prodContent: "입양하세요!\n귀여운 애완 동물들을\n맥도날드 해피밀 토이로 만나보세요!"},
  {table: "happymeal", prodNum: 2, prodImg: "/upload/whatsNew/happyMeal/1698301310196.jpg", prodContent: "입양하세요!\n귀여운 애완 동물들을\n맥도날드 해피밀 토이로 만나보세요!"},
  {table: "happymeal", prodNum: 3, prodImg: "/upload/whatsNew/happyMeal/1698301310196.jpg", prodContent: "입양하세요!\n귀여운 애완 동물들을\n맥도날드 해피밀 토이로 만나보세요!"},
]

const HappyMeal = () => {
  return(
    <>
      <div className="contArea">
        <div className="inner">
          <div id='cardList'>
            {tmps.map(tmp=> 
              <Card key={tmp.prodNum} props={tmp} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default HappyMeal; 