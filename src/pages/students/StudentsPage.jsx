import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {
  StyledTilte,
  ContentWrapper,
  TitleWrapper,
  StyledSubTilte,
  IntroductionWrapper,
  StyledTextField,
  FormWrapper,
  StyledQuestion,
  StyledArticle,
  StyledArticleSmall,
  QuestionWrapper,
  StyledGridItemTilte,
  StyledGridItem,
  StyledGridTilte,
  StyledImage,
} from "./styledComponent";
import "./StudentsPage.css";
import presentTimeline from "../../assets/Present.png";
import pastTimeline from "../../assets/Past.png";
import english_highlight from "../../assets/english_highlight.png";
import book_word from "../../assets/book_word.png";
import backborad from "../../assets/backborad.png";
import backborad_with_word from "../../assets/backborad_with_word.png";
export default function StudentsPage() {
  const scriptURLPresent =
    "https://script.google.com/macros/s/AKfycbxIFeCPH7_D_ltnhAJFmFxMKxcuDSpD_YN1TYPn_VJU2iQn1tvoTkQaPUJ2wtaKisKroQ/exec";
  const scriptURLPast =
    "https://script.google.com/macros/s/AKfycby3s6dAsgL3rZOZHRTP3wtLaUvvHDvGsCYmL4tM8sojfXpaI5NpUuD-b8CKaY2zGyEn/exec";
  const handleSubmit = (event, form) => {
    event.preventDefault();
    let formData = new FormData();
    const rawValueArray = [...event.target];
    const valueArray = rawValueArray
      .filter((element) => element.value != null && element.type != "submit")
      .map((element) => element.value);
    switch (form) {
      case "past-perfect-Question":
        valueArray.forEach((element, index) => {
          formData.append(`Past Perfect Question ${index + 1}`, element);
        });
        fetch(scriptURLPast, {
          method: "POST",
          body: formData,
        });
        break;
      case "present-perfect-Question":
        valueArray.forEach((element, index) => {
          formData.append(`Present Perfect Question ${index + 1}`, element);
        });
        fetch(scriptURLPresent, {
          method: "POST",
          body: formData,
        });
        break;
    }
  };
  return (
    <div className="container">
      <TitleWrapper
        className="title-wrapper section"
        sx={{
          color: "rgb(5, 17, 46)",
          backgroundImage: `url(${english_highlight})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="alignment-box">
          <StyledTilte>English Grammar</StyledTilte>
          <StyledSubTilte>
            Present Perfect Tense & Past Perfect Tense
          </StyledSubTilte>
        </div>
      </TitleWrapper>

      <IntroductionWrapper
        className="introduction-wrapper section"
        sx={{
          color: "rgb(5, 17, 46)",
          backgroundImage: `url(${book_word})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="alignment-box">
          <StyledTilte>Introduction</StyledTilte>
          <StyledArticle>
            Perfect Tenses are essential verb tenses in English. They are a
            category of verb tenses used to describe completed actions based on
            a fixed reference time.
          </StyledArticle>
        </div>
      </IntroductionWrapper>
      <div>
        <TitleWrapper
          className="section"
          sx={{
            backgroundImage: `url(${backborad_with_word})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <StyledTilte>Present Perfect Tense</StyledTilte>
        </TitleWrapper>
        <ContentWrapper
          className="section present introduction content"
          sx={{
            backgroundImage: `url(${backborad})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="alignment-box">
            <StyledArticleSmall>
              The Present Perfect Tense is used to describe completed actions or
              situations based on present reference points.
            </StyledArticleSmall>
          </div>
          <StyledImage src={presentTimeline} />
        </ContentWrapper>
        <ContentWrapper
          className="section present formation content"
          sx={{
            backgroundImage: `url(${backborad})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="alignment-box">
            <StyledTilte>Formation</StyledTilte>
            <StyledArticle>
              Subject + have/has + Past Participle + Object
            </StyledArticle>
            <StyledArticle>Example: Simon has been to US before</StyledArticle>
          </div>
        </ContentWrapper>
        <ContentWrapper
          className="section present usage content"
          sx={{
            backgroundImage: `url(${backborad})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="alignment-box">
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <StyledGridTilte item xs={12}>
                Usage
              </StyledGridTilte>
              <StyledGridItemTilte item xs={6}>
                Situations
              </StyledGridItemTilte>
              <StyledGridItemTilte item xs={6}>
                Examples
              </StyledGridItemTilte>
              <StyledGridItem item xs={6} className="situations">
                <div>
                  Actions that happened at an indefinite time in the past.
                </div>
              </StyledGridItem>
              <StyledGridItem item xs={6} className="examples ">
                <div>Simon has been to US before.</div>
              </StyledGridItem>
              <StyledGridItem item xs={6} className="situations">
                <div>
                  Actions that happened in the past with some effect on the
                  present.
                </div>
              </StyledGridItem>
              <StyledGridItem item xs={6} className="examples secondary">
                <div>
                  I have lost my homework. (So I don’t have the homework.)
                </div>
              </StyledGridItem>
              <StyledGridItem item xs={6} className="situations">
                <div>
                  Actions that started in the past and continue to the present.
                </div>
              </StyledGridItem>
              <StyledGridItem item xs={6} className="examples">
                <div>She has lived in Hong Kong Since 2000.</div>
              </StyledGridItem>
              <StyledGridItem item xs={6} className="situations">
                <div>A repeated action before now.</div>
              </StyledGridItem>
              <StyledGridItem item xs={6} className="examples secondary">
                <div>I have travelled abroad more than three times.</div>
              </StyledGridItem>
            </Grid>
          </div>
        </ContentWrapper>
        <FormWrapper
          className="section present question content"
          sx={{
            color: "white",
            backgroundImage: `url(${backborad})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <form
            id="present-perfect-Question"
            onSubmit={(event) =>
              handleSubmit(event, "present-perfect-Question")
            }
          >
            <QuestionWrapper>
              <StyledSubTilte>
                Fill in the blanks using Present Perfect tense.
              </StyledSubTilte>
              <div className="alignment-box">
                <StyledQuestion>
                  1. Chris
                  <StyledTextField
                    name="Present-Perfect-Question-1"
                    label="Question 1"
                  />
                  (tidy up) up her room already.
                </StyledQuestion>
                <StyledQuestion>
                  2. Amy
                  <StyledTextField
                    name="Present-Perfect-Question-2"
                    label="Question 2"
                  />
                  (buy) Eason Chan’s latest album.
                </StyledQuestion>
                <StyledQuestion>
                  3.I
                  <StyledTextField
                    name="Present-Perfect-Question-3"
                    label="Question 3"
                  />
                  (play) football for about three years.
                </StyledQuestion>
              </div>
              <Button type="submit">Submit</Button>
            </QuestionWrapper>
          </form>
        </FormWrapper>
      </div>
      <div>
        <TitleWrapper
          className="section"
          sx={{
            backgroundImage: `url(${backborad_with_word})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <StyledTilte>Past Perfect Tense</StyledTilte>
        </TitleWrapper>
        <ContentWrapper
          className="section past introduction content"
          sx={{
            backgroundImage: `url(${backborad})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="alignment-box">
            <StyledArticleSmall>
              The Past Perfect Tense is used to describe completed actions or
              situations based on a past reference time.
            </StyledArticleSmall>
          </div>
          <StyledImage src={pastTimeline} />
        </ContentWrapper>
        <ContentWrapper
          className="section past formation content"
          sx={{
            backgroundImage: `url(${backborad})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="alignment-box">
            <StyledTilte>Formation</StyledTilte>
            <StyledArticle>
              Subject + had + Past Participle + Object
            </StyledArticle>
            <StyledArticle>Example: He had left when I arrived.</StyledArticle>
          </div>
        </ContentWrapper>
        <ContentWrapper
          className="section past usage content"
          sx={{
            backgroundImage: `url(${backborad})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="alignment-box">
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <StyledGridTilte item xs={12}>
                Usage
              </StyledGridTilte>
              <StyledGridItemTilte item xs={6}>
                Situations
              </StyledGridItemTilte>
              <StyledGridItemTilte item xs={6}>
                Examples
              </StyledGridItemTilte>
              <StyledGridItem item xs={6} className="situations">
                <div>
                  A past action that happened before another past action.
                </div>
              </StyledGridItem>
              <StyledGridItem item xs={6} className="examples ">
                <div>
                  Before Tommy did his laundry, He had finished cleaning the
                  kitchen.
                </div>
              </StyledGridItem>
              <StyledGridItem item xs={6} className="situations">
                <div>A past action in the reported speech.</div>
              </StyledGridItem>
              <StyledGridItem item xs={6} className="examples secondary">
                <div>Kelvin said that he had applied for a job</div>
              </StyledGridItem>
            </Grid>
          </div>
        </ContentWrapper>
        <FormWrapper
          className="section past question content"
          sx={{
            color: "white",
            backgroundImage: `url(${backborad})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <form
            id="past-perfect-Question"
            onSubmit={(event) => handleSubmit(event, "past-perfect-Question")}
          >
            <QuestionWrapper>
              <StyledSubTilte>
                Fill in the blanks using Past perfect tense.
              </StyledSubTilte>
              <div className="alignment-box">
                <label
                  htmlFor="Past-Perfect-Question-1"
                  display="hidden"
                ></label>
                <StyledQuestion>
                  1. The secretary was late as he
                  <StyledTextField
                    id="Past-Perfect-Question-1"
                    label="Question 1"
                  />
                  (miss) the bus.
                </StyledQuestion>
                <label
                  htmlFor="Past-Perfect-Question-2"
                  display="hidden"
                ></label>
                <StyledQuestion>
                  2. Daisy
                  <StyledTextField
                    id="Past-Perfect-Question-2"
                    label="Question 2"
                  />
                  (finish) her dinner before she start to do revision.
                </StyledQuestion>
                <label
                  htmlFor="Past-Perfect-Question-3"
                  display="hidden"
                ></label>
                <StyledQuestion>
                  3. Anson realised he
                  <StyledTextField
                    id="Past-Perfect-Question-3"
                    label="Question 3"
                  />
                  (forgot) to lock the door.
                </StyledQuestion>
              </div>
              <Button type="submit">Submit</Button>
            </QuestionWrapper>
          </form>
        </FormWrapper>
      </div>
      <div>
        <TitleWrapper
          className="section"
          sx={{
            backgroundImage: `url(${backborad_with_word})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <StyledTilte>Present Perfect Tense vs Past Perfect Tense</StyledTilte>
        </TitleWrapper>
        <ContentWrapper
          className="section pastVSpresent content"
          sx={{
            backgroundImage: `url(${backborad})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <StyledSubTilte>
            What is the different between Present Perfect and Past Perfect?
          </StyledSubTilte>
          <StyledArticleSmall>
            Their difference is Present Perfect Tense description of the action
            must have somethings to do with the present, but Past Perfect Tense
            do not have anything to do with the present.
          </StyledArticleSmall>
        </ContentWrapper>
        <ContentWrapper
          className="section pastVSpresent content"
          sx={{
            backgroundImage: `url(${backborad})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <StyledGridItemTilte item xs={6}>
              The present perfect tense
            </StyledGridItemTilte>
            <StyledGridItemTilte item xs={6}>
              The past perfect tense
            </StyledGridItemTilte>
            <StyledGridItem item xs={6} className="situations">
              <div>
                The action started in the past and has continued up until now
              </div>
            </StyledGridItem>
            <StyledGridItem item xs={6} className="examples ">
              <div>
                The action started in the past and stopped sometime before now.
                .
              </div>
            </StyledGridItem>
            <StyledGridItem item xs={6} className="situations">
              <div>
                Examples: I have lived in Sai Kung for five years. ( I still
                live in Sai Kung now.)
              </div>
            </StyledGridItem>
            <StyledGridItem item xs={6} className="examples secondary">
              <div>
                Examples: I had lived in Sai Kung for five years before I moved
                to Tseung Kwan O. ( I do not live I in Sai Kung now.)
              </div>
            </StyledGridItem>
          </Grid>
        </ContentWrapper>
      </div>
      <ContentWrapper
        className="section pastVSpresent content"
        sx={{
          backgroundImage: `url(${backborad})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <StyledSubTilte>
          Final Task : Write your short story using Present Perfect Tense and
          Past Perfect Tense
        </StyledSubTilte>
        <StyledSubTilte>
          <a
            href="https://padlet.com/gamethomes38_/write-your-short-story-using-present-perfect-tense-and-past--gxebtzr9thdhpbdw"
            target="_blank"
          >
            Go To padlet
          </a>
        </StyledSubTilte>
      </ContentWrapper>
      <ContentWrapper
        className="section"
        sx={{
          backgroundImage: `url(${backborad})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <StyledTilte>THE END.</StyledTilte>
      </ContentWrapper>
    </div>
  );
}
