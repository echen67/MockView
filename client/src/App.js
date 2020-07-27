import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

function TopBar() {
  let name = "Emily Chen";

  return (
    <div className="topbar">
      <svg width="43" height="35" viewBox="0 0 43 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M42.0635 25C41.0714 26.3889 40.0794 27.5794 39.0873 28.5714C36.7063 30.9524 33.9286 32.9365 30.754 34.127C32.3413 35.119 33.9286 36.3095 35.3175 37.6984C37.6984 40.2778 39.6825 43.254 40.873 46.8254C40.873 46.627 40.6746 46.4286 40.4762 46.4286C30.1587 35.9127 13.2937 35.9127 2.97619 46.4286C1.78571 47.4206 0.793651 48.6111 0 50C0.198413 43.8492 3.37302 34.3254 9.72222 31.9444C7.7381 23.8095 10.119 15.0794 16.0714 8.92857C20.2381 4.96032 25.5952 2.38096 31.5476 1.98413C29.7619 2.97619 27.9762 4.16667 26.3889 5.75397C21.2302 10.9127 19.246 18.4524 21.2302 25.3968C27.5794 29.1667 35.7143 28.9683 42.0635 25Z" fill="#56CCF2"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.5952 0C26.3889 0 27.381 0 28.373 0C23.0159 0.992063 18.254 3.76984 14.4841 7.34127C9.72223 12.1032 6.74604 18.8492 6.74604 26.1905C6.74604 27.5794 6.74604 29.1667 7.14287 30.5556C6.34922 29.9603 5.55557 29.3651 4.76192 28.5714C2.9762 26.7857 1.3889 24.6032 0.198425 22.2222C1.78573 9.72222 12.5 0 25.5952 0Z" fill="#F2994A"/>
      </svg>
      <p className="title">MockView</p>

      <button className="dashboard-button">Dashboard</button>

      <div className="topbar-right">
        <div className="profile">
          <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="24.9999" cy="25" rx="16.6667" ry="16.6667" fill="#EEEFF2"/>
            <path d="M25 0C20.0555 0 15.222 1.46622 11.1108 4.21326C6.99953 6.96029 3.79521 10.8648 1.90302 15.4329C0.0108321 20.0011 -0.484251 25.0277 0.480379 29.8772C1.44501 34.7268 3.82603 39.1813 7.32234 42.6777C10.8187 46.174 15.2732 48.555 20.1227 49.5196C24.9723 50.4842 29.9989 49.9892 34.5671 48.097C39.1352 46.2048 43.0397 43.0005 45.7867 38.8892C48.5338 34.778 50 29.9445 50 25C50 18.3696 47.3661 12.0107 42.6777 7.32233C37.9893 2.63392 31.6304 0 25 0ZM25 11.2333C26.721 11.2333 28.3714 11.917 29.5883 13.1339C30.8052 14.3508 31.4889 16.0013 31.4889 17.7222C31.4889 21.3055 28.5833 25.8278 25 25.8278C21.4167 25.8278 18.5111 21.3055 18.5111 17.7222C18.5111 16.0013 19.1948 14.3508 20.4117 13.1339C21.6286 11.917 23.279 11.2333 25 11.2333ZM38.6111 36.5444H11.3889V31.8333C11.3889 29.8118 12.192 27.873 13.6214 26.4436C15.0508 25.0142 16.9896 24.2111 19.0111 24.2111H19.3444C20.9167 26.2278 22.9167 27.3389 25 27.3389C27.0833 27.3389 29.0833 26.2278 30.6556 24.2111H30.9889C33.0104 24.2111 34.9492 25.0142 36.3786 26.4436C37.8081 27.873 38.6111 29.8118 38.6111 31.8333V36.5444Z" fill="#7B7FA0"/>
          </svg>
          <p className="user-name">{name}</p>
        </div>
        <button className="schedule-button">Schedule Interview</button>
      </div>
    </div>
  );
}

