import React, { useState } from 'react';
import './FAQ.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const FAQ = () => {
  const [formData, etFormData] = useState({
    id: '',
    name: '',
    question: '',
  });
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [newQuestion, setNewQuestion] = useState('');
  const [submittedQuestions, setSubmittedQuestions] = useState([]);

  const faqs = [
    {
      question: "What is Higher Study?",
      answer: "Higher study refers to the pursuit of advanced academic degrees, such as master's degrees, doctoral degrees, and other postgraduate qualifications, often after completing an undergraduate degree."
    },
    {
      question: "Why should I consider Higher Study?",
      answer: "Higher study can lead to better career opportunities, higher earning potential, and personal growth. It allows you to specialize in a field of interest and can open doors to academic and research positions."
    },
    {
      question: "What are the different types of Higher Study programs?",
      answer: "There are various types of higher study programs including master's degrees (e.g., MA, MSc, MBA), doctoral degrees (e.g., PhD, EdD), and professional degrees (e.g., JD, MD). Each program serves different academic and professional goals."
    },
    {
      question: "How do I choose the right Higher Study program?",
      answer: "Consider your career goals, interests, and the reputation of the institution offering the program. Research the curriculum, faculty, resources, and support services available to students."
    },
    {
      question: "What are the requirements for Higher Study?",
      answer: "Requirements vary by program and institution, but generally include a completed undergraduate degree, standardized test scores (e.g., GRE, GMAT), letters of recommendation, a statement of purpose, and a resume or CV."
    },
    {
      question: "Which exams are commonly used for Higher Study admissions?",
      answer: "For admissions into higher study programs, common exams include GRE (Graduate Record Examinations) for general graduate programs, GMAT (Graduate Management Admission Test) for business schools, TOEFL (Test of English as a Foreign Language) or IELTS (International English Language Testing System) for English proficiency, and specific subject-based tests for certain disciplines."
    },
    {
      question: "What is the application process for Higher Study?",
      answer: "The application process typically involves researching programs, preparing application materials (including transcripts, test scores, essays, and letters of recommendation), submitting applications online or via mail, and possibly attending interviews."
    },
    {
      question: "What are the accommodation options in my first year?",
      answer: "Accommodation options for first-year students vary by institution. They may include on-campus dormitories, shared apartments, or private accommodations near the campus."
    },
    {
      question: "Is accommodation guaranteed?",
      answer: "Guarantees for accommodation vary by institution and often depend on factors such as the number of available spaces and deadlines for application."
    },
    {
      question: "Is first-year accommodation catered or self-catered?",
      answer: "This varies by institution. Some provide catered options with meal plans included, while others offer self-catered accommodations where students cook their own meals."
    },
    {
      question: "What should I bring with me?",
      answer: "Essential items to bring include bedding, kitchen utensils (if self-catered), personal items, and academic materials. Check with your institution for specific recommendations."
    },
    {
      question: "Where do I live after my first year?",
      answer: "After the first year, students often have more flexibility in choosing accommodations. Options may include continuing in university-managed housing, renting privately, or sharing a house with friends."
    },
    {
      question: "When can I apply for accommodation?",
      answer: "Application deadlines for accommodation vary by institution. It's recommended to apply as early as possible to secure preferred options."
    },
    {
      question: "What advice would you give an applicant who is about to submit their application?",
      answer: "Ensure all required documents are prepared and reviewed, follow application instructions carefully, and seek feedback on personal statements from advisors or mentors."
    },
    {
      question: "Where can I get help with my personal statement?",
      answer: "Many institutions offer guidance through their admissions offices, writing centers, or online resources. Advisors and faculty members can also provide valuable feedback."
    },
    {
      question: "What is 'deferred entry'?",
      answer: "Deferred entry allows students to postpone starting their course for a year, often for reasons such as travel, work experience, or personal development."
    },
    {
      question: "What happens if I want to take a gap year?",
      answer: "Taking a gap year is a personal decision. Students should inform their institution about their plans and may need to reapply or defer their admission depending on policies."
    },
    {
      question: "I’m an international student, how do I apply?",
      answer: "International students should review specific application requirements for international applicants, including visa procedures, language proficiency tests, and additional documentation."
    },
    {
      question: "Do I have to attend an interview? What’s the process?",
      answer: "Interview requirements vary by program and institution. Some may require interviews as part of the selection process, either in person, via phone, or through video conferencing."
    },
    {
      question: "Who should I get in touch with about entry requirements?",
      answer: "Contact the admissions office or department directly for detailed information on entry requirements, including academic qualifications and any required tests."
    },
    {
      question: "Why did you choose to study at <university name>?",
      answer: "Personal experiences and reasons for choosing a particular university can vary widely. Students often consider factors like academic reputation, location, campus facilities, and course offerings."
    },
    // Add more questions and answers as needed
  ];

  const handleRaiseQuestion = async () => {
    if (newQuestion.trim() === '') {
      alert('Please enter a question before submitting.');
      return;
    }

    const newSubmission = {
      id: new Date().getTime(), // Generate unique id
      name: formData.name,
      question: newQuestion,
    };

    // Add the new question to the database
    try {
      const response = await fetch('http://localhost:8092/higherstudy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSubmission),
      });
      if (response.ok) {
        setSubmittedQuestions([...submittedQuestions, newQuestion]);
        alert(`Submitting new question: ${newQuestion}`);
        setNewQuestion('');
      } else {
        alert('Failed to submit question');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="faq-container">
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Higher Study FAQ!!!</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
      <p className="faq-description">
        Welcome to our FAQ section about Higher Study.
        We provide information and resources for advanced academic degrees and professional development.
      </p>
      <ul>
        {filteredFaqs.map((faq, index) => (
          <li key={index} className="faq">
            <div className="faq-question" onClick={() => setActiveIndex(activeIndex === index ? null : index)}>
              {faq.question}
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
              {faq.answer}
            </div>
          </li>
        ))}
      </ul>
      <p className="faq-description">
        Have a question that's not answered here? Use the form below to submit your question!
      </p>
      <div className="raise-question-container">
        <input
          type="text"
          placeholder="Type your question here..."
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          className="raise-question-input"
        />
        <button className="raise-question-button" onClick={handleRaiseQuestion}>
          Submit Question
        </button>
      </div>
      {submittedQuestions.length > 0 && (
        <div className="submitted-questions">
          <h2>Recently Submitted Questions:</h2>
          <ul>
            {submittedQuestions.map((question, index) => (
              <li key={index}>{question}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FAQ;
