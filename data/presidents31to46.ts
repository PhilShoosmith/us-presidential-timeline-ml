import { PresidentCareerProfile } from '../types';

export const presidents31to46: Record<number, PresidentCareerProfile> = {
  31: {
    presidentId: 31,
    presidentName: "Franklin D. Roosevelt",
    highestEducation: "Bachelor of Arts (A.B.) in History & Columbia Law School Studies",
    almaMater: "Harvard University (Class of 1903) & Columbia Law School",
    primaryField: "Wall Street Attorney, Assistant Navy Secretary & NY Governor",
    steppingStoneRole: "44th Governor of New York & Assistant Secretary of the Navy",
    treeNodes: [
      {
        id: "31-edu-1",
        category: "education",
        role: "Bachelor of Arts in History & Government",
        organization: "Harvard University",
        location: "Cambridge, Massachusetts",
        years: "1900–1903",
        details: "Managing editor and president of The Harvard Crimson daily paper; active in debate and campus politics."
      },
      {
        id: "31-edu-2",
        category: "education",
        role: "Legal Studies at Columbia Law School",
        organization: "Columbia Law School",
        location: "New York City",
        years: "1904–1907",
        details: "Passed New York bar exam in 1907 and left law school to join Carter Ledyard & Milburn on Wall Street."
      },
      {
        id: "31-civ-1",
        category: "early_career",
        role: "Appellate Lawyer & Admiralty Counsel",
        organization: "Carter, Ledyard & Milburn",
        location: "New York City",
        years: "1907–1910",
        details: "Handled maritime and corporate litigation before state and federal courts."
      },
      {
        id: "31-leg-1",
        category: "state_local",
        role: "New York State Senator (Dutchess County)",
        organization: "New York State Senate",
        location: "Albany, New York",
        years: "1911–1913",
        details: "Led insurgent reform Democrats against Tammany Hall boss William Sheehan."
      },
      {
        id: "31-cab-1",
        category: "federal_diplomatic",
        role: "Assistant Secretary of the Navy",
        organization: "Department of the Navy",
        location: "Washington, D.C. & European War Zone",
        years: "1913–1920",
        highlight: true,
        details: "Directed vast naval expansion in World War I; supervised laying of 70,000-mine North Sea Mine Barrage against U-boats."
      },
      {
        id: "31-fed-1",
        category: "federal_diplomatic",
        role: "Democratic Vice Presidential Nominee",
        organization: "Democratic National Committee",
        location: "United States",
        years: "1920",
        details: "Campaigned nationally on James M. Cox ticket defending Woodrow Wilson's League of Nations."
      },
      {
        id: "31-gov-1",
        category: "state_local",
        role: "44th Governor of New York (2 Terms)",
        organization: "State of New York",
        location: "Albany, New York",
        years: "1929–1932",
        highlight: true,
        details: "Pioneered state unemployment relief, public power utilities, and pension systems as testing grounds for the New Deal."
      },
      {
        id: "31-pres",
        category: "presidency",
        role: "32nd President of the United States (4 Terms)",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1933–1945",
        highlight: true,
        details: "Only president elected to four terms; enacted the New Deal (Social Security, FDIC, SEC, TVA); Commander-in-Chief in World War II; conceptualized the United Nations."
      }
    ]
  },
  32: {
    presidentId: 32,
    presidentName: "Harry S. Truman",
    highestEducation: "High School Graduate & Night Law Studies",
    almaMater: "Independence High School (1901) & Kansas City School of Law",
    primaryField: "Family Farmer, WWI Artillery Captain, County Judge & U.S. Senator",
    steppingStoneRole: "34th Vice President & U.S. Senator from Missouri",
    treeNodes: [
      {
        id: "32-edu-1",
        category: "education",
        role: "High School Studies & Classical History Reading",
        organization: "Independence High School",
        location: "Independence, Missouri",
        years: "1898–1901",
        details: "Only 20th-century president without a four-year college degree; voracious reader of ancient military history and biography."
      },
      {
        id: "32-civ-1",
        category: "early_career",
        role: "Railroad Timekeeper, Bank Clerk & Family Farmer",
        organization: "Santa Fe Railroad, Union National Bank & Truman Farm",
        location: "Kansas City & Grandview, Missouri",
        years: "1902–1917",
        details: "Ran the 600-acre family farm for over a decade, doing all field chores, rotating crops, and maintaining bookkeeping."
      },
      {
        id: "32-mil-1",
        category: "military",
        role: "Captain & Battery Commander (Battery D, 129th Field Artillery)",
        organization: "35th Infantry Division (U.S. Army)",
        location: "Vosges, Saint-Mihiel & Meuse-Argonne, France",
        years: "1917–1919",
        highlight: true,
        details: "Commanded spirited artillery battery under fierce enemy fire in France; never lost a man while supporting Allied infantry advances."
      },
      {
        id: "32-civ-2",
        category: "early_career",
        role: "Haberdashery Owner & Kansas City Law School Student",
        organization: "Truman & Jacobson Men's Furnishings",
        location: "Kansas City, Missouri",
        years: "1919–1925",
        details: "Ran clothing shop until 1921 depression; attended night classes at Kansas City School of Law."
      },
      {
        id: "32-leg-1",
        category: "state_local",
        role: "Presiding Judge of the Jackson County Court (County Executive)",
        organization: "Jackson County Court",
        location: "Kansas City & Independence, Missouri",
        years: "1922–1924, 1927–1934",
        details: "Oversaw $14 million in voter-approved public bonds building modern county highways, parks, and court buildings with zero corruption."
      },
      {
        id: "32-sen-1",
        category: "federal_diplomatic",
        role: "U.S. Senator from Missouri (Chairman of Truman Committee)",
        organization: "U.S. Senate",
        location: "Washington, D.C.",
        years: "1935–1945",
        highlight: true,
        details: "Chaired famed Senate Special Committee Investigating the National Defense Program, exposing wartime waste and saving taxpayers an estimated $15 billion."
      },
      {
        id: "32-vp",
        category: "federal_diplomatic",
        role: "34th Vice President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1945",
        highlight: true,
        details: "Served 82 days as VP under FDR before succeeding to the presidency on April 12, 1945."
      },
      {
        id: "32-pres",
        category: "presidency",
        role: "33rd President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1945–1953",
        highlight: true,
        details: "Ended World War II; implemented Marshall Plan rebuilding Europe; proclaimed Truman Doctrine; established NATO; integrated the U.S. Armed Forces; led UN intervention in Korean War."
      }
    ]
  },
  33: {
    presidentId: 33,
    presidentName: "Dwight D. Eisenhower",
    highestEducation: "Bachelor of Science (B.S.) & Command and General Staff College (1st in Class)",
    almaMater: "U.S. Military Academy West Point (1915) & Army War College (1928)",
    primaryField: "5-Star General of the Army & NATO Supreme Commander",
    steppingStoneRole: "Supreme Allied Commander Europe & Chief of Staff of the Army",
    treeNodes: [
      {
        id: "33-edu-1",
        category: "education",
        role: "Cadet at United States Military Academy",
        organization: "U.S. Military Academy at West Point",
        location: "West Point, New York",
        years: "1911–1915",
        details: "Member of 'the class the stars fell on' (59 classmates became generals); varsity football running back."
      },
      {
        id: "33-mil-1",
        category: "military",
        role: "Captain to Lieutenant Colonel & Tank Corps Commander",
        organization: "U.S. Army Tank Corps (Camp Colt)",
        location: "Gettysburg, Pennsylvania",
        years: "1917–1918",
        details: "Trained first American tank crews in WWI; awarded Distinguished Service Medal."
      },
      {
        id: "33-edu-2",
        category: "education",
        role: "Command & General Staff College (Graduated 1st in Class of 245)",
        organization: "U.S. Army Command and General Staff College",
        location: "Fort Leavenworth, Kansas",
        years: "1925–1926",
        highlight: true,
        details: "Achieved top academic ranking in the Army; studied under the strategic mentorship of General Fox Conner."
      },
      {
        id: "33-mil-2",
        category: "military",
        role: "Senior Military Assistant to General Douglas MacArthur",
        organization: "Office of the Army Chief of Staff & Military Mission to the Philippines",
        location: "Washington, D.C. & Manila, Philippines",
        years: "1933–1939",
        details: "Drafted national military defense plans, air corps regulations, and organized the Philippine Army."
      },
      {
        id: "33-mil-3",
        category: "military",
        role: "Chief of War Plans Division & Commander in European Theater",
        organization: "War Department General Staff",
        location: "Washington, D.C. & London",
        years: "1941–1943",
        details: "Promoted by General George C. Marshall; directed Operation Torch invasion of French North Africa and invasion of Sicily and Italy."
      },
      {
        id: "33-mil-4",
        category: "military",
        role: "Supreme Allied Commander Europe & 5-Star General of the Army",
        organization: "Supreme Headquarters Allied Expeditionary Force (SHAEF)",
        location: "London, Normandy & Western Europe",
        years: "1943–1945",
        highlight: true,
        details: "Planned and commanded Operation Overlord (D-Day invasion of Normandy, June 6, 1944); coordinated British, American, and Canadian forces to defeat Nazi Germany."
      },
      {
        id: "33-mil-5",
        category: "military",
        role: "16th Chief of Staff of the Army & 1st Supreme Allied Commander NATO",
        organization: "United States Army & North Atlantic Treaty Organization (NATO)",
        location: "Washington, D.C. & Paris, France",
        years: "1945–1948, 1951–1952",
        highlight: true,
        details: "Directed post-war demobilization and created the integrated military structure of the NATO alliance."
      },
      {
        id: "33-edu-3",
        category: "education",
        role: "13th President of Columbia University",
        organization: "Columbia University",
        location: "New York City",
        years: "1948–1953",
        details: "Established the American Assembly public policy institute and expanded medical and research facilities."
      },
      {
        id: "33-pres",
        category: "presidency",
        role: "34th President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1953–1961",
        highlight: true,
        details: "Created the Interstate Highway System (41,000 miles); established NASA; ended the Korean War; sent 101st Airborne to enforce Little Rock school integration; warned of the 'military-industrial complex'."
      }
    ]
  },
  34: {
    presidentId: 34,
    presidentName: "John F. Kennedy",
    highestEducation: "Bachelor of Science (B.S.) Cum Laude in Government",
    almaMater: "Harvard University (Class of 1940, Cum Laude)",
    primaryField: "PT-109 Commander, Journalist, Author & U.S. Senator",
    steppingStoneRole: "United States Senator from Massachusetts",
    treeNodes: [
      {
        id: "34-edu-1",
        category: "education",
        role: "Bachelor of Science Cum Laude in International Relations",
        organization: "Harvard University",
        location: "Cambridge, Massachusetts",
        years: "1936–1940",
        details: "Varsity swim team; senior honors thesis on British appeasement at Munich published commercially as bestseller 'Why England Slept'."
      },
      {
        id: "34-mil-1",
        category: "military",
        role: "Lieutenant & Commander of Patrol Torpedo Boat PT-109",
        organization: "United States Navy (South Pacific Theater)",
        location: "Solomon Islands",
        years: "1941–1945",
        highlight: true,
        details: "When PT-109 was cut in two by Japanese destroyer Amagiri, towed badly burned crewmate 3 miles by life-jacket strap between his teeth to safety; awarded Navy and Marine Corps Medal and Purple Heart."
      },
      {
        id: "34-civ-1",
        category: "early_career",
        role: "War Correspondent & Author",
        organization: "Hearst Newspapers",
        location: "San Francisco, London & Potsdam",
        years: "1945",
        details: "Covered the historic United Nations Charter Conference in San Francisco and Potsdam Conference."
      },
      {
        id: "34-fed-1",
        category: "federal_diplomatic",
        role: "U.S. Representative from Massachusetts (11th District)",
        organization: "U.S. House of Representatives",
        location: "Washington, D.C.",
        years: "1947–1953",
        details: "Elected at age 29; supported Truman Doctrine and housing legislation for returning WWII veterans."
      },
      {
        id: "34-sen-1",
        category: "federal_diplomatic",
        role: "United States Senator from Massachusetts & Pulitzer Winner",
        organization: "U.S. Senate",
        location: "Washington, D.C.",
        years: "1953–1960",
        highlight: true,
        details: "Defeated Henry Cabot Lodge Jr.; authored Pulitzer Prize-winning book 'Profiles in Courage' (1956); served on Foreign Relations Committee."
      },
      {
        id: "34-pres",
        category: "presidency",
        role: "35th President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1961–1963",
        highlight: true,
        details: "Youngest person elected president; launched Peace Corps; committed nation to landing on Moon; resolved Cuban Missile Crisis peacefully; negotiated 1963 Partial Nuclear Test Ban Treaty."
      }
    ]
  },
  35: {
    presidentId: 35,
    presidentName: "Lyndon B. Johnson",
    highestEducation: "Bachelor of Science (B.S.) in History & Social Science",
    almaMater: "Southwest Texas State Teachers College (Class of 1930)",
    primaryField: "Teacher, Texas NYA Director, Senate Majority Leader & Vice President",
    steppingStoneRole: "37th Vice President & Senate Majority Leader",
    treeNodes: [
      {
        id: "35-edu-1",
        category: "education",
        role: "Bachelor of Science in Education & Campus Debate Star",
        organization: "Southwest Texas State Teachers College (Texas State)",
        location: "San Marcos, Texas",
        years: "1927–1930",
        details: "Financed education working as janitor; edited campus paper; won regional collegiate debating tournaments."
      },
      {
        id: "35-civ-1",
        category: "early_career",
        role: "Schoolteacher of Impoverished Mexican-American Children",
        organization: "Welhausen Elementary School & Sam Houston High",
        location: "Cotulla & Houston, Texas",
        years: "1928–1931",
        details: "Taught fifth, sixth, and seventh grade children in segregated school; formative experience inspiring later civil rights and antipoverty laws."
      },
      {
        id: "35-gov-1",
        category: "state_local",
        role: "Texas State Director of the National Youth Administration",
        organization: "National Youth Administration (New Deal)",
        location: "Austin, Texas",
        years: "1935–1937",
        details: "Youngest state NYA director in the country; put over 30,000 destitute young Texans to work on conservation and road projects."
      },
      {
        id: "35-fed-1",
        category: "federal_diplomatic",
        role: "U.S. Representative from Texas (Naval Affairs Committee)",
        organization: "U.S. House of Representatives",
        location: "Washington, D.C.",
        years: "1937–1949",
        details: "Close legislative ally of FDR; secured electrification dams for the Texas Hill Country."
      },
      {
        id: "35-mil-1",
        category: "military",
        role: "Lieutenant Commander in U.S. Naval Reserve (Silver Star)",
        organization: "United States Navy",
        location: "South Pacific (New Guinea)",
        years: "1941–1942",
        details: "Flew combat bombing mission as observer over Lae, New Guinea; aircraft came under Japanese Zero fighter attack; awarded Silver Star."
      },
      {
        id: "35-sen-1",
        category: "federal_diplomatic",
        role: "11th Senate Majority Leader ('Master of the Senate')",
        organization: "U.S. Senate",
        location: "Washington, D.C.",
        years: "1953–1961",
        highlight: true,
        details: "Youngest Senate Majority Leader; legendary parliamentary master who passed the Civil Rights Act of 1957 (first since Reconstruction)."
      },
      {
        id: "35-vp",
        category: "federal_diplomatic",
        role: "37th Vice President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1961–1963",
        highlight: true,
        details: "Chaired President's Committee on Equal Employment Opportunity and National Aeronautics and Space Council."
      },
      {
        id: "35-pres",
        category: "presidency",
        role: "36th President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1963–1969",
        highlight: true,
        details: "Created 'Great Society'; enacted Civil Rights Act of 1964, Voting Rights Act of 1965, Medicare and Medicaid; oversaw Apollo space program; escalated Vietnam War."
      }
    ]
  },
  36: {
    presidentId: 36,
    presidentName: "Richard Nixon",
    highestEducation: "Bachelor of Laws (LL.B.) Graduated 3rd in Class",
    almaMater: "Whittier College (A.B. 1934) & Duke University School of Law (LL.B. 1937)",
    primaryField: "Navy Commander, Congressman, U.S. Senator & Vice President",
    steppingStoneRole: "36th Vice President of the United States (2 Terms)",
    treeNodes: [
      {
        id: "36-edu-1",
        category: "education",
        role: "Bachelor of Arts Summa Cum Laude in History",
        organization: "Whittier College",
        location: "Whittier, California",
        years: "1930–1934",
        details: "Student body president; founder of the Orthogonian Society; champion collegiate debater."
      },
      {
        id: "36-edu-2",
        category: "education",
        role: "Bachelor of Laws (Duke Law School, 3rd in Class)",
        organization: "Duke University School of Law",
        location: "Durham, North Carolina",
        years: "1934–1937",
        details: "Attended on full academic scholarship; member of Law Review and Order of the Coif."
      },
      {
        id: "36-civ-1",
        category: "early_career",
        role: "Town Attorney & Office of Price Administration Counsel",
        organization: "Wingert & Bewley Law Firm & OPA",
        location: "La Habra, CA & Washington, D.C.",
        years: "1937–1942",
        details: "Handled commercial law and city ordinances; regulated tire rationing at wartime OPA."
      },
      {
        id: "36-mil-1",
        category: "military",
        role: "Lieutenant Commander in U.S. Navy Reserve",
        organization: "Combat Air Transport Command (SCAT)",
        location: "South Pacific (Bougainville, Guadalcanal, Green Islands)",
        years: "1942–1946",
        details: "Supervised air transport logistics under combat conditions; earned two battle stars and Navy Letter of Commendation."
      },
      {
        id: "36-fed-1",
        category: "federal_diplomatic",
        role: "U.S. Representative & U.S. Senator from California",
        organization: "U.S. Congress",
        location: "Washington, D.C.",
        years: "1947–1953",
        details: "Played pivotal role in Alger Hiss investigation on HUAC; co-authored Mundt-Nixon Subversive Activities Control Act."
      },
      {
        id: "36-vp",
        category: "federal_diplomatic",
        role: "36th Vice President of the United States (2 Terms under Eisenhower)",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1953–1961",
        highlight: true,
        details: "Reinvented vice presidency into active diplomatic office; engaged in famed 1959 Moscow 'Kitchen Debate' with Soviet Premier Nikita Khrushchev."
      },
      {
        id: "36-pres",
        category: "presidency",
        role: "37th President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1969–1974",
        highlight: true,
        details: "Historic 1972 opening of diplomatic relations with Communist China; détente and Anti-Ballistic Missile / SALT I treaties with USSR; created EPA and OSHA; ended military draft; resigned in 1974 following Watergate."
      }
    ]
  },
  37: {
    presidentId: 37,
    presidentName: "Gerald Ford",
    highestEducation: "Bachelor of Laws (LL.B.) Top Third of Class",
    almaMater: "University of Michigan (B.A. 1935) & Yale Law School (LL.B. 1941)",
    primaryField: "Naval Officer, Grand Rapids Attorney & House Minority Leader",
    steppingStoneRole: "40th Vice President & House Minority Leader",
    treeNodes: [
      {
        id: "37-edu-1",
        category: "education",
        role: "Bachelor of Arts in Economics (National Champion Football MVP)",
        organization: "University of Michigan",
        location: "Ann Arbor, Michigan",
        years: "1931–1935",
        details: "Starting center on undefeated 1932 and 1933 national championship teams; selected team Most Valuable Player."
      },
      {
        id: "37-edu-2",
        category: "education",
        role: "Bachelor of Laws & Yale Assistant Coach",
        organization: "Yale Law School",
        location: "New Haven, Connecticut",
        years: "1935–1941",
        details: "Coached Yale football and boxing teams while attending law school full-time; graduated in top third of class."
      },
      {
        id: "37-mil-1",
        category: "military",
        role: "Lieutenant Commander in U.S. Navy (Aircraft Carrier USS Monterey)",
        organization: "United States Navy (Pacific Fleet)",
        location: "Pacific Theater (Makin, Kwajalein, Truk, Saipan, Philippines)",
        years: "1942–1946",
        highlight: true,
        details: "Assistant navigator and anti-aircraft gunnery battery officer; survived Typhoon Cobra; earned 10 battle stars."
      },
      {
        id: "37-fed-1",
        category: "federal_diplomatic",
        role: "U.S. Representative from Michigan & Warren Commission Member",
        organization: "U.S. House of Representatives",
        location: "Washington, D.C.",
        years: "1949–1965",
        details: "Served 25 years in Congress; appointed to the Warren Commission investigating the assassination of JFK."
      },
      {
        id: "37-fed-2",
        category: "federal_diplomatic",
        role: "House Minority Leader",
        organization: "U.S. House of Representatives",
        location: "Washington, D.C.",
        years: "1965–1973",
        highlight: true,
        details: "Led Republican party in House for 8 years; highly respected across both sides of the aisle for candor and fair dealing."
      },
      {
        id: "37-vp",
        category: "federal_diplomatic",
        role: "40th Vice President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1973–1974",
        highlight: true,
        details: "First vice president appointed under 25th Amendment following Spiro Agnew's resignation; confirmed with overwhelming bipartisan votes."
      },
      {
        id: "37-pres",
        category: "presidency",
        role: "38th President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1974–1977",
        highlight: true,
        details: "Only president never elected as President or Vice President; restored public trust ('Our long national nightmare is over'); signed Helsinki Accords; supervised conclusion of American involvement in Vietnam."
      }
    ]
  },
  38: {
    presidentId: 38,
    presidentName: "Jimmy Carter",
    highestEducation: "Bachelor of Science (B.S.) with Distinction & Nuclear Physics Studies",
    almaMater: "U.S. Naval Academy Annapolis (Class of 1946) & Union College",
    primaryField: "Submarine Officer, Nuclear Engineer, Peanut Agribusiness & Georgia Governor",
    steppingStoneRole: "76th Governor of Georgia & Submarine Officer",
    treeNodes: [
      {
        id: "38-edu-1",
        category: "education",
        role: "Bachelor of Science with Distinction",
        organization: "United States Naval Academy",
        location: "Annapolis, Maryland",
        years: "1943–1946",
        details: "Graduated in top 10% of class; studied naval engineering and nuclear propulsion."
      },
      {
        id: "38-mil-1",
        category: "military",
        role: "Lieutenant in Submarine Service & Nuclear Propulsion Officer",
        organization: "United States Navy Submarine Force (USS Pomfret & Seawolf)",
        location: "Pacific Fleet & Schenectady, New York",
        years: "1946–1953",
        highlight: true,
        details: "Handpicked by Admiral Hyman Rickover for pioneering nuclear submarine program; led cleanup of disabled Chalk River nuclear reactor in Canada."
      },
      {
        id: "38-civ-1",
        category: "early_career",
        role: "Peanut Farmer, Agribusiness Executive & School Board Chairman",
        organization: "Carter's Warehouse & Sumter County Board of Education",
        location: "Plains, Georgia",
        years: "1953–1962",
        details: "Expanded family peanut seed business; only white man in Plains to refuse to join the segregationist White Citizens' Council."
      },
      {
        id: "38-leg-1",
        category: "state_local",
        role: "Georgia State Senator",
        organization: "Georgia State Senate",
        location: "Atlanta, Georgia",
        years: "1963–1967",
        details: "Won election after successfully challenging fraudulent ballot stuffing in court; chaired Education Committee."
      },
      {
        id: "38-gov-1",
        category: "state_local",
        role: "76th Governor of Georgia",
        organization: "State of Georgia",
        location: "Atlanta, Georgia",
        years: "1971–1975",
        highlight: true,
        details: "Proclaimed in inaugural address: 'The time for racial discrimination is over'; consolidated 300 state agencies into 22; appointed record number of Black officials."
      },
      {
        id: "38-pres",
        category: "presidency",
        role: "39th President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1977–1981",
        highlight: true,
        details: "Brokered historic Camp David Accords between Israel and Egypt; negotiated Panama Canal Treaties; created Department of Energy and Department of Education; signed SALT II."
      },
      {
        id: "38-post",
        category: "post_presidency",
        role: "Founder of The Carter Center & Nobel Peace Prize Laureate",
        organization: "The Carter Center & Habitat for Humanity",
        location: "Atlanta, Georgia & Global",
        years: "1982–Present",
        highlight: true,
        details: "Awarded 2002 Nobel Peace Prize; monitored over 100 international elections; led global eradication of Guinea worm disease from 3.5 million cases to near-zero."
      }
    ]
  },
  39: {
    presidentId: 39,
    presidentName: "Ronald Reagan",
    highestEducation: "Bachelor of Arts (B.A.) in Economics & Sociology",
    almaMater: "Eureka College (Class of 1932)",
    primaryField: "Radio Broadcaster, Hollywood Film Star, SAG President & CA Governor",
    steppingStoneRole: "33rd Governor of California & Screen Actors Guild President",
    treeNodes: [
      {
        id: "39-edu-1",
        category: "education",
        role: "Bachelor of Arts in Economics and Sociology",
        organization: "Eureka College",
        location: "Eureka, Illinois",
        years: "1928–1932",
        details: "Student body president; played football, captained swim team, and starred in campus theater productions."
      },
      {
        id: "39-civ-1",
        category: "early_career",
        role: "Radio Sports Announcer (Calling Chicago Cubs Games)",
        organization: "WOC (Davenport) & WHO (Des Moines)",
        location: "Iowa",
        years: "1932–1937",
        details: "Famed for recreating play-by-play Chicago Cubs baseball games in studio from telegraph wire ticker-tape."
      },
      {
        id: "39-civ-2",
        category: "early_career",
        role: "Motion Picture & Television Actor (Warner Bros. & GE Theater)",
        organization: "Warner Bros. Studios & General Electric",
        location: "Hollywood, California",
        years: "1937–1964",
        details: "Starred in 53 feature films (including 'Kings Row' and 'Knute Rockne, All American'); hosted television's 'General Electric Theater'."
      },
      {
        id: "39-civ-3",
        category: "early_career",
        role: "President of the Screen Actors Guild (SAG, 6 Terms)",
        organization: "Screen Actors Guild",
        location: "Hollywood, California",
        years: "1947–1952, 1959–1960",
        highlight: true,
        details: "Led SAG through first-ever actors strike, winning residual payments for actors on television reruns and feature films sold to TV."
      },
      {
        id: "39-mil-1",
        category: "military",
        role: "Captain in the U.S. Army Air Forces",
        organization: "First Motion Picture Unit (Culver City)",
        location: "Culver City, California",
        years: "1942–1945",
        details: "Produced over 400 military training and orientation films for combat flight crews during World War II."
      },
      {
        id: "39-gov-1",
        category: "state_local",
        role: "33rd Governor of California (2 Terms)",
        organization: "State of California",
        location: "Sacramento, California",
        years: "1967–1975",
        highlight: true,
        details: "Enacted major welfare reform, signed landmark California Environmental Quality Act, and balanced state budget."
      },
      {
        id: "39-pres",
        category: "presidency",
        role: "40th President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1981–1989",
        highlight: true,
        details: "Spearheaded conservative revolution ('Reaganomics' tax cuts and deregulation); survived 1981 assassination attempt; signed 1987 INF Treaty eliminating an entire class of nuclear missiles with Gorbachev; challenged 'Mr. Gorbachev, tear down this wall!'"
      }
    ]
  },
  40: {
    presidentId: 40,
    presidentName: "George H. W. Bush",
    highestEducation: "Bachelor of Arts (B.A.) Phi Beta Kappa in Economics",
    almaMater: "Yale University (Class of 1948, Phi Beta Kappa)",
    primaryField: "Naval Aviator, Oil Executive, UN Ambassador, CIA Director & Vice President",
    steppingStoneRole: "43rd Vice President of the United States (2 Terms)",
    treeNodes: [
      {
        id: "40-mil-1",
        category: "military",
        role: "Lieutenant (j.g.) & Youngest Naval Aviator in U.S. Navy",
        organization: "Torpedo Squadron VT-51 (USS San Jacinto)",
        location: "Pacific Theater (Chichi Jima)",
        years: "1942–1945",
        highlight: true,
        details: "Enlisted on 18th birthday; flew 58 combat missions; shot down over Pacific during bombing raid, completed torpedo attack before parachuting into water; awarded Distinguished Flying Cross and 3 Air Medals."
      },
      {
        id: "40-edu-1",
        category: "education",
        role: "Bachelor of Arts in Economics (Captain of Baseball Team)",
        organization: "Yale University",
        location: "New Haven, Connecticut",
        years: "1945–1948",
        details: "Completed degree in 2.5 years; elected to Phi Beta Kappa; first baseman and captain of baseball team in College World Series."
      },
      {
        id: "40-civ-1",
        category: "early_career",
        role: "Co-Founder & President of Zapata Offshore Petroleum",
        organization: "Bush-Overbey Oil & Zapata Off-Shore Co.",
        location: "Midland & Houston, Texas",
        years: "1948–1966",
        details: "Pioneered offshore floating oil drilling rigs in Gulf of Mexico and Persian Gulf."
      },
      {
        id: "40-fed-1",
        category: "federal_diplomatic",
        role: "U.S. Representative from Texas (7th District)",
        organization: "U.S. House of Representatives",
        location: "Washington, D.C.",
        years: "1967–1971",
        details: "Voted for the landmark Civil Rights Act of 1968 (Fair Housing Act) despite heavy constituent opposition."
      },
      {
        id: "40-dip-1",
        category: "federal_diplomatic",
        role: "10th United States Ambassador to the United Nations",
        organization: "United States Mission to the UN",
        location: "New York City",
        years: "1971–1973",
        details: "Led U.S. delegation during admittance of People's Republic of China to the UN."
      },
      {
        id: "40-dip-2",
        category: "federal_diplomatic",
        role: "Chief of the U.S. Liaison Office to China & RNC Chairman",
        organization: "U.S. Liaison Office (Beijing) & Republican National Committee",
        location: "Beijing, China & Washington, D.C.",
        years: "1973–1975",
        details: "First American de facto ambassador to Communist China; met with Mao Zedong and Zhou Enlai."
      },
      {
        id: "40-cab-1",
        category: "federal_diplomatic",
        role: "11th Director of Central Intelligence (CIA)",
        organization: "Central Intelligence Agency",
        location: "Langley, Virginia",
        years: "1976–1977",
        highlight: true,
        details: "Restored agency morale and instituted strict congressional oversight following Church Committee hearings."
      },
      {
        id: "40-vp",
        category: "federal_diplomatic",
        role: "43rd Vice President of the United States (2 Terms under Reagan)",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1981–1989",
        highlight: true,
        details: "Headed Task Force on Regulatory Relief and National Narcotics Border Interdiction System."
      },
      {
        id: "40-pres",
        category: "presidency",
        role: "41st President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1989–1993",
        highlight: true,
        details: "Navigated the peaceful end of the Cold War and reunification of Germany; assembled 35-nation coalition in Gulf War (Operation Desert Storm); signed Americans with Disabilities Act (ADA) and Clean Air Act of 1990."
      }
    ]
  },
  41: {
    presidentId: 41,
    presidentName: "Bill Clinton",
    highestEducation: "Juris Doctor (J.D.) & Rhodes Scholar",
    almaMater: "Georgetown University (1968), Oxford University & Yale Law School (J.D. 1973)",
    primaryField: "Law Professor, Arkansas Attorney General & 5-Term Governor",
    steppingStoneRole: "40th & 42nd Governor of Arkansas",
    treeNodes: [
      {
        id: "41-edu-1",
        category: "education",
        role: "Bachelor of Science in Foreign Service (Phi Beta Kappa)",
        organization: "Georgetown University",
        location: "Washington, D.C.",
        years: "1964–1968",
        details: "Class president; intern for Senate Foreign Relations Committee Chairman J. William Fulbright."
      },
      {
        id: "41-edu-2",
        category: "education",
        role: "Rhodes Scholar at University College, Oxford",
        organization: "University of Oxford",
        location: "Oxford, England",
        years: "1968–1970",
        details: "Studied government and modern European philosophy on prestigious Rhodes Scholarship."
      },
      {
        id: "41-edu-3",
        category: "education",
        role: "Juris Doctor (J.D.)",
        organization: "Yale Law School",
        location: "New Haven, Connecticut",
        years: "1970–1973",
        details: "Met fellow student Hillary Rodham in Yale Law Library; worked on Senator George McGovern's 1972 campaign."
      },
      {
        id: "41-edu-4",
        category: "education",
        role: "Assistant Professor of Law",
        organization: "University of Arkansas School of Law",
        location: "Fayetteville, Arkansas",
        years: "1973–1976",
        details: "Taught constitutional law, antitrust, and criminal procedure; ran for U.S. Congress in 1974."
      },
      {
        id: "41-leg-1",
        category: "state_local",
        role: "50th Attorney General of Arkansas",
        organization: "Office of the Arkansas Attorney General",
        location: "Little Rock, Arkansas",
        years: "1977–1979",
        details: "Advocated for consumer protection and challenged electric utility rate hikes."
      },
      {
        id: "41-gov-1",
        category: "state_local",
        role: "40th & 42nd Governor of Arkansas (5 Terms)",
        organization: "State of Arkansas",
        location: "Little Rock, Arkansas",
        years: "1979–1981, 1983–1992",
        highlight: true,
        details: "Elected youngest governor in U.S. at age 32; transformed Arkansas education with mandatory teacher testing and higher graduation requirements; chaired National Governors Association."
      },
      {
        id: "41-pres",
        category: "presidency",
        role: "42nd President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1993–2001",
        highlight: true,
        details: "Presided over longest peacetime economic expansion in modern history and first federal budget surpluses in three decades; enacted NAFTA, Family and Medical Leave Act, and welfare reform; facilitated Northern Ireland Good Friday Agreement."
      },
      {
        id: "41-post",
        category: "post_presidency",
        role: "Founder of Clinton Foundation & UN Special Envoy",
        organization: "Clinton Foundation / Clinton Global Initiative",
        location: "New York City & Global",
        years: "2001–Present",
        details: "Delivered low-cost HIV/AIDS medications to millions globally; mobilized relief for 2004 Indian Ocean tsunami and 2010 Haiti earthquake."
      }
    ]
  },
  42: {
    presidentId: 42,
    presidentName: "George W. Bush",
    highestEducation: "Master of Business Administration (M.B.A.)",
    almaMater: "Yale University (B.A. 1968) & Harvard Business School (M.B.A. 1975)",
    primaryField: "Fighter Pilot, Oil Executive, MLB Managing Partner & Texas Governor",
    steppingStoneRole: "46th Governor of Texas & Managing Partner of Texas Rangers",
    treeNodes: [
      {
        id: "42-edu-1",
        category: "education",
        role: "Bachelor of Arts in History",
        organization: "Yale University",
        location: "New Haven, Connecticut",
        years: "1964–1968",
        details: "President of Delta Kappa Epsilon fraternity; member of Skull and Bones; cheerleading squad leader."
      },
      {
        id: "42-mil-1",
        category: "military",
        role: "First Lieutenant & F-102 Delta Dagger Jet Fighter Pilot",
        organization: "Texas Air National Guard (147th Fighter Interceptor Group)",
        location: "Ellington Field, Houston, Texas",
        years: "1968–1974",
        details: "Trained in supersonic jet interceptor aviation; flew solo air defense patrols over Gulf Coast."
      },
      {
        id: "42-edu-2",
        category: "education",
        role: "Master of Business Administration (M.B.A.)",
        organization: "Harvard Business School",
        location: "Boston, Massachusetts",
        years: "1973–1975",
        highlight: true,
        details: "Only U.S. President to hold an M.B.A. degree; studied corporate finance, marketing, and organizational management."
      },
      {
        id: "42-civ-1",
        category: "early_career",
        role: "Oil and Gas Company Founder & Executive",
        organization: "Arbusto Energy / Bush Exploration & Spectrum 7",
        location: "Midland, Texas",
        years: "1977–1986",
        details: "Explored and drilled oil and gas wells across the Permian Basin of West Texas."
      },
      {
        id: "42-civ-2",
        category: "early_career",
        role: "Managing General Partner of the Texas Rangers Baseball Team",
        organization: "Major League Baseball (Texas Rangers)",
        location: "Arlington, Texas",
        years: "1989–1994",
        highlight: true,
        details: "Assembled investment partnership; oversaw construction of The Ballpark in Arlington; popular public face of the franchise."
      },
      {
        id: "42-gov-1",
        category: "state_local",
        role: "46th Governor of Texas (2 Terms)",
        organization: "State of Texas",
        location: "Austin, Texas",
        years: "1995–2000",
        highlight: true,
        details: "Defeated incumbent Ann Richards; passed tort reform, school accountability standards, and wind energy mandates; re-elected with record 68% of vote."
      },
      {
        id: "42-pres",
        category: "presidency",
        role: "43rd President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "2001–2009",
        highlight: true,
        details: "Led nation following September 11 terrorist attacks; created Department of Homeland Security; enacted No Child Left Behind and Medicare Part D prescription drug benefits; launched PEPFAR (saving 25+ million lives from AIDS in Africa)."
      }
    ]
  },
  43: {
    presidentId: 43,
    presidentName: "Barack Obama",
    highestEducation: "Juris Doctor (J.D.) Magna Cum Laude",
    almaMater: "Columbia University (B.A. 1983) & Harvard Law School (J.D. 1991)",
    primaryField: "Community Organizer, Constitutional Law Lecturer & U.S. Senator",
    steppingStoneRole: "United States Senator from Illinois & Illinois State Senator",
    treeNodes: [
      {
        id: "43-edu-1",
        category: "education",
        role: "Bachelor of Arts in Political Science & English Literature",
        organization: "Columbia University",
        location: "New York City",
        years: "1981–1983",
        details: "Transferred from Occidental College; focused on international relations and political theory."
      },
      {
        id: "43-civ-1",
        category: "early_career",
        role: "Director of the Developing Communities Project",
        organization: "Altgeld Gardens & Roseland Communities",
        location: "South Side of Chicago, Illinois",
        years: "1985–1988",
        details: "Organized job training programs, tutoring for youths, and tenant rights advocacy for asbestos removal."
      },
      {
        id: "43-edu-2",
        category: "education",
        role: "President of the Harvard Law Review (J.D. Magna Cum Laude)",
        organization: "Harvard Law School",
        location: "Cambridge, Massachusetts",
        years: "1988–1991",
        highlight: true,
        details: "Elected the first African American president in the 104-year history of the Harvard Law Review; graduated magna cum laude."
      },
      {
        id: "43-edu-3",
        category: "education",
        role: "Senior Lecturer in Constitutional Law (12 Years)",
        organization: "University of Chicago Law School",
        location: "Chicago, Illinois",
        years: "1992–2004",
        details: "Taught due process, equal protection, and civil rights law to law students."
      },
      {
        id: "43-civ-2",
        category: "early_career",
        role: "Civil Rights Attorney & Project VOTE! Director",
        organization: "Davis, Miner, Barnhill & Galland & Project VOTE!",
        location: "Chicago, Illinois",
        years: "1992–2002",
        details: "Registered over 150,000 new voters in Illinois; represented victims of employment and housing discrimination."
      },
      {
        id: "43-leg-1",
        category: "state_local",
        role: "Illinois State Senator (13th District)",
        organization: "Illinois Senate",
        location: "Springfield, Illinois",
        years: "1997–2004",
        highlight: true,
        details: "Authored Illinois Earned Income Tax Credit; sponsored nation's first law requiring mandatory police videotaping of homicide interrogations."
      },
      {
        id: "43-sen-1",
        category: "federal_diplomatic",
        role: "United States Senator from Illinois (Keynote Speaker)",
        organization: "U.S. Senate",
        location: "Washington, D.C.",
        years: "2005–2008",
        highlight: true,
        details: "Catapulted to national prominence with 2004 DNC Keynote Address ('Not a liberal America and a conservative America—the United States of America'); co-sponsored Federal Funding Accountability and Transparency Act (USASpending.gov)."
      },
      {
        id: "43-pres",
        category: "presidency",
        role: "44th President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "2009–2017",
        highlight: true,
        details: "First African American president; enacted the Affordable Care Act ('Obamacare'); passed Dodd-Frank Wall Street Reform and American Recovery and Reinvestment Act; authorized mission resulting in death of Osama bin Laden; awarded 2009 Nobel Peace Prize."
      }
    ]
  },
  44: {
    presidentId: 44,
    presidentName: "Donald Trump",
    highestEducation: "Bachelor of Science in Economics (B.S. Econ)",
    almaMater: "Wharton School of the University of Pennsylvania (Class of 1968)",
    primaryField: "Real Estate Developer, Television Producer & Entertainment Executive",
    steppingStoneRole: "Chairman & President of The Trump Organization",
    treeNodes: [
      {
        id: "44-edu-1",
        category: "education",
        role: "Undergraduate Business & Real Estate Finance Studies",
        organization: "Fordham University & Wharton School of the University of Pennsylvania",
        location: "New York City & Philadelphia, Pennsylvania",
        years: "1964–1968",
        details: "Graduated from Wharton with a B.S. in Economics; worked on father Fred Trump's outer-borough housing developments during vacations."
      },
      {
        id: "44-civ-1",
        category: "early_career",
        role: "President & Chairman of The Trump Organization",
        organization: "The Trump Organization",
        location: "New York City & Global",
        years: "1971–2017",
        highlight: true,
        details: "Developed major Manhattan commercial and hospitality real estate (Grand Hyatt Hotel, 58-story Trump Tower on Fifth Avenue, Wollman Rink restoration); developed international golf resorts and residential towers."
      },
      {
        id: "44-civ-2",
        category: "early_career",
        role: "Bestselling Author ('The Art of the Deal')",
        organization: "Random House Publishing",
        location: "New York City",
        years: "1987",
        details: "Published business memoir 'The Art of the Deal', which spent 48 weeks on the New York Times Bestseller list."
      },
      {
        id: "44-civ-3",
        category: "early_career",
        role: "Television Host & Executive Producer of 'The Apprentice'",
        organization: "NBC Universal & Mark Burnett Productions",
        location: "New York City",
        years: "2004–2015",
        highlight: true,
        details: "Hosted 14 seasons of hit reality television franchise; popularized the catchphrase 'You're fired!'; co-owned Miss Universe and Miss USA pageants (1996–2015)."
      },
      {
        id: "44-pres",
        category: "presidency",
        role: "45th President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "2017–2021",
        highlight: true,
        details: "Signed Tax Cuts and Jobs Act of 2017; enacted bipartisan First Step Act criminal justice reform; replaced NAFTA with the United States-Mexico-Canada Agreement (USMCA); brokered Abraham Accords normalizing Arab-Israeli relations; launched Operation Warp Speed."
      }
    ]
  },
  45: {
    presidentId: 45,
    presidentName: "Joe Biden",
    highestEducation: "Juris Doctor (J.D.)",
    almaMater: "University of Delaware (B.A. 1965) & Syracuse University College of Law (J.D. 1968)",
    primaryField: "Public Defender, County Councilman, 36-Year U.S. Senator & Vice President",
    steppingStoneRole: "47th Vice President of the United States (2 Terms) & 6-Term U.S. Senator",
    treeNodes: [
      {
        id: "45-edu-1",
        category: "education",
        role: "Bachelor of Arts in History & Political Science",
        organization: "University of Delaware",
        location: "Newark, Delaware",
        years: "1961–1965",
        details: "Played freshman football; active in student government and civil rights demonstrations."
      },
      {
        id: "45-edu-2",
        category: "education",
        role: "Juris Doctor (J.D.)",
        organization: "Syracuse University College of Law",
        location: "Syracuse, New York",
        years: "1965–1968",
        details: "Admitted to the Delaware bar in 1969; began legal practice in Wilmington."
      },
      {
        id: "45-civ-1",
        category: "early_career",
        role: "Public Defender & Law Firm Partner",
        organization: "New Castle County Public Defender Office & Biden & Walsh",
        location: "Wilmington, Delaware",
        years: "1969–1972",
        details: "Represented indigent criminal defendants in Wilmington municipal and county courts."
      },
      {
        id: "45-leg-1",
        category: "state_local",
        role: "Member of New Castle County Council (4th District)",
        organization: "New Castle County Government",
        location: "Wilmington, Delaware",
        years: "1970–1972",
        details: "Advocated against suburban highway sprawl and supported public housing desegregation."
      },
      {
        id: "45-sen-1",
        category: "federal_diplomatic",
        role: "United States Senator from Delaware (36 Years)",
        organization: "U.S. Senate",
        location: "Washington, D.C.",
        years: "1973–2009",
        highlight: true,
        details: "Sixth-youngest senator in U.S. history when elected at age 29; Chairman of Senate Judiciary Committee (1987–1995; authored Violence Against Women Act); Chairman of Senate Foreign Relations Committee (2001–2003, 2007–2009)."
      },
      {
        id: "45-vp",
        category: "federal_diplomatic",
        role: "47th Vice President of the United States (2 Terms under Obama)",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "2009–2017",
        highlight: true,
        details: "Oversaw $800 billion American Recovery and Reinvestment Act implementation; awarded Presidential Medal of Freedom with Distinction."
      },
      {
        id: "45-pres",
        category: "presidency",
        role: "46th President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "2021–2025",
        highlight: true,
        details: "Enacted American Rescue Plan, bipartisan Infrastructure Investment and Jobs Act ($1.2 trillion), CHIPS and Science Act, and Inflation Reduction Act; strengthened NATO alliance following Russian invasion of Ukraine."
      }
    ]
  },
  46: {
    presidentId: 46,
    presidentName: "Donald Trump",
    highestEducation: "Bachelor of Science in Economics (B.S. Econ)",
    almaMater: "Wharton School of the University of Pennsylvania (Class of 1968)",
    primaryField: "Real Estate Developer, Entertainment Executive & 45th and 47th President",
    steppingStoneRole: "45th President of the United States & Real Estate Developer",
    treeNodes: [
      {
        id: "46-edu-1",
        category: "education",
        role: "Undergraduate Business & Real Estate Finance Studies",
        organization: "Fordham University & Wharton School of the University of Pennsylvania",
        location: "New York City & Philadelphia, Pennsylvania",
        years: "1964–1968",
        details: "Graduated from Wharton with a B.S. in Economics; worked on father Fred Trump's outer-borough housing developments during vacations."
      },
      {
        id: "46-civ-1",
        category: "early_career",
        role: "President & Chairman of The Trump Organization",
        organization: "The Trump Organization",
        location: "New York City & Global",
        years: "1971–2017",
        highlight: true,
        details: "Developed major Manhattan commercial and hospitality real estate (Grand Hyatt Hotel, 58-story Trump Tower on Fifth Avenue, Wollman Rink restoration); developed international golf resorts and residential towers."
      },
      {
        id: "46-civ-2",
        category: "early_career",
        role: "Bestselling Author ('The Art of the Deal')",
        organization: "Random House Publishing",
        location: "New York City",
        years: "1987",
        details: "Published business memoir 'The Art of the Deal', which spent 48 weeks on the New York Times Bestseller list."
      },
      {
        id: "46-civ-3",
        category: "early_career",
        role: "Television Host & Executive Producer of 'The Apprentice'",
        organization: "NBC Universal & Mark Burnett Productions",
        location: "New York City",
        years: "2004–2015",
        highlight: true,
        details: "Hosted 14 seasons of hit reality television franchise; popularized the catchphrase 'You're fired!'; co-owned Miss Universe and Miss USA pageants (1996–2015)."
      },
      {
        id: "46-pres-1",
        category: "presidency",
        role: "45th President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "2017–2021",
        highlight: true,
        details: "Signed Tax Cuts and Jobs Act of 2017; enacted bipartisan First Step Act criminal justice reform; replaced NAFTA with USMCA; brokered Abraham Accords; launched Operation Warp Speed."
      },
      {
        id: "46-pres-2",
        category: "presidency",
        role: "47th President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "2025–Present",
        highlight: true,
        details: "Achieved historic second non-consecutive presidential election victory in American history (joining Grover Cleveland)."
      }
    ]
  }
};
