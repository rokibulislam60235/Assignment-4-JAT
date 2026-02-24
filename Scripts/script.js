// Allah r name e suru korlam

let currentTab = "all";

let jobs = [
  { id: 1, status: "not_applied" },
  { id: 2, status: "not_applied" },
  { id: 3, status: "not_applied" },
  { id: 4, status: "not_applied" },
  { id: 5, status: "not_applied" },
  { id: 6, status: "not_applied" },
  { id: 7, status: "not_applied" },
  { id: 8, status: "not_applied" }
];

document.addEventListener("click", function (e) {
  // tab k dhorlam
  const tabBtn = e.target.closest("[data-tab]");
  if (tabBtn) {
    currentTab = tabBtn.dataset.tab;
    updateAll();
    return;
  }

  // action
  const actionBtn = e.target.closest("[data-action]");
  if (!actionBtn) return;

  const action = actionBtn.dataset.action;
  const card = actionBtn.closest(".jat-job-card");
  if (!card) return;

  const jobId = Number(card.dataset.jobId);

  // delete
  if (action === "delete") {
    // remove korlam
    jobs = jobs.filter(function (job) {
      return job.id !== jobId;
    });

    // directly remove korlam
    card.remove();

    updateAll();
    return;
  }

  // interview / rejected er part
  if (action === "interview" || action === "rejected") {
    // update korlam
    for (let i = 0; i < jobs.length; i++) {
      if (jobs[i].id === jobId) {
        jobs[i].status = action;
        break;
      }
    }

    updateAll();
  }
});

function updateAll() {
  //  dashboard e update hobe
  let total = jobs.length;
  let interview = 0;
  let rejected = 0;

  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].status === "interview") interview++;
    if (jobs[i].status === "rejected") rejected++;
  }

  document.getElementById("statTotal").innerText = total;
  document.getElementById("statInterview").innerText = interview;
  document.getElementById("statRejected").innerText = rejected;

  // show or hide hobe 
  const allCards = document.querySelectorAll(".jat-job-card");

  for (let i = 0; i < allCards.length; i++) {
    const card = allCards[i];
    const id = Number(card.dataset.jobId);

    // find job 
    let jobStatus = null;
    for (let j = 0; j < jobs.length; j++) {
      if (jobs[j].id === id) {
        jobStatus = jobs[j].status;
        break;
      }
    }

      // ----- Not applied section responsive with buttons //
const badge = card.querySelector(".jat-job-status");

if (badge) {
  if (jobStatus === "interview") {
    badge.innerText = "INTERVIEW";
    badge.classList.remove("badge-neutral", "badge-error");
    badge.classList.add("badge-success");
  } else if (jobStatus === "rejected") {
    badge.innerText = "REJECTED";
    badge.classList.remove("badge-neutral", "badge-success");
    badge.classList.add("badge-error");
  } else {
    badge.innerText = "NOT APPLIED";
    badge.classList.remove("badge-success", "badge-error");
    badge.classList.add("badge-neutral");
  }
}

    //deleted hole,
    if (jobStatus === null) {
      card.style.display = "none";
      continue;
    }

    if (currentTab === "all") {
      card.style.display = "block";
    } else if (currentTab === "interview") {
      card.style.display = jobStatus === "interview" ? "block" : "none";
    } else if (currentTab === "rejected") {
      card.style.display = jobStatus === "rejected" ? "block" : "none";
    }
  }

  //  right side e update
  let visibleCount = 0;
  for (let i = 0; i < jobs.length; i++) {
    if (currentTab === "all") visibleCount++;
    else if (currentTab === "interview" && jobs[i].status === "interview") visibleCount++;
    else if (currentTab === "rejected" && jobs[i].status === "rejected") visibleCount++;
  }

  document.getElementById("jobsCountText").innerText = visibleCount;
}

// total update 
updateAll();