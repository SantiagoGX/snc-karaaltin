import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Before & After Dataset
const beforeAfterData = {
  FACE: [
    {
      name: "Facelift",
      patients: [
        { images: ["https://fi.realself.com/1080/combined/e/7/9/Facelift-before-8145905-after-8145906-0-13741495.jpg", "https://fi.realself.com/1080/combined/d/d/1/Facelift-before-8145903-after-8145904-0-13741493.jpg"] },
        { images: ["https://fi.realself.com/1080/combined/7/0/f/Facelift-before-5264418-after-5264420-0-12258633.png", "https://fi.realself.com/1080/combined/6/b/7/Facelift-before-5264413-after-5264416-0-12258631.png"] },
        { images: ["https://fi.realself.com/1080/combined/c/1/4/Facelift-before-5264408-after-5264412-0-12258628.png", "https://fi.realself.com/1080/combined/3/2/5/Facelift-before-5261274-after-5261282-0-12252458.png"] }
      ]
    },
    {
      name: "Neck Lift",
      patients: [
        { images: ["https://fi.realself.com/1080/combined/0/7/0/Neck-Lift-before-5244835-after-5244839-0-12227694.png"] },
        { images: ["https://fi.realself.com/1080/combined/9/e/6/Neck-Lift-before-5244823-after-5244825-0-12227688.png"] },
        { images: ["https://fi.realself.com/1080/combined/9/3/a/Neck-Lift-before-5244827-after-5244831-0-12227692.png"] }
      ]
    },
    {
      name: "Brow Lift",
      patients: [
        { images: ["https://fi.realself.com/1080/combined/f/a/3/Brow-Lift-before-5453543-after-5453544-0-12560863.png", "https://fi.realself.com/1080/combined/5/6/4/Brow-Lift-before-5453537-after-5453538-0-12560857.png"] },
        { images: ["https://fi.realself.com/1080/combined/d/c/0/Brow-Lift-before-4719052-after-4719053-1-10801788.png", "https://fi.realself.com/1080/combined/b/5/c/Brow-Lift-before-4719050-after-4719051-1-10801787.png"] }
      ]
    },
    {
      name: "Eyelid Surgery",
      patients: [
        { images: ["https://fi.realself.com/1080/combined/5/3/2/Eyelid-Surgery-before-5453539-after-5453540-0-12560858.png"] }
      ]
    },
    {
      name: "Chin Liposuction",
      patients: [
        { images: ["https://fi.realself.com/1080/combined/5/0/a/Chin-Liposuction-before-4714032-after-4714033-1-10781781.png", "https://fi.realself.com/1080/combined/2/0/9/Chin-Liposuction-before-4714030-after-4714031-1-10781779.png"] },
        { images: ["https://fi.realself.com/1080/combined/b/a/2/Chin-Liposuction-before-4714025-after-4714026-1-10781776.png", "https://fi.realself.com/1080/combined/8/7/c/Chin-Liposuction-before-4714023-after-4714024-1-10781774.png"] },
        { images: ["https://fi.realself.com/1080/combined/7/a/d/Chin-Liposuction-before-4714021-after-4714022-1-10781770.png", "https://fi.realself.com/1080/combined/4/5/a/Chin-Liposuction-before-4654509-after-4654510-1-10551224.png"] }
      ]
    },
    {
      name: "Facial Fat Transfer",
      patients: [
        { images: ["https://fi.realself.com/1080/combined/5/0/a/Facial-Fat-Transfer-before-5225924-after-5225926-0-12197535.png"] },
        { images: ["https://fi.realself.com/1080/combined/5/e/2/Facial-Fat-Transfer-before-5225917-after-5225919-0-12197526.png"] },
        { images: ["https://fi.realself.com/1080/combined/1/5/a/Facial-Fat-Transfer-before-5225911-after-5225913-0-12197521.png"] }
      ]
    },
    {
      name: "Rhinoplasty",
      patients: [
        { images: ["https://fi.realself.com/1080/combined/0/3/f/Rhinoplasty-before-8145909-after-8145910-0-13741496.jpg", "https://fi.realself.com/1080/combined/5/c/9/Rhinoplasty-before-8145907-after-8145908-0-13741494.jpg"] },
        { images: ["https://fi.realself.com/1080/combined/b/9/9/Rhinoplasty-before-5262931-after-5262934-0-12254766.png", "https://fi.realself.com/1080/combined/4/0/7/Rhinoplasty-before-5262933-after-5262935-0-12254767.png"] },
        { images: ["https://fi.realself.com/1080/combined/c/8/1/Rhinoplasty-before-5262928-after-5262929-0-12254764.png"] }
      ]
    },
    {
      name: "Smart Template Rhinoplasty",
      patients: [
        { images: ["https://fi.realself.com/1080/combined/d/5/b/Rhinoplasty-before-5262926-after-5262927-0-12254763.png", "https://fi.realself.com/1080/combined/a/0/7/Rhinoplasty-before-5261292-after-5261296-0-12252597.png"] },
        { images: ["https://fi.realself.com/1080/combined/c/2/0/Rhinoplasty-before-5261291-after-5261295-0-12252599.png"] }
      ]
    }
  ],
  BREAST: [
    {
      name: "Breast Augmentation",
      patients: [
        { images: ["https://fi.realself.com/org498/1080/combined/d/3/3/Breast-Augmentation-before-5265395-after-5265397-0-12260725.png", "https://fi.realself.com/org498/1080/combined/6/7/5/Breast-Augmentation-before-5265391-after-5265394-0-12260723.png"] },
        { images: ["https://fi.realself.com/org498/1080/combined/5/4/9/Breast-Augmentation-before-5261249-after-5261252-0-12252426.png", "https://fi.realself.com/org498/1080/combined/f/c/a/Breast-Augmentation-before-5261244-after-5261246-0-12252424.png"] },
        { images: ["https://fi.realself.com/org498/1080/combined/f/7/0/Breast-Augmentation-before-5261251-after-5261254-0-12252427.png"] }
      ]
    },
    {
      name: "Breast Implants",
      patients: [
        { images: ["https://fi.realself.com/org498/1080/combined/5/1/0/Breast-Implants-before-5666053-after-5666056-0-12790388.png", "https://fi.realself.com/org498/1080/combined/7/2/f/Breast-Implants-before-5615685-after-5615687-0-12748312.png"] },
        { images: ["https://fi.realself.com/org498/1080/combined/c/2/a/Breast-Implants-before-5600289-after-5600290-0-12734902.png", "https://fi.realself.com/org498/1080/combined/8/7/e/Breast-Implants-before-5590911-after-5590912-0-12725589.png"] },
        { images: ["https://fi.realself.com/org498/1080/combined/9/2/9/Breast-Implants-before-5297857-after-5297858-0-12321496.png"] }
      ]
    },
    {
      name: "Breast Fat Transfer",
      patients: [
        { images: ["https://fi.realself.com/org498/1080/combined/2/e/5/Breast-Fat-Transfer-before-5590757-after-5590758-0-12725504.png", "https://fi.realself.com/1080/combined/7/d/f/Breast-Fat-Transfer-before-5384992-after-5384993-0-12454868.png"] },
        { images: ["https://fi.realself.com/org498/1080/combined/6/3/3/Breast-Fat-Transfer-before-5384990-after-5384991-0-12454866.png", "https://fi.realself.com/org498/1080/combined/f/3/6/Breast-Fat-Transfer-before-5384988-after-5384989-0-12454863.png"] }
      ]
    },
    {
      name: "Breast Lift",
      patients: [
        { images: ["https://fi.realself.com/org498/1080/combined/6/e/2/Breast-Lift-before-5590954-after-5590959-0-12725626.png", "https://fi.realself.com/org498/1080/combined/a/1/0/Breast-Lift-before-5590951-after-5590958-0-12725625.png"] },
        { images: ["https://fi.realself.com/org498/1080/combined/b/8/6/Breast-Lift-before-5590953-after-5590957-0-12725628.png", "https://fi.realself.com/org498/1080/combined/5/c/e/Breast-Lift-before-5590942-after-5590946-0-12725618.png"] },
        { images: ["https://fi.realself.com/org498/1080/combined/3/5/2/Breast-Lift-before-5590940-after-5590944-0-12725617.png", "https://fi.realself.com/org498/1080/combined/5/4/f/Breast-Lift-before-5600284-after-5600286-0-12734897.png"] }
      ]
    },
    {
      name: "Breast Lift with Implants",
      patients: [
        { images: ["https://fi.realself.com/org498/1080/combined/2/f/d/Breast-Lift-With-Implants-before-4320487-after-4320488-1-9431634.png", "https://fi.realself.com/org498/1080/combined/e/1/b/Breast-Lift-With-Implants-before-4320476-after-4320477-1-9431630.png"] },
        { images: ["https://fi.realself.com/org498/1080/combined/3/4/f/Breast-Lift-With-Implants-before-4052902-after-4052903-2-8667593.png", "https://fi.realself.com/org498/1080/combined/3/5/0/Breast-Lift-With-Implants-before-4052900-after-4052901-1-8667585.png"] }
      ]
    },
    {
      name: "Breast Reduction",
      patients: [
        { images: ["https://fi.realself.com/org498/1080/combined/3/9/5/Breast-Reduction-before-5600283-after-5600285-0-12734896.png", "https://fi.realself.com/org498/1080/combined/1/3/6/Breast-Reduction-before-5590950-after-5590956-0-12725629.png"] },
        { images: ["https://fi.realself.com/org498/1080/combined/5/f/f/Breast-Reduction-before-5590949-after-5590955-0-12725627.png", "https://fi.realself.com/org498/1080/combined/5/5/7/Breast-Reduction-before-5590948-after-5590952-0-12725624.png"] },
        { images: ["https://fi.realself.com/org498/1080/combined/f/b/a/Breast-Reduction-before-5590936-after-5590938-0-12725615.png", "https://fi.realself.com/org498/1080/combined/1/e/1/Breast-Reduction-before-5590937-after-5590939-0-12725616.png"] }
      ]
    },
    {
      name: "Breast Reconstruction",
      patients: [
        { images: ["https://fi.realself.com/org498/1080/combined/b/3/d/Breast-Reconstruction-before-5270359-after-5270361-0-12271140.png", "https://fi.realself.com/org498/1080/combined/4/a/3/Breast-Reconstruction-before-5270362-after-5270365-0-12271142.png"] },
        { images: ["https://fi.realself.com/org498/1080/combined/2/9/6/Breast-Reconstruction-before-4839410-after-4839411-1-11247764.png", "https://fi.realself.com/org498/1080/combined/e/b/9/Breast-Reconstruction-before-4839391-after-4839392-1-11247747.png"] },
        { images: ["https://fi.realself.com/org498/1080/combined/8/d/e/Breast-Reconstruction-before-4839389-after-4839390-1-11247729.png", "https://fi.realself.com/org498/1080/combined/3/5/3/Breast-Reconstruction-before-4839387-after-4839388-1-11247725.png"] }
      ]
    },
    {
      name: "Hybrid Augmentation",
      patients: [
        { images: ["https://fi.realself.com/org498/1080/combined/d/3/3/Breast-Augmentation-before-5265395-after-5265397-0-12260725.png"] }
      ]
    },
    {
      name: "Implant Removal",
      patients: [
        { images: ["https://fi.realself.com/org498/1080/combined/5/1/0/Breast-Implants-before-5666053-after-5666056-0-12790388.png"] }
      ]
    },
    {
      name: "Nipple Reduction",
      patients: [
        { images: ["https://fi.realself.com/org498/1080/combined/f/b/a/Breast-Reduction-before-5590936-after-5590938-0-12725615.png"] }
      ]
    },
    {
      name: "Areola Reduction",
      patients: [
        { images: ["https://fi.realself.com/org498/1080/combined/1/3/6/Breast-Reduction-before-5590950-after-5590956-0-12725629.png"] }
      ]
    },
    {
      name: "Inverted Nipple Correction",
      patients: [
        { images: ["https://fi.realself.com/org498/1080/combined/6/e/2/Breast-Lift-before-5590954-after-5590959-0-12725626.png"] }
      ]
    }
  ],
  BODY: [
    {
      name: "Liposuction",
      patients: [
        { images: ["https://fi.realself.com/org498/1080/combined/3/d/1/Liposuction-before-5666084-after-5666085-0-12790405.png", "https://fi.realself.com/org498/1080/combined/7/7/e/Liposuction-before-5666078-after-5666079-0-12790401.png"] },
        { images: ["https://fi.realself.com/org498/1080/combined/8/7/b/Liposuction-before-5666094-after-5666095-0-12790409.png"] }
      ]
    },
    {
      name: "Lipo 360",
      patients: [
        { images: ["https://fi.realself.com/org498/1080/combined/a/0/c/Lipo-360-before-5605436-after-5605437-1-12210934.png", "https://fi.realself.com/1080/combined/8/f/7/Lipo-360-before-5605446-after-5605447-1-12210927.png"] },
        { images: ["https://fi.realself.com/org498/1080/combined/f/c/c/Lipo-360-before-5605448-after-5605449-1-12210931.png", "https://fi.realself.com/org498/1080/combined/c/a/6/Lipo-360-before-5605438-after-5605439-1-12210932.png"] }
      ]
    },
    {
      name: "Liposculpture",
      patients: [
        { images: ["https://fi.realself.com/org498/1080/combined/4/4/3/Liposculpture-before-5297847-after-5297849-0-12321491.png", "https://fi.realself.com/org498/1080/combined/0/a/f/Liposculpture-before-5297839-after-5297842-0-12321486.png"] },
        { images: ["https://fi.realself.com/org498/1080/combined/2/5/c/Liposculpture-before-5297831-after-5297832-0-12321482.png", "https://fi.realself.com/org498/1080/combined/9/a/6/Liposculpture-before-5297817-after-5297822-0-12321476.png"] },
        { images: ["https://fi.realself.com/org498/1080/combined/4/4/1/Liposculpture-before-5297815-after-5297819-0-12321472.png", "https://fi.realself.com/org498/1080/combined/4/7/5/Liposculpture-before-5297806-after-5297812-0-12321470.png"] }
      ]
    },
    {
      name: "Vaser Liposuction",
      patients: [
        { images: ["https://fi.realself.com/org498/1080/combined/6/6/9/Vaser-Liposuction-before-4046420-after-4046421-1-8650378.png"] }
      ]
    },
    {
      name: "Liposuction Revision",
      patients: [
        { images: ["https://fi.realself.com/org498/1080/combined/7/a/7/Liposuction-Revision-before-4770759-after-4770760-1-10976776.png", "https://fi.realself.com/org498/1080/combined/e/b/a/Liposuction-Revision-before-4770761-after-4770762-2-10976773.png"] },
        { images: ["https://fi.realself.com/org498/1080/combined/a/9/9/Liposuction-Revision-before-4770755-after-4770756-1-10976768.png", "https://fi.realself.com/org498/1080/combined/9/8/f/Liposuction-Revision-before-4770753-after-4770754-2-10976764.png"] },
        { images: ["https://fi.realself.com/org498/1080/combined/2/e/4/Liposuction-Revision-before-4770749-after-4770750-1-10976761.png", "https://fi.realself.com/org498/1080/combined/d/a/9/Liposuction-Revision-before-4770745-after-4770746-2-10976758.png"] }
      ]
    },
    {
      name: "Tummy Tuck",
      patients: [
        { images: ["https://fi.realself.com/org498/1080/combined/c/c/3/Tummy-Tuck-before-5453510-after-5453511-0-12560839.png", "https://fi.realself.com/org498/1080/combined/d/8/c/Tummy-Tuck-before-5453506-after-5453507-0-12560838.png"] },
        { images: ["https://fi.realself.com/org498/1080/combined/1/c/b/Tummy-Tuck-before-5453499-after-5453500-0-12560837.png"] }
      ]
    },
    {
      name: "Mini Tummy Tuck",
      patients: [
        { images: ["https://fi.realself.com/org498/1080/combined/2/9/8/Mini-Tummy-Tuck-before-5261479-after-5261482-0-12252795.png", "https://fi.realself.com/org498/1080/combined/c/8/c/Mini-Tummy-Tuck-before-5261470-after-5261476-0-12252794.png"] },
        { images: ["https://fi.realself.com/org498/1080/combined/1/d/e/Mini-Tummy-Tuck-before-5261458-after-5261465-0-12252786.png", "https://fi.realself.com/org498/1080/combined/2/b/7/Mini-Tummy-Tuck-before-5254551-after-5254553-0-12241434.png"] },
        { images: ["https://fi.realself.com/org498/1080/combined/9/6/9/Mini-Tummy-Tuck-before-5244716-after-5244717-0-12227620.png"] }
      ]
    },
    {
      name: "Tummy Tuck Revision",
      patients: [
        { images: ["https://fi.realself.com/org498/1080/combined/4/1/2/Tummy-Tuck-Revision-before-4803394-after-4803395-1-11118553.png", "https://fi.realself.com/org498/1080/combined/6/1/3/Tummy-Tuck-Revision-before-4803391-after-4803392-1-11118550.png"] },
        { images: ["https://fi.realself.com/org498/1080/combined/0/9/9/Tummy-Tuck-Revision-before-4803389-after-4803390-1-11118536.png", "https://fi.realself.com/org498/1080/combined/c/8/9/Tummy-Tuck-Revision-before-4803387-after-4803388-1-11118533.png"] },
        { images: ["https://fi.realself.com/org498/1080/combined/d/a/e/Tummy-Tuck-Revision-before-4803385-after-4803386-1-11118531.png", "https://fi.realself.com/org498/1080/combined/f/f/0/Tummy-Tuck-Revision-before-4803309-after-4803310-1-11118527.png"] }
      ]
    },
    {
      name: "Body Lift",
      patients: [
        { images: ["https://fi.realself.com/org498/1080/combined/7/7/b/Body-Lift-before-5254485-after-5254487-0-12241390.png", "https://fi.realself.com/org498/1080/combined/d/4/a/Body-Lift-before-5254489-after-5254491-0-12241392.png"] },
        { images: ["https://fi.realself.com/org498/1080/combined/f/1/f/Body-Lift-before-5254466-after-5254469-0-12241380.png", "https://fi.realself.com/org498/1080/combined/2/3/7/Body-Lift-before-5254467-after-5254471-0-12241382.png"] },
        { images: ["https://fi.realself.com/org498/1080/combined/8/d/0/Body-Lift-before-5254473-after-5254475-0-12241384.png", "https://fi.realself.com/org498/1080/combined/4/9/e/Body-Lift-before-5254481-after-5254483-0-12241388.png"] }
      ]
    },
    {
      name: "Arm Lift",
      patients: [
        { images: ["https://fi.realself.com/org498/1080/combined/b/9/a/Arm-Lift-before-8135485-after-8135486-0-13729873.jpg", "https://fi.realself.com/1080/combined/f/a/5/Arm-Lift-before-8135482-after-8135484-0-13729872.jpg"] },
        { images: ["https://fi.realself.com/1080/combined/e/5/9/Arm-Lift-before-8135481-after-8135483-0-13729871.jpg", "https://fi.realself.com/org498/1080/combined/e/d/3/Arm-Lift-before-5590797-after-5590798-0-12725528.png"] }
      ]
    },
    {
      name: "Brazilian Butt Lift (BBL)",
      patients: [
        { images: ["https://fi.realself.com/org498/1080/combined/d/7/e/Brazilian-Butt-Lift-before-8135494-after-8135495-0-13729878.jpg", "https://fi.realself.com/org498/1080/combined/0/0/4/Brazilian-Butt-Lift-before-5297922-after-5297925-0-12321654.png"] },
        { images: ["https://fi.realself.com/org498/1080/combined/7/7/d/Brazilian-Butt-Lift-before-5297911-after-5297917-0-12321649.png", "https://fi.realself.com/org498/1080/combined/0/b/f/Brazilian-Butt-Lift-before-5297910-after-5297915-0-12321648.png"] },
        { images: ["https://fi.realself.com/org498/1080/combined/e/7/e/Brazilian-Butt-Lift-before-5297905-after-5297907-0-12321645.png", "https://fi.realself.com/org498/1080/combined/d/5/4/Brazilian-Butt-Lift-before-5297902-after-5297903-0-12321643.png"] }
      ]
    },
    {
      name: "Brazilian Butt Lift Revision",
      patients: [
        { images: ["https://fi.realself.com/org498/1080/combined/4/e/d/Brazilian-Butt-Lift-Revision-before-5107328-after-5107329-0-11977834.png", "https://fi.realself.com/org498/1080/combined/1/a/9/Brazilian-Butt-Lift-Revision-before-5107320-after-5107321-0-11977830.png"] },
        { images: ["https://fi.realself.com/org498/1080/combined/c/1/f/Brazilian-Butt-Lift-Revision-before-5107162-after-5107163-0-11977778.png", "https://fi.realself.com/org498/1080/combined/a/8/3/Brazilian-Butt-Lift-Revision-before-5107160-after-5107161-0-11977777.png"] },
        { images: ["https://fi.realself.com/org498/1080/combined/7/d/f/Brazilian-Butt-Lift-Revision-before-4803525-after-4803526-1-11118804.jpg", "https://fi.realself.com/org498/1080/combined/3/4/8/Brazilian-Butt-Lift-Revision-before-4803440-after-4803441-1-11118801.jpg"] }
      ]
    },
    {
      name: "Gynecomastia Surgery",
      patients: [
        { images: ["https://fi.realself.com/org498/1080/combined/d/3/9/Gynecomastia-Surgery-before-5641944-after-5641946-0-12772058.png"] },
        { images: ["https://fi.realself.com/org498/1080/combined/1/4/a/Gynecomastia-Surgery-before-5641941-after-5641942-0-12772054.png"] },
        { images: ["https://fi.realself.com/org498/1080/combined/1/9/9/Gynecomastia-Surgery-before-5244871-after-5244872-0-12227700.png"] }
      ]
    },
    {
      name: "BBL + Lipo 360",
      patients: [
        { images: ["https://fi.realself.com/org498/1080/combined/7/d/5/Lipo-360-Bbl-before-5957801-after-5957802-2-10541675.png"] }
      ]
    }
  ]
};

