const blogs={
    "articles": [
      {
        "id": 1,
        "title": "Introduction to React Hooks",
        "author": {
          "name": "John Doe",
          "bio": "Frontend developer with a passion for React.",
          "profilePicture": "https://rocketexpansion.com/wp-content/uploads/2021/12/why-an-author-needs-a-blog-v2.jpg",
          "authorphoto":"https://cdn.vox-cdn.com/thumbor/nu5u70UZveqNTcKAjboMil5PdSg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13737224/AJ_Finn_author_photo_color_photo_courtesy_of_the_author.jpg"
        },
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        "comments": [
          {
            "id": 1,
            "user": "Alice",
            "comment": "Great introduction!"
          },
          {
            "id": 2,
            "user": "Bob",
            "comment": "Looking forward to more tutorials."
          }
        ],
        "reactions": {
          "likes": 10,
          "dislikes": 2
        }
      },
      {
        "id": 2,
        "title": "Building a Blog App with React",
        "author": {
          "name": "Jane Smith",
          "bio": "Full-stack developer specializing in React and Node.js.",
          "profilePicture": "https://rocketexpansion.com/wp-content/uploads/2021/12/why-an-author-needs-a-blog-v2.jpg",
          "authorphoto":"https://cdn.vox-cdn.com/thumbor/nu5u70UZveqNTcKAjboMil5PdSg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13737224/AJ_Finn_author_photo_color_photo_courtesy_of_the_author.jpg"
        },
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        "comments": [
          {
            "id": 3,
            "user": "Charlie",
            "comment": "Nice tutorial!"
          }
        ],
        "reactions": {
          "likes": 15,
          "dislikes": 1
        }
      },
      {
        "id": 3,
        "title": "Getting Started with Node.js",
        "author": {
          "name": "Emily Johnson",
          "bio": "Backend developer with a focus on Node.js and MongoDB.",
          "profilePicture": "https://rocketexpansion.com/wp-content/uploads/2021/12/why-an-author-needs-a-blog-v2.jpg",
          "authorphoto":"https://cdn.vox-cdn.com/thumbor/nu5u70UZveqNTcKAjboMil5PdSg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13737224/AJ_Finn_author_photo_color_photo_courtesy_of_the_author.jpg"
        },
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        "comments": [
          {
            "id": 4,
            "user": "David",
            "comment": "Very informative!"
          },
          {
            "id": 5,
            "user": "Eva",
            "comment": "I learned a lot, thanks!"
          }
        ],
        "reactions": {
          "likes": 20,
          "dislikes": 0
        }
      },
      {
        "id": 4,
        "title": "CSS Tips and Tricks",
        "author": {
          "name": "Michael Brown",
          "bio": "UI/UX designer with expertise in CSS and frontend frameworks.",
          "profilePicture": "https://rocketexpansion.com/wp-content/uploads/2021/12/why-an-author-needs-a-blog-v2.jpg",
          "authorphoto":"https://cdn.vox-cdn.com/thumbor/nu5u70UZveqNTcKAjboMil5PdSg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13737224/AJ_Finn_author_photo_color_photo_courtesy_of_the_author.jpg"
        },
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        "comments": [
          {
            "id": 6,
            "user": "Fiona",
            "comment": "Great article, very helpful!"
          }
        ],
        "reactions": {
          "likes": 12,
          "dislikes": 3
        }
      },
      {
        "id": 5,
        "title": "The Benefits of Meditation",
        "author": {
          "name": "Sophia Lee",
          "bio": "Yoga instructor and mindfulness advocate.",
          "profilePicture": "https://rocketexpansion.com/wp-content/uploads/2021/12/why-an-author-needs-a-blog-v2.jpg",
          "authorphoto":"https://cdn.vox-cdn.com/thumbor/nu5u70UZveqNTcKAjboMil5PdSg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13737224/AJ_Finn_author_photo_color_photo_courtesy_of_the_author.jpg"
        },
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        "comments": [
          {
            "id": 7,
            "user": "Greg",
            "comment": "Meditation has changed my life!"
          },
          {
            "id": 8,
            "user": "Hannah",
            "comment": "I feel more focused and calm after practicing meditation regularly."
          }
        ],
        "reactions": {
          "likes": 25,
          "dislikes": 0
        }
      },
      {
        "id": 6,
        "title": "The Importance of Time Management",
        "author": {
          "name": "Andrew Wilson",
          "bio": "Productivity coach and time management expert.",
          "profilePicture": "https://rocketexpansion.com/wp-content/uploads/2021/12/why-an-author-needs-a-blog-v2.jpg",
          "authorphoto":"https://cdn.vox-cdn.com/thumbor/nu5u70UZveqNTcKAjboMil5PdSg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13737224/AJ_Finn_author_photo_color_photo_courtesy_of_the_author.jpg"
        },
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        "comments": [
          {
            "id": 9,
            "user": "Isabella",
            "comment": "Time management techniques have helped me achieve my goals more effectively."
          }
        ],
        "reactions": {
          "likes": 18,
          "dislikes": 2
        }
      },
      {
        "id": 7,
        "title": "Healthy Eating Habits for a Balanced Lifestyle",
        "author": {
          "name": "Oliver Miller",
          "bio": "Nutritionist and fitness enthusiast.",
          "profilePicture": "https://rocketexpansion.com/wp-content/uploads/2021/12/why-an-author-needs-a-blog-v2.jpg",
          "authorphoto":"https://cdn.vox-cdn.com/thumbor/nu5u70UZveqNTcKAjboMil5PdSg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13737224/AJ_Finn_author_photo_color_photo_courtesy_of_the_author.jpg"
        },
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        "comments": [
          {
            "id": 10,
            "user": "Jack",
            "comment": "I've noticed a significant improvement in my energy levels since adopting healthier eating habits."
          }
        ],
        "reactions": {
          "likes": 30,
          "dislikes": 1
        }
      },
      {
        "id": 8,
        "title": "Tips for Improving Sleep Quality",
        "author": {
          "name": "Sophie Davis",
          "bio": "Sleep specialist and wellness coach.",
          "profilePicture": "https://rocketexpansion.com/wp-content/uploads/2021/12/why-an-author-needs-a-blog-v2.jpg",
          "authorphoto":"https://cdn.vox-cdn.com/thumbor/nu5u70UZveqNTcKAjboMil5PdSg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13737224/AJ_Finn_author_photo_color_photo_courtesy_of_the_author.jpg"
        },
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        "comments": [
          {
            "id": 11,
            "user": "Liam",
            "comment": "Following these tips has helped me sleep better and wake up feeling refreshed."
          }
        ],
        "reactions": {
          "likes": 22,
          "dislikes": 0
        }
      },
      {
        "id": 9,
        "title": "Effective Communication Skills for Success",
        "author": {
          "name": "Emma White",
          "bio": "Communication coach and public speaking trainer.",
          "profilePicture": "https://rocketexpansion.com/wp-content/uploads/2021/12/why-an-author-needs-a-blog-v2.jpg",
          "authorphoto":"https://cdn.vox-cdn.com/thumbor/nu5u70UZveqNTcKAjboMil5PdSg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13737224/AJ_Finn_author_photo_color_photo_courtesy_of_the_author.jpg"
        },
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        "comments": [
          {
            "id": 12,
            "user": "Mia",
            "comment": "Improving my communication skills has enhanced my professional relationships."
          }
        ],
        "reactions": {
          "likes": 28,
          "dislikes": 3
        }
      },
      {
        "id": 10,
        "title": "Stress Management Techniques for a Healthier Life",
        "author": {
          "name": "James Carter",
          "bio": "Stress management coach and mental health advocate.",
          "profilePicture": "https://rocketexpansion.com/wp-content/uploads/2021/12/why-an-author-needs-a-blog-v2.jpg",
          "authorphoto":"https://cdn.vox-cdn.com/thumbor/nu5u70UZveqNTcKAjboMil5PdSg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13737224/AJ_Finn_author_photo_color_photo_courtesy_of_the_author.jpg"
        },
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        "comments": [
          {
            "id": 13,
            "user": "Chloe",
            "comment": "These techniques have helped me cope better with stress."
          }
        ],
        "reactions": {
          "likes": 35,
          "dislikes": 1
        }
      }
    ]
  }
export default blogs;  