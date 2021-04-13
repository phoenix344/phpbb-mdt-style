const form = document.querySelector('#poll-form');
const chart = document.querySelector('#poll-chart');

function reset() {
  for (const child of chart.children) {
    child.querySelector('.pbb-chart-bar').style.width = '0';
    child.querySelector('.pbb-chart-percent').innerHTML = '0%';
  }
}

function extractHtml() {
  const nums = [];
  for (const child of chart.children) {
    nums.push(parseInt(child.querySelector('.pbb-chart-percent').innerHTML, 10));
  }
  return nums;
}

function render(nums) {
  if (!nums) {
    nums = extractHtml();
  }
  const max = Math.max(...nums);
  for (let i = 0; i < chart.children.length; i++) {
    const child = chart.children[i];
    const bar = child.querySelector('.pbb-chart-bar');
    bar.style.width = Math.round(nums[i] / max * 100) + '%';
  }
}

if (form && chart) {
  form.addEventListener('submit', event => {
    event.preventDefault();

    reset();

    const fields = new FormData(form);
    fields.append('update', '');
    fetch(form.getAttribute('action'), {
      method: form.getAttribute('method'),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: fields
    })
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          const nums = [];
          for (const [id, count] of Object.entries(json.vote_counts)) {
            const percent = count / json.total_votes * 100;
            nums.push(nums);
            chart.children[id - 1].querySelector('.pbb-chart-percent').innerHTML = percent;
          }
          for (const [id] of Object.entries(json.user_votes)) {
            chart.children[id - 1].classList.add('pbb-chart-voted');
          }
          // TODO: can_vote should be used to determine if the user has still a vote
          // TODO: NO_VOTES not quite sure if this is needed...
          render();
        }
      })
      .catch(err => {
        // TODO: handle error
        console.error(err);
      });
  });

  render();
}