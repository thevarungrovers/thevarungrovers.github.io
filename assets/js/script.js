// Favicon
// Get the preferred color scheme from the system or browser
const preferredColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const favicon = document.getElementById('favicon');

// Set the image source based on the preferred color scheme
if (preferredColorScheme === 'dark') {
    favicon.href = 'assets/img/logos/vg-dark-mode.svg';
} else {
    favicon.href = 'assets/img/logos/vg-light-mode.svg';
}

// Footer
document.getElementById(`current-year`).innerHTML = new Date().getFullYear();

// Experience section
// Fetch the JSON data
fetch('./assets/js/experienceData.json')
  .then(response => response.json())
  .then(data => {
    const timelineContainer = document.querySelector('#experience .timeline');
    
    const timelineItems = data.map((experience, index) => {
      // Add the 'timeline-inverted' class to odd elements
      const invertedClass = (index % 2 === 0) ? 'timeline-inverted' : '';
      
      return `
        <li class="${invertedClass}">
          <div class="timeline-image">
            <img class="rounded-circle img-fluid img-responsive" src="${experience.image_address}" alt="${experience.company_name}" />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h3 class="subheading">${experience.position}</h3>
              <h5 class="experience-company-name">
                <a href="${experience.company_website}">
                  ${experience.company_name}, ${experience.company_location}
                </a>
              </h5>
              <h6 class="text-muted fst-italic">${experience.job_type}</h6>
              <h6 class="text-muted experience-duration">${experience.job_duration}</h6>
            </div>
          </div>
        </li>
      `;
    }).join('');

    // Insert the generated timeline items into the timeline container
    timelineContainer.innerHTML = timelineItems;
  })
  .catch(error => console.error('Error fetching the data:', error));


// Certifications sections
// Fetch the JSON data
fetch('./assets/js/certificationsData.json')
  .then(response => response.json())
  .then(data => {
    const timelineContainer = document.querySelector('#certifications .timeline');

    const timelineItems = data.map((certification, index) => {
      // Add the 'timeline-inverted' class to odd elements
      const invertedClass = (index % 2 === 0) ? 'timeline-inverted' : '';

      return `
        <li class="${invertedClass}">
          <div class="timeline-image">
            <img class="rounded-circle img-fluid img-responsive" src="${certification.image_address}" alt="${certification.certificate_issuer}" />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h3 class="subheading">${certification.course_name}</h3>
              <h5 class="certificate-issuer-name">
                <a href="${certification.issuer_website}">
                  ${certification.certificate_issuer}
                </a>
              </h5>
              <h6 class="text-muted">
                ${certification.completion_date}
              </h6>
            </div>
          </div>
        </li>
      `;
    }).join('');

    // Insert the generated timeline items into the timeline container
    timelineContainer.innerHTML = timelineItems;
  })
  .catch(error => console.error('Error fetching the data:', error));

// education section
// Fetch the JSON data
fetch('./assets/js/educationData.json')
  .then(response => response.json())
  .then(data => {
    const timelineContainer = document.querySelector('#education .timeline');

    const timelineItems = data.map((education, index) => {
      // Add the 'timeline-inverted' class to odd elements
      const invertedClass = (index % 2 === 0) ? 'timeline-inverted' : '';

      return `
        <li class="${invertedClass}">
          <div class="timeline-image">
            <img class="rounded-circle img-fluid" src="${education.image_address}" alt="${education.institution_name}" />
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h3 class="subheading education-title">${education.course_name}</h3>
              <h5 class="education-institution-name">
                <a href="${education.institution_website}">
                  ${education.institution_name}, ${education.location}
                </a>
              </h5>
              <h6 class="text-muted education-duration">${education.duration}</h6>
            </div>
          </div>
        </li>
      `;
    }).join('');

    // Insert the generated timeline items into the timeline container
    timelineContainer.innerHTML = timelineItems;
  })
  .catch(error => console.error('Error fetching the data:', error));


// works section
// Fetch the JSON data
fetch('./assets/js/worksData.json')
  .then(response => response.json())
  .then(data => {
    const worksContainer = document.querySelector('#works .row');

    const worksItems = data.map((work, index) => {
      // Calculate the aos_delay based on the index (e.g., 100ms per item)
      const aosDelay = (index + 1) * 100;

      return `
        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="${aosDelay}">
          <div class="icon-box">
            <div class="icon works-image-container">
              <img src="${work.image_address}" alt="${work.name}" class="img-fluid img-responsive">
            </div>
            <h4 class="works-name">
              <a href="${work.project_link}">
                ${work.name}
              </a>
            </h4>
            <p class="works-description">
              ${work.description}
            </p>
          </div>
        </div>
      `;
    }).join('');

    // Insert the generated works items into the works container
    worksContainer.innerHTML += worksItems; // Use += to append items to existing HTML
  })
  .catch(error => console.error('Error fetching the data:', error));

// techlogies section
// Fetch the JSON data
fetch('./assets/js/technologiesData.json')
  .then(response => response.json())
  .then(data => {
    const technologiesContainer = document.querySelector('#technologies-used .row');

    const technologyItems = data.map(tech => {
      return `
        <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
          <img src="${tech.image_address}" class="img-fluid img-responsive tech" alt="${tech.name}">
        </div>
      `;
    }).join('');

    // Insert the generated technology items into the technologies container
    technologiesContainer.innerHTML += technologyItems; // Use += to append items to existing HTML
  })
  .catch(error => console.error('Error fetching the data:', error));
