const reviews = [

    {
        name: "Teszt Elek",
        job: "Javascripit fejlesztő",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente et facere quibusdam magni dignissimos ab cupiditate minima deserunt eos ex non, quam vero fugit soluta perspiciatis in illo porro distinctio! Enim harum fugit aut quo sit autem assumenda ut ab vitae corrupti nihil, laboriosam vel rerum sequi saepe alias praesentium perspiciatis quas commodi modi. In, ex delectus. In recusandae unde ratione quis aspernatur a laudantium alias? Optio quia ut autem cupiditate, numquam labore cum inventore iusto ullam molestias perspiciatis facilis!",
    },
    {
        name: "Török Bálint",
        job: "Weblap fejlesztő",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente et facere quibusdam magni dignissimos ab cupiditate minima deserunt eos ex non, quam vero fugit soluta perspiciatis in illo porro distinctio! Enim harum fugit aut quo sit autem assumenda ut ab vitae corrupti nihil, laboriosam vel rerum sequi saepe alias praesentium perspiciatis quas commodi modi. In, ex delectus. In recusandae unde ratione quis aspernatur a laudantium alias? Optio quia ut autem cupiditate, numquam labore cum inventore iusto ullam molestias perspiciatis facilis!",
    },
    {
        name: "Szent Endre",
        job: "Manuális fejlesztő fejlesztő",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente et facere quibusdam magni dignissimos ab cupiditate minima deserunt eos ex non, quam vero fugit soluta perspiciatis in illo porro distinctio! Enim harum fugit aut quo sit autem assumenda ut ab vitae corrupti nihil, laboriosam vel rerum sequi saepe alias praesentium perspiciatis quas commodi modi. In, ex delectus. In recusandae unde ratione quis aspernatur a laudantium alias? Optio quia ut autem cupiditate, numquam labore cum inventore iusto ullam molestias perspiciatis facilis!",
    }

];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const text = document.getElementById("text");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let current = 0;

window.addEventListener("load", () =>{
    const item = reviews[current];
    img.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    text.textContent = item.text;
})

function showPerson(person){

    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    text.textContent = item.text;
}

nextBtn.addEventListener("click", () => {
    current++;

    if(current > reviews.length - 1){
        current = 0;
    }

    showPerson(current);
})

prevBtn.addEventListener("click", () => {

    current--;

    if(current < 0){

        current = review.length - 1;
    }

    showPerson(current);
})