interface PatientCarouselProps {
  images: string[];
}

const PatientCarousel = ({ images }: PatientCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  useState(() => {
    if (!emblaApi) return;
    emblaApi.on('select', () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    });
  });

  return (
    <div className="relative group">
      <div className="overflow-hidden rounded-lg shadow-md" ref={emblaRef}>
        <div className="flex">
          {images.map((img, idx) => (
            <div key={idx} className="flex-[0_0_100%] min-w-0">
              <img
                src={img}
                alt={`Patient result ${idx + 1}`}
                className="w-full h-[400px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      
      {images.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg hover:bg-white"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg hover:bg-white"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-white w-4' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>("FACE");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <h1 className="text-4xl lg:text-5xl font-serif font-light tracking-wide text-center mb-2">
            Before & After Gallery
          </h1>
          <p className="text-center text-muted-foreground mb-12">
            Real patient transformations by Dr. Karaaltın
          </p>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Sidebar - Sticky Procedure List */}
            <div className="lg:w-1/4">
              <div className="lg:sticky lg:top-24 space-y-8">
                {Object.keys(beforeAfterData).map((category) => (
                  <div key={category}>
                    <h3
                      className="text-xs font-semibold tracking-widest uppercase text-gray-900 mb-3 cursor-pointer hover:text-gray-600 transition-colors"
                      onClick={() => setActiveCategory(category)}
                    >
                      {category} PROCEDURES
                    </h3>
                    <ul className="space-y-2">
                      {beforeAfterData[category as keyof typeof beforeAfterData].map((proc) => (
                        <li key={proc.name}>
                          <a
                            href={`#${proc.name.replace(/\s+/g, '-').toLowerCase()}`}
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors block py-1"
                          >
                            {proc.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Galleries */}
            <div className="lg:w-3/4 space-y-16">
              {Object.entries(beforeAfterData).map(([category, procedures]) => (
                <div key={category}>
                  {procedures.map((procedure) => (
                    <div
                      key={procedure.name}
                      id={procedure.name.replace(/\s+/g, '-').toLowerCase()}
                      className="mb-16"
                    >
                      <h2 className="text-2xl font-serif font-light tracking-wide mb-8 pb-3 border-b border-gray-200">
                        {procedure.name}
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {procedure.patients.slice(0, 3).map((patient, idx) => (
                          <div key={idx}>
                            <PatientCarousel images={patient.images} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
