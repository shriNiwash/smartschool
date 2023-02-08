import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import Autotyper from "./components/typed";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
const Index = () => {
  return (<>
    <Head>
      <title>Smart School </title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />

    </Head>
    <Navbar />
    
    <section className="experience_data">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-9" >
            <div className="common-heading text-center mb-50">
              <span className="lineTag">Welcome</span>
              <h2 className="div_title">The Smart School <Autotyper /></h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="table_contents">
              <div className="videosize">
                <div className="ratio ratio-16x9">
                  <iframe src="https://www.youtube.com/embed/_-GnIH4knek" title="YouTube video" allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
    <section className="job_experience mt-5" >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-9" >
            <div className="common-heading text-center mb-50">
              <span className="lineTag">TOOLS</span>
              <h2 className="div_title">THE FAMOUS AI TOOLS</h2>
            </div>
          </div>
        </div>
        <div className="experience_data boxed-wrapper" >
          <div className="row justify-content-between">
            <div className="col-lg-6 md-gap-80">
              <h4 className="experience_h1">
                Productivity
              </h4>
              <div className="list_experince">
                <div className="single_experience">
                  <h5 className="div_title">OpenAI- ChatGPT</h5>
                  <p>ChatGPT is a pre-trained language model
                    developed by OpenAI, built on transformer
                    architecture and uses deep learning to generate
                    human-like responses to text inputs. It is
                    fine-tuned on a large corpus of text data
                    to produce more relevant outputs. Widely used
                    for tasks such as chatbots, translation and question
                    answering, ChatGPT has achieved state-of-the-art results
                    on benchmark datasets and is a popular choice for NLP applications and research.</p>
                </div>
                <div className="single_experience">
                  <h5 className="div_title">Copy.AI</h5>
                  <p>Copy.ai is a tool for generating text content,
                    such as product descriptions, blog posts, and
                    social media updates. It uses advanced language
                    models, similar to ChatGPT, to generate high-quality,
                    human-like text. The tool is designed to be user-friendly
                    and requires little to no technical knowledge, making it
                    accessible to a wide range of users, including marketers,
                    content creators, and small businesses. Copy.ai saves time
                    and effort in content creation by providing quick, relevant
                    and quality content based on a given prompt.</p>
                </div>
                <div className="single_experience">
                  <h5 className="div_title">synthesia.io</h5>
                  <p>Synthesia.io is a platform for building custom
                    conversational AI models for chatbots, voice assistants,
                    and NLP applications. It allows users to train models using
                    their own data with an easy-to-use interface and integrates
                    with various platforms. It uses advanced NLP and deep learning
                    techniques to provide accurate results and is scalable for businesses
                    of all sizes. Synthesia.io enables businesses to improve customer engagement
                    and automate tasks through conversational AI.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h4 className="experience_h1">
                Best AI Tools
              </h4>
              <div className="list_experince">
                <div className="single_experience">
                  <h5 className="div_title">TwitterBio Tool</h5>

                  <p>A Twitter bio is a short description of a Twitter user,
                    typically displayed on their profile. It is used to provide
                    information about the user and give a sense of their personality
                    and interests. A Twitter bio should be concise, informative, and
                    engaging to attract followers and make a good first impression.
                    It is limited to 160 characters, so it should be carefully crafted
                    to effectively communicate the most important information about the
                    user in a limited space.</p>
                </div>
                <div className="single_experience">
                  <h5 className="div_title">Socratic By Google</h5>
                  <p>Socratic by Google is a free learning app for
                    students that provides personalized homework help.
                    It uses artificial intelligence technology to analyze
                    students questions and provide instant explanations
                    and step-by-step help with their homework. The app covers
                    a wide range of subjects, including math, science,
                    and social studies, and helps students understand difficult
                    concepts in a visual and interactive way. Socratic by Google
                    is a helpful tool for students who need extra support with their
                    homework and is designed to make learning more engaging and accessible.</p>
                </div>
                <div className="single_experience">
                  <h5 className="div_title">Grammarly AI Tool </h5>

                  <p>Grammarly is a writing tool that helps users
                    improve their grammar, spelling, and writing
                    style. It uses advanced algorithms to check
                    writing for errors and suggest improvements
                    in real-time, making it a useful tool for both
                    native and non-native English speakers. Grammarly
                    is used for various purposes including writing emails,
                    documents, and social media posts, and can help improve
                    writing skills and increase productivity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <div className="container mt-5 experience_data">
      <div className="text-center">
        <span className="lineTag text-center">AI Tools</span>
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="pricing-table-3 basic">
            <div className="pricing-table-header">
              <h4><strong>OpenAI</strong></h4>
              <p className="text-white">ChatGPT</p>
            </div>
            <div className="price"><strong>FREE</strong></div>
            <div className="pricing-body">
              <ul className="pricing-table-ul justify-center">
                <Image src="/chatGPT.png" width={200} height={200} alt="robo" id="images_data" />
              </ul><a href="https://chat.openai.com/chat" className="view-more" ><i className="fa fa-edit"></i></a>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="pricing-table-3 basic">
            <div className="pricing-table-header">
              <h4><strong>CopyAI</strong></h4>
              <p className="text-white">Blog Writer AI</p>
            </div>
            <div className="price"><strong>FREE</strong></div>
            <div className="pricing-body">
              <ul className="pricing-table-ul">
                <Image src="/copyai.png" width={200} height={200} alt="robo" id="images_data" />
              </ul><a href="https://www.copy.ai/?via=start" className="view-more" ><i className="fa fa-edit"></i></a>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="pricing-table-3 basic">
            <div className="pricing-table-header">
              <h4><strong>Socratic By GOOGLE</strong></h4>
              <p className="text-white">Math,Physics question Solver</p>
            </div>
            <div className="price"><strong>FREE</strong></div>
            <div className="pricing-body">
              <ul className="pricing-table-ul">
                <Image src="/socractic.png" width={200} height={200} alt="robo" id="images_data" />
              </ul><a href="https://socratic.org/" className="view-more" ><i className="fa fa-edit"></i></a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="pricing-table-3 basic">
            <div className="pricing-table-header">
              <h4><strong>Synthesia</strong></h4>
              <p className="text-white">Virtual Video Maker</p>
            </div>
            <div className="price"><strong>FREE</strong></div>
            <div className="pricing-body">
              <ul className="pricing-table-ul">
                <Image src="/synthesia.png" width={200} height={200} alt="robo" id="images_data" />
              </ul><a href="https://www.synthesia.io/" className="view-more" ><i className="fa fa-edit"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="pricing-table-3 basic">
            <div className="pricing-table-header">
              <h4><strong>Grammarly</strong></h4>
              <p className="text-white">Helps to write correctly</p>
            </div>
            <div className="price"><strong>FREE</strong></div>
            <div className="pricing-body">
              <ul className="pricing-table-ul justify-center">
                <Image src="/grammarly.png" width={200} height={200} alt="robo" id="images_data" />
              </ul><a href="https://www.grammarly.com/" className="view-more" ><i className="fa fa-edit"></i></a>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="pricing-table-3 basic">
            <div className="pricing-table-header">
              <h4><strong>TutorAI</strong></h4>
              <p className="text-white">Enter any topic and it will provide...</p>
            </div>
            <div className="price"><strong>FREE</strong></div>
            <div className="pricing-body">
              <ul className="pricing-table-ul">
                <Image src="/tutorai.png" width={200} height={200} alt="robo" id="images_data" />
              </ul><a href="https://www.tutorai.me/" className="view-more" ><i className="fa fa-edit"></i></a>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="pricing-table-3 basic">
            <div className="pricing-table-header">
              <h4><strong>TwitterBIO</strong></h4>
              <p className="text-white">Generate your next Twitter Bio in seconds</p>
            </div>
            <div className="price"><strong>FREE</strong></div>
            <div className="pricing-body">
              <ul className="pricing-table-ul">
                <Image src="/twitterbio.png" width={200} height={200} alt="robo" id="images_data" />
              </ul><a href="https://www.twitterbio.com/" className="view-more" ><i className="fa fa-edit"></i></a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="pricing-table-3 basic">
            <div className="pricing-table-header">
              <h4><strong>ChatBase</strong></h4>
              <p className="text-white">upload PDF and start Question Answering</p>
            </div>
            <div className="price"><strong>FREE</strong></div>
            <div className="pricing-body">
              <ul className="pricing-table-ul">
                <Image src="/chatbase.png" width={200} height={200} alt="robo" id="images_data" />
              </ul><a href="https://www.chatbase.co/" className="view-more" ><i className="fa fa-edit"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" />
  </>)
}

export default Index;

