import styled from "styled-components";
import Integrat from "./Integrat";

const Right = () => {
  const P1 = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 16.41px;
    letter-spacing: 0.10000000149011612px;
    text-align: left;
    color: #696974;
    margin-top: 15px;
    margin-bottom: 10px;
  `;
  const H1 = styled.h1`
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: 0.10000000149011612px;
    color: #171725;
    margin-bottom: 10px;
  `;
  const SPAN1 = styled.span`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
  `;

  const Red = styled.p`
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.10000000149011612px;
    text-align: left;
    color: #FC5A5A;
  `;
  return (
    <>
      <div>
        <div>
          <P1>1 oylik SMS lar</P1>
          <hr />
          <P1>Umumiy</P1>
          <H1>1000 ta</H1>
          <hr />
        </div>
        <div>
          <SPAN1>
            <img src="./Chart.png" alt="" />
            <span>
              <h4>740 ta</h4>
              <P1>Yetib borgan</P1>
            </span>
          </SPAN1>
          <SPAN1>
            <img src="./Chart2.png" alt="" />
            <span>
              <h4>260 ta</h4>
              <P1>Hatolik bo’lgan</P1>
            </span>
          </SPAN1>
        </div>
        <div>
          <img src="./Group.png" alt="" />
          <SPAN1>
            <span>
              <h1>234 ta</h1>
              <P1>bu oygi feedbacklar</P1>
            </span>
            <Red>1.5%</Red>
          </SPAN1>
        </div>
        <Integrat />
      </div>
    </>
  );
};

export default Right;
