import { useContext, useEffect, useState } from 'react';
import { DiaryStateContext } from '../App';
import Buttons from '../components/Buttons';

import Header from './../components/Header';

const Home = () => {
  const [curDate, setCurDate] = useState(new Date());
  const [data, setData] = useState([]);
  const diaryList = useContext(DiaryStateContext);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime();
      const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0
      ).getTime();

      setData(
        diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay)
      );
    }
  }, [diaryList, curDate]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;
  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };
  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };
  return (
    <div>
      <Header
        leftChild={<Buttons text={'<'} onClick={decreaseMonth} />}
        headText={headText}
        rightChild={<Buttons text={'>'} onClick={increaseMonth} />}
      />
    </div>
  );
};

export default Home;
