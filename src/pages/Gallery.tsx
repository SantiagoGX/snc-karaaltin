import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

// Restructured Before & After Dataset - ONE ARRAY PER PROCEDURE
const beforeAfterData = {
  FACE: [
    {
      name: "Facelift",
      images: [
        "https://fi.realself.com/1080/combined/e/7/9/Facelift-before-8145905-after-8145906-0-13741495.jpg",
        "https://fi.realself.com/1080/combined/d/d/1/Facelift-before-8145903-after-8145904-0-13741493.jpg",
        "https://fi.realself.com/1080/combined/7/0/f/Facelift-before-5264418-after-5264420-0-12258633.png",
        "https://fi.realself.com/1080/combined/6/b/7/Facelift-before-5264413-after-5264416-0-12258631.png",
        "https://fi.realself.com/1080/combined/c/1/4/Facelift-before-5264408-after-5264412-0-12258628.png",
        "https://fi.realself.com/1080/combined/3/2/5/Facelift-before-5261274-after-5261282-0-12252458.png",
        "https://fi.realself.com/1080/combined/9/6/9/Facelift-before-5261268-after-5261270-0-12252455.png",
        "https://fi.realself.com/1080/combined/1/a/4/Facelift-before-5261260-after-5261264-0-12252451.png",
        "https://fi.realself.com/1080/combined/d/9/d/Facelift-before-5244836-after-5244840-0-12227696.png"
      ]
    },
    {
      name: "Neck Lift",
      images: [
        "https://fi.realself.com/1080/combined/0/7/0/Neck-Lift-before-5244835-after-5244839-0-12227694.png",
        "https://fi.realself.com/1080/combined/9/e/6/Neck-Lift-before-5244823-after-5244825-0-12227688.png",
        "https://fi.realself.com/1080/combined/9/3/a/Neck-Lift-before-5244827-after-5244831-0-12227692.png"
      ]
    },
    {
      name: "Brow Lift",
      images: [
        "https://fi.realself.com/1080/combined/f/a/3/Brow-Lift-before-5453543-after-5453544-0-12560863.png",
        "https://fi.realself.com/1080/combined/5/6/4/Brow-Lift-before-5453537-after-5453538-0-12560857.png",
        "https://fi.realself.com/1080/combined/d/c/0/Brow-Lift-before-4719052-after-4719053-1-10801788.png",
        "https://fi.realself.com/1080/combined/b/5/c/Brow-Lift-before-4719050-after-4719051-1-10801787.png",
        "https://fi.realself.com/1080/combined/2/2/f/Brow-Lift-before-4719048-after-4719049-1-10801786.png"
      ]
    },
    {
      name: "Eyelid Surgery",
      images: [
        "https://fi.realself.com/1080/combined/5/3/2/Eyelid-Surgery-before-5453539-after-5453540-0-12560858.png"
      ]
    },
    {
      name: "Chin Liposuction",
      images: [
        "https://fi.realself.com/1080/combined/5/0/a/Chin-Liposuction-before-4714032-after-4714033-1-10781781.png",
        "https://fi.realself.com/1080/combined/2/0/9/Chin-Liposuction-before-4714030-after-4714031-1-10781779.png",
        "https://fi.realself.com/1080/combined/b/a/2/Chin-Liposuction-before-4714025-after-4714026-1-10781776.png",
        "https://fi.realself.com/1080/combined/8/7/c/Chin-Liposuction-before-4714023-after-4714024-1-10781774.png",
        "https://fi.realself.com/1080/combined/7/a/d/Chin-Liposuction-before-4714021-after-4714022-1-10781770.png",
        "https://fi.realself.com/1080/combined/4/5/a/Chin-Liposuction-before-4654509-after-4654510-1-10551224.png",
        "https://fi.realself.com/1080/combined/e/2/c/Chin-Liposuction-before-5385010-after-5385011-0-12454882.png",
        "https://fi.realself.com/1080/combined/1/2/b/Chin-Liposuction-before-5385008-after-5385009-0-12454879.png"
      ]
    },
    {
      name: "Facial Fat Transfer",
      images: [
        "https://fi.realself.com/1080/combined/5/0/a/Facial-Fat-Transfer-before-5225924-after-5225926-0-12197535.png",
        "https://fi.realself.com/1080/combined/5/e/2/Facial-Fat-Transfer-before-5225917-after-5225919-0-12197526.png",
        "https://fi.realself.com/1080/combined/1/5/a/Facial-Fat-Transfer-before-5225911-after-5225913-0-12197521.png"
      ]
    }
  ],
  NOSE: [
    {
      name: "Rhinoplasty",
      images: [
        "https://fi.realself.com/1080/combined/0/3/f/Rhinoplasty-before-8145909-after-8145910-0-13741496.jpg",
        "https://fi.realself.com/1080/combined/5/c/9/Rhinoplasty-before-8145907-after-8145908-0-13741494.jpg",
        "https://fi.realself.com/1080/combined/b/9/9/Rhinoplasty-before-5262931-after-5262934-0-12254766.png",
        "https://fi.realself.com/1080/combined/4/0/7/Rhinoplasty-before-5262933-after-5262935-0-12254767.png",
        "https://fi.realself.com/1080/combined/c/8/1/Rhinoplasty-before-5262928-after-5262929-0-12254764.png"
      ]
    },
    {
      name: "Smart Template Rhinoplasty",
      images: [
        "https://fi.realself.com/1080/combined/d/5/b/Rhinoplasty-before-5262926-after-5262927-0-12254763.png",
        "https://fi.realself.com/1080/combined/a/0/7/Rhinoplasty-before-5261292-after-5261296-0-12252597.png",
        "https://fi.realself.com/1080/combined/c/2/0/Rhinoplasty-before-5261291-after-5261295-0-12252599.png"
      ]
    }
  ],
  BREAST: [
    {
      name: "Breast Augmentation",
      images: [
        "https://fi.realself.com/org498/1080/combined/d/3/3/Breast-Augmentation-before-5265395-after-5265397-0-12260725.png",
        "https://fi.realself.com/org498/1080/combined/6/7/5/Breast-Augmentation-before-5265391-after-5265394-0-12260723.png",
        "https://fi.realself.com/org498/1080/combined/5/4/9/Breast-Augmentation-before-5261249-after-5261252-0-12252426.png",
        "https://fi.realself.com/org498/1080/combined/f/c/a/Breast-Augmentation-before-5261244-after-5261246-0-12252424.png",
        "https://fi.realself.com/org498/1080/combined/f/7/0/Breast-Augmentation-before-5261251-after-5261254-0-12252427.png"
      ]
    },
    {
      name: "Breast Implants",
      images: [
        "https://fi.realself.com/org498/1080/combined/5/1/0/Breast-Implants-before-5666053-after-5666056-0-12790388.png",
        "https://fi.realself.com/org498/1080/combined/7/2/f/Breast-Implants-before-5615685-after-5615687-0-12748312.png",
        "https://fi.realself.com/org498/1080/combined/c/2/a/Breast-Implants-before-5600289-after-5600290-0-12734902.png",
        "https://fi.realself.com/org498/1080/combined/8/7/e/Breast-Implants-before-5590911-after-5590912-0-12725589.png",
        "https://fi.realself.com/org498/1080/combined/9/2/9/Breast-Implants-before-5297857-after-5297858-0-12321496.png"
      ]
    },
    {
      name: "Breast Fat Transfer",
      images: [
        "https://fi.realself.com/org498/1080/combined/2/e/5/Breast-Fat-Transfer-before-5590757-after-5590758-0-12725504.png",
        "https://fi.realself.com/1080/combined/7/d/f/Breast-Fat-Transfer-before-5384992-after-5384993-0-12454868.png",
        "https://fi.realself.com/org498/1080/combined/6/3/3/Breast-Fat-Transfer-before-5384990-after-5384991-0-12454866.png",
        "https://fi.realself.com/org498/1080/combined/f/3/6/Breast-Fat-Transfer-before-5384988-after-5384989-0-12454863.png"
      ]
    },
    {
      name: "Breast Lift",
      images: [
        "https://fi.realself.com/org498/1080/combined/6/e/2/Breast-Lift-before-5590954-after-5590959-0-12725626.png",
        "https://fi.realself.com/org498/1080/combined/a/1/0/Breast-Lift-before-5590951-after-5590958-0-12725625.png",
        "https://fi.realself.com/org498/1080/combined/b/8/6/Breast-Lift-before-5590953-after-5590957-0-12725628.png",
        "https://fi.realself.com/org498/1080/combined/5/c/e/Breast-Lift-before-5590942-after-5590946-0-12725618.png",
        "https://fi.realself.com/org498/1080/combined/3/5/2/Breast-Lift-before-5590940-after-5590944-0-12725617.png",
        "https://fi.realself.com/org498/1080/combined/5/4/f/Breast-Lift-before-5600284-after-5600286-0-12734897.png"
      ]
    },
    {
      name: "Breast Lift with Implants",
      images: [
        "https://fi.realself.com/org498/1080/combined/2/f/d/Breast-Lift-With-Implants-before-4320487-after-4320488-1-9431634.png",
        "https://fi.realself.com/org498/1080/combined/e/1/b/Breast-Lift-With-Implants-before-4320476-after-4320477-1-9431630.png",
        "https://fi.realself.com/org498/1080/combined/3/4/f/Breast-Lift-With-Implants-before-4052902-after-4052903-2-8667593.png",
        "https://fi.realself.com/org498/1080/combined/3/5/0/Breast-Lift-With-Implants-before-4052900-after-4052901-1-8667585.png"
      ]
    },
    {
      name: "Breast Reduction",
      images: [
        "https://fi.realself.com/org498/1080/combined/3/9/5/Breast-Reduction-before-5600283-after-5600285-0-12734896.png",
        "https://fi.realself.com/org498/1080/combined/1/3/6/Breast-Reduction-before-5590950-after-5590956-0-12725629.png",
        "https://fi.realself.com/org498/1080/combined/5/f/f/Breast-Reduction-before-5590949-after-5590955-0-12725627.png",
        "https://fi.realself.com/org498/1080/combined/5/5/7/Breast-Reduction-before-5590948-after-5590952-0-12725624.png",
        "https://fi.realself.com/org498/1080/combined/f/b/a/Breast-Reduction-before-5590936-after-5590938-0-12725615.png",
        "https://fi.realself.com/org498/1080/combined/1/e/1/Breast-Reduction-before-5590937-after-5590939-0-12725616.png"
      ]
    },
    {
      name: "Breast Reconstruction",
      images: [
        "https://fi.realself.com/org498/1080/combined/b/3/d/Breast-Reconstruction-before-5270359-after-5270361-0-12271140.png",
        "https://fi.realself.com/org498/1080/combined/4/a/3/Breast-Reconstruction-before-5270362-after-5270365-0-12271142.png",
        "https://fi.realself.com/org498/1080/combined/2/9/6/Breast-Reconstruction-before-4839410-after-4839411-1-11247764.png",
        "https://fi.realself.com/org498/1080/combined/e/b/9/Breast-Reconstruction-before-4839391-after-4839392-1-11247747.png",
        "https://fi.realself.com/org498/1080/combined/8/d/e/Breast-Reconstruction-before-4839389-after-4839390-1-11247729.png",
        "https://fi.realself.com/org498/1080/combined/3/5/3/Breast-Reconstruction-before-4839387-after-4839388-1-11247725.png"
      ]
    },
    {
      name: "Hybrid Augmentation",
      images: [
        "https://fi.realself.com/org498/1080/combined/d/3/3/Breast-Augmentation-before-5265395-after-5265397-0-12260725.png"
      ]
    },
    {
      name: "Implant Removal",
      images: [
        "https://fi.realself.com/org498/1080/combined/5/1/0/Breast-Implants-before-5666053-after-5666056-0-12790388.png"
      ]
    },
    {
      name: "Nipple Reduction",
      images: [
        "https://fi.realself.com/org498/1080/combined/f/b/a/Breast-Reduction-before-5590936-after-5590938-0-12725615.png"
      ]
    },
    {
      name: "Areola Reduction",
      images: [
        "https://fi.realself.com/org498/1080/combined/1/3/6/Breast-Reduction-before-5590950-after-5590956-0-12725629.png"
      ]
    },
    {
      name: "Inverted Nipple Correction",
      images: [
        "https://fi.realself.com/org498/1080/combined/6/e/2/Breast-Lift-before-5590954-after-5590959-0-12725626.png"
      ]
    }
  ],
  BODY: [
    {
      name: "Liposuction",
      images: [
        "https://fi.realself.com/org498/1080/combined/3/d/1/Liposuction-before-5666084-after-5666085-0-12790405.png",
        "https://fi.realself.com/org498/1080/combined/7/7/e/Liposuction-before-5666078-after-5666079-0-12790401.png",
        "https://fi.realself.com/org498/1080/combined/8/7/b/Liposuction-before-5666094-after-5666095-0-12790409.png"
      ]
    },
    {
      name: "Lipo 360",
      images: [
        "https://fi.realself.com/org498/1080/combined/a/0/c/Lipo-360-before-5605436-after-5605437-1-12210934.png",
        "https://fi.realself.com/1080/combined/8/f/7/Lipo-360-before-5605446-after-5605447-1-12210927.png",
        "https://fi.realself.com/org498/1080/combined/f/c/c/Lipo-360-before-5605448-after-5605449-1-12210931.png",
        "https://fi.realself.com/org498/1080/combined/c/a/6/Lipo-360-before-5605438-after-5605439-1-12210932.png"
      ]
    },
    {
      name: "Liposculpture",
      images: [
        "https://fi.realself.com/org498/1080/combined/4/4/3/Liposculpture-before-5297847-after-5297849-0-12321491.png",
        "https://fi.realself.com/org498/1080/combined/0/a/f/Liposculpture-before-5297839-after-5297842-0-12321486.png",
        "https://fi.realself.com/org498/1080/combined/2/5/c/Liposculpture-before-5297831-after-5297832-0-12321482.png",
        "https://fi.realself.com/org498/1080/combined/9/a/6/Liposculpture-before-5297817-after-5297822-0-12321476.png",
        "https://fi.realself.com/org498/1080/combined/4/4/1/Liposculpture-before-5297815-after-5297819-0-12321472.png",
        "https://fi.realself.com/org498/1080/combined/4/7/5/Liposculpture-before-5297806-after-5297812-0-12321470.png",
        "https://fi.realself.com/org498/1080/combined/7/5/2/Liposculpture-before-4767614-after-4767615-1-10968824.png",
        "https://fi.realself.com/org498/1080/combined/6/0/e/Liposculpture-before-4767612-after-4767613-1-10968816.png",
        "https://fi.realself.com/org498/1080/combined/8/0/8/Liposculpture-before-4767610-after-4767611-1-10968806.png"
      ]
    },
    {
      name: "Vaser Liposuction",
      images: [
        "https://fi.realself.com/org498/1080/combined/6/6/9/Vaser-Liposuction-before-4046420-after-4046421-1-8650378.png"
      ]
    },
    {
      name: "Liposuction Revision",
      images: [
        "https://fi.realself.com/org498/1080/combined/7/a/7/Liposuction-Revision-before-4770759-after-4770760-1-10976776.png",
        "https://fi.realself.com/org498/1080/combined/e/b/a/Liposuction-Revision-before-4770761-after-4770762-2-10976773.png",
        "https://fi.realself.com/org498/1080/combined/a/9/9/Liposuction-Revision-before-4770755-after-4770756-1-10976768.png",
        "https://fi.realself.com/org498/1080/combined/9/8/f/Liposuction-Revision-before-4770753-after-4770754-2-10976764.png",
        "https://fi.realself.com/org498/1080/combined/2/e/4/Liposuction-Revision-before-4770749-after-4770750-1-10976761.png",
        "https://fi.realself.com/org498/1080/combined/d/a/9/Liposuction-Revision-before-4770745-after-4770746-2-10976758.png",
        "https://fi.realself.com/org498/1080/combined/9/c/f/Liposuction-Revision-before-4770729-after-4770730-2-10976740.png"
      ]
    },
    {
      name: "Tummy Tuck",
      images: [
        "https://fi.realself.com/org498/1080/combined/c/c/3/Tummy-Tuck-before-5453510-after-5453511-0-12560839.png",
        "https://fi.realself.com/org498/1080/combined/d/8/c/Tummy-Tuck-before-5453506-after-5453507-0-12560838.png",
        "https://fi.realself.com/org498/1080/combined/1/c/b/Tummy-Tuck-before-5453499-after-5453500-0-12560837.png"
      ]
    },
    {
      name: "Mini Tummy Tuck",
      images: [
        "https://fi.realself.com/org498/1080/combined/2/9/8/Mini-Tummy-Tuck-before-5261479-after-5261482-0-12252795.png",
        "https://fi.realself.com/org498/1080/combined/c/8/c/Mini-Tummy-Tuck-before-5261470-after-5261476-0-12252794.png",
        "https://fi.realself.com/org498/1080/combined/1/d/e/Mini-Tummy-Tuck-before-5261458-after-5261465-0-12252786.png",
        "https://fi.realself.com/org498/1080/combined/2/b/7/Mini-Tummy-Tuck-before-5254551-after-5254553-0-12241434.png",
        "https://fi.realself.com/org498/1080/combined/9/6/9/Mini-Tummy-Tuck-before-5244716-after-5244717-0-12227620.png"
      ]
    },
    {
      name: "Tummy Tuck Revision",
      images: [
        "https://fi.realself.com/org498/1080/combined/4/1/2/Tummy-Tuck-Revision-before-4803394-after-4803395-1-11118553.png",
        "https://fi.realself.com/org498/1080/combined/6/1/3/Tummy-Tuck-Revision-before-4803391-after-4803392-1-11118550.png",
        "https://fi.realself.com/org498/1080/combined/0/9/9/Tummy-Tuck-Revision-before-4803389-after-4803390-1-11118536.png",
        "https://fi.realself.com/org498/1080/combined/c/8/9/Tummy-Tuck-Revision-before-4803387-after-4803388-1-11118533.png",
        "https://fi.realself.com/org498/1080/combined/d/a/e/Tummy-Tuck-Revision-before-4803385-after-4803386-1-11118531.png",
        "https://fi.realself.com/org498/1080/combined/f/f/0/Tummy-Tuck-Revision-before-4803309-after-4803310-1-11118527.png"
      ]
    },
    {
      name: "Body Lift",
      images: [
        "https://fi.realself.com/org498/1080/combined/7/7/b/Body-Lift-before-5254485-after-5254487-0-12241390.png",
        "https://fi.realself.com/org498/1080/combined/d/4/a/Body-Lift-before-5254489-after-5254491-0-12241392.png",
        "https://fi.realself.com/org498/1080/combined/f/1/f/Body-Lift-before-5254466-after-5254469-0-12241380.png",
        "https://fi.realself.com/org498/1080/combined/2/3/7/Body-Lift-before-5254467-after-5254471-0-12241382.png",
        "https://fi.realself.com/org498/1080/combined/8/d/0/Body-Lift-before-5254473-after-5254475-0-12241384.png",
        "https://fi.realself.com/org498/1080/combined/4/9/e/Body-Lift-before-5254481-after-5254483-0-12241388.png"
      ]
    },
    {
      name: "Arm Lift",
      images: [
        "https://fi.realself.com/org498/1080/combined/b/9/a/Arm-Lift-before-8135485-after-8135486-0-13729873.jpg",
        "https://fi.realself.com/1080/combined/f/a/5/Arm-Lift-before-8135482-after-8135484-0-13729872.jpg",
        "https://fi.realself.com/1080/combined/e/5/9/Arm-Lift-before-8135481-after-8135483-0-13729871.jpg",
        "https://fi.realself.com/org498/1080/combined/e/d/3/Arm-Lift-before-5590797-after-5590798-0-12725528.png"
      ]
    },
    {
      name: "Brazilian Butt Lift (BBL)",
      images: [
        "https://fi.realself.com/org498/1080/combined/d/7/e/Brazilian-Butt-Lift-before-8135494-after-8135495-0-13729878.jpg",
        "https://fi.realself.com/org498/1080/combined/0/0/4/Brazilian-Butt-Lift-before-5297922-after-5297925-0-12321654.png",
        "https://fi.realself.com/org498/1080/combined/7/7/d/Brazilian-Butt-Lift-before-5297911-after-5297917-0-12321649.png",
        "https://fi.realself.com/org498/1080/combined/0/b/f/Brazilian-Butt-Lift-before-5297910-after-5297915-0-12321648.png",
        "https://fi.realself.com/org498/1080/combined/e/7/e/Brazilian-Butt-Lift-before-5297905-after-5297907-0-12321645.png",
        "https://fi.realself.com/org498/1080/combined/d/5/4/Brazilian-Butt-Lift-before-5297902-after-5297903-0-12321643.png"
      ]
    },
    {
      name: "Brazilian Butt Lift Revision",
      images: [
        "https://fi.realself.com/org498/1080/combined/4/e/d/Brazilian-Butt-Lift-Revision-before-5107328-after-5107329-0-11977834.png",
        "https://fi.realself.com/org498/1080/combined/1/a/9/Brazilian-Butt-Lift-Revision-before-5107320-after-5107321-0-11977830.png",
        "https://fi.realself.com/org498/1080/combined/c/1/f/Brazilian-Butt-Lift-Revision-before-5107162-after-5107163-0-11977778.png",
        "https://fi.realself.com/org498/1080/combined/a/8/3/Brazilian-Butt-Lift-Revision-before-5107160-after-5107161-0-11977777.png",
        "https://fi.realself.com/org498/1080/combined/7/d/f/Brazilian-Butt-Lift-Revision-before-4803525-after-4803526-1-11118804.jpg",
        "https://fi.realself.com/org498/1080/combined/3/4/8/Brazilian-Butt-Lift-Revision-before-4803440-after-4803441-1-11118801.jpg",
        "https://fi.realself.com/org498/1080/combined/7/8/3/Brazilian-Butt-Lift-Revision-before-4803436-after-4803437-1-11118797.jpg",
        "https://fi.realself.com/org498/1080/combined/8/6/2/Brazilian-Butt-Lift-Revision-before-4803434-after-4803435-1-11118793.jpg",
        "https://fi.realself.com/org498/1080/combined/b/8/c/Brazilian-Butt-Lift-Revision-before-4803432-after-4803433-1-11118791.jpg",
        "https://fi.realself.com/org498/1080/combined/c/1/4/Brazilian-Butt-Lift-Revision-before-4803428-after-4803429-1-11118788.jpg"
      ]
    },
    {
      name: "Gynecomastia Surgery",
      images: [
        "https://fi.realself.com/org498/1080/combined/d/3/9/Gynecomastia-Surgery-before-5641944-after-5641946-0-12772058.png",
        "https://fi.realself.com/org498/1080/combined/1/4/a/Gynecomastia-Surgery-before-5641941-after-5641942-0-12772054.png",
        "https://fi.realself.com/org498/1080/combined/1/9/9/Gynecomastia-Surgery-before-5244871-after-5244872-0-12227700.png"
      ]
    },
    {
      name: "BBL + Lipo 360",
      images: [
        "https://fi.realself.com/org498/1080/combined/7/d/5/Lipo-360-Bbl-before-5957801-after-5957802-2-10541675.png"
      ]
    }
  ]
};

