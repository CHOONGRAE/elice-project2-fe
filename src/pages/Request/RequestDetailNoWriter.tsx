import React from "react";
import * as S from "./style/RequestDatailNoWriter.style";
import RequestAnswerRegister from "../../components/Request/nowriter/RequestAnswerRegister";
import RequestDetaiNoWriterlHeader from "../../components/Request/nowriter/RequestDetailNoWriterHeader";
import RequestNoWriterResponse from "../../components/Request/nowriter/RequestNoWriterResponse";
import RequestDetailDesc from "../../components/Request/RequestDetailDesc";
import RequestResponse from "../../components/Request/writer/RequestWriterResponse";

const RequestDetailNoWriter: React.FC = () => {
  return (
    <>
      <RequestDetaiNoWriterlHeader />
      <RequestDetailDesc />
      <S.AnswerNumber>답변 1개</S.AnswerNumber>
      <RequestNoWriterResponse />
      <RequestAnswerRegister />
    </>
  );
};

export default RequestDetailNoWriter;