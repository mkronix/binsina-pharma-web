import React from "react";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";
import { motion } from 'framer-motion'
const Blogs = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="md:text-4xl text-2xl font-semibold text-start text-brightColor">
            Latest Post
          </h1>
          <p className="mt-4 text-justify lg:text-start text-gray-700 max-md:text-xs">
            Stay updated with the latest insights, tips, and news in the world of health and wellness
          </p>
        </div>
        <div className=" mt-4 lg:mt-0">
          <Button title="Our Articles" />
        </div>
      </div>
      <div className=" my-8">
        <div className="flex flex-wrap justify-center gap-5">
          <BlogCard
            img={img1}
            headlines="Unraveling the Mysteries of Sleep"
            description="Discover why sleep is crucial for your physical and mental well-being. Learn tips to improve sleep quality and understand the science behind a good night's rest."
          />
          <BlogCard
            img={img2}
            headlines="The Heart-Healthy Diet"
            description="Explore the best dietary practices to keep your heart healthy. From nutrient-packed foods to heart-friendly recipes, start your journey to better heart health today."
          />
          <BlogCard
            img={img3}
            headlines="Understanding Pediatric Vaccinations"
            description="Vaccinations are key to protecting children from preventable diseases. Learn about the importance of immunization schedules and how they safeguard future generations."
          />
          <BlogCard
            img={img4}
            headlines="Navigating Mental Health"
            description="Mental health matters. Discover practical advice, coping mechanisms, and resources to support emotional well-being in challenging times."
          />
          <BlogCard
            img={img5}
            headlines="The Importance of Regular Exercise"
            description="Regular physical activity benefits your body and mind. Find out how to incorporate exercise into your daily routine and reap long-term rewards."
          />
          <BlogCard
            img={img6}
            headlines="Skin Health 101"
            description="Your skin reflects your health. Learn skincare essentials, tips to combat common skin issues, and routines to keep your skin glowing and healthy."
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
