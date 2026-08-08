import { President } from '../types';
import { ROUNDS_PER_GAME } from '../constants';

// This file can be updated via the in-game admin panel.
export const allPresidents: President[] = [
  {
    "id": 1,
    "name": "George Washington",
    "party": "Unaffiliated",
    "termStart": 1789,
    "termEnd": 1797,
    "context": "As the first U.S. President, he set many precedents, including the two-term limit, and warned against partisan infighting in his farewell address.",
    "title": "1st President of the United States",
    "imageUrl": "https://i.ibb.co/Y41Nkp5W/01-washington.jpg",
    "sealUrl": "https://i.ibb.co/v49yxfZR/1000-F-276679704-FD95-Aha-FHskj-W7-Sp0v-Gvy-O2-ATCCb-XAac.jpg"
  },
  {
    "id": 2,
    "name": "John Adams",
    "party": "Federalist",
    "termStart": 1797,
    "termEnd": 1801,
    "context": "A key figure in the American Revolution, his presidency was marked by conflicts with France and the controversial Alien and Sedition Acts.",
    "title": "2nd President of the United States",
    "imageUrl": "https://i.ibb.co/ZRbHgX7D/02-adams.jpg",
    "sealUrl": "https://i.ibb.co/v49yxfZR/1000-F-276679704-FD95-Aha-FHskj-W7-Sp0v-Gvy-O2-ATCCb-XAac.jpg"
  },
  {
    "id": 3,
    "name": "Thomas Jefferson",
    "party": "Democratic-Republican",
    "termStart": 1801,
    "termEnd": 1809,
    "context": "The primary author of the Declaration of Independence, he doubled the size of the nation with the Louisiana Purchase.",
    "title": "3rd President of the United States",
    "imageUrl": "https://i.ibb.co/GfYQs334/03-jefferson.jpg",
    "sealUrl": "https://i.ibb.co/mCmxtc2d/Magic-Eraser-251024-112521.png"
  },
  {
    "id": 4,
    "name": "James Madison",
    "party": "Democratic-Republican",
    "termStart": 1809,
    "termEnd": 1817,
    "context": "Considered the 'Father of the Constitution', he led the nation through the War of 1812 against Great Britain.",
    "title": "4th President of the United States",
    "imageUrl": "https://i.ibb.co/1YbVFWRk/04-madison.jpg",
    "sealUrl": "https://i.ibb.co/mCmxtc2d/Magic-Eraser-251024-112521.png"
  },
  {
    "id": 5,
    "name": "James Monroe",
    "party": "Democratic-Republican",
    "termStart": 1817,
    "termEnd": 1825,
    "context": "His presidency is known as the 'Era of Good Feelings.' He established the Monroe Doctrine, opposing European colonialism in the Americas.",
    "title": "5th President of the United States",
    "imageUrl": "https://i.ibb.co/5xJPwYV2/05-monroe.jpg",
    "sealUrl": "https://i.ibb.co/mCmxtc2d/Magic-Eraser-251024-112521.png"
  },
  {
    "id": 6,
    "name": "John Quincy Adams",
    "party": "Democratic-Republican",
    "termStart": 1825,
    "termEnd": 1829,
    "context": "Son of a former president, he proposed ambitious infrastructure projects but was hindered by a hostile Congress.",
    "title": "6th President of the United States",
    "imageUrl": "https://i.ibb.co/cKHcFfvd/06-adams.jpg",
    "sealUrl": "https://i.ibb.co/mCmxtc2d/Magic-Eraser-251024-112521.png"
  },
  {
    "id": 7,
    "name": "Andrew Jackson",
    "party": "Democratic",
    "termStart": 1829,
    "termEnd": 1837,
    "context": "A populist war hero, his presidency saw the expansion of democracy but also the controversial Indian Removal Act.",
    "title": "7th President of the United States",
    "imageUrl": "https://i.ibb.co/v4ftHXSZ/07-jackson.jpg",
    "sealUrl": "https://i.ibb.co/nqQzWY7m/Magic-Eraser-251024-114543.png"
  },
  {
    "id": 8,
    "name": "Martin Van Buren",
    "party": "Democratic",
    "termStart": 1837,
    "termEnd": 1841,
    "context": "A key organizer of the Democratic Party, his single term was plagued by the economic Panic of 1837.",
    "title": "8th President of the United States",
    "imageUrl": "https://i.ibb.co/RpzPQdXy/08-van-buren.jpg",
    "sealUrl": "https://i.ibb.co/nqQzWY7m/Magic-Eraser-251024-114543.png"
  },
  {
    "id": 9,
    "name": "William Henry Harrison",
    "party": "Whig",
    "termStart": 1841,
    "termEnd": 1841,
    "context": "He gave the longest inaugural address in history and served the shortest presidency, dying of pneumonia just 31 days into his term.",
    "title": "9th President of the United States",
    "imageUrl": "https://i.ibb.co/BVngfwgF/09-harrison.jpg",
    "sealUrl": "https://i.ibb.co/PGdpc7mw/Magic-Eraser-251024-114623.png"
  },
  {
    "id": 10,
    "name": "John Tyler",
    "party": "Whig",
    "termStart": 1841,
    "termEnd": 1845,
    "context": "The first Vice President to assume the presidency upon the death of his predecessor, he annexed Texas in his final days in office.",
    "title": "10th President of the United States",
    "imageUrl": "https://i.ibb.co/Y7HhXjTB/10-tyler.jpg",
    "sealUrl": "https://i.ibb.co/PGdpc7mw/Magic-Eraser-251024-114623.png"
  },
  {
    "id": 11,
    "name": "James K. Polk",
    "party": "Democratic",
    "termStart": 1845,
    "termEnd": 1849,
    "context": "An advocate of Manifest Destiny, he oversaw the largest territorial expansion in U.S. history, including the acquisition of California.",
    "title": "11th President of the United States",
    "imageUrl": "https://i.ibb.co/6cdNfJxp/11-polk.jpg",
    "sealUrl": "https://i.ibb.co/nqQzWY7m/Magic-Eraser-251024-114543.png"
  },
  {
    "id": 12,
    "name": "Zachary Taylor",
    "party": "Whig",
    "termStart": 1849,
    "termEnd": 1850,
    "context": "A career military officer known as 'Old Rough and Ready,' he died just 16 months into his term.",
    "title": "12th President of the United States",
    "imageUrl": "https://i.ibb.co/nMYLbr0W/12-taylor.jpg",
    "sealUrl": "https://i.ibb.co/PGdpc7mw/Magic-Eraser-251024-114623.png"
  },
  {
    "id": 13,
    "name": "Millard Fillmore",
    "party": "Whig",
    "termStart": 1850,
    "termEnd": 1853,
    "context": "The last Whig president, he supported the Compromise of 1850 in an effort to preserve the Union.",
    "title": "13th President of the United States",
    "imageUrl": "https://i.ibb.co/S4srQL9g/13-fillmore.jpg",
    "sealUrl": "https://i.ibb.co/PGdpc7mw/Magic-Eraser-251024-114623.png"
  },
  {
    "id": 14,
    "name": "Franklin Pierce",
    "party": "Democratic",
    "termStart": 1853,
    "termEnd": 1857,
    "context": "His signing of the Kansas-Nebraska Act, which allowed residents of new territories to decide on the legality of slavery, fueled sectional tensions.",
    "title": "14th President of the United States",
    "imageUrl": "https://i.ibb.co/7NjnJmc8/14-pierce.jpg",
    "sealUrl": "https://i.ibb.co/nqQzWY7m/Magic-Eraser-251024-114543.png"
  },
  {
    "id": 15,
    "name": "James Buchanan",
    "party": "Democratic",
    "termStart": 1857,
    "termEnd": 1861,
    "context": "He presided over the country as it spiraled into the Civil War, with seven states seceding during his final months in office.",
    "title": "15th President of the United States",
    "imageUrl": "https://i.ibb.co/bgwgWwGf/15-buchanan.jpg",
    "sealUrl": "https://i.ibb.co/nqQzWY7m/Magic-Eraser-251024-114543.png"
  },
  {
    "id": 16,
    "name": "Abraham Lincoln",
    "party": "Republican",
    "termStart": 1861,
    "termEnd": 1865,
    "context": "He led the nation through its greatest crisis, the Civil War, preserved the Union, and signed the Emancipation Proclamation.",
    "title": "16th President of the United States",
    "imageUrl": "https://i.ibb.co/TMwQ4BYg/16-lincoln.jpg",
    "sealUrl": "https://i.ibb.co/4Rx61kZT/Magic-Eraser-251024-083456.png"
  },
  {
    "id": 17,
    "name": "Andrew Johnson",
    "party": "National Union",
    "termStart": 1865,
    "termEnd": 1869,
    "context": "He oversaw the early years of Reconstruction and was the first president to be impeached, though he was acquitted by the Senate.",
    "title": "17th President of the United States",
    "imageUrl": "https://i.ibb.co/qMvbfbhY/17-johnson.jpg",
    "sealUrl": "https://i.ibb.co/RknX9CC5/national-union-party-united-states-aaa97b7e-517f-49de-94f0-32d1d4d2f5d-resize-750.jpg"
  },
  {
    "id": 18,
    "name": "Ulysses S. Grant",
    "party": "Republican",
    "termStart": 1869,
    "termEnd": 1877,
    "context": "As the victorious Union general of the Civil War, he worked to enforce Reconstruction and protect the rights of African Americans.",
    "title": "18th President of the United States",
    "imageUrl": "https://i.ibb.co/MkGYqcg3/18-grant.jpg",
    "sealUrl": "https://i.ibb.co/4Rx61kZT/Magic-Eraser-251024-083456.png"
  },
  {
    "id": 19,
    "name": "Rutherford B. Hayes",
    "party": "Republican",
    "termStart": 1877,
    "termEnd": 1881,
    "context": "His presidency began with one of the most disputed elections in history and saw the end of the Reconstruction era.",
    "title": "19th President of the United States",
    "imageUrl": "https://i.ibb.co/Z6rtXF4g/19-hayes.jpg",
    "sealUrl": "https://i.ibb.co/4Rx61kZT/Magic-Eraser-251024-083456.png"
  },
  {
    "id": 20,
    "name": "James A. Garfield",
    "party": "Republican",
    "termStart": 1881,
    "termEnd": 1881,
    "context": "His promising presidency was cut short when he was assassinated just 200 days after his inauguration.",
    "title": "20th President of the United States",
    "imageUrl": "https://i.ibb.co/35gL9jxH/20-garfield.jpg",
    "sealUrl": "https://i.ibb.co/4Rx61kZT/Magic-Eraser-251024-083456.png"
  },
  {
    "id": 21,
    "name": "Chester A. Arthur",
    "party": "Republican",
    "termStart": 1881,
    "termEnd": 1885,
    "context": "He rose from a background in machine politics to become an unlikely champion of civil service reform.",
    "title": "21st President of the United States",
    "imageUrl": "https://i.ibb.co/9m5JfqbZ/21-arthur.jpg",
    "sealUrl": "https://i.ibb.co/4Rx61kZT/Magic-Eraser-251024-083456.png"
  },
  {
    "id": 22,
    "name": "Grover Cleveland",
    "party": "Democratic",
    "termStart": 1885,
    "termEnd": 1889,
    "context": "He is the only president to serve two non-consecutive terms, known for his honesty and battles against corruption.",
    "title": "22nd & 24th President of the United States",
    "imageUrl": "https://i.ibb.co/6cBf0jYJ/22-24-cleveland.jpg",
    "sealUrl": "https://i.ibb.co/nqQzWY7m/Magic-Eraser-251024-114543.png"
  },
  {
    "id": 23,
    "name": "Benjamin Harrison",
    "party": "Republican",
    "termStart": 1889,
    "termEnd": 1893,
    "context": "The grandson of a former president, he signed the Sherman Antitrust Act and oversaw the admission of six new states to the Union.",
    "title": "23rd President of the United States",
    "imageUrl": "https://i.ibb.co/FLrKtfKM/23-harrison.jpg",
    "sealUrl": "https://i.ibb.co/4Rx61kZT/Magic-Eraser-251024-083456.png"
  },
  {
    "id": 24,
    "name": "William McKinley",
    "party": "Republican",
    "termStart": 1897,
    "termEnd": 1901,
    "context": "He led the nation to victory in the Spanish-American War but was assassinated early in his second term.",
    "title": "25th President of the United States",
    "imageUrl": "https://i.ibb.co/Xfp41BS4/25-mckinley.jpg",
    "sealUrl": "https://i.ibb.co/4Rx61kZT/Magic-Eraser-251024-083456.png"
  },
  {
    "id": 25,
    "name": "Theodore Roosevelt",
    "party": "Republican",
    "termStart": 1901,
    "termEnd": 1909,
    "context": "Known for his 'Square Deal' policies, trust-busting, and conservation efforts, he was a driving force of the Progressive Era.",
    "title": "26th President of the United States",
    "imageUrl": "https://i.ibb.co/FLL62Yhc/26-roosevelt.jpg",
    "sealUrl": "https://i.ibb.co/4Rx61kZT/Magic-Eraser-251024-083456.png"
  },
  {
    "id": 26,
    "name": "William Howard Taft",
    "party": "Republican",
    "termStart": 1909,
    "termEnd": 1913,
    "context": "The only person to serve as both President and Chief Justice of the Supreme Court.",
    "title": "27th President of the United States",
    "imageUrl": "https://i.ibb.co/BVzwtpf5/27-taft.jpg",
    "sealUrl": "https://i.ibb.co/4Rx61kZT/Magic-Eraser-251024-083456.png"
  },
  {
    "id": 27,
    "name": "Woodrow Wilson",
    "party": "Democratic",
    "termStart": 1913,
    "termEnd": 1921,
    "context": "He led the country through World War I and was a key architect of the League of Nations.",
    "title": "28th President of the United States",
    "imageUrl": "https://i.ibb.co/bM10XmK4/28-wilson.jpg",
    "sealUrl": "https://i.ibb.co/nqQzWY7m/Magic-Eraser-251024-114543.png"
  },
  {
    "id": 28,
    "name": "Warren G. Harding",
    "party": "Republican",
    "termStart": 1921,
    "termEnd": 1923,
    "context": "He promised a 'return to normalcy' after WWI, but his administration was marred by the Teapot Dome scandal.",
    "title": "29th President of the United States",
    "imageUrl": "https://i.ibb.co/BHcnJBQN/29-harding.jpg",
    "sealUrl": "https://i.ibb.co/4Rx61kZT/Magic-Eraser-251024-083456.png"
  },
  {
    "id": 29,
    "name": "Calvin Coolidge",
    "party": "Republican",
    "termStart": 1923,
    "termEnd": 1929,
    "context": "Known as 'Silent Cal,' he presided over the economic prosperity of the Roaring Twenties.",
    "title": "30th President of the United States",
    "imageUrl": "https://i.ibb.co/v4b7bSmL/30-coolidge.jpg",
    "sealUrl": "https://i.ibb.co/4Rx61kZT/Magic-Eraser-251024-083456.png"
  },
  {
    "id": 30,
    "name": "Herbert Hoover",
    "party": "Republican",
    "termStart": 1929,
    "termEnd": 1933,
    "context": "His presidency was defined by the stock market crash of 1929 and the onset of the Great Depression.",
    "title": "31st President of the United States",
    "imageUrl": "https://i.ibb.co/hxHQ5Bws/31-hoover.jpg",
    "sealUrl": "https://i.ibb.co/4Rx61kZT/Magic-Eraser-251024-083456.png"
  },
  {
    "id": 31,
    "name": "Franklin D. Roosevelt",
    "party": "Democratic",
    "termStart": 1933,
    "termEnd": 1945,
    "context": "The only president to serve more than two terms, he led the nation through the Great Depression and World War II with his 'New Deal' programs.",
    "title": "32nd President of the United States",
    "imageUrl": "https://i.ibb.co/q3m2dNTj/32-roosevelt.jpg",
    "sealUrl": "https://i.ibb.co/nqQzWY7m/Magic-Eraser-251024-114543.png"
  },
  {
    "id": 32,
    "name": "Harry S. Truman",
    "party": "Democratic",
    "termStart": 1945,
    "termEnd": 1953,
    "context": "He made the decision to use atomic bombs to end WWII and oversaw the beginning of the Cold War.",
    "title": "33rd President of the United States",
    "imageUrl": "https://i.ibb.co/93gVvrbh/33-truman.jpg",
    "sealUrl": "https://i.ibb.co/nqQzWY7m/Magic-Eraser-251024-114543.png"
  },
  {
    "id": 33,
    "name": "Dwight D. Eisenhower",
    "party": "Republican",
    "termStart": 1953,
    "termEnd": 1961,
    "context": "As a former five-star general, he commanded Allied forces in Europe during WWII and later created the Interstate Highway System.",
    "title": "34th President of the United States",
    "imageUrl": "https://i.ibb.co/jZjyQ364/34-eisenhower.jpg",
    "sealUrl": "https://i.ibb.co/4Rx61kZT/Magic-Eraser-251024-083456.png"
  },
  {
    "id": 34,
    "name": "John F. Kennedy",
    "party": "Democratic",
    "termStart": 1961,
    "termEnd": 1963,
    "context": "His presidency was marked by the Cuban Missile Crisis and the Space Race, inspiring a generation before his assassination.",
    "title": "35th President of the United States",
    "imageUrl": "https://i.ibb.co/QFC6BZTf/35-kennedy.jpg",
    "sealUrl": "https://i.ibb.co/nqQzWY7m/Magic-Eraser-251024-114543.png"
  },
  {
    "id": 35,
    "name": "Lyndon B. Johnson",
    "party": "Democratic",
    "termStart": 1963,
    "termEnd": 1969,
    "context": "He championed the 'Great Society' and signed landmark civil rights and voting rights legislation into law.",
    "title": "36th President of the United States",
    "imageUrl": "https://i.ibb.co/q3J5JJ3k/36-johnson.jpg",
    "sealUrl": "https://i.ibb.co/nqQzWY7m/Magic-Eraser-251024-114543.png"
  },
  {
    "id": 36,
    "name": "Richard Nixon",
    "party": "Republican",
    "termStart": 1969,
    "termEnd": 1974,
    "context": "He opened relations with China and created the EPA, but became the only president to resign from office due to the Watergate scandal.",
    "title": "37th President of the United States",
    "imageUrl": "https://i.ibb.co/b5RWxT7z/37-nixon.jpg",
    "sealUrl": "https://i.ibb.co/4Rx61kZT/Magic-Eraser-251024-083456.png"
  },
  {
    "id": 37,
    "name": "Gerald Ford",
    "party": "Republican",
    "termStart": 1974,
    "termEnd": 1977,
    "context": "The only person to serve as both Vice President and President without being elected to either office, he pardoned his predecessor.",
    "title": "38th President of the United States",
    "imageUrl": "https://i.ibb.co/rKZdkjQv/38-ford.jpg",
    "sealUrl": "https://i.ibb.co/4Rx61kZT/Magic-Eraser-251024-083456.png"
  },
  {
    "id": 38,
    "name": "Jimmy Carter",
    "party": "Democratic",
    "termStart": 1977,
    "termEnd": 1981,
    "context": "He brokered the Camp David Accords between Israel and Egypt but faced challenges with a struggling economy and the Iran hostage crisis.",
    "title": "39th President of the United States",
    "imageUrl": "https://i.ibb.co/sv99Jbfc/39-carter.jpg",
    "sealUrl": "https://i.ibb.co/nqQzWY7m/Magic-Eraser-251024-114543.png"
  },
  {
    "id": 39,
    "name": "Ronald Reagan",
    "party": "Republican",
    "termStart": 1981,
    "termEnd": 1989,
    "context": "A former actor, his economic policies, known as 'Reaganomics,' and his assertive foreign policy helped bring an end to the Cold War.",
    "title": "40th President of the United States",
    "imageUrl": "https://i.ibb.co/XrFQjxMc/40-reagan.jpg",
    "sealUrl": "https://i.ibb.co/4Rx61kZT/Magic-Eraser-251024-083456.png"
  },
  {
    "id": 40,
    "name": "George H. W. Bush",
    "party": "Republican",
    "termStart": 1989,
    "termEnd": 1993,
    "context": "He presided over the end of the Cold War and led a coalition to victory in the Gulf War.",
    "title": "41st President of the United States",
    "imageUrl": "https://i.ibb.co/VcBfYbY6/41-bush.jpg",
    "sealUrl": "https://i.ibb.co/4Rx61kZT/Magic-Eraser-251024-083456.png"
  },
  {
    "id": 41,
    "name": "Bill Clinton",
    "party": "Democratic",
    "termStart": 1993,
    "termEnd": 2001,
    "context": "He presided over the longest period of peacetime economic expansion in American history but was impeached by the House of Representatives.",
    "title": "42nd President of the United States",
    "imageUrl": "https://i.ibb.co/VpzhK6CT/42-clinton.jpg",
    "sealUrl": "https://i.ibb.co/nqQzWY7m/Magic-Eraser-251024-114543.png"
  },
  {
    "id": 42,
    "name": "George W. Bush",
    "party": "Republican",
    "termStart": 2001,
    "termEnd": 2009,
    "context": "His presidency was defined by the September 11th terrorist attacks and the subsequent wars in Afghanistan and Iraq.",
    "title": "43rd President of the United States",
    "imageUrl": "https://i.ibb.co/zHtrz4cK/43-bush.jpg",
    "sealUrl": "https://i.ibb.co/4Rx61kZT/Magic-Eraser-251024-083456.png"
  },
  {
    "id": 43,
    "name": "Barack Obama",
    "party": "Democratic",
    "termStart": 2009,
    "termEnd": 2017,
    "context": "The first African American president, he signed the Affordable Care Act and authorized the mission that led to Osama bin Laden's death.",
    "title": "44th President of the United States",
    "imageUrl": "https://i.ibb.co/RpnxF0wh/44-obama.jpg",
    "sealUrl": "https://i.ibb.co/nqQzWY7m/Magic-Eraser-251024-114543.png"
  },
  {
    "id": 44,
    "name": "Donald Trump",
    "party": "Republican",
    "termStart": 2017,
    "termEnd": 2021,
    "context": "A real estate developer and television personality, his presidency was marked by tax cuts, conservative judicial appointments, and a focus on 'America First' policies.",
    "title": "45th President of the United States",
    "imageUrl": "https://i.ibb.co/9kZ6XmJq/45-donald-trump.png",
    "sealUrl": "https://i.ibb.co/4Rx61kZT/Magic-Eraser-251024-083456.png"
  },
  {
    "id": 45,
    "name": "Joe Biden",
    "party": "Democratic",
    "termStart": 2021,
    "termEnd": 2025,
    "context": "Elected during the COVID-19 pandemic, he signed major legislation on infrastructure, climate change, and healthcare, while focusing on restoring international alliances.",
    "title": "46th President of the United States",
    "imageUrl": "https://i.ibb.co/TMJ260x9/46-joe-biden.png",
    "sealUrl": "https://i.ibb.co/nqQzWY7m/Magic-Eraser-251024-114543.png"
  },
  {
    "id": 46,
    "name": "Donald Trump",
    "party": "Republican",
    "termStart": 2025,
    "termEnd": null,
    "context": "Elected to a second, non-consecutive term, he became the second president in U.S. history to do so, following Grover Cleveland.",
    "title": "47th President of the United States",
    "imageUrl": "https://i.ibb.co/tMk2TGd2/47-donald-trump.jpg",
    "sealUrl": "https://i.ibb.co/4Rx61kZT/Magic-Eraser-251024-083456.png"
  }
];

export const getGamePresidents = (sourcePresidents: President[]): President[] => {
  const shuffled = [...sourcePresidents].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, ROUNDS_PER_GAME);
};

export const getSuccessorGamePresidents = (sourcePresidents: President[]): President[] => {
  // Exclude the last president as they have no successor in the list
  const eligiblePresidents = sourcePresidents.slice(0, -1);
  const shuffled = [...eligiblePresidents].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, ROUNDS_PER_GAME);
};