function Ranking() {
  let progress = 60;  // represents the amount of points progress to next rank, [0-100]
  let convertedProgress = (100-progress)*629/100;
  let currentRank = "INSECT II";
  let currentPoints = 75;
  let pointsToNextRank = 25;

  return (
    <div className="ranking-box">
      <div className="rank-title-logo">
        <svg width="90" height="90" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="rank-logo">
          <circle cx="75" cy="75" r="60" fill="white"/>
          <path d="M75 0C60.1664 0 45.6659 4.39867 33.3323 12.6398C20.9986 20.8809 11.3856 32.5943 5.70907 46.2987C0.0324965 60.0032 -1.45275 75.0832 1.44114 89.6318C4.33503 104.18 11.4781 117.544 21.967 128.033C32.456 138.522 45.8197 145.665 60.3682 148.559C74.9168 151.453 89.9968 149.967 103.701 144.291C117.406 138.614 129.119 129.001 137.36 116.668C145.601 104.334 150 89.8336 150 75C149.989 55.1122 142.083 36.0423 128.02 21.9795C113.958 7.91676 94.8878 0.0113547 75 0ZM63.8572 46.2C64.577 44.2878 65.7542 42.581 67.2857 41.2286C68.7467 39.9862 70.487 39.1162 72.3576 38.6932C74.2282 38.2702 76.1735 38.3066 78.0269 38.7995C79.8803 39.2923 81.5868 40.2269 83.0002 41.5231C84.4136 42.8194 85.4919 44.4389 86.1429 46.2428C86.589 47.5247 86.8207 48.8713 86.8286 50.2286C86.8286 53.3657 85.5824 56.3743 83.3641 58.5926C81.1458 60.8109 78.1371 62.0571 75 62.0571C71.8629 62.0571 68.8542 60.8109 66.636 58.5926C64.4177 56.3743 63.1714 53.3657 63.1714 50.2286C63.1838 48.8577 63.4153 47.4977 63.8572 46.2ZM43.2429 102.129H42.8572C39.4472 102.129 36.177 100.774 33.7658 98.3628C31.3546 95.9516 30 92.6813 30 89.2714C30.146 86.4295 31.0816 83.6846 32.7018 81.3452C34.322 79.0059 36.5624 77.1646 39.1715 76.0285L64.4572 64.5857C64.9095 64.3682 65.4195 64.3008 65.9129 64.3933C66.4062 64.4858 66.8572 64.7334 67.2 65.1C67.5627 65.445 67.8107 65.8931 67.9103 66.3837C68.01 66.8743 67.9565 67.3837 67.7572 67.8428L67.2 69L56.2286 93.1285C55.0763 95.6599 53.2611 97.8326 50.9752 99.4169C48.6893 101.001 46.0176 101.938 43.2429 102.129ZM85.7143 87.5571L77.1429 109.929C76.9605 110.394 76.6421 110.793 76.2293 111.075C75.8164 111.357 75.3283 111.507 74.8286 111.507C74.3288 111.507 73.8407 111.357 73.4279 111.075C73.015 110.793 72.6967 110.394 72.5143 109.929L63.9429 87.5571C63.8156 87.2591 63.7499 86.9383 63.7499 86.6143C63.7499 86.2902 63.8156 85.9694 63.9429 85.6714L72.5143 67.2C72.7247 66.8156 73.0347 66.4948 73.4117 66.2714C73.7887 66.0479 74.2189 65.93 74.6572 65.93C75.0954 65.93 75.5256 66.0479 75.9026 66.2714C76.2796 66.4948 76.5896 66.8156 76.8 67.2L85.3714 85.6714C85.5551 85.9453 85.6803 86.2541 85.7393 86.5786C85.7983 86.903 85.7898 87.2361 85.7143 87.5571ZM116.143 98.3571C114.989 99.5673 113.598 100.527 112.057 101.176C110.516 101.825 108.858 102.149 107.186 102.129H106.8C103.965 101.957 101.232 101.005 98.903 99.3794C96.5739 97.7536 94.7389 95.5164 93.6 92.9143L82.0714 67.6286C81.8721 67.1694 81.8186 66.66 81.9183 66.1694C82.0179 65.6788 82.2659 65.2307 82.6286 64.8857C82.9715 64.5191 83.4224 64.2715 83.9157 64.179C84.4091 64.0865 84.9191 64.1539 85.3714 64.3714L110.657 75.8143C113.266 76.9504 115.507 78.7916 117.127 81.131C118.747 83.4704 119.683 86.2152 119.829 89.0571C119.914 90.7805 119.629 92.5022 118.993 94.1064C118.357 95.7105 117.385 97.1599 116.143 98.3571Z" fill="#6FCF97"/>
        </svg>
        <div className="rank-title">
          <p className="current-rank">Current Rank:</p>
          <p className="rank">{currentRank}</p>
        </div>
      </div>
      <p className="points">{currentPoints} points</p>
      <p className="points-next">{pointsToNextRank} points to next rank</p>
      <svg className="points-progress" height="230" width="230">
        <circle cx="115" cy="115" r="100" stroke="#6FCF97" stroke-width="30" fill="transparent" stroke-dashoffset={convertedProgress} />
      </svg>
      <svg className="points-help" width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 0C6.7256 0 0 6.72559 0 15C0 23.2744 6.7256 30 15 30C23.2744 30 30 23.2744 30 15C30 6.72559 23.2744 0 15 0ZM15 1.66667C22.3737 1.66667 28.3333 7.62632 28.3333 15C28.3333 22.3737 22.3737 28.3333 15 28.3333C7.62633 28.3333 1.66667 22.3737 1.66667 15C1.66667 7.62632 7.62633 1.66667 15 1.66667ZM14.987 7.08333C12.8895 7.105 10.9853 8.46074 10.0781 10.4818C10.0212 10.5823 9.98584 10.6936 9.97422 10.8085C9.96261 10.9234 9.97501 11.0395 10.0106 11.1494C10.0463 11.2593 10.1044 11.3605 10.1812 11.4468C10.2581 11.533 10.352 11.6023 10.4571 11.6503C10.5621 11.6983 10.676 11.724 10.7915 11.7256C10.907 11.7273 11.0216 11.7049 11.128 11.6599C11.2344 11.6149 11.3303 11.5483 11.4096 11.4643C11.4888 11.3803 11.5498 11.2807 11.5885 11.1719C12.2486 9.70134 13.6328 8.76978 15 8.75C15.0048 8.75003 15.0082 8.74995 15.013 8.75C16.2226 8.76154 17.1505 9.12049 17.7734 9.6875C18.3989 10.2568 18.75 11.0436 18.75 12.0833C18.75 12.624 18.57 13.0444 18.2161 13.5156C17.8623 13.9868 17.3268 14.4672 16.7578 14.974C15.6198 15.9874 14.2067 17.2024 14.1667 19.1406C14.1639 19.2502 14.1828 19.3592 14.2222 19.4614C14.2616 19.5637 14.3208 19.6572 14.3964 19.7365C14.472 19.8159 14.5625 19.8795 14.6627 19.9239C14.7629 19.9682 14.8709 19.9924 14.9804 19.9949C15.09 19.9975 15.199 19.9784 15.3012 19.9388C15.4033 19.8992 15.4967 19.8399 15.5759 19.7642C15.6551 19.6884 15.7187 19.5978 15.7628 19.4976C15.807 19.3973 15.831 19.2892 15.8333 19.1797C15.8565 18.0576 16.7268 17.2372 17.8646 16.224C18.4335 15.7173 19.0487 15.1782 19.5443 14.5182C20.0399 13.8581 20.4167 13.0426 20.4167 12.0833C20.4167 10.6371 19.8684 9.33811 18.8932 8.45052C17.9181 7.56293 16.5478 7.09448 15 7.08333C14.9957 7.0833 14.9913 7.0833 14.987 7.08333ZM14.5833 21.25C14.3525 21.25 14.1667 21.4358 14.1667 21.6667V22.5C14.1667 22.7308 14.3525 22.9167 14.5833 22.9167H15.4167C15.6475 22.9167 15.8333 22.7308 15.8333 22.5V21.6667C15.8333 21.4358 15.6475 21.25 15.4167 21.25H14.5833Z" fill="#666C80"/>
      </svg>
    </div>
  );
}

function Table() {
  return (
    <div>
      <table>
        <thead>
        <tr>
          <th>Date</th>
          <th>Question You'll Ask</th>
          <th>Action</th>
        </tr>
        </thead>
        <tr>
          <td>Sun, Jun 7, 11:00p.m.</td>
          <td>Bracket Match</td>
          <td>Cancel</td>
        </tr>
        <tr>
          <td>Sun, Jun 7, 11:00p.m.</td>
          <td>Bracket Match</td>
          <td>Cancel</td>
        </tr>
      </table>
    </div>
  );
}

function Body() {
  return (
    <div className="body-div">
      <Ranking />
      <div>
        <p className="table-title">Upcoming Interviews</p>
        <Table />
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <TopBar />
      <Body />
    </>
  );
}

export default App;
