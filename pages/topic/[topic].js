import { useRouter } from "next/router";
import questionList from "../../staticData/questionList";

const Post = () => {
  const router = useRouter();
  const { topic } = router.query;

  const topicInfo = questionList[topic - 1];

  if (!topicInfo) {
    return <p> Loading....</p>;
  }

  console.log(topicInfo.questions);
  return (
    <div class="topicContainer">
      <h1 class="topicName"> {topicInfo.topicName} </h1>

      {topicInfo.questions.length != 0 && (
        <div class="questionContainer">
          {topicInfo.questions.map((question) => (
            <div class="questionBox">
              <h3> {question.name}</h3>
              <a href={question.link} target="_blank">
                <button class="button"> Solve</button>
              </a>
            </div>
          ))}
        </div>
      )}

      {topicInfo.questions.length === 0 && (
        <div className="oops">
          <img src="https://c.tenor.com/hq6Fi0viNQQAAAAC/sassy.gif" />
          <br />
          <br />
          <br />
          Oops! questions for this topic have not been added yet!!
        </div>
      )}
     
    </div>
  );
};

export default Post;
