import { PresidentCareerProfile } from '../types';

export const presidents16to30: Record<number, PresidentCareerProfile> = {
  16: {
    presidentId: 16,
    presidentName: "Abraham Lincoln",
    highestEducation: "Self-Taught; Read Law with John T. Stuart",
    almaMater: "Self-Educated (Illinois Bar Admission, 1836)",
    primaryField: "Circuit Trial Lawyer, Orator & Whig Floor Leader",
    steppingStoneRole: "U.S. Representative & Renowned 1858 Senate Debater",
    treeNodes: [
      {
        id: "16-edu-1",
        category: "education",
        role: "Frontier Log Cabin Schooling & Self-Education",
        organization: "Pigeon Creek & Little Pigeon Schools (Under 1 Year Total)",
        location: "Kentucky & Indiana Frontier",
        years: "1815–1828",
        details: "Taught himself reading, arithmetic, and grammar; voraciously read the Bible, Aesop's Fables, Robinson Crusoe, and Blackstone's Commentaries."
      },
      {
        id: "16-civ-1",
        category: "early_career",
        role: "Flatboat Navigator, General Store Clerk & Postmaster",
        organization: "New Salem Frontier Community",
        location: "New Salem, Illinois",
        years: "1831–1836",
        details: "Piloted flatboat to New Orleans; served as Postmaster and Deputy County Surveyor; studied Euclidean geometry to sharpen logic."
      },
      {
        id: "16-mil-1",
        category: "military",
        role: "Captain in Illinois Volunteer Militia",
        organization: "Black Hawk War Volunteers",
        location: "Northern Illinois",
        years: "1832",
        details: "Elected captain by company peers; later recalled this election gave him more satisfaction than any subsequent political triumph."
      },
      {
        id: "16-leg-1",
        category: "state_local",
        role: "Member of Illinois House of Representatives (Whig Floor Leader)",
        organization: "Illinois General Assembly",
        location: "Vandalia & Springfield, Illinois",
        years: "1834–1842",
        details: "Elected to four successive terms; championed moving state capital to Springfield and internal canal/railroad improvements."
      },
      {
        id: "16-civ-2",
        category: "early_career",
        role: "Master Circuit Litigator (Stuart, Logan & Herndon Partnerships)",
        organization: "Lincoln & Herndon Law Firm",
        location: "Springfield & Eighth Judicial Circuit, Illinois",
        years: "1837–1860",
        highlight: true,
        details: "Handled over 5,000 cases before county courts and Illinois Supreme Court; famous for Almanac trial acquittal in Armstrong murder case."
      },
      {
        id: "16-fed-1",
        category: "federal_diplomatic",
        role: "U.S. Representative from Illinois ('Spot Resolutions')",
        organization: "U.S. House of Representatives",
        location: "Washington, D.C.",
        years: "1847–1849",
        details: "Introduced famous 'Spot Resolutions' challenging President Polk's justification for the Mexican War; introduced bill to abolish slavery in D.C."
      },
      {
        id: "16-fed-2",
        category: "federal_diplomatic",
        role: "Lincoln-Douglas Debates & Cooper Union Orator",
        organization: "Illinois Republican Party",
        location: "Illinois & New York City",
        years: "1858–1860",
        highlight: true,
        details: "Gained national fame in seven debates against Stephen A. Douglas ('A house divided against itself cannot stand'); 1860 Cooper Union address clinched nomination."
      },
      {
        id: "16-pres",
        category: "presidency",
        role: "16th President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1861–1865",
        highlight: true,
        details: "Preserved the Union through the Civil War; issued Emancipation Proclamation (1863); delivered Gettysburg Address; secured passage of 13th Amendment abolishing slavery."
      }
    ]
  },
  17: {
    presidentId: 17,
    presidentName: "Andrew Johnson",
    highestEducation: "Never Attended School; Taught by Wife Eliza McCardle",
    almaMater: "Self-Educated (Master Tailor Guild, Greeneville)",
    primaryField: "Master Tailor, Mayor, Tennessee Governor & U.S. Senator",
    steppingStoneRole: "16th Vice President & Military Governor of Tennessee",
    treeNodes: [
      {
        id: "17-edu-1",
        category: "education",
        role: "Tailor Apprenticeship & Self-Education",
        organization: "Selby Tailor Shop & Greeneville Debating Society",
        location: "Raleigh, NC & Greeneville, Tennessee",
        years: "1818–1827",
        details: "Apprenticed at age 10; never attended a day of school; taught reading, writing, and basic math by his wife Eliza McCardle."
      },
      {
        id: "17-civ-1",
        category: "early_career",
        role: "Proprietor of Greeneville Tailor Shop",
        organization: "Johnson Tailor Business",
        location: "Greeneville, Tennessee",
        years: "1827–1835",
        details: "Hired readers to read newspapers and political speeches to him while he stitched clothes; shop became local debate forum."
      },
      {
        id: "17-leg-1",
        category: "state_local",
        role: "Alderman, Mayor & Tennessee State Representative",
        organization: "Greeneville Town Council & Tennessee Assembly",
        location: "Greeneville & Nashville, Tennessee",
        years: "1829–1843",
        details: "Championed artisans, laborers, and poor mountain farmers against wealthy plantation aristocrats."
      },
      {
        id: "17-fed-1",
        category: "federal_diplomatic",
        role: "U.S. Representative from Tennessee (Homestead Act Sponsor)",
        organization: "U.S. House of Representatives",
        location: "Washington, D.C.",
        years: "1843–1853",
        details: "Authored and relentlessly campaigned for the federal Homestead Act to give free 160-acre farms to western settlers."
      },
      {
        id: "17-gov-1",
        category: "state_local",
        role: "15th Governor of Tennessee",
        organization: "State of Tennessee",
        location: "Nashville, Tennessee",
        years: "1853–1857",
        details: "Established first state tax for public elementary schools and Tennessee State Library."
      },
      {
        id: "17-sen-1",
        category: "federal_diplomatic",
        role: "United States Senator from Tennessee",
        organization: "U.S. Senate",
        location: "Washington, D.C.",
        years: "1857–1862",
        highlight: true,
        details: "Only senator from a seceding southern state who refused to leave his seat, declaring secession treason on the Senate floor."
      },
      {
        id: "17-mil-1",
        category: "military",
        role: "Military Governor of Tennessee (Brigadier General)",
        organization: "United States Army Volunteers",
        location: "Nashville, Tennessee",
        years: "1862–1864",
        highlight: true,
        details: "Appointed by Lincoln to govern occupied Tennessee; defended Nashville against Confederate counteroffensives."
      },
      {
        id: "17-vp",
        category: "federal_diplomatic",
        role: "16th Vice President of the United States",
        organization: "National Union Party / Executive Branch",
        location: "Washington, D.C.",
        years: "1865",
        highlight: true,
        details: "Selected for Lincoln's National Union ticket in 1864; succeeded to presidency 42 days later upon Lincoln's assassination."
      },
      {
        id: "17-pres",
        category: "presidency",
        role: "17th President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1865–1869",
        highlight: true,
        details: "Clashed with Radical Republicans over Reconstruction; first president impeached by House (acquitted by 1 vote in Senate); completed Alaska Purchase (1867)."
      },
      {
        id: "17-post",
        category: "post_presidency",
        role: "United States Senator from Tennessee",
        organization: "U.S. Senate",
        location: "Washington, D.C.",
        years: "1875",
        details: "Only former U.S. President ever elected to return to the Senate."
      }
    ]
  },
  18: {
    presidentId: 18,
    presidentName: "Ulysses S. Grant",
    highestEducation: "Bachelor of Science (B.S.) in Military Tactics & Engineering",
    almaMater: "United States Military Academy at West Point (Class of 1843)",
    primaryField: "General of the Armies of the United States",
    steppingStoneRole: "General-in-Chief of the Armies of the United States",
    treeNodes: [
      {
        id: "18-edu-1",
        category: "education",
        role: "Cadet at United States Military Academy",
        organization: "U.S. Military Academy at West Point",
        location: "West Point, New York",
        years: "1839–1843",
        details: "Graduated 21st of 39; set academy high jump horsemanship record that stood for over a quarter of a century."
      },
      {
        id: "18-mil-1",
        category: "military",
        role: "Quartermaster & Lieutenant in Mexican-American War",
        organization: "4th U.S. Infantry Regiment",
        location: "Monterrey, Veracruz & Mexico City",
        years: "1846–1848",
        details: "Breveted twice for heroism; rode hanging off his horse under fire at Monterrey to carry ammunition; hoisted howitzer into church belfry at Chapultepec."
      },
      {
        id: "18-civ-1",
        category: "early_career",
        role: "Farmer, Real Estate Agent & Leather Store Clerk",
        organization: "Grant Family Leather Goods Store",
        location: "St. Louis, MO & Galena, Illinois",
        years: "1854–1861",
        details: "Built cabin named 'Hardscrabble' by hand; worked in brothers' store until outbreak of Civil War."
      },
      {
        id: "18-mil-2",
        category: "military",
        role: "Colonel of 21st Illinois & Victor of Fort Donelson and Shiloh",
        organization: "United States Volunteers / Army of the Tennessee",
        location: "Western Theater of the Civil War",
        years: "1861–1862",
        highlight: true,
        details: "Earned nickname 'Unconditional Surrender' Grant at Fort Donelson; won bloody Battle of Shiloh."
      },
      {
        id: "18-mil-3",
        category: "military",
        role: "Major General & Mastermind of the Vicksburg Campaign",
        organization: "Army of the Tennessee",
        location: "Vicksburg, Mississippi",
        years: "1862–1863",
        highlight: true,
        details: "Brilliant campaign captured fortress of Vicksburg on July 4, 1863, splitting the Confederacy and opening the Mississippi River."
      },
      {
        id: "18-mil-4",
        category: "military",
        role: "Lieutenant General & General-in-Chief of the U.S. Armies",
        organization: "United States Armed Forces",
        location: "Eastern Theater (Overland Campaign & Appomattox)",
        years: "1864–1869",
        highlight: true,
        details: "Promoted to 3-star Lieutenant General (first since Washington); received Robert E. Lee's surrender at Appomattox Court House (1865); elevated to 4-star General of the Army."
      },
      {
        id: "18-cab-1",
        category: "federal_diplomatic",
        role: "Interim Secretary of War",
        organization: "War Department",
        location: "Washington, D.C.",
        years: "1867–1868",
        details: "Appointed ad interim by Andrew Johnson during Tenure of Office Act showdown before stepping aside for Edwin Stanton."
      },
      {
        id: "18-pres",
        category: "presidency",
        role: "18th President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1869–1877",
        highlight: true,
        details: "Created the Department of Justice; crushed Ku Klux Klan with Enforcement Acts; ratified 15th Amendment; established Yellowstone (first National Park)."
      },
      {
        id: "18-post",
        category: "post_presidency",
        role: "World Diplomatic Tour & Bestselling Author",
        organization: "Personal Memoirs of U.S. Grant",
        location: "Global & Mount McGregor, New York",
        years: "1877–1885",
        details: "Two-year world tour meeting Queen Victoria and Emperor Meiji; raced terminal throat cancer to write classic memoirs published by Mark Twain."
      }
    ]
  },
  19: {
    presidentId: 19,
    presidentName: "Rutherford B. Hayes",
    highestEducation: "Bachelor of Laws (LL.B.)",
    almaMater: "Kenyon College (Valedictorian, 1842) & Harvard Law School (LL.B. 1845)",
    primaryField: "Anti-Slavery Lawyer, Civil War Major General & Ohio Governor",
    steppingStoneRole: "3-Term Governor of Ohio & Civil War Major General",
    treeNodes: [
      {
        id: "19-edu-1",
        category: "education",
        role: "Bachelor of Arts (Class Valedictorian)",
        organization: "Kenyon College",
        location: "Gambier, Ohio",
        years: "1838–1842",
        details: "Graduated with highest honors; active in Philomathesian Literary Society."
      },
      {
        id: "19-edu-2",
        category: "education",
        role: "Bachelor of Laws (LL.B.)",
        organization: "Harvard Law School",
        location: "Cambridge, Massachusetts",
        years: "1843–1845",
        details: "Studied under Supreme Court Justice Joseph Story and Simon Greenleaf; first president to hold a formal law degree."
      },
      {
        id: "19-civ-1",
        category: "early_career",
        role: "City Solicitor & Anti-Slavery Defense Attorney",
        organization: "Cincinnati Municipal Government & Private Practice",
        location: "Cincinnati, Ohio",
        years: "1845–1861",
        details: "Defended fugitive slaves in federal court under the Fugitive Slave Act; elected City Solicitor of Cincinnati."
      },
      {
        id: "19-mil-1",
        category: "military",
        role: "Major to Major General of Volunteers (23rd Ohio Infantry)",
        organization: "United States Army Volunteers",
        location: "West Virginia, Maryland & Shenandoah Valley",
        years: "1861–1865",
        highlight: true,
        details: "Wounded five times in combat; severely wounded commanding 23rd Ohio at Battle of South Mountain; promoted to Brevet Major General."
      },
      {
        id: "19-fed-1",
        category: "federal_diplomatic",
        role: "U.S. Representative from Ohio (Library Committee Chairman)",
        organization: "U.S. House of Representatives",
        location: "Washington, D.C.",
        years: "1865–1867",
        details: "Elected while still fighting on front lines; helped draft 14th Amendment and expanded Library of Congress."
      },
      {
        id: "19-gov-1",
        category: "state_local",
        role: "29th & 32nd Governor of Ohio (3 Terms)",
        organization: "State of Ohio",
        location: "Columbus, Ohio",
        years: "1868–1872, 1876–1877",
        highlight: true,
        details: "Advocated prison reform, mental health treatment facilities, and championed founding of The Ohio State University."
      },
      {
        id: "19-pres",
        category: "presidency",
        role: "19th President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1877–1881",
        highlight: true,
        details: "Resolved disputed 1876 election through Electoral Commission; initiated civil service merit reform; restored sound money gold standard."
      }
    ]
  },
  20: {
    presidentId: 20,
    presidentName: "James A. Garfield",
    highestEducation: "Bachelor of Arts (A.B.) with Salutatory Honors",
    almaMater: "Williams College (Class of 1856)",
    primaryField: "College President, Civil War Major General & House Minority Leader",
    steppingStoneRole: "House Minority Leader & U.S. Senator-Elect",
    treeNodes: [
      {
        id: "20-edu-1",
        category: "education",
        role: "Collegiate Studies & Williams College Degree",
        organization: "Western Reserve Eclectic Institute & Williams College",
        location: "Hiram, Ohio & Williamstown, Massachusetts",
        years: "1851–1856",
        details: "Worked as canal boat towpath driver and carpenter to pay tuition; graduated salutatorian under Mark Hopkins."
      },
      {
        id: "20-edu-2",
        category: "education",
        role: "Professor of Ancient Languages & College President",
        organization: "Western Reserve Eclectic Institute (now Hiram College)",
        location: "Hiram, Ohio",
        years: "1856–1860",
        highlight: true,
        details: "Became president of Hiram College at age 26; taught Latin, Greek, mathematics, and philosophy."
      },
      {
        id: "20-leg-1",
        category: "state_local",
        role: "Ohio State Senator & Admitted to Ohio Bar",
        organization: "Ohio General Assembly",
        location: "Columbus, Ohio",
        years: "1859–1861",
        details: "Studied law while serving in state senate; admitted to the bar in 1860."
      },
      {
        id: "20-mil-1",
        category: "military",
        role: "Colonel to Major General of Volunteers",
        organization: "42nd Ohio Infantry / Army of the Cumberland",
        location: "Kentucky, Tennessee & Chickamauga",
        years: "1861–1863",
        highlight: true,
        details: "Won Battle of Middle Creek (1862); served as Rosecrans' Chief of Staff at Battle of Chickamauga; promoted to Major General."
      },
      {
        id: "20-fed-1",
        category: "federal_diplomatic",
        role: "U.S. Representative from Ohio (18 Years / Minority Leader)",
        organization: "U.S. House of Representatives",
        location: "Washington, D.C.",
        years: "1863–1881",
        highlight: true,
        details: "Persuaded by Lincoln to enter Congress; chaired Military Affairs, Banking, and Appropriations; published novel original proof of Pythagorean Theorem."
      },
      {
        id: "20-sen-1",
        category: "federal_diplomatic",
        role: "Elected United States Senator from Ohio",
        organization: "Ohio General Assembly / U.S. Senate",
        location: "Columbus, Ohio",
        years: "1880",
        details: "Elected to U.S. Senate in 1880, but became President-elect before taking his Senate seat."
      },
      {
        id: "20-pres",
        category: "presidency",
        role: "20th President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1881",
        highlight: true,
        details: "Defeated the Conkling political machine by appointing independent civil service reformers; shot by Charles Guiteau after 4 months in office; died September 1881."
      }
    ]
  },
  21: {
    presidentId: 21,
    presidentName: "Chester A. Arthur",
    highestEducation: "Bachelor of Arts (A.B.) & Law Apprenticeship",
    almaMater: "Union College (Class of 1848, Phi Beta Kappa)",
    primaryField: "Civil Rights Attorney, Quartermaster General & Port Collector",
    steppingStoneRole: "20th Vice President & Collector of the Port of New York",
    treeNodes: [
      {
        id: "21-edu-1",
        category: "education",
        role: "Bachelor of Arts (Phi Beta Kappa)",
        organization: "Union College",
        location: "Schenectady, New York",
        years: "1845–1848",
        details: "Graduated with honors at age 18; president of the Philomathean Debating Society."
      },
      {
        id: "21-edu-2",
        category: "education",
        role: "School Principal & Legal Apprenticeship under Erastus Culver",
        organization: "Culver Law Chambers",
        location: "North Pownal, VT & New York City",
        years: "1848–1854",
        details: "Taught school to finance legal studies; admitted to the New York bar in 1854."
      },
      {
        id: "21-civ-1",
        category: "early_career",
        role: "Civil Rights Trial Attorney (Jennings & Lemmon Cases)",
        organization: "Culver, Parker & Arthur Law Firm",
        location: "New York City",
        years: "1854–1861",
        highlight: true,
        details: "Won historic 1854 Jennings case desegregating New York City streetcars; won 1860 Lemmon slave case declaring slaves brought into New York free."
      },
      {
        id: "21-mil-1",
        category: "military",
        role: "Brigadier General & Quartermaster General of New York",
        organization: "New York State Militia (Civil War Logistics)",
        location: "Albany & New York City",
        years: "1861–1863",
        highlight: true,
        details: "Housed, clothed, armed, and equipped over 120,000 Union volunteer soldiers with exceptional efficiency and integrity."
      },
      {
        id: "21-fed-1",
        category: "federal_diplomatic",
        role: "Collector of the Port of New York",
        organization: "United States Custom House",
        location: "New York City",
        years: "1871–1878",
        highlight: true,
        details: "Managed America's largest federal office, responsible for collecting 75% of all national tariff revenues."
      },
      {
        id: "21-vp",
        category: "federal_diplomatic",
        role: "20th Vice President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1881",
        highlight: true,
        details: "Elected on ticket with Garfield; assumed presidency following Garfield's tragic death from assassination."
      },
      {
        id: "21-pres",
        category: "presidency",
        role: "21st President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1881–1885",
        highlight: true,
        details: "Defied party bosses by enacting the landmark Pendleton Civil Service Reform Act of 1883; authorized the modernization of the U.S. Navy ('Steel Navy')."
      }
    ]
  },
  22: {
    presidentId: 22,
    presidentName: "Grover Cleveland",
    highestEducation: "Self-Educated; Read Law at Rogers, Bowen & Rogers",
    almaMater: "Clinton Liberal Institute & Buffalo Law Clerkship (Bar 1859)",
    primaryField: "Trial Attorney, Sheriff, Mayor of Buffalo & NY Governor",
    steppingStoneRole: "28th Governor of New York & Mayor of Buffalo",
    treeNodes: [
      {
        id: "22-edu-1",
        category: "education",
        role: "Academic Studies & Blind Institute Teacher",
        organization: "Fayetteville Academy & New York Institute for the Blind",
        location: "Fayetteville & New York City",
        years: "1848–1855",
        details: "Supported family after father's death; taught reading and geography to blind students."
      },
      {
        id: "22-edu-2",
        category: "education",
        role: "Legal Clerkship at Rogers, Bowen & Rogers",
        organization: "Rogers Law Firm",
        location: "Buffalo, New York",
        years: "1855–1859",
        details: "Worked for prominent Buffalo firm; admitted to New York bar in 1859."
      },
      {
        id: "22-civ-1",
        category: "early_career",
        role: "Assistant District Attorney of Erie County",
        organization: "Erie County District Attorney's Office",
        location: "Buffalo, New York",
        years: "1863–1865",
        details: "Managed heavy criminal trial docket; gained reputation for relentless work ethic and integrity."
      },
      {
        id: "22-leg-1",
        category: "state_local",
        role: "Sheriff of Erie County",
        organization: "Erie County Sheriff's Department",
        location: "Buffalo, New York",
        years: "1871–1873",
        details: "Enforced county court orders and preserved peace with fearless personal discipline."
      },
      {
        id: "22-leg-2",
        category: "state_local",
        role: "Mayor of Buffalo ('The Veto Mayor')",
        organization: "City of Buffalo",
        location: "Buffalo, New York",
        years: "1882",
        highlight: true,
        details: "Vetoed corrupt street cleaning and sewage graft contracts, saving taxpayers hundreds of thousands of dollars."
      },
      {
        id: "22-gov-1",
        category: "state_local",
        role: "28th Governor of New York",
        organization: "State of New York",
        location: "Albany, New York",
        years: "1883–1885",
        highlight: true,
        details: "Allied with young assemblyman Theodore Roosevelt to pass anti-corruption civil service laws against Tammany Hall."
      },
      {
        id: "22-pres",
        category: "presidency",
        role: "22nd (and 24th) President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1885–1889, 1893–1897",
        highlight: true,
        details: "Only president elected to two non-consecutive terms; created Interstate Commerce Commission; signed Dawes Act; defended gold standard."
      }
    ]
  },
  23: {
    presidentId: 23,
    presidentName: "Benjamin Harrison",
    highestEducation: "Bachelor of Arts (A.B.) with High Honors & Law Apprenticeship",
    almaMater: "Miami University (Oxford, Ohio, Class of 1852)",
    primaryField: "Civil War Brigadier General, Litigator & U.S. Senator",
    steppingStoneRole: "United States Senator from Indiana & Brevet Brigadier General",
    treeNodes: [
      {
        id: "23-edu-1",
        category: "education",
        role: "Bachelor of Arts with High Honors (Phi Delta Theta)",
        organization: "Miami University",
        location: "Oxford, Ohio",
        years: "1850–1852",
        details: "Grandson of 9th President William Henry Harrison; excelled in political economy and debate."
      },
      {
        id: "23-edu-2",
        category: "education",
        role: "Legal Apprenticeship at Storer & Gwynne",
        organization: "Storer & Gwynne Law Offices",
        location: "Cincinnati, Ohio",
        years: "1852–1854",
        details: "Trained under Judge Bellamy Storer; admitted to the Ohio bar in 1854."
      },
      {
        id: "23-civ-1",
        category: "early_career",
        role: "Indianapolis Trial Attorney & Indiana Supreme Court Reporter",
        organization: "Supreme Court of Indiana",
        location: "Indianapolis, Indiana",
        years: "1854–1862",
        details: "Published official volumes of Indiana Supreme Court decisions; built renowned litigation firm."
      },
      {
        id: "23-mil-1",
        category: "military",
        role: "Colonel to Brevet Brigadier General of Volunteers (70th Indiana)",
        organization: "United States Army Volunteers",
        location: "Kentucky, Tennessee & Atlanta Campaign",
        years: "1862–1865",
        highlight: true,
        details: "Led fierce bayonet charge capturing Confederate battery at Battle of Resaca; fought at Kennesaw Mountain and Peachtree Creek."
      },
      {
        id: "23-sen-1",
        category: "federal_diplomatic",
        role: "United States Senator from Indiana",
        organization: "U.S. Senate",
        location: "Washington, D.C.",
        years: "1881–1887",
        highlight: true,
        details: "Chaired Committee on Territories; championed statehood for Western territories (North Dakota, South Dakota, Montana, Washington)."
      },
      {
        id: "23-pres",
        category: "presidency",
        role: "23rd President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1889–1893",
        highlight: true,
        details: "Enacted Sherman Antitrust Act of 1890, McKinley Tariff, and Land Revision Act of 1891 (creating National Forests); admitted six western states to Union."
      },
      {
        id: "23-post",
        category: "post_presidency",
        role: "Chief International Counsel in Venezuela Boundary Arbitration",
        organization: "International Tribunal of Arbitration",
        location: "Paris, France",
        years: "1898–1899",
        details: "Argued Venezuela's border case against Great Britain before international arbitration tribunal."
      }
    ]
  },
  24: {
    presidentId: 24,
    presidentName: "William McKinley",
    highestEducation: "Albany Law School & Law Clerkship with Judge Charles E. Glidden",
    almaMater: "Allegheny College & Albany Law School (LL.B. Studies 1867)",
    primaryField: "Civil War Officer, Ways & Means Chairman & Ohio Governor",
    steppingStoneRole: "39th Governor of Ohio & House Ways and Means Chairman",
    treeNodes: [
      {
        id: "24-edu-1",
        category: "education",
        role: "Collegiate Studies & Country Schoolteacher",
        organization: "Allegheny College",
        location: "Meadville, Pennsylvania & Poland, Ohio",
        years: "1859–1861",
        details: "Enrolled at Allegheny College; withdrew due to illness and taught in district school until Civil War began."
      },
      {
        id: "24-mil-1",
        category: "military",
        role: "Private to Brevet Major in 23rd Ohio Infantry",
        organization: "United States Army Volunteers",
        location: "Antietam, Shenandoah & Opequon",
        years: "1861–1865",
        highlight: true,
        details: "Enlisted as private under Rutherford B. Hayes; served hot rations and coffee to front lines under heavy fire at Battle of Antietam; promoted to Brevet Major."
      },
      {
        id: "24-edu-2",
        category: "education",
        role: "Albany Law School & Bar Admission",
        organization: "Albany Law School",
        location: "Albany, New York & Canton, Ohio",
        years: "1866–1867",
        details: "Studied civil law and trial advocacy; admitted to the Ohio bar in 1867."
      },
      {
        id: "24-civ-1",
        category: "early_career",
        role: "Prosecuting Attorney of Stark County",
        organization: "Stark County Courts",
        location: "Canton, Ohio",
        years: "1869–1871",
        details: "Represented coal miners free of charge when indicted after strike skirmish."
      },
      {
        id: "24-fed-1",
        category: "federal_diplomatic",
        role: "U.S. Representative from Ohio (Ways and Means Chairman)",
        organization: "U.S. House of Representatives",
        location: "Washington, D.C.",
        years: "1877–1883, 1885–1891",
        highlight: true,
        details: "America's premier advocate of protective tariffs; authored the historic McKinley Tariff Act of 1890."
      },
      {
        id: "24-gov-1",
        category: "state_local",
        role: "39th Governor of Ohio (2 Terms)",
        organization: "State of Ohio",
        location: "Columbus, Ohio",
        years: "1892–1896",
        highlight: true,
        details: "Enacted taxation on corporations, state arbitration boards for labor disputes, and railroad safety regulations."
      },
      {
        id: "24-pres",
        category: "presidency",
        role: "25th President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1897–1901",
        highlight: true,
        details: "Led U.S. to victory in Spanish-American War (1898); acquired Puerto Rico, Guam, and Philippines; annexed Hawaii; established Gold Standard Act."
      }
    ]
  },
  25: {
    presidentId: 25,
    presidentName: "Theodore Roosevelt",
    highestEducation: "Bachelor of Arts (A.B.) Magna Cum Laude & Columbia Law Studies",
    almaMater: "Harvard College (A.B. 1880, Phi Beta Kappa) & Columbia Law School",
    primaryField: "Historian, Rough Riders Colonel, Governor & Reformer",
    steppingStoneRole: "25th Vice President & 33rd Governor of New York",
    treeNodes: [
      {
        id: "25-edu-1",
        category: "education",
        role: "Bachelor of Arts Magna Cum Laude (Natural History & German)",
        organization: "Harvard College",
        location: "Cambridge, Massachusetts",
        years: "1876–1880",
        details: "Elected to Phi Beta Kappa; boxed in lightweight tournament; began writing authoritative history 'The Naval War of 1812'."
      },
      {
        id: "25-edu-2",
        category: "education",
        role: "Legal Studies at Columbia Law School",
        organization: "Columbia Law School",
        location: "New York City",
        years: "1880–1881",
        details: "Studied under Professor Theodore Dwight; withdrew to run for New York State Assembly."
      },
      {
        id: "25-leg-1",
        category: "state_local",
        role: "New York State Assemblyman (Minority Leader)",
        organization: "New York State Assembly",
        location: "Albany, New York",
        years: "1882–1884",
        details: "Youngest assemblyman; led investigations into judicial corruption and cigar manufacturing sweatshops."
      },
      {
        id: "25-civ-1",
        category: "early_career",
        role: "Dakota Badlands Rancher & Deputy Sheriff",
        organization: "Elkhorn & Chimney Butte Ranches",
        location: "Medora, Dakota Territory",
        years: "1884–1886",
        details: "Overcame grief from wife and mother's deaths; chased boat thieves across frozen Little Missouri River and arrested them at gunpoint."
      },
      {
        id: "25-fed-1",
        category: "federal_diplomatic",
        role: "United States Civil Service Commissioner",
        organization: "U.S. Civil Service Commission",
        location: "Washington, D.C.",
        years: "1889–1895",
        details: "Appointed by Harrison and reappointed by Cleveland; dramatically expanded merit-based competitive examinations."
      },
      {
        id: "25-leg-2",
        category: "state_local",
        role: "President of the New York City Police Commission",
        organization: "New York City Police Department (NYPD)",
        location: "New York City",
        years: "1895–1897",
        highlight: true,
        details: "Conducted midnight inspections in disguise to catch sleeping officers; instituted standard pistol qualifications and bicycle squads."
      },
      {
        id: "25-cab-1",
        category: "federal_diplomatic",
        role: "Assistant Secretary of the Navy",
        organization: "Department of the Navy",
        location: "Washington, D.C.",
        years: "1897–1898",
        details: "Prepared fleet for war; sent famous order to Commodore Dewey to prepare to engage Spanish fleet at Manila Bay."
      },
      {
        id: "25-mil-1",
        category: "military",
        role: "Colonel of the 1st U.S. Volunteer Cavalry ('Rough Riders')",
        organization: "United States Army Volunteers",
        location: "Kettle Hill & San Juan Hill, Cuba",
        years: "1898",
        highlight: true,
        details: "Led historic charge on Kettle and San Juan Hills during Spanish-American War (posthumously awarded Medal of Honor)."
      },
      {
        id: "25-gov-1",
        category: "state_local",
        role: "33rd Governor of New York",
        organization: "State of New York",
        location: "Albany, New York",
        years: "1899–1900",
        highlight: true,
        details: "Enacted state tax on corporate franchises, conservation laws, and 8-hour workday on state contracts."
      },
      {
        id: "25-vp",
        category: "federal_diplomatic",
        role: "25th Vice President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1901",
        highlight: true,
        details: "Nominated unanimously at 1900 convention; became youngest president in history at age 42 upon McKinley's assassination."
      },
      {
        id: "25-pres",
        category: "presidency",
        role: "26th President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1901–1909",
        highlight: true,
        details: "Enacted the 'Square Deal', broke Northern Securities rail trust, initiated construction of Panama Canal, protected 230 million acres of public land (5 National Parks, 18 National Monuments), won 1906 Nobel Peace Prize."
      },
      {
        id: "25-post",
        category: "post_presidency",
        role: "Progressive 'Bull Moose' Presidential Nominee & Explorer",
        organization: "Progressive Party & Roosevelt-Rondon Expedition",
        location: "United States & Amazon River Basin, Brazil",
        years: "1912–1914",
        details: "Ran in 1912 on 'New Nationalism' platform (won 27% popular vote); explored unknown 1,000-mile River of Doubt in Brazilian rainforest."
      }
    ]
  },
  26: {
    presidentId: 26,
    presidentName: "William Howard Taft",
    highestEducation: "Bachelor of Laws (LL.B.) & Salutatorian",
    almaMater: "Yale College (B.A. 1878, Salutatorian) & Cincinnati Law School",
    primaryField: "Federal Judge, Governor-General of the Philippines & Secretary of War",
    steppingStoneRole: "42nd U.S. Secretary of War & 6th Solicitor General",
    treeNodes: [
      {
        id: "26-edu-1",
        category: "education",
        role: "Bachelor of Arts (Class Salutatorian, Skull and Bones)",
        organization: "Yale College",
        location: "New Haven, Connecticut",
        years: "1874–1878",
        details: "Graduated second in class of 121; wrestling champion; member of Skull and Bones society."
      },
      {
        id: "26-edu-2",
        category: "education",
        role: "Bachelor of Laws (LL.B.)",
        organization: "Cincinnati Law School",
        location: "Cincinnati, Ohio",
        years: "1878–1880",
        details: "Worked as courthouse reporter for the Cincinnati Commercial while finishing law degree; admitted to bar in 1880."
      },
      {
        id: "26-civ-1",
        category: "early_career",
        role: "Assistant County Prosecutor & Judge of Cincinnati Superior Court",
        organization: "Hamilton County & Superior Court of Cincinnati",
        location: "Cincinnati, Ohio",
        years: "1881–1890",
        details: "Appointed to Superior Court at age 29; authored important labor contract and arbitration decisions."
      },
      {
        id: "26-fed-1",
        category: "federal_diplomatic",
        role: "6th United States Solicitor General",
        organization: "Department of Justice",
        location: "Washington, D.C.",
        years: "1890–1892",
        highlight: true,
        details: "Argued 27 cases before U.S. Supreme Court on behalf of the federal government, winning 25."
      },
      {
        id: "26-jud-1",
        category: "federal_diplomatic",
        role: "Judge of the U.S. Court of Appeals for the Sixth Circuit",
        organization: "United States Court of Appeals",
        location: "Cincinnati, Ohio",
        years: "1892–1900",
        details: "Authored landmark antitrust opinion Addyston Pipe & Steel Co. ruling price-fixing illegal under the Sherman Act; taught law at Cincinnati Law School."
      },
      {
        id: "26-gov-1",
        category: "state_local",
        role: "1st Civil Governor-General of the Philippines",
        organization: "Philippine Commission",
        location: "Manila, Philippines",
        years: "1901–1904",
        highlight: true,
        details: "Introduced civilian legal code, built roads and schools, and negotiated Vatican purchase of friar lands directly with Pope Leo XIII."
      },
      {
        id: "26-cab-1",
        category: "federal_diplomatic",
        role: "42nd United States Secretary of War",
        organization: "War Department",
        location: "Washington, D.C.",
        years: "1904–1908",
        highlight: true,
        details: "Supervised construction of the Panama Canal; served as provisional Governor of Cuba during 1906 uprising."
      },
      {
        id: "26-pres",
        category: "presidency",
        role: "27th President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1909–1913",
        highlight: true,
        details: "Filed twice as many antitrust suits as Roosevelt (including Standard Oil and American Tobacco); submitted 16th (Income Tax) and 17th (Direct Senate Election) Amendments; established Postal Savings System."
      },
      {
        id: "26-post",
        category: "post_presidency",
        role: "10th Chief Justice of the United States",
        organization: "Supreme Court of the United States",
        location: "Washington, D.C.",
        years: "1921–1930",
        highlight: true,
        details: "Only person in American history to serve as both President and Chief Justice; secured passage of Judges Act of 1925 and construction of dedicated Supreme Court building."
      }
    ]
  },
  27: {
    presidentId: 27,
    presidentName: "Woodrow Wilson",
    highestEducation: "Doctor of Philosophy (Ph.D.) in History & Political Science",
    almaMater: "Princeton University (A.B. 1879) & Johns Hopkins University (Ph.D. 1886)",
    primaryField: "Academic Scholar, Princeton President & New Jersey Governor",
    steppingStoneRole: "34th Governor of New Jersey & 13th President of Princeton",
    treeNodes: [
      {
        id: "27-edu-1",
        category: "education",
        role: "Bachelor of Arts in History & Political Philosophy",
        organization: "College of New Jersey (Princeton)",
        location: "Princeton, New Jersey",
        years: "1875–1879",
        details: "Managing editor of The Princetonian; speaker of the American Whig Society debating club."
      },
      {
        id: "27-edu-2",
        category: "education",
        role: "Legal Studies at University of Virginia School of Law",
        organization: "UVA Law School",
        location: "Charlottesville, Virginia",
        years: "1879–1880",
        details: "Studied under John B. Minor; admitted to Georgia bar and practiced law in Atlanta (1882–1883)."
      },
      {
        id: "27-edu-3",
        category: "education",
        role: "Doctor of Philosophy (Ph.D.) in Political Science",
        organization: "Johns Hopkins University",
        location: "Baltimore, Maryland",
        years: "1883–1886",
        highlight: true,
        details: "Only U.S. President with an earned doctoral degree; doctoral dissertation 'Congressional Government' became definitive analysis of legislative power."
      },
      {
        id: "27-edu-4",
        category: "education",
        role: "Professor & 13th President of Princeton University",
        organization: "Princeton University",
        location: "Princeton, New Jersey",
        years: "1890–1910",
        highlight: true,
        details: "Revolutionized American higher education by introducing the preceptorial tutorial system and modern graduate college."
      },
      {
        id: "27-gov-1",
        category: "state_local",
        role: "34th Governor of New Jersey",
        organization: "State of New Jersey",
        location: "Trenton, New Jersey",
        years: "1911–1913",
        highlight: true,
        details: "Broke machine bosses to pass direct primary election laws, workers' compensation, corrupt practices act, and public utilities commission."
      },
      {
        id: "27-pres",
        category: "presidency",
        role: "28th President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1913–1921",
        highlight: true,
        details: "Created Federal Reserve System, Federal Trade Commission, and Clayton Antitrust Act; led U.S. through World War I; authored Fourteen Points and founded League of Nations (1919 Nobel Peace Prize)."
      }
    ]
  },
  28: {
    presidentId: 28,
    presidentName: "Warren G. Harding",
    highestEducation: "Bachelor of Science (B.S.)",
    almaMater: "Ohio Central College (Class of 1882)",
    primaryField: "Newspaper Publisher, Editor, Lieutenant Governor & U.S. Senator",
    steppingStoneRole: "United States Senator from Ohio & Ohio Lieutenant Governor",
    treeNodes: [
      {
        id: "28-edu-1",
        category: "education",
        role: "Bachelor of Science in General Studies & Printing Apprenticeship",
        organization: "Ohio Central College",
        location: "Iberia, Ohio",
        years: "1879–1882",
        details: "Learned typeset printing and editing; edited college paper."
      },
      {
        id: "28-civ-1",
        category: "early_career",
        role: "Publisher, Editor & Owner of The Marion Star",
        organization: "The Marion Daily Star",
        location: "Marion, Ohio",
        years: "1884–1920",
        highlight: true,
        details: "Bought bankrupt newspaper for $300 and built it into the premier daily newspaper of central Ohio; introduced linotype machines."
      },
      {
        id: "28-leg-1",
        category: "state_local",
        role: "Ohio State Senator & 28th Lieutenant Governor of Ohio",
        organization: "State of Ohio",
        location: "Columbus, Ohio",
        years: "1899–1906",
        details: "Known for eloquence and conciliation; presided over Ohio State Senate."
      },
      {
        id: "28-sen-1",
        category: "federal_diplomatic",
        role: "United States Senator from Ohio",
        organization: "U.S. Senate",
        location: "Washington, D.C.",
        years: "1915–1921",
        highlight: true,
        details: "Chaired Committee on the Philippines; delivered nominating speech for William Howard Taft at 1912 Republican convention."
      },
      {
        id: "28-pres",
        category: "presidency",
        role: "29th President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1921–1923",
        highlight: true,
        details: "Convened Washington Naval Disarmament Conference; created Bureau of the Budget; signed Federal Highway Act of 1921; pardoned Eugene V. Debs; died in office August 1923."
      }
    ]
  },
  29: {
    presidentId: 29,
    presidentName: "Calvin Coolidge",
    highestEducation: "Bachelor of Arts (A.B.) Cum Laude & Law Apprenticeship",
    almaMater: "Amherst College (Class of 1895, Phi Beta Kappa)",
    primaryField: "Country Lawyer, Massachusetts Governor & Vice President",
    steppingStoneRole: "29th Vice President & 48th Governor of Massachusetts",
    treeNodes: [
      {
        id: "29-edu-1",
        category: "education",
        role: "Bachelor of Arts Cum Laude (Phi Beta Kappa)",
        organization: "Amherst College",
        location: "Amherst, Massachusetts",
        years: "1891–1895",
        details: "Mentored by philosophy professor Charles Edward Garman; won national essay contest on causes of American Revolution."
      },
      {
        id: "29-edu-2",
        category: "education",
        role: "Law Apprenticeship at Hammond & Field",
        organization: "Hammond & Field Law Chambers",
        location: "Northampton, Massachusetts",
        years: "1895–1897",
        details: "Read law for twenty months; admitted to the Massachusetts bar in 1897."
      },
      {
        id: "29-leg-1",
        category: "state_local",
        role: "City Councilman, City Solicitor & Mayor of Northampton",
        organization: "City of Northampton",
        location: "Northampton, Massachusetts",
        years: "1899–1911",
        details: "Steadily rose through every level of municipal government through punctuality and fiscal conservatism."
      },
      {
        id: "29-leg-2",
        category: "state_local",
        role: "Massachusetts State Senator & Senate President",
        organization: "Massachusetts General Court",
        location: "Boston, Massachusetts",
        years: "1912–1915",
        details: "Delivered famous 'Have Faith in Massachusetts' speech: 'Do the day's work. If it be to protect the rights of the weak, whoever objects, do it.'"
      },
      {
        id: "29-gov-1",
        category: "state_local",
        role: "46th Lieutenant Governor & 48th Governor of Massachusetts",
        organization: "Commonwealth of Massachusetts",
        location: "Boston, Massachusetts",
        years: "1916–1921",
        highlight: true,
        details: "Rocketed to national fame during 1919 Boston Police Strike by mobilizing State Guard: 'There is no right to strike against the public safety by anybody, anywhere, any time.'"
      },
      {
        id: "29-vp",
        category: "federal_diplomatic",
        role: "29th Vice President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1921–1923",
        highlight: true,
        details: "First vice president invited by president to attend cabinet meetings; sworn in by his father by kerosene lamp in Plymouth Notch upon Harding's death."
      },
      {
        id: "29-pres",
        category: "presidency",
        role: "30th President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1923–1929",
        highlight: true,
        details: "Presided over Roaring Twenties economic boom; slashed national debt and cut taxes; signed Indian Citizenship Act of 1924; established Federal Radio Commission."
      }
    ]
  },
  30: {
    presidentId: 30,
    presidentName: "Herbert Hoover",
    highestEducation: "Bachelor of Science (B.S.) in Geology",
    almaMater: "Stanford University (Inaugural Pioneer Class of 1895)",
    primaryField: "Mining Engineer, International Humanitarian & Secretary of Commerce",
    steppingStoneRole: "3rd U.S. Secretary of Commerce & U.S. Food Administrator",
    treeNodes: [
      {
        id: "30-edu-1",
        category: "education",
        role: "Bachelor of Science in Geology (Stanford Pioneer Class)",
        organization: "Stanford University",
        location: "Stanford, California",
        years: "1891–1895",
        details: "Orphaned at age 9; member of Stanford's first entering freshman class; student body treasurer and baseball team manager."
      },
      {
        id: "30-civ-1",
        category: "early_career",
        role: "Gold Miner & International Mining Engineer",
        organization: "Bewick, Moreing & Co.",
        location: "Western Australia & China",
        years: "1895–1908",
        details: "Worked underground in California gold mines; discovered rich Sons of Gwalia gold deposit in Australia; managed Chinese mining and defense during Boxer Rebellion."
      },
      {
        id: "30-civ-2",
        category: "early_career",
        role: "Global Independent Engineering Consultant & Author",
        organization: "Hoover Engineering Firm",
        location: "London, San Francisco, St. Petersburg",
        years: "1908–1914",
        highlight: true,
        details: "Translated Agricola's 1556 metallurgy Latin classic 'De Re Metallica' with wife Lou Henry Hoover; amassed personal fortune as top mining consultant."
      },
      {
        id: "30-hum-1",
        category: "federal_diplomatic",
        role: "Chairman of the Commission for Relief in Belgium (CRB)",
        organization: "Commission for Relief in Belgium",
        location: "Brussels, Belgium & London",
        years: "1914–1917",
        highlight: true,
        details: "Fed 9 million starving Belgian and French civilians trapped behind German battle lines during WWI, creating entire international relief supply fleet."
      },
      {
        id: "30-fed-1",
        category: "federal_diplomatic",
        role: "Director of the U.S. Food Administration & ARA",
        organization: "United States Food Administration",
        location: "Washington, D.C. & Post-War Europe",
        years: "1917–1920",
        highlight: true,
        details: "Promoted voluntary conservation ('Meatless Mondays', 'Wheatless Wednesdays'); fed tens of millions of starving children in post-WWI Europe."
      },
      {
        id: "30-cab-1",
        category: "federal_diplomatic",
        role: "3rd United States Secretary of Commerce",
        organization: "Department of Commerce",
        location: "Washington, D.C.",
        years: "1921–1928",
        highlight: true,
        details: "Transformed department into dynamic engine of growth; standardized manufacturing parts; organized radio frequency spectrum and civil aviation safety; managed 1927 Mississippi flood relief."
      },
      {
        id: "30-pres",
        category: "presidency",
        role: "31st President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1929–1933",
        highlight: true,
        details: "Faced 1929 Stock Market crash and Great Depression; created Reconstruction Finance Corporation; initiated Hoover Dam construction; expanded national parks."
      },
      {
        id: "30-post",
        category: "post_presidency",
        role: "Chairman of the Hoover Commissions & UNICEF Coordinator",
        organization: "Commission on Organization of the Executive Branch",
        location: "Washington, D.C. & New York City",
        years: "1946–1955",
        details: "Appointed by Presidents Truman and Eisenhower to reorganize and streamline the federal executive branch; founded Hoover Institution at Stanford."
      }
    ]
  }
};
