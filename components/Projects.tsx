"use client";

import { useState } from "react";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="projects"
      className="max-w-containerSmall mx-auto py-10 lgl:py-24"
    >
      <SectionTitle title="PROJECTS" titleNo="03" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <ProjectCard
            title="E-Kart"
            subTitle="E-commerce Website"
            desc={[
              "Website for buying and selling products having filters and search functionality.",
              "It also contains Admin panel for managing the users, orders, products, and categories.",
              "The dashboard in Admin panel makes it easy to keep track of products sell and purchase.",
            ]}
            listItem={[
              "MERN",
              "Redux",
              "Tailwind CSS",
              "Javascript",
              "Redux Toolkit",
              "Cloudinary",
            ]}
            gitlink="https://github.com/tejasp2003/MERN_E-Commerce"
            applink="https://mern-e-commerce-pi.vercel.app/"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <ProjectCard
            title="Evently"
            subTitle="Event Management Website"
            desc={[
              "Build an event organization web app like Eventbrite or Meetup",
              "It includes features like authentication, event management, search, filtering, categories, checkout, and payments using Next JS 14, Tailwind CSS, Shadcn, React Hook Form, Zod, Uploadthing, React-Datepicker, Mongoose, Clerk, and Stripe.",
            ]}
            listItem={[
              "Next.js",
              "Tailwind CSS",
              "ShadCN", 
              "Zod",
              "Uploadthing",
              "MongoDB",
              "Clerk",
              "Stripe",

            ]}
            gitlink="https://github.com/Tejasp2003/Evently"
            applink="https://evently-tk.vercel.app/"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <ProjectCard
            title="RentEasy"
            subTitle="Rent with Ease"
            desc={[
              "A website for renting houses, flats, and commercial spaces.",
              "It contains filters for searching and sorting the properties.",
              "Also contains a dashboard for the property owners to manage their properties and tenants.",
            ]}
            listItem={[
              "Next.js",
              "Tailwind CSS",
              "Cloudinary",
              "MongoDB",
              "Typescript",
            ]}
            gitlink="https://github.com/Tejasp2003/RentEasy"
            applink="rent-easy-next.vercel.app"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <ProjectCard
            title="Threads"
            subTitle="A Social Media Website"
            desc={[
              "A social media website for sharing posts and images with friends and family.",
              "It contains features like following, liking, commenting,etc.",
              "Images are uploaded using Upload thing's API and stored in MongoDB.",
              "The complete authentication of this app is handled by Clerk Auth.",
            ]}
            listItem={[
              "Next.js",
              "Typescript",
              "Tailwind CSS",
              "MongoDB",
              "Clerk",
              "Upload thing",
              "Zod",
            ]}
            gitlink="https://github.com/Tejasp2003/Threads"
            applink="threads-tejasp2003.vercel.app/"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <ProjectCard
            title="AiHub"
            subTitle="AI based Image Generation"
            desc={[
              "Generates images based on the search input using DALL-E API from OpenAI",
              "Integrated random prompts suggestions to users. Can also be connected to backend and random images are shown on dashboard",
            ]}
            listItem={["Next.js 13", "DALL-E API", "Tailwind CSS"]}
            gitlink="https://github.com/Tejasp2003/AiHub"
            applink="https://github.com/Tejasp2003/AiHub"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <ProjectCard
            title="MoviesInfo"
            subTitle="Movie Information Website"
            desc={[
              "A website for searching movies and getting their details.",
              "It contains features like searching, sorting, and filtering the movies.",
            ]}
            listItem={[
              "React.js",
              "Tailwind CSS",
              "OMDb API",
              "Axios",
              "Javascript",
            ]}
            gitlink="https://github.com/Tejasp2003/MoviesInfo"
            applink="imdb-clone-tejas.vercel.app"
          />
        </motion.div>

        {isExpanded && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ProjectCard
                title="Ai Article Summarizer"
                subTitle="AI based Article Summarizer"
                desc={[
                  "A website for summarizing the articles using T5 model from Hugging Face.",
                  "It contains features like summarizing the articles and generating the summary.",
                ]}
                listItem={["ML", "Pandas", "Numpy", "Streamlit"]}
                gitlink="https://github.com/Tejasp2003/ai_article-summarizer"
                applink="https://github.com/Tejasp2003/ai_article-summarizer"
              />
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ProjectCard
                title="SpamShield"
                subTitle="Email or SMS Spam Classifier"
                desc={[
                  "A Machine Learning based Email or SMS spam classifier.",
                  "Users seeking information about received messages will utilize this functionality.",
                ]}
                listItem={["ML", "Pandas", "Numpy", "Streamlit"]}
                gitlink="https://github.com/Tejas24/movie-recommendation"
                applink="https://Tejas24-movie-recommendation-main-osz07d.streamlit.app/"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ProjectCard
                title="Churn Prediciton"
                subTitle="Customer Churn Prediction"
                desc={[
                  "A ML based Customer Churn Prediction.",
                  "The stores can use this to predict which customers are likely to churn and take particular actions to retain them.",
                ]}
                listItem={["ML", "Pandas", "Numpy"]}
                gitlink="https://github.com/Tejas24/Customer-Churn-Prediction"
                applink="#"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <ProjectCard
                title="RestroRush"
                subTitle="Restaurant Website"
                desc={[
                  "A basic web development website design for restuarants for online-ordering and food delivery.",
                  "No backend, only simple frontend design.",
                ]}
                listItem={["HTML", "CSS", "JS", "Bootstrap"]}
                gitlink="https://github.com/Tejas24/RestoRush"
                applink="https://github.com/Tejas24/RestoRush"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <ProjectCard
                title="Tic-Tac-Toe"
                subTitle="A classic game of X's and O's"
                desc={[
                  "A classic game of X's and O's, a battle of wits and rows, Three in a line, victory is divine.",
                  "A simple Tic Tac Toe game that brings joy that grows!",
                ]}
                listItem={["React.js", "Tailwind CSS", "Javascript"]}
                gitlink="https://github.com/Tejas24/tic-tac-toe"
                applink="https://tic-tac-toe33.netlify.app/"
              />
            </motion.div> */}
          </>
        )}
      </motion.div>
      <div className="mt-12 flex items-center justify-center">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
        >
          {isExpanded && "Show Less"}
          {!isExpanded && "Show More"}
        </button>
      </div>
    </section>
  );
};

export default Projects;
