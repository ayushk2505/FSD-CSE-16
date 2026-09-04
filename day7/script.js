import jobs from "./jobs.js";

const jobContainer = document.getElementsByClassName("job-container");
// const jobTitleElement = document.getElementById("job-title");
// const jobTagsElement = document.getElementById("job-tags");

jobs.map((job , idx) => {
const box = document.createElement("div");
const dateCon = document.createElement("div");
const headingCon = document.createElement("div");
const tagCon = document.createElement("span");
const tag = document.createElement("span");
dateCon.innerText = job.date;
headingCon.innerText = job.title;
job.tags.map((t ,i)=>{
    const tag = document.createElement("span");
    tag.innerText = t;})
})
jobContainer.appendChild(boxes);