import styled from "styled-components";

const Integrat = () => {
  const H1 = styled.h1`
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.10000000149011612px;
    text-align: left;
    color: #171725;
    margin: 20px 0;
  `;

  const IMG = styled.img`
    width: 42px;
    height: 42px;
    gap: 0px;
    opacity: 0px;
  `;
  const H2 = styled.h1`
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    letter-spacing: 0.10000000149011612px;
    text-align: left;
    color: #171725;
    margin-right: 50px;
  `;
  const P1 = styled.p`
    font-size: 12px;
    font-weight: 400;
    line-height: 14.06px;
    text-align: left;
    color: #92929d;
  `;
  const SPAN1 = styled.span`
    display: flex;
    gap: 20px;
    align-items: center;
    margin-bottom: 20px;
  `;
  const H11 = styled.h1`
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0.800000011920929px;
    text-align: center;
    color: #0062FF;
  `;
  return (
    <>
      <div>
        <H1>Integratsiyalar</H1>
        <SPAN1>
          <IMG src="./PP.svg" alt="" />
          <span>
            <H2>AmoCrm</H2>
            <P1>CRM</P1>
          </span>
          <img src="./Block.svg" alt="" />
        </SPAN1>
        <SPAN1>
          <IMG src="./PP2.svg" alt="" />
          <span>
            <H2>TelegramBot</H2>
            <P1>Habar yuboruvchi</P1>
          </span>
          <img src="./Block.svg" alt="" />
        </SPAN1>
        <SPAN1>
          <IMG src="./PP3.svg" alt="" />
          <span>
            <H2>Trello</H2>
            <P1>Task Management</P1>
          </span>
          <img src="./Block.svg" alt="" />
        </SPAN1>
        <SPAN1>
          <IMG src="./PP4.svg" alt="" />
          <span>
            <H2>Bitrix</H2>
            <P1>CRM</P1>
          </span>
          <img src="./Block.svg" alt="" />
        </SPAN1>
        <SPAN1>
          <IMG src="./PP5.svg" alt="" />
          <span>
            <H2>IP Phone</H2>
            <P1>Phone</P1>
          </span>
          <img src="./Block.svg" alt="" />
        </SPAN1>

        <H11>Barcha integratsiyalar</H11>
      </div>
    </>
  );
};

export default Integrat;