interface ProcedureCarouselProps {
  procedure: { name: string; images: string[] };
}

const ProcedureCarousel = ({ procedure }: ProcedureCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const onSelect = () => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  };

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="mb-20 animate-fade-in" id={procedure.name.toLowerCase().replace(/\s+/g, '-')}>
      {/* Procedure Title */}
      <h3 className="text-2xl md:text-3xl font-light tracking-wide text-gray-900 mb-8">
        {procedure.name}
      </h3>

      {/* Carousel Container */}
      <div className="relative">
        {/* Embla Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {procedure.images.map((imageUrl, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 px-1 md:px-2">
                <div className="relative w-full bg-gray-100 rounded-lg shadow-lg overflow-hidden min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center justify-center">
                  <img
                    src={imageUrl}
                    alt={`${procedure.name} - Image ${index + 1}`}
                    className="w-full h-full object-contain max-h-[500px] md:max-h-[600px] lg:max-h-[700px]"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        {procedure.images.length > 1 && (
          <>
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Image Counter */}
        {procedure.images.length > 1 && (
          <div className="text-center mt-4 text-sm text-gray-600 font-light">
            {selectedIndex + 1} / {procedure.images.length}
          </div>
        )}
      </div>
    </div>
  );
};

const Gallery = () => {
  const [selectedProcedure, setSelectedProcedure] = useState<string | null>(null);

  const handleProcedureClick = (procedureName: string) => {
    setSelectedProcedure(procedureName);
    const element = document.getElementById(procedureName.toLowerCase().replace(/\s+/g, '-'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Get currently selected procedure data
  const getSelectedProcedureData = () => {
    if (!selectedProcedure) return null;
    for (const category of Object.values(beforeAfterData)) {
      const found = category.find(p => p.name === selectedProcedure);
      if (found) return found;
    }
    return null;
  };

  const selectedData = getSelectedProcedureData();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Dark Background */}
      <section className="relative bg-gradient-to-br from-[#0d1f3a] via-[#1a2c44] to-[#0d1f3a] pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-white mb-6">
            Before & After Gallery
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto">
            Explore real patient transformations showcasing Dr. Karaaltin's expertise in aesthetic surgery
          </p>
        </div>
        
        {/* Subtle decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-8 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          
          {/* MOBILE DROPDOWN - Visible only on mobile */}
          <div className="lg:hidden mb-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="w-full flex items-center justify-between px-5 py-4 bg-gray-900 text-white rounded-lg shadow-md">
                  <span className="font-medium text-base">
                    {selectedProcedure || "Select a Procedure"}
                  </span>
                  <ChevronDown className="w-5 h-5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="start" 
                className="w-[calc(100vw-2rem)] max-h-[60vh] overflow-y-auto bg-white z-50 shadow-xl"
              >
                {/* Face */}
                <DropdownMenuLabel className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Face</DropdownMenuLabel>
                {beforeAfterData.FACE.map((proc) => (
                  <DropdownMenuItem 
                    key={proc.name}
                    onClick={() => handleProcedureClick(proc.name)}
                    className={`cursor-pointer ${selectedProcedure === proc.name ? 'bg-gray-100 font-medium' : ''}`}
                  >
                    {proc.name}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                
                {/* Nose */}
                <DropdownMenuLabel className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Nose</DropdownMenuLabel>
                {beforeAfterData.NOSE.map((proc) => (
                  <DropdownMenuItem 
                    key={proc.name}
                    onClick={() => handleProcedureClick(proc.name)}
                    className={`cursor-pointer ${selectedProcedure === proc.name ? 'bg-gray-100 font-medium' : ''}`}
                  >
                    {proc.name}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                
                {/* Breast */}
                <DropdownMenuLabel className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Breast</DropdownMenuLabel>
                {beforeAfterData.BREAST.map((proc) => (
                  <DropdownMenuItem 
                    key={proc.name}
                    onClick={() => handleProcedureClick(proc.name)}
                    className={`cursor-pointer ${selectedProcedure === proc.name ? 'bg-gray-100 font-medium' : ''}`}
                  >
                    {proc.name}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                
                {/* Body */}
                <DropdownMenuLabel className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Body</DropdownMenuLabel>
                {beforeAfterData.BODY.map((proc) => (
                  <DropdownMenuItem 
                    key={proc.name}
                    onClick={() => handleProcedureClick(proc.name)}
                    className={`cursor-pointer ${selectedProcedure === proc.name ? 'bg-gray-100 font-medium' : ''}`}
                  >
                    {proc.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* LEFT SIDEBAR - Desktop Only */}
            <aside className="hidden lg:block lg:w-72 lg:sticky lg:top-24 lg:self-start lg:h-[calc(100vh-120px)] lg:overflow-y-auto">
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm space-y-8">
                
                {/* FACE PROCEDURES */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold tracking-wide text-gray-900 uppercase border-b-2 border-gray-300 pb-2">
                    Face Procedures
                  </h3>
                  <ul className="space-y-2">
                    {beforeAfterData.FACE.map((procedure) => (
                      <li key={procedure.name}>
                        <button
                          onClick={() => handleProcedureClick(procedure.name)}
                          className={`text-left w-full px-3 py-2 rounded text-sm transition-all duration-200 ${
                            selectedProcedure === procedure.name
                              ? 'bg-gray-900 text-white font-medium'
                              : 'text-gray-700 hover:bg-gray-200 font-light'
                          }`}
                        >
                          {procedure.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* NOSE PROCEDURES */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold tracking-wide text-gray-900 uppercase border-b-2 border-gray-300 pb-2">
                    Nose Procedures
                  </h3>
                  <ul className="space-y-2">
                    {beforeAfterData.NOSE.map((procedure) => (
                      <li key={procedure.name}>
                        <button
                          onClick={() => handleProcedureClick(procedure.name)}
                          className={`text-left w-full px-3 py-2 rounded text-sm transition-all duration-200 ${
                            selectedProcedure === procedure.name
                              ? 'bg-gray-900 text-white font-medium'
                              : 'text-gray-700 hover:bg-gray-200 font-light'
                          }`}
                        >
                          {procedure.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* BREAST PROCEDURES */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold tracking-wide text-gray-900 uppercase border-b-2 border-gray-300 pb-2">
                    Breast Procedures
                  </h3>
                  <ul className="space-y-2">
                    {beforeAfterData.BREAST.map((procedure) => (
                      <li key={procedure.name}>
                        <button
                          onClick={() => handleProcedureClick(procedure.name)}
                          className={`text-left w-full px-3 py-2 rounded text-sm transition-all duration-200 ${
                            selectedProcedure === procedure.name
                              ? 'bg-gray-900 text-white font-medium'
                              : 'text-gray-700 hover:bg-gray-200 font-light'
                          }`}
                        >
                          {procedure.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* BODY PROCEDURES */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold tracking-wide text-gray-900 uppercase border-b-2 border-gray-300 pb-2">
                    Body Procedures
                  </h3>
                  <ul className="space-y-2">
                    {beforeAfterData.BODY.map((procedure) => (
                      <li key={procedure.name}>
                        <button
                          onClick={() => handleProcedureClick(procedure.name)}
                          className={`text-left w-full px-3 py-2 rounded text-sm transition-all duration-200 ${
                            selectedProcedure === procedure.name
                              ? 'bg-gray-900 text-white font-medium'
                              : 'text-gray-700 hover:bg-gray-200 font-light'
                          }`}
                        >
                          {procedure.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </aside>

            {/* RIGHT CONTENT AREA - Galleries */}
            <main className="flex-1">
              
              {/* Display Selected Procedure or All Procedures */}
              {selectedData ? (
                <ProcedureCarousel key={selectedProcedure} procedure={selectedData} />
              ) : (
                <div className="text-center py-20">
                  <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gray-900 mb-6">
                    Select a Procedure
                  </h2>
                  <p className="text-lg text-gray-600 font-light max-w-xl mx-auto">
                    Choose any procedure from the left menu to view before & after transformations
                  </p>
                </div>
              )}

            </main>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
