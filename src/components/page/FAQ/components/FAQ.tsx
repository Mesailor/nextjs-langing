import { questions } from "../content";
import { QuestionDisclosure } from "./QuestionDisclosure";

export function FAQ() {
  return (
    <div className="py-6 px-4 max-w-5xl w-full mx-auto flex flex-col gap-10">
      <h2 className="text-center heading-2">FAQ</h2>
      <div className="bg-white rounded-3xl min-w-80 w-full px-6">
        {questions.map((question, index) =>
          questions.length !== index + 1 ? (
            <div key={question.question}>
              <QuestionDisclosure {...question} />
              <div className="border"></div>
            </div>
          ) : (
            <QuestionDisclosure key={question.question} {...question} />
          )
        )}
      </div>
    </div>
  );
}
