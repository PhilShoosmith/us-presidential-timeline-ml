import { PresidentCareerProfile } from '../types';

export const presidents1to15: Record<number, PresidentCareerProfile> = {
  1: {
    presidentId: 1,
    presidentName: "George Washington",
    highestEducation: "Self-Educated & Licensed County Surveyor",
    almaMater: "College of William & Mary (Surveyor's License, 1749)",
    primaryField: "Planter, Surveyor & Military Commander",
    steppingStoneRole: "Commander-in-Chief of the Continental Army",
    treeNodes: [
      {
        id: "1-edu-1",
        category: "education",
        role: "Early Schooling & Mathematics / Surveying Tutoring",
        organization: "Lower Church School & Family Estate",
        location: "Westmoreland County, Virginia",
        years: "1738–1747",
        details: "Educated by tutors and local schoolmaster; mastered arithmetic, geometry, trigonometry, and land surveying principles."
      },
      {
        id: "1-edu-2",
        category: "education",
        role: "Certified Land Surveyor",
        organization: "College of William & Mary",
        location: "Williamsburg, Virginia",
        years: "1749",
        details: "Earned official surveyor's license at age 17, enabling legal charting of the expanding Virginia frontier."
      },
      {
        id: "1-civ-1",
        category: "early_career",
        role: "Official Surveyor of Culpeper County",
        organization: "Culpeper County, Colony of Virginia",
        location: "Virginia Frontier",
        years: "1749–1750",
        details: "Conducted dozens of backcountry surveys in Shenandoah Valley for Lord Fairfax, acquiring frontier survival skills and land holdings."
      },
      {
        id: "1-mil-1",
        category: "military",
        role: "District Adjutant Major & Envoy to French Outposts",
        organization: "Virginia Provincial Militia",
        location: "Ohio Country / Fort Le Boeuf",
        years: "1752–1754",
        details: "Dispatched by Governor Dinwiddie on diplomatic-military trek demanding French withdrawal; commanded troops in Jumonville Glen skirmish."
      },
      {
        id: "1-mil-2",
        category: "military",
        role: "Colonel & Commander of the Virginia Regiment",
        organization: "Colonial Virginia Provincial Forces",
        location: "Virginia & Pennsylvania Frontier",
        years: "1755–1758",
        details: "Hero of the Monongahela after General Braddock's defeat; organized frontier fortifications defending 300 miles of mountain passes."
      },
      {
        id: "1-leg-1",
        category: "state_local",
        role: "Member of the Virginia House of Burgesses",
        organization: "Colony of Virginia General Assembly",
        location: "Williamsburg, Virginia",
        years: "1758–1775",
        details: "Represented Frederick and Fairfax counties for 17 consecutive years; vocal opponent of the Stamp Act and Townshend Acts."
      },
      {
        id: "1-fed-1",
        category: "federal_diplomatic",
        role: "Delegate to the Continental Congress",
        organization: "First and Second Continental Congress",
        location: "Philadelphia, Pennsylvania",
        years: "1774–1775",
        details: "Attended sessions in military uniform; elected unanimously by delegates to take command of all patriot armed forces."
      },
      {
        id: "1-mil-3",
        category: "military",
        role: "Commander-in-Chief of the Continental Army",
        organization: "Continental Army",
        location: "Thirteen American Colonies",
        years: "1775–1783",
        highlight: true,
        details: "Engineered victories at Trenton, Princeton, and Yorktown; preserved the armed revolution through Valley Forge and surrendered commission peacefully."
      },
      {
        id: "1-fed-2",
        category: "federal_diplomatic",
        role: "President of the Constitutional Convention",
        organization: "Federal Constitutional Convention",
        location: "Independence Hall, Philadelphia",
        years: "1787",
        highlight: true,
        details: "Presided over the drafting and signing of the United States Constitution, unifying rival state factions behind a strong federal republic."
      },
      {
        id: "1-pres",
        category: "presidency",
        role: "1st President of the United States",
        organization: "Executive Branch of the United States",
        location: "New York City & Philadelphia",
        years: "1789–1797",
        highlight: true,
        details: "Unanimously elected twice; founded the Cabinet system, established federal judiciary, upheld neutrality in European wars, and set two-term precedent."
      },
      {
        id: "1-post",
        category: "post_presidency",
        role: "Senior Officer & Lieutenant General of the U.S. Army",
        organization: "United States Army",
        location: "Mount Vernon, Virginia",
        years: "1798–1799",
        details: "Commissioned by President John Adams to organize provisional army during the Quasi-War crisis with France."
      }
    ]
  },
  2: {
    presidentId: 2,
    presidentName: "John Adams",
    highestEducation: "Master of Arts (A.M.) in Law and Classics",
    almaMater: "Harvard College (A.B. 1755, A.M. 1758)",
    primaryField: "Constitutional Lawyer, Diplomat & Philosopher",
    steppingStoneRole: "1st Vice President of the United States",
    treeNodes: [
      {
        id: "2-edu-1",
        category: "education",
        role: "Bachelor of Arts & Master of Arts",
        organization: "Harvard College",
        location: "Cambridge, Massachusetts",
        years: "1751–1758",
        details: "Studied classical literature, rhetoric, and moral philosophy; delivered commencement address in Latin."
      },
      {
        id: "2-edu-2",
        category: "education",
        role: "Law Apprenticeship under James Putnam",
        organization: "Putnam Law Office",
        location: "Worcester, Massachusetts",
        years: "1756–1758",
        details: "Read common law, civil law, and Blackstone while serving as town schoolmaster; admitted to Suffolk County bar in 1758."
      },
      {
        id: "2-civ-1",
        category: "early_career",
        role: "Trial Attorney & Defense Counsel",
        organization: "Private Law Practice",
        location: "Boston, Massachusetts",
        years: "1758–1774",
        details: "Courageously defended British soldiers involved in the 1770 Boston Massacre to uphold the principle of fair trial and rule of law."
      },
      {
        id: "2-leg-1",
        category: "state_local",
        role: "Member of the Massachusetts General Court",
        organization: "Colony of Massachusetts Assembly",
        location: "Boston, Massachusetts",
        years: "1770",
        details: "Elected Boston representative to legislature; authored radical legal critiques of British parliamentary taxation."
      },
      {
        id: "2-fed-1",
        category: "federal_diplomatic",
        role: "Delegate to Continental Congress",
        organization: "Continental Congress",
        location: "Philadelphia, Pennsylvania",
        years: "1774–1778",
        highlight: true,
        details: "The 'Colossus of Independence'; champion debater for separation from Britain and member of the Committee of Five drafting the Declaration."
      },
      {
        id: "2-dip-1",
        category: "federal_diplomatic",
        role: "U.S. Commissioner & Envoy to France",
        organization: "Continental Congress Diplomatic Mission",
        location: "Paris, Kingdom of France",
        years: "1778–1779",
        details: "Joined Benjamin Franklin in securing French naval and financial backing for the American revolutionary war."
      },
      {
        id: "2-leg-2",
        category: "state_local",
        role: "Principal Author of the Massachusetts Constitution",
        organization: "Massachusetts Constitutional Convention",
        location: "Cambridge, Massachusetts",
        years: "1779–1780",
        highlight: true,
        details: "Drafted the 1780 Massachusetts Constitution, the world's oldest functioning written constitution and primary model for the U.S. Constitution."
      },
      {
        id: "2-dip-2",
        category: "federal_diplomatic",
        role: "Minister to the Netherlands & Treaty of Paris Negotiator",
        organization: "U.S. Diplomatic Service",
        location: "The Hague, Netherlands & Paris",
        years: "1780–1783",
        details: "Secured Dutch recognition and critical loans; co-signed Treaty of Paris ending the Revolutionary War."
      },
      {
        id: "2-dip-3",
        category: "federal_diplomatic",
        role: "1st U.S. Minister to the Court of St. James's (Great Britain)",
        organization: "U.S. Foreign Service",
        location: "London, Great Britain",
        years: "1785–1788",
        details: "First American ambassador to Great Britain; established post-war diplomatic ties directly with King George III."
      },
      {
        id: "2-vp",
        category: "federal_diplomatic",
        role: "1st Vice President of the United States",
        organization: "Executive Branch of the United States",
        location: "New York & Philadelphia",
        years: "1789–1797",
        highlight: true,
        details: "Served two terms under George Washington; cast a record 29 tie-breaking votes as President of the Senate to protect national administration policies."
      },
      {
        id: "2-pres",
        category: "presidency",
        role: "2nd President of the United States",
        organization: "Executive Branch of the United States",
        location: "Philadelphia & Washington, D.C.",
        years: "1797–1801",
        highlight: true,
        details: "Built the United States Department of the Navy; peacefully settled Quasi-War with France; first president to occupy the White House."
      }
    ]
  },
  3: {
    presidentId: 3,
    presidentName: "Thomas Jefferson",
    highestEducation: "College Graduate & Legal Studies under George Wythe",
    almaMater: "College of William & Mary (Class of 1762)",
    primaryField: "Philosopher, Architect, Statesman & Planter",
    steppingStoneRole: "2nd Vice President & 1st Secretary of State",
    treeNodes: [
      {
        id: "3-edu-1",
        category: "education",
        role: "Collegiate Studies in Science, Mathematics & Philosophy",
        organization: "College of William & Mary",
        location: "Williamsburg, Virginia",
        years: "1760–1762",
        details: "Mentored by Dr. William Small; mastered Latin, Greek, French, natural philosophy, and Enlightenment principles."
      },
      {
        id: "3-edu-2",
        category: "education",
        role: "Legal Apprenticeship under George Wythe",
        organization: "Wythe Chambers",
        location: "Williamsburg, Virginia",
        years: "1762–1767",
        details: "Five years of rigorous immersion in English jurisprudence, Roman law, and equity jurisprudence; admitted to bar in 1767."
      },
      {
        id: "3-civ-1",
        category: "early_career",
        role: "Practicing Barrister & General Court Litigator",
        organization: "Private Law Practice",
        location: "Colony of Virginia",
        years: "1767–1774",
        details: "Argued hundreds of civil land tenure and constitutional cases across Virginia before shifting fully to revolutionary statecraft."
      },
      {
        id: "3-leg-1",
        category: "state_local",
        role: "Member of Virginia House of Burgesses",
        organization: "Colony of Virginia Assembly",
        location: "Williamsburg, Virginia",
        years: "1769–1775",
        details: "Authored 'A Summary View of the Rights of British America' (1774), laying foundational argument for colonial self-rule."
      },
      {
        id: "3-fed-1",
        category: "federal_diplomatic",
        role: "Delegate to Continental Congress & Declaration Drafter",
        organization: "Second Continental Congress",
        location: "Philadelphia, Pennsylvania",
        years: "1775–1776",
        highlight: true,
        details: "Principal author of the Declaration of Independence (1776), crystallizing human rights philosophy: 'Life, Liberty and the pursuit of Happiness'."
      },
      {
        id: "3-gov-1",
        category: "state_local",
        role: "2nd Governor of Virginia",
        organization: "Commonwealth of Virginia",
        location: "Richmond, Virginia",
        years: "1779–1781",
        details: "Led state mobilization during British invasion; authored the Virginia Statute for Religious Freedom."
      },
      {
        id: "3-dip-1",
        category: "federal_diplomatic",
        role: "United States Minister to France",
        organization: "U.S. Diplomatic Service",
        location: "Paris, France",
        years: "1785–1789",
        details: "Succeeded Benjamin Franklin; witnessed early stages of French Revolution and negotiated commercial treaties across Europe."
      },
      {
        id: "3-cab-1",
        category: "federal_diplomatic",
        role: "1st United States Secretary of State",
        organization: "Department of State",
        location: "New York & Philadelphia",
        years: "1790–1793",
        highlight: true,
        details: "Organized the diplomatic corps and consular offices; championed republican agrarian foreign policy alongside James Madison."
      },
      {
        id: "3-vp",
        category: "federal_diplomatic",
        role: "2nd Vice President of the United States",
        organization: "Executive Branch of the United States",
        location: "Philadelphia, Pennsylvania",
        years: "1797–1801",
        highlight: true,
        details: "Presided over U.S. Senate; authored 'A Manual of Parliamentary Practice' and secret Kentucky Resolutions against Alien and Sedition Acts."
      },
      {
        id: "3-pres",
        category: "presidency",
        role: "3rd President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1801–1809",
        highlight: true,
        details: "Completed Louisiana Purchase (1803) doubling U.S. territory; commissioned Lewis & Clark expedition; cut national debt."
      },
      {
        id: "3-post",
        category: "post_presidency",
        role: "Founder & 1st Rector of the University of Virginia",
        organization: "University of Virginia",
        location: "Charlottesville, Virginia",
        years: "1819–1826",
        details: "Designed the Rotunda and Academical Village campus, planned liberal curriculum, and secured charter for first secular state university."
      }
    ]
  },
  4: {
    presidentId: 4,
    presidentName: "James Madison",
    highestEducation: "Bachelor of Arts (A.B.) & Postgraduate Theological Studies",
    almaMater: "College of New Jersey (Princeton University, Class of 1771)",
    primaryField: "Constitutional Scholar, Statesman & Political Theorist",
    steppingStoneRole: "5th U.S. Secretary of State",
    treeNodes: [
      {
        id: "4-edu-1",
        category: "education",
        role: "Bachelor of Arts (Completed in 2 Years)",
        organization: "College of New Jersey (Princeton)",
        location: "Princeton, New Jersey",
        years: "1769–1771",
        details: "Completed standard 4-year degree in 2 years; studied Hebrew, political philosophy, and history under President John Witherspoon."
      },
      {
        id: "4-leg-1",
        category: "state_local",
        role: "Member of Virginia Constitutional Convention & Council of State",
        organization: "Commonwealth of Virginia",
        location: "Williamsburg, Virginia",
        years: "1776–1779",
        details: "Drafted Virginia guarantee of religious freedom; served as key advisor to Governors Patrick Henry and Thomas Jefferson."
      },
      {
        id: "4-fed-1",
        category: "federal_diplomatic",
        role: "Delegate to the Continental Congress",
        organization: "Continental Congress",
        location: "Philadelphia, Pennsylvania",
        years: "1780–1783",
        details: "Youngest member of the assembly; championed national taxation authority and commercial regulation."
      },
      {
        id: "4-fed-2",
        category: "federal_diplomatic",
        role: "Father of the U.S. Constitution & Federalist Papers Co-Author",
        organization: "Constitutional Convention",
        location: "Philadelphia, Pennsylvania",
        years: "1787–1788",
        highlight: true,
        details: "Authored Virginia Plan creating three-branch government; took exhaustive notes on debates; co-wrote The Federalist Papers with Hamilton and Jay."
      },
      {
        id: "4-fed-3",
        category: "federal_diplomatic",
        role: "U.S. Representative from Virginia (Drafter of Bill of Rights)",
        organization: "U.S. House of Representatives",
        location: "New York & Philadelphia",
        years: "1789–1797",
        highlight: true,
        details: "Led the First Congress; authored and steered the passage of the U.S. Bill of Rights (First 10 Amendments) through Congress."
      },
      {
        id: "4-cab-1",
        category: "federal_diplomatic",
        role: "5th United States Secretary of State",
        organization: "Department of State",
        location: "Washington, D.C.",
        years: "1801–1809",
        highlight: true,
        details: "Directed negotiations for Louisiana Purchase; defended American maritime neutral rights against British and French naval blockades."
      },
      {
        id: "4-pres",
        category: "presidency",
        role: "4th President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1809–1817",
        highlight: true,
        details: "Led country through War of 1812 against Great Britain; chartered Second Bank of the United States; solidified American independence."
      },
      {
        id: "4-post",
        category: "post_presidency",
        role: "2nd Rector of the University of Virginia",
        organization: "University of Virginia",
        location: "Charlottesville, Virginia",
        years: "1826–1836",
        details: "Succeeded Jefferson as rector, overseeing university governance and faculty expansion for a decade."
      }
    ]
  },
  5: {
    presidentId: 5,
    presidentName: "James Monroe",
    highestEducation: "Collegiate Studies & Legal Mentorship under Jefferson",
    almaMater: "College of William & Mary (1774–1776)",
    primaryField: "Military Officer, Diplomat, Governor & Statesman",
    steppingStoneRole: "7th U.S. Secretary of State & Secretary of War",
    treeNodes: [
      {
        id: "5-edu-1",
        category: "education",
        role: "Collegiate Studies",
        organization: "College of William & Mary",
        location: "Williamsburg, Virginia",
        years: "1774–1776",
        details: "Left college in 1776 to enlist in the 3rd Virginia Infantry Regiment of the Continental Army."
      },
      {
        id: "5-mil-1",
        category: "military",
        role: "Major & Hero of the Battle of Trenton",
        organization: "Continental Army",
        location: "New Jersey & Pennsylvania",
        years: "1776–1779",
        highlight: true,
        details: "Severely wounded in the shoulder while storming Hessian artillery at Trenton; wintered at Valley Forge under Washington."
      },
      {
        id: "5-edu-2",
        category: "education",
        role: "Legal Apprenticeship under Thomas Jefferson",
        organization: "Office of Governor Thomas Jefferson",
        location: "Richmond, Virginia",
        years: "1780–1783",
        details: "Studied public law, economics, and foreign languages under Jefferson's personal tutelage."
      },
      {
        id: "5-leg-1",
        category: "federal_diplomatic",
        role: "Delegate to Congress of the Confederation",
        organization: "Confederation Congress",
        location: "Annapolis & New York",
        years: "1783–1786",
        details: "Advocated for free navigation of the Mississippi River and western territorial development."
      },
      {
        id: "5-sen-1",
        category: "federal_diplomatic",
        role: "United States Senator from Virginia",
        organization: "U.S. Senate",
        location: "Philadelphia, Pennsylvania",
        years: "1790–1794",
        details: "Formed early Democratic-Republican opposition alliance with Madison and Jefferson."
      },
      {
        id: "5-dip-1",
        category: "federal_diplomatic",
        role: "U.S. Minister to France & United Kingdom",
        organization: "U.S. Diplomatic Service",
        location: "Paris, France & London, UK",
        years: "1794–1796, 1803–1807",
        details: "Freed Thomas Paine and Madame de Lafayette from French imprisonment; co-negotiated 1803 Louisiana Purchase with Robert Livingston."
      },
      {
        id: "5-gov-1",
        category: "state_local",
        role: "12th & 16th Governor of Virginia",
        organization: "Commonwealth of Virginia",
        location: "Richmond, Virginia",
        years: "1799–1802, 1811",
        details: "Elected four terms as governor; modernized Richmond infrastructure and Virginia militia training."
      },
      {
        id: "5-cab-1",
        category: "federal_diplomatic",
        role: "Secretary of State & Secretary of War",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1811–1817",
        highlight: true,
        details: "Held both cabinet portfolios simultaneously during the War of 1812, directing battle operations after the burning of Washington."
      },
      {
        id: "5-pres",
        category: "presidency",
        role: "5th President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1817–1825",
        highlight: true,
        details: "Presided over 'Era of Good Feelings'; proclaimed Monroe Doctrine (1823); acquired Florida through Adams-Onís Treaty; signed Missouri Compromise."
      }
    ]
  },
  6: {
    presidentId: 6,
    presidentName: "John Quincy Adams",
    highestEducation: "Master of Arts (A.M.) in Law & Rhetoric",
    almaMater: "Harvard College (A.B. 1787, A.M. 1790) & Leiden University",
    primaryField: "Diplomat, International Law Scholar & Congressman",
    steppingStoneRole: "8th U.S. Secretary of State",
    treeNodes: [
      {
        id: "6-edu-1",
        category: "education",
        role: "Classical European Schooling & University of Leiden",
        organization: "Passy Academy (Paris) & Leiden University",
        location: "France & Netherlands",
        years: "1778–1781",
        details: "Learned fluent French, Dutch, and classical Greek while accompanying father John Adams on European diplomatic missions."
      },
      {
        id: "6-dip-1",
        category: "federal_diplomatic",
        role: "Secretary to U.S. Minister to Russia (Francis Dana)",
        organization: "U.S. Diplomatic Mission to Russian Empire",
        location: "Saint Petersburg, Russia",
        years: "1781–1783",
        details: "Served as diplomatic secretary and interpreter in the court of Catherine the Great at age 14."
      },
      {
        id: "6-edu-2",
        category: "education",
        role: "Bachelor of Arts & Master of Arts",
        organization: "Harvard College",
        location: "Cambridge, Massachusetts",
        years: "1785–1790",
        details: "Graduated second in class; studied law under Theophilus Parsons in Newburyport; admitted to bar in 1790."
      },
      {
        id: "6-dip-2",
        category: "federal_diplomatic",
        role: "U.S. Minister to the Netherlands & Prussia",
        organization: "U.S. Foreign Service",
        location: "The Hague & Berlin",
        years: "1794–1801",
        details: "Appointed by George Washington; negotiated key commercial and navigation treaties across Northern Europe."
      },
      {
        id: "6-sen-1",
        category: "federal_diplomatic",
        role: "United States Senator from Massachusetts",
        organization: "U.S. Senate",
        location: "Washington, D.C.",
        years: "1803–1808",
        details: "Broke with Federalist party to support Jefferson's Louisiana Purchase and Embargo Act based on national interest."
      },
      {
        id: "6-dip-3",
        category: "federal_diplomatic",
        role: "1st U.S. Minister to the Russian Empire & Envoy to Great Britain",
        organization: "U.S. Foreign Service",
        location: "St. Petersburg, Russia & London, UK",
        years: "1809–1817",
        details: "Established relations with Tsar Alexander I; chief American commissioner negotiating the Treaty of Ghent ending War of 1812."
      },
      {
        id: "6-cab-1",
        category: "federal_diplomatic",
        role: "8th United States Secretary of State",
        organization: "Department of State",
        location: "Washington, D.C.",
        years: "1817–1825",
        highlight: true,
        details: "Generally regarded as America's greatest Secretary of State; negotiated Adams-Onís Treaty acquiring Florida and primary author of the Monroe Doctrine."
      },
      {
        id: "6-pres",
        category: "presidency",
        role: "6th President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1825–1829",
        highlight: true,
        details: "Championed ambitious national internal improvements (roads, canals, astronomical observatories, national university)."
      },
      {
        id: "6-post",
        category: "post_presidency",
        role: "U.S. Representative from Massachusetts ('Old Man Eloquent')",
        organization: "U.S. House of Representatives",
        location: "Washington, D.C.",
        years: "1831–1848",
        highlight: true,
        details: "Only former president to serve in House; waged heroic 8-year battle to repeal the pro-slavery 'Gag Rule'; successfully argued the Amistad case before Supreme Court."
      }
    ]
  },
  7: {
    presidentId: 7,
    presidentName: "Andrew Jackson",
    highestEducation: "Self-Taught; Read Law under John McNairy & Spruce Macay",
    almaMater: "Salisbury Law Apprenticeship (Admitted to Bar, 1787)",
    primaryField: "Military General, Frontier Prosecutor & Judge",
    steppingStoneRole: "Major General in U.S. Army & Military Governor of Florida",
    treeNodes: [
      {
        id: "7-mil-1",
        category: "military",
        role: "Patriot Courier (Prisoner of War at Age 13)",
        organization: "South Carolina Revolutionary Militia",
        location: "Waxhaws, South Carolina",
        years: "1780–1781",
        details: "Captured by British dragoons; scarred by British officer's saber for refusing to clean boots; contracted smallpox in captivity."
      },
      {
        id: "7-edu-1",
        category: "education",
        role: "Legal Apprenticeship & Bar Admission",
        organization: "Macay & Stokes Law Offices",
        location: "Salisbury, North Carolina",
        years: "1784–1787",
        details: "Read law, horse trade contracts, and land titles; admitted to the North Carolina bar at age 20."
      },
      {
        id: "7-civ-1",
        category: "early_career",
        role: "Public Prosecutor of the Western District of North Carolina",
        organization: "Western Judicial District (Tennessee Territory)",
        location: "Nashville, Tennessee",
        years: "1788–1796",
        details: "Traveled treacherous frontier roads enforcing creditor rights, boundary claims, and prosecuting violent offenders in fledgling Nashville."
      },
      {
        id: "7-fed-1",
        category: "federal_diplomatic",
        role: "1st U.S. Representative & U.S. Senator from Tennessee",
        organization: "U.S. Congress",
        location: "Philadelphia, Pennsylvania",
        years: "1796–1798",
        details: "Participated in Tennessee Constitutional Convention; elected state's first federal representative and subsequently senator."
      },
      {
        id: "7-jud-1",
        category: "state_local",
        role: "Justice of the Tennessee Supreme Court",
        organization: "Tennessee Superior Court of Law and Equity",
        location: "Knoxville & Nashville, Tennessee",
        years: "1798–1804",
        details: "Rode circuit across Tennessee dispensing rough-and-ready frontier justice on property, contract, and criminal cases."
      },
      {
        id: "7-mil-2",
        category: "military",
        role: "Major General in the U.S. Army & Battle of New Orleans Hero",
        organization: "United States Army & Tennessee Militia",
        location: "New Orleans & Southern Frontier",
        years: "1812–1818",
        highlight: true,
        details: "Decisively defeated veteran British invasion army at the Battle of New Orleans (1815); commanded First Seminole War capturing Pensacola."
      },
      {
        id: "7-gov-1",
        category: "state_local",
        role: "1st Military Governor of Florida Territory",
        organization: "Federal Territorial Administration",
        location: "Pensacola & St. Augustine, Florida",
        years: "1821",
        details: "Accepted official handover of Florida from the Kingdom of Spain; established civilian government and court system."
      },
      {
        id: "7-sen-2",
        category: "federal_diplomatic",
        role: "United States Senator from Tennessee",
        organization: "U.S. Senate",
        location: "Washington, D.C.",
        years: "1823–1825",
        details: "Re-elected to Senate as champion of popular western and working-class democracy; received plurality in 1824 election."
      },
      {
        id: "7-pres",
        category: "presidency",
        role: "7th President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1829–1837",
        highlight: true,
        details: "Founded modern Democratic Party; eliminated national debt; fought Second Bank of the United States; stood firm against Nullification Crisis."
      }
    ]
  },
  8: {
    presidentId: 8,
    presidentName: "Martin Van Buren",
    highestEducation: "Kinderhook Academy & Legal Clerkship under William P. Van Ness",
    almaMater: "Kinderhook Academy (New York Bar, 1803)",
    primaryField: "Lawyer, Party Organizer, Governor & Diplomat",
    steppingStoneRole: "8th Vice President & 10th Secretary of State",
    treeNodes: [
      {
        id: "8-edu-1",
        category: "education",
        role: "Classical Studies & Legal Clerkship",
        organization: "Kinderhook Academy & Van Ness Chambers",
        location: "Kinderhook & New York City",
        years: "1796–1803",
        details: "First president born an American citizen (and native Dutch speaker); mastered New York chancery law under Burr confidant William P. Van Ness."
      },
      {
        id: "8-civ-1",
        category: "early_career",
        role: "Trial Attorney & Surrogate of Columbia County",
        organization: "Columbia County Court",
        location: "Hudson, New York",
        years: "1803–1813",
        details: "Built successful legal practice handling tenant-landlord disputes; appointed county surrogate judge."
      },
      {
        id: "8-leg-1",
        category: "state_local",
        role: "New York State Senator & Attorney General",
        organization: "State of New York",
        location: "Albany, New York",
        years: "1812–1819",
        details: "Supported War of 1812 bond issues; crafted the 'Albany Regency', America's first disciplined political party organization."
      },
      {
        id: "8-sen-1",
        category: "federal_diplomatic",
        role: "United States Senator from New York",
        organization: "U.S. Senate",
        location: "Washington, D.C.",
        years: "1821–1828",
        details: "Led the 'Bucktails' coalition; engineered the Jacksonian coalition uniting Southern planters with Northern plain republicans."
      },
      {
        id: "8-gov-1",
        category: "state_local",
        role: "9th Governor of New York",
        organization: "State of New York",
        location: "Albany, New York",
        years: "1829",
        details: "Enacted the pioneering Safety Fund system, an early forerunner of bank deposit insurance."
      },
      {
        id: "8-cab-1",
        category: "federal_diplomatic",
        role: "10th U.S. Secretary of State & Minister to Great Britain",
        organization: "Department of State",
        location: "Washington, D.C. & London",
        years: "1829–1832",
        highlight: true,
        details: "Key architect of Jackson administration policy; negotiated opening of British West Indian ports to American trade."
      },
      {
        id: "8-vp",
        category: "federal_diplomatic",
        role: "8th Vice President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1833–1837",
        highlight: true,
        details: "Jackson's designated political successor; presided over contentious Senate during the Bank War."
      },
      {
        id: "8-pres",
        category: "presidency",
        role: "8th President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1837–1841",
        highlight: true,
        details: "Established the Independent Treasury system to separate government funds from private banking; avoided war with Britain over Canadian border disputes."
      },
      {
        id: "8-post",
        category: "post_presidency",
        role: "Free Soil Party Presidential Nominee",
        organization: "Free Soil Party",
        location: "Buffalo, New York",
        years: "1848",
        details: "Ran on anti-slavery expansion platform under the banner 'Free Soil, Free Speech, Free Labor, and Free Men'."
      }
    ]
  },
  9: {
    presidentId: 9,
    presidentName: "William Henry Harrison",
    highestEducation: "Classical College & Medical Training (University of Pennsylvania)",
    almaMater: "Hampden–Sydney College & Medical Studies under Dr. Benjamin Rush",
    primaryField: "Military General, Territorial Governor & Diplomat",
    steppingStoneRole: "Major General in War of 1812 & U.S. Senator",
    treeNodes: [
      {
        id: "9-edu-1",
        category: "education",
        role: "Classical Studies in History & Latin",
        organization: "Hampden–Sydney College",
        location: "Prince Edward County, Virginia",
        years: "1787–1790",
        details: "Studied ancient military history and rhetoric; son of Declaration of Independence signer Benjamin Harrison V."
      },
      {
        id: "9-edu-2",
        category: "education",
        role: "Medical Studies under Dr. Benjamin Rush",
        organization: "University of Pennsylvania Medical School",
        location: "Philadelphia, Pennsylvania",
        years: "1790–1791",
        details: "Studied medicine under founding father Dr. Benjamin Rush before abandoning medical career upon father's death to enter the army."
      },
      {
        id: "9-mil-1",
        category: "military",
        role: "Ensign & Aide-de-Camp to General 'Mad Anthony' Wayne",
        organization: "Legion of the United States (U.S. Army)",
        location: "Northwest Indian Wars (Ohio)",
        years: "1791–1798",
        details: "Commended for bravery at Battle of Fallen Timbers (1794); signatory to Treaty of Greenville."
      },
      {
        id: "9-gov-1",
        category: "state_local",
        role: "1st Governor of the Indiana Territory & Territorial Delegate",
        organization: "Territory of the United States Northwest of the River Ohio",
        location: "Vincennes, Indiana Territory",
        years: "1801–1812",
        details: "Appointed by John Adams; negotiated treaties acquiring millions of acres of land for settlement."
      },
      {
        id: "9-mil-2",
        category: "military",
        role: "Major General & Hero of Tippecanoe and the Thames",
        organization: "United States Army",
        location: "Indiana & Upper Canada",
        years: "1811–1814",
        highlight: true,
        details: "Defeated Shawnee forces at Battle of Tippecanoe (1811); recaptured Detroit and defeated British and Tecumseh at Battle of the Thames (1813)."
      },
      {
        id: "9-fed-1",
        category: "federal_diplomatic",
        role: "U.S. Representative & U.S. Senator from Ohio",
        organization: "U.S. Congress",
        location: "Washington, D.C.",
        years: "1816–1819, 1825–1828",
        details: "Championed veteran pensions and western development; served as Chairman of the Senate Military Affairs Committee."
      },
      {
        id: "9-dip-1",
        category: "federal_diplomatic",
        role: "1st U.S. Minister to Gran Colombia",
        organization: "U.S. Diplomatic Service",
        location: "Bogotá, Gran Colombia",
        years: "1828–1829",
        details: "Appointed by John Quincy Adams; conducted diplomacy with Simón Bolívar regarding republican governance."
      },
      {
        id: "9-pres",
        category: "presidency",
        role: "9th President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1841",
        highlight: true,
        details: "Won famed 'Tippecanoe and Tyler Too' campaign; delivered longest inaugural address in history; died of pneumonia 31 days into office."
      }
    ]
  },
  10: {
    presidentId: 10,
    presidentName: "John Tyler",
    highestEducation: "Bachelor of Arts & Legal Mentorship under Edmund Randolph",
    almaMater: "College of William & Mary (Class of 1807)",
    primaryField: "Lawyer, Virginia Governor & U.S. Senator",
    steppingStoneRole: "10th Vice President of the United States",
    treeNodes: [
      {
        id: "10-edu-1",
        category: "education",
        role: "Bachelor of Arts in Economics & Classical Literature",
        organization: "College of William & Mary",
        location: "Williamsburg, Virginia",
        years: "1802–1807",
        details: "Graduated at age 17; studied political economy under Bishop James Madison."
      },
      {
        id: "10-edu-2",
        category: "education",
        role: "Legal Apprenticeship under Judge John Tyler Sr. & Edmund Randolph",
        organization: "Virginia Law Chambers",
        location: "Richmond, Virginia",
        years: "1807–1809",
        details: "Trained under former U.S. Attorney General Edmund Randolph; admitted to the bar at age 19."
      },
      {
        id: "10-leg-1",
        category: "state_local",
        role: "Member of the Virginia House of Delegates",
        organization: "General Assembly of Virginia",
        location: "Richmond, Virginia",
        years: "1811–1816, 1823–1825, 1839",
        details: "Staunch defender of strict constructionism, state sovereignty, and Jeffersonian principles."
      },
      {
        id: "10-fed-1",
        category: "federal_diplomatic",
        role: "U.S. Representative from Virginia",
        organization: "U.S. House of Representatives",
        location: "Washington, D.C.",
        years: "1816–1821",
        details: "Opposed the Missouri Compromise restrictions and federally funded internal improvements as unconstitutional."
      },
      {
        id: "10-gov-1",
        category: "state_local",
        role: "23rd Governor of Virginia",
        organization: "Commonwealth of Virginia",
        location: "Richmond, Virginia",
        years: "1825–1827",
        details: "Advocated for education, transport links, and state constitutional reform."
      },
      {
        id: "10-sen-1",
        category: "federal_diplomatic",
        role: "United States Senator from Virginia & President pro tempore",
        organization: "U.S. Senate",
        location: "Washington, D.C.",
        years: "1827–1836",
        details: "Resigned his Senate seat rather than vote to expunge censure against Andrew Jackson, prioritizing legislative independence."
      },
      {
        id: "10-vp",
        category: "federal_diplomatic",
        role: "10th Vice President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1841",
        highlight: true,
        details: "Elected on the 1840 Whig ticket; succeeded to presidency upon Harrison's death and firmly established precedent that VP becomes full President."
      },
      {
        id: "10-pres",
        category: "presidency",
        role: "10th President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1841–1845",
        highlight: true,
        details: "Annexed Texas by joint congressional resolution; signed Webster-Ashburton Treaty with Britain; opened diplomatic trade with China (Treaty of Wanghia)."
      }
    ]
  },
  11: {
    presidentId: 11,
    presidentName: "James K. Polk",
    highestEducation: "Bachelor of Arts (A.B.) with Highest Honors & Law Apprenticeship",
    almaMater: "University of North Carolina at Chapel Hill (Class of 1818)",
    primaryField: "Trial Attorney, Governor & Speaker of the House",
    steppingStoneRole: "13th Speaker of the U.S. House & Governor of Tennessee",
    treeNodes: [
      {
        id: "11-edu-1",
        category: "education",
        role: "Bachelor of Arts with Highest Honors (Valedictorian)",
        organization: "University of North Carolina at Chapel Hill",
        location: "Chapel Hill, North Carolina",
        years: "1816–1818",
        details: "Delivered commencement address in Latin; president of the Dialectic Society debating club."
      },
      {
        id: "11-edu-2",
        category: "education",
        role: "Legal Apprenticeship under Felix Grundy",
        organization: "Grundy Law Chambers",
        location: "Nashville, Tennessee",
        years: "1819–1820",
        details: "Studied criminal and civil litigation under master trial advocate Felix Grundy; admitted to bar in 1820."
      },
      {
        id: "11-civ-1",
        category: "early_career",
        role: "Trial Attorney & Clerk of Tennessee State Senate",
        organization: "Tennessee General Assembly & Private Practice",
        location: "Columbia & Murfreesboro, Tennessee",
        years: "1821–1823",
        details: "Built lucrative legal practice in Maury County; served as chief clerk organizing legislative records."
      },
      {
        id: "11-leg-1",
        category: "state_local",
        role: "Member of Tennessee House of Representatives",
        organization: "Tennessee General Assembly",
        location: "Murfreesboro, Tennessee",
        years: "1823–1825",
        details: "Voted for Andrew Jackson for U.S. Senate; earned nickname 'Young Hickory' for his fierce Jacksonian loyalty."
      },
      {
        id: "11-fed-1",
        category: "federal_diplomatic",
        role: "U.S. Representative from Tennessee (Ways and Means Chairman)",
        organization: "U.S. House of Representatives",
        location: "Washington, D.C.",
        years: "1825–1835",
        details: "Led Jackson's legislative defense during the Bank War as Chairman of the Ways and Means Committee."
      },
      {
        id: "11-spk-1",
        category: "federal_diplomatic",
        role: "13th Speaker of the United States House of Representatives",
        organization: "U.S. House of Representatives",
        location: "Washington, D.C.",
        years: "1835–1839",
        highlight: true,
        details: "Only Speaker of the House to ever become President of the United States; managed contentious slavery debates and gag rule rules."
      },
      {
        id: "11-gov-1",
        category: "state_local",
        role: "9th Governor of Tennessee",
        organization: "State of Tennessee",
        location: "Nashville, Tennessee",
        years: "1839–1841",
        details: "Revitalized the state Democratic party and campaigned tirelessly across all counties on foot and horseback."
      },
      {
        id: "11-pres",
        category: "presidency",
        role: "11th President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1845–1849",
        highlight: true,
        details: "Fulfilled all campaign goals in single 4-year term: acquired California and New Mexico territory (Treaty of Guadalupe Hidalgo), settled Oregon boundary with Britain, established Independent Treasury, and lowered tariffs."
      }
    ]
  },
  12: {
    presidentId: 12,
    presidentName: "Zachary Taylor",
    highestEducation: "Frontier Plantation Tutoring & Practical Military Command",
    almaMater: "Self-Educated / Career Commissioned U.S. Army Officer",
    primaryField: "40-Year Career Regular U.S. Army General",
    steppingStoneRole: "Major General & Commander of Army of Occupation in Mexico",
    treeNodes: [
      {
        id: "12-edu-1",
        category: "education",
        role: "Frontier Tutoring & Navigation / Tactics Study",
        organization: "Private Tutors & Frontier Schooling",
        location: "Louisville, Kentucky",
        years: "1790–1806",
        details: "Raised on Kentucky frontier; learned horsemanship, woodland scouting, and military treatises from father Richard Taylor, a Continental Army veteran."
      },
      {
        id: "12-mil-1",
        category: "military",
        role: "First Lieutenant in 7th U.S. Infantry Regiment",
        organization: "United States Army",
        location: "Indiana & Kentucky Frontier",
        years: "1808–1812",
        details: "Commissioned by President Thomas Jefferson during Napoleonic maritime tensions."
      },
      {
        id: "12-mil-2",
        category: "military",
        role: "Captain & Defender of Fort Harrison (War of 1812)",
        organization: "United States Army",
        location: "Indiana Territory",
        years: "1812–1815",
        highlight: true,
        details: "Heroically held Fort Harrison against Tecumseh's allied warriors; received first brevet promotion in U.S. Army history to Major."
      },
      {
        id: "12-mil-3",
        category: "military",
        role: "Colonel in Black Hawk War & Commander in Second Seminole War",
        organization: "1st Infantry Regiment & Army of the South",
        location: "Illinois, Wisconsin & Florida",
        years: "1832–1840",
        details: "Commanded troops at Battle of Bad Axe (1832); won decisive Battle of Lake Okeechobee (1837) against Seminole forces, earning nickname 'Old Rough and Ready'."
      },
      {
        id: "12-mil-4",
        category: "military",
        role: "Major General & Hero of Monterrey and Buena Vista",
        organization: "United States Army of Occupation",
        location: "Northern Mexico",
        years: "1845–1848",
        highlight: true,
        details: "Won astonishing victories against numerically superior Mexican forces at Palo Alto, Resaca de la Palma, Monterrey, and Buena Vista."
      },
      {
        id: "12-pres",
        category: "presidency",
        role: "12th President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1849–1850",
        highlight: true,
        details: "First president who had never held prior elective office; urged immediate admission of California and New Mexico as free states; died in office July 1850."
      }
    ]
  },
  13: {
    presidentId: 13,
    presidentName: "Millard Fillmore",
    highestEducation: "Self-Taught; Read Law with Judge Walter Wood",
    almaMater: "New Hope Academy & Law Clerkship (Admitted to Bar, 1823)",
    primaryField: "Textile Apprentice, Buffalo Trial Lawyer & Comptroller",
    steppingStoneRole: "12th Vice President & New York State Comptroller",
    treeNodes: [
      {
        id: "13-edu-1",
        category: "education",
        role: "Self-Education & Wool Carder Apprenticeship",
        organization: "New Hope Mill & Academy",
        location: "Cayuga County, New York",
        years: "1814–1819",
        details: "Apprenticed to clothier at age 14; bought out apprenticeship contract with savings and taught himself reading and grammar."
      },
      {
        id: "13-edu-2",
        category: "education",
        role: "Legal Clerkship under Judge Walter Wood",
        organization: "Wood Law Chambers",
        location: "Montville & Buffalo, New York",
        years: "1819–1823",
        details: "Taught school while copying legal documents; admitted to New York Court of Common Pleas in 1823."
      },
      {
        id: "13-civ-1",
        category: "early_career",
        role: "Founding Partner of Fillmore, Hall & Haven",
        organization: "Law Firm Practice",
        location: "Buffalo, New York",
        years: "1823–1847",
        details: "Built western New York's leading commercial law practice; helped establish Buffalo as major Great Lakes terminus of Erie Canal."
      },
      {
        id: "13-leg-1",
        category: "state_local",
        role: "Member of New York State Assembly",
        organization: "New York State Legislature",
        location: "Albany, New York",
        years: "1829–1831",
        details: "Successfully sponsored bill ending imprisonment for debt in New York state."
      },
      {
        id: "13-fed-1",
        category: "federal_diplomatic",
        role: "U.S. Representative from New York (Ways and Means Chairman)",
        organization: "U.S. House of Representatives",
        location: "Washington, D.C.",
        years: "1833–1835, 1837–1843",
        details: "Chaired Ways and Means Committee; drafted and enacted the protective Tariff of 1842."
      },
      {
        id: "13-gov-1",
        category: "state_local",
        role: "14th Comptroller of New York",
        organization: "Office of the New York State Comptroller",
        location: "Albany, New York",
        years: "1848–1849",
        details: "Reformed state bank note currency, which became blueprint for the National Banking Act."
      },
      {
        id: "13-vp",
        category: "federal_diplomatic",
        role: "12th Vice President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1849–1850",
        highlight: true,
        details: "Presided with strict impartiality over heated Senate debates on slavery expansion and Henry Clay's compromise bills."
      },
      {
        id: "13-pres",
        category: "presidency",
        role: "13th President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1850–1853",
        highlight: true,
        details: "Signed Compromise of 1850 into law; dispatched Commodore Matthew Perry's naval expedition opening Japan to foreign trade."
      },
      {
        id: "13-post",
        category: "post_presidency",
        role: "1st Chancellor of the University of Buffalo",
        organization: "University of Buffalo",
        location: "Buffalo, New York",
        years: "1846–1874",
        details: "Served as founding chancellor for nearly three decades, building medical and law schools."
      }
    ]
  },
  14: {
    presidentId: 14,
    presidentName: "Franklin Pierce",
    highestEducation: "Bachelor of Arts (A.B.) & Northampton Law School",
    almaMater: "Bowdoin College (Class of 1824)",
    primaryField: "Trial Lawyer, Mexican War Brigadier General & U.S. Senator",
    steppingStoneRole: "Brigadier General in Mexican War & U.S. Senator",
    treeNodes: [
      {
        id: "14-edu-1",
        category: "education",
        role: "Bachelor of Arts (Literary & Forensic Societies)",
        organization: "Bowdoin College",
        location: "Brunswick, Maine",
        years: "1820–1824",
        details: "Close college friendship with Nathaniel Hawthorne and Henry Wadsworth Longfellow; excelled in debate and military drills."
      },
      {
        id: "14-edu-2",
        category: "education",
        role: "Northampton Law School & Clerkship with Levi Woodbury",
        organization: "Northampton Law School",
        location: "Northampton, Massachusetts & Portsmouth, NH",
        years: "1824–1827",
        details: "Trained under future Supreme Court Justice Levi Woodbury; admitted to New Hampshire bar in 1827."
      },
      {
        id: "14-leg-1",
        category: "state_local",
        role: "Speaker of the New Hampshire House of Representatives",
        organization: "New Hampshire General Court",
        location: "Concord, New Hampshire",
        years: "1829–1833",
        details: "Elected Speaker at age 26; spearheaded Jacksonian banking and infrastructure legislation."
      },
      {
        id: "14-fed-1",
        category: "federal_diplomatic",
        role: "U.S. Representative & U.S. Senator from New Hampshire",
        organization: "U.S. Congress",
        location: "Washington, D.C.",
        years: "1833–1842",
        details: "Youngest member of the Senate when sworn in at age 32; served on Pensions and Military Affairs committees."
      },
      {
        id: "14-mil-1",
        category: "military",
        role: "Brigadier General in the Mexican-American War",
        organization: "United States Army (9th Infantry Regiment)",
        location: "Veracruz & Mexico City",
        years: "1847–1848",
        highlight: true,
        details: "Commanded a brigade of 2,500 men landing at Veracruz and marching with General Winfield Scott to capture Mexico City."
      },
      {
        id: "14-pres",
        category: "presidency",
        role: "14th President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1853–1857",
        highlight: true,
        details: "Signed Kansas-Nebraska Act of 1854; completed Gadsden Purchase from Mexico; finalized trade pacts with Great Britain and Japan."
      }
    ]
  },
  15: {
    presidentId: 15,
    presidentName: "James Buchanan",
    highestEducation: "Bachelor of Arts (B.A.) with Honors & Law Clerkship",
    almaMater: "Dickinson College (Class of 1809)",
    primaryField: "Trial Attorney, Diplomat, U.S. Senator & Secretary of State",
    steppingStoneRole: "17th U.S. Secretary of State & Minister to Great Britain",
    treeNodes: [
      {
        id: "15-edu-1",
        category: "education",
        role: "Bachelor of Arts with Honors",
        organization: "Dickinson College",
        location: "Carlisle, Pennsylvania",
        years: "1807–1809",
        details: "Excelled in classical languages, mathematics, and debating; active member of the Belles Lettres Literary Society."
      },
      {
        id: "15-edu-2",
        category: "education",
        role: "Legal Clerkship under James Hopkins",
        organization: "Hopkins Law Chambers",
        location: "Lancaster, Pennsylvania",
        years: "1809–1812",
        details: "Immersed in Pennsylvania property law and commercial litigation; admitted to Lancaster bar in 1812."
      },
      {
        id: "15-mil-1",
        category: "military",
        role: "Volunteer Dragoon in War of 1812",
        organization: "Pennsylvania Militia (Henry Shippen's Company)",
        location: "Baltimore, Maryland",
        years: "1814",
        details: "Volunteered as private in the defense of Baltimore following British burning of Washington."
      },
      {
        id: "15-leg-1",
        category: "state_local",
        role: "Member of Pennsylvania House of Representatives",
        organization: "Pennsylvania General Assembly",
        location: "Lancaster, Pennsylvania",
        years: "1814–1816",
        details: "Advocated for canal construction and state military preparedness."
      },
      {
        id: "15-fed-1",
        category: "federal_diplomatic",
        role: "U.S. Representative from Pennsylvania (Judiciary Chairman)",
        organization: "U.S. House of Representatives",
        location: "Washington, D.C.",
        years: "1821–1831",
        details: "Chaired House Judiciary Committee; principal prosecutor in impeachment trial of federal judge James H. Peck."
      },
      {
        id: "15-dip-1",
        category: "federal_diplomatic",
        role: "U.S. Minister to the Russian Empire",
        organization: "U.S. Diplomatic Service",
        location: "St. Petersburg, Russia",
        years: "1832–1834",
        details: "Negotiated the first commercial and navigation treaty between the United States and the Russian Empire."
      },
      {
        id: "15-sen-1",
        category: "federal_diplomatic",
        role: "United States Senator from Pennsylvania (Foreign Relations Chairman)",
        organization: "U.S. Senate",
        location: "Washington, D.C.",
        years: "1834–1845",
        details: "Served a decade as key Democratic Senate voice; chaired Committee on Foreign Relations."
      },
      {
        id: "15-cab-1",
        category: "federal_diplomatic",
        role: "17th United States Secretary of State",
        organization: "Department of State",
        location: "Washington, D.C.",
        years: "1845–1849",
        highlight: true,
        details: "Served under Polk; negotiated 1846 Oregon Treaty with Britain setting 49th parallel border; directed diplomacy during Mexican War."
      },
      {
        id: "15-dip-2",
        category: "federal_diplomatic",
        role: "U.S. Minister to the Court of St. James's (Great Britain)",
        organization: "U.S. Foreign Service",
        location: "London, Great Britain",
        years: "1853–1856",
        details: "Co-authored Ostend Manifesto; maintained British neutrality regarding Central American canal routes."
      },
      {
        id: "15-pres",
        category: "presidency",
        role: "15th President of the United States",
        organization: "Executive Branch of the United States",
        location: "Washington, D.C.",
        years: "1857–1861",
        highlight: true,
        details: "Presided during Dred Scott decision, Panic of 1857, and secession of seven southern states following Lincoln's 1860 election."
      }
    ]
  }
};
