  mutation user1 {
    createUser(input: {name: "Ana", image: "https://d1u1mce87gyfbn.cloudfront.net/hero/ana/icon-portrait.png"}) {
      id
      name
    }
  }
  
  mutation user2 {
    createUser(input: {name: "Moira", image: "https://d1u1mce87gyfbn.cloudfront.net/hero/moira/icon-portrait.png"}) {
      id
      name
    }
  }
  
  mutation user3 {
    createUser(input: {name: "Mei", image: "https://d1u1mce87gyfbn.cloudfront.net/hero/mei/icon-portrait.png"}) {
      id
      name
    }
  }
  
  mutation user4 {
    createUser(input: {name: "Sombra", image: "https://d1u1mce87gyfbn.cloudfront.net/hero/sombra/icon-portrait.png"}) {
      id
      name
    }
  }

  mutation user5 {
    createUser(input: {name: "Genji", image: "https://d1u1mce87gyfbn.cloudfront.net/hero/genji/icon-portrait.png"}) {
      id
      name
    }
  }

  mutation user6 {
    createUser(input: {name: "Sigma", image: "https://d1u1mce87gyfbn.cloudfront.net/hero/sigma/icon-portrait.png"}) {
      id
      name
    }
  }

  mutation user7 {
    createUser(input: {name: "Wrecking Ball", image: "https://d1u1mce87gyfbn.cloudfront.net/hero/wrecking-ball/icon-portrait.png"}) {
      id
      name
    }
  }
  
  mutation post1 {
    createPost(input: {userID: "", likes: 60, caption: "Never stop fighting for what you believe in", image: "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/bltdd6b32030a0e338c/5cef225a72eb37ee099219f8/ana-screenshot-005.jpg"}) {
      id
      image
      caption
      user {
        name
      }
    }
  }
  
  mutation story1 {
    createStory(input: {userID: "", image: "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/bltebec543460e67fea/5cef225a4e4776020a333fe7/ana-screenshot-002.jpg"}) {
      id
      image
      user {
        name
      }
    }
  }
  
  mutation post2 {
    createPost(input: {userID: "", likes: 48, caption: "Science will reveal the truth", image: "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/bltf18a64d8ec09ffdb/5cef22cd7b48be290a7f8830/moira-screenshot-004.jpg"}) {
      id
      image
      caption
      user {
        name
      }
    }
  }
  
  mutation story2 {
    createStory(input: {userID: "", image: "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/bltb8c4e3ce0416eac4/5cef22cd4e4776020a334029/moira-screenshot-003.jpg"}) {
      id
      image
      user {
        name
      }
    }
  }
  
  mutation post3 {
    createPost(input: {userID: "", likes: 31, caption: "Our world is worth fighting for", image: "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/bltf8a6bcc5b3b58ade/5cef22c57b48be290a7f882a/mei-screenshot-002.jpg"}) {
      id
      image
      caption
      user {
        name
      }
    }
  }
  
  mutation story3 {
    createStory(input: {userID: "", image: "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/bltd6a34b2242d06122/5cef22cdcf7aa6330ac6658b/mei-screenshot-004.jpg"}) {
      id
      image
      user {
        name
      }
    }
  }
  
  mutation post4 {
    createPost(input: {userID: "", likes: 30, caption: "Everything can be hacked... and everyone", image: "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/bltd3d362ad23a59024/5cef22ee4e4776020a334053/sombra-screenshot-002-fb6b4eea3c8822bf196065adc23a2e5f18d2b67a6ae3a91230e3e86e328f0956bc0c753996cd60e14011acde89eb0a981c8cda3884d084132b40a76d42320d0a.jpg"}) {
      id
      image
      caption
      user {
        name
      }
    }
  }
  
  mutation story4 {
    createStory(input: {userID: "", image: "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt8e9f5fca71d181fe/5cef22ee486d1c3d0af72424/sombra-screenshot-003-1da28adc9f82b9ab089133d6b69c327f134e3c002f2741454adfae5562fdd11bd529ed699fbc71d3bb42ca79ea082f48fc349d711e18cc6ff4c9f1013ca3aae6.jpg"}) {
      id
      image
      user {
        name
      }
    }
  }

  mutation post5 {
    createPost(input: {userID: "", likes: 35, caption: "Mi o sutete mo, myōri wa sutezu", image: "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt6a506c2c6ee67436/5cef2296a812cef4091495ec/genji-screenshot-003.jpg"}) {
      id
      image
      caption
      user {
        name
      }
    }
  }
  
  mutation story5 {
    createStory(input: {userID: "", image: "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt2ae5cd8ad3b9d57d/5cef22974e4776020a33400b/genji-screenshot-004.jpg"}) {
      id
      image
      user {
        name
      }
    }
  }

  mutation post6 {
    createPost(input: {userID: "", likes: 62, caption: "There is no obligation for the universe to make sense to you", image: "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt75d1fbbd0197a852/5d5ece9ccd4bff10737c9003/sigma-screenshot-001.jpg"}) {
      id
      image
      caption
      user {
        name
      }
    }
  }
  
  mutation story6 {
    createStory(input: {userID: "", image: "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blte7ecf066990e298c/5d5ece9c5f9bd51c40851df4/sigma-screenshot-002.jpg"}) {
      id
      image
      user {
        name
      }
    }
  }

  mutation post7 {
    createPost(input: {userID: "", likes: 14, caption: "Control link established", image: "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt9cf92a05b06fe6aa/5cf15ded72eb37ee09921f47/wrecking-ball-screenshot-001.jpg"}) {
      id
      image
      caption
      user {
        name
      }
    }
  }
  
  mutation story7 {
    createStory(input: {userID: "", image: "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blta12828c588a192aa/5cf15dedcf7aa6330ac66a05/wrecking-ball-screenshot-004.jpg"}) {
      id
      image
      user {
        name
      }
    }
  }
  
  query listPosts {
    listPosts {
      items {
        caption
        createdAt
        id
        image
        user {
          id
          image
          name
        }
      }
    }
  }
  
  query listStorys {
    listStorys {
      items {
        createdAt
        id
        image
        user {
          id
          image
          name
        }
      }
    }
  }
  