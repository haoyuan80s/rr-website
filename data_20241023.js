
daily_data = {
    "date": "2024-10-23",
    "tweets": [
        
        {
            "startTime": "01:12",
            "arxivId": "2410.17235",
            "arxivLink": "https://arxiv.org/abs/2410.17235",
            "title": "AI Reads Doctor's Notes, Labels MRIs: No More Manual Annotations!",
            "institute": "University of Oxford",
            "text": "This research proposes a novel pipeline for automatically extracting labels from radiology reports using large language models (LLMs). Unlike previous methods that rely on rule-based parsers or specialized biomedical LLMs, this approach leverages general-purpose LLMs and a prompting strategy to adapt them to the task of label extraction.",
            "paper-title": "Automated Spinal MRI Labelling from Reports Using a Large Language Model",
            "image-path": "flux_paper_image/2410.17235_1729717290.png"
        },

        {
            "startTime": "01:32",
            "arxivId": "2410.17175",
            "arxivLink": "https://arxiv.org/abs/2410.17175",
            "title": "AI Chatbots: Not So Secret After All! Timing Attacks Reveal Your Chat History",
            "institute": "Google, DeepMind",
            "text": "This research explores a new type of attack on efficient language model inference, focusing on how data-dependent timing characteristics can be exploited to reveal information about user queries. Unlike previous work that focused on improving the efficiency of models for all inputs uniformly, this paper investigates the vulnerabilities introduced by techniques that optimize efficiency on average.",
            "paper-title": "Remote Timing Attacks on Efficient Language Model Inference",
            "image-path": "flux_paper_image/2410.17175_1729715915.png"
        },

        {
            "startTime": "01:53",
            "arxivId": "2410.16707",
            "arxivLink": "https://arxiv.org/abs/2410.16707",
            "title": "Object Detection Lagging? DI-MaskDINO to the Rescue!",
            "institute": "Chongqing University, Tsinghua University",
            "text": "This paper addresses the performance imbalance between object detection and instance segmentation in joint models. Unlike previous work that focuses on combining the two tasks, this research specifically tackles the issue of detection lagging behind segmentation at the initial decoder layer of transformer-based models.",
            "paper-title": "DI-MaskDINO: A Joint Object Detection and Instance Segmentation Model",
            "image-path": "flux_paper_image/2410.16707_1729717156.png"
        },

        {
            "startTime": "02:20",
            "arxivId": "2410.17241",
            "arxivLink": "https://arxiv.org/abs/2410.17241",
            "title": "Colonoscopy Gets a Chatbot: AI Learns to Talk the Talk (and Spot Polyps)",
            "institute": "Nankai University, Australian National University, Keio University...",
            "text": "This research introduces a multimodal language model, ColonGPT, specifically designed for colonoscopy tasks. Unlike previous work that focuses on purely visual tasks, ColonGPT can understand and respond to human instructions, making it a conversational assistant for endoscopists.",
            "paper-title": "Frontiers in Intelligent Colonoscopy",
            "image-path": "flux_paper_image/2410.17241_1729717284.png"
        },

        {
            "startTime": "02:46",
            "arxivId": "2410.16259",
            "arxivLink": "https://arxiv.org/abs/2410.16259",
            "title": "From Cat Videos to Cat Simulators: Learning Agent Behavior from Casual Footage",
            "institute": "Meta, Carnegie Mellon University, UC Berkeley",
            "text": "This research introduces Agent-to-Sim (ATS), a framework that learns interactive behavior models of 3D agents from casual longitudinal video collections. Unlike prior work that relies on marker-based tracking and multiview cameras, ATS learns natural behaviors non-invasively through single-camera video observations recorded over a long time span.",
            "paper-title": "Agent-to-Sim: Learning Interactive Behavior Models from Casual Longitudinal Videos",
            "image-path": "flux_paper_image/2410.16259_1729716690.png"
        },

        {
            "startTime": "03:09",
            "arxivId": "2410.16395",
            "arxivLink": "https://arxiv.org/abs/2410.16395",
            "title": "Joker's Wild: New AI Makes 3D Heads with Tongue-Wagging Expressions!",
            "institute": "Max Planck Institute for Intelligent Systems, ETH Zurich, Technical University of Darmstadt",
            "text": "This research introduces a novel method for generating 3D human heads with extreme expressions, using a combination of text prompts and 3D Morphable Models (3DMM). The key innovation lies in the use of a 2D diffusion-based prior, which is trained on a large dataset of human faces and can generate realistic images with diverse expressions. This prior is then used to distill a 3D representation of the head, resulting in view-consistent reconstructions with high levels of detail.",
            "paper-title": "Joker: Conditional 3D Head Synthesis with Extreme Facial Expressions",
            "image-path": "flux_paper_image/2410.16395_1729716131.png"
        },

        {
            "startTime": "03:30",
            "arxivId": "2410.17051",
            "arxivLink": "https://arxiv.org/abs/2410.17051",
            "title": "Building an Ontology from Scratch: A Coreference Revolution in Biomedical Research",
            "institute": "Bar-Ilan University, IBM Research, Allen Institute for AI",
            "text": "This research proposes a novel approach to building ontologies by leveraging coreference resolution across a large corpus of biomedical abstracts. Unlike traditional methods that rely on manual curation, this method extracts relationships between concepts directly from the text, creating a data-driven ontology.",
            "paper-title": "Data-driven Coreference-based Ontology Building",
            "image-path": "flux_paper_image/2410.17051_1729714787.png"
        },

        {
            "startTime": "03:53",
            "arxivId": "2410.16261",
            "arxivLink": "https://arxiv.org/abs/2410.16261",
            "title": "Tiny Model, Big Brains: New AI Can Do 90% of the Work with Just 5% of the Parameters!",
            "institute": "Shanghai AI Laboratory, Tsinghua University, Nanjing University...",
            "text": "This research introduces Mini-InternVL, a series of multimodal large language models (MLLMs) with significantly fewer parameters than previous models. The authors achieve this by using a lightweight vision encoder, InternViT-300M, which is trained through knowledge distillation from a larger model. This approach allows for efficient transfer learning to various specialized domains, such as autonomous driving, medical images, and remote sensing.",
            "paper-title": "Mini-InternVL: A Flexible-Transfer Pocket Multimodal Model with 5% Parameters and 90% Performance",
            "image-path": "flux_paper_image/2410.16261_1729717991.png"
        },

        {
            "startTime": "04:17",
            "arxivId": "2410.16198",
            "arxivLink": "https://arxiv.org/abs/2410.16198",
            "title": "VLMs Get a Reasoning Boost: GPT-4o Helps Them Think Like Humans!",
            "institute": "CMU, Apple",
            "text": "This research tackles the challenge of training vision-language models (VLMs) to reason like humans. Unlike previous work that relies heavily on short answers, this study proposes a novel approach using GPT-4o to generate detailed reasoning steps, enriching the training data and improving VLM reasoning performance.",
            "paper-title": "Improve Vision Language Model Chain-of-thought Reasoning",
            "image-path": "flux_paper_image/2410.16198_1729718733.png"
        },

        {
            "startTime": "04:42",
            "arxivId": "2410.16512",
            "arxivLink": "https://arxiv.org/abs/2410.16512",
            "title": "Image-Text Models Get Spatial Awareness: A Recipe for Dense Understanding",
            "institute": "Google",
            "text": "This research proposes a new image-text model called TIPS that combines contrastive image-text learning with self-supervised masked image modeling. This approach aims to improve the spatial awareness of image representations, making them more suitable for dense understanding tasks like depth estimation and semantic segmentation. Unlike previous image-text models, TIPS focuses on learning representations that are directly applicable to these tasks without requiring further fine-tuning.",
            "paper-title": "TIPS: Text-Image Pretraining with Spatial Awareness",
            "image-path": "flux_paper_image/2410.16512_1729714484.png"
        },

        {
            "startTime": "05:04",
            "arxivId": "2410.16401",
            "arxivLink": "https://arxiv.org/abs/2410.16401",
            "title": "Label Noise SGD: The Simplicity Bias Whisperer",
            "institute": "MIT, Toyota Technological Institute at Chicago",
            "text": "This research delves into the connection between sharpness minimization and simplicity bias in neural networks. Unlike previous work that focused on specific settings or local analysis, this paper provides a global convergence proof for label noise SGD in a two-layer network setting.",
            "paper-title": "Simplicity Bias via Global Convergence of Sharpness Minimization",
            "image-path": "flux_paper_image/2410.16401_1729714979.png"
        },

        {
            "startTime": "05:33",
            "arxivId": "2410.16227",
            "arxivLink": "https://arxiv.org/abs/2410.16227",
            "title": "Cloud-Powered Cars: Can We Really Trust the Network?",
            "institute": "UC Berkeley, ICSI",
            "text": "This research proposes using cloud computing for real-time control in autonomous vehicles, a concept typically considered too risky due to network latency. The paper argues that with careful bandwidth allocation and the use of utility curves, cloud resources can be safely and effectively utilized to improve driving safety.",
            "paper-title": "Managing Bandwidth: The Key to Cloud-Assisted Autonomous Driving",
            "image-path": "flux_paper_image/2410.16227_1729715024.png"
        },

        {
            "startTime": "06:00",
            "arxivId": "2410.16144",
            "arxivLink": "https://arxiv.org/abs/2410.16144",
            "title": "1-Bit AI: Speeding Up LLMs with Tiny Weights!",
            "institute": "Microsoft Research, Peking University, University of Chinese Academy of Sciences",
            "text": "This research introduces bitnet.cpp, a software stack designed for fast and lossless inference of 1-bit LLMs on CPUs. It differs from previous work by focusing on optimized kernels for ternary BitNet b1.58 models, achieving significant speedups and energy reductions.",
            "paper-title": "1-bit AI Infra: Part 1.1, Fast and Lossless BitNet b1.58 Inference on CPUs",
            "image-path": "flux_paper_image/2410.16144_1729716707.png"
        },

        {
            "startTime": "06:20",
            "arxivId": "2410.16317",
            "arxivLink": "https://arxiv.org/abs/2410.16317",
            "title": "Face Recognition's New Nightmare: Physical Attacks Go Viral!",
            "institute": "Chinese Academy of Sciences, Nanyang Technological University",
            "text": "This research provides a comprehensive survey of physical adversarial attacks against face recognition systems, focusing on the unique challenges and solutions associated with these attacks. It categorizes existing attack methods based on the physical medium used and analyzes their strengths, limitations, and practical implications.",
            "paper-title": "A Survey on Physical Adversarial Attacks against Face Recognition Systems",
            "image-path": "flux_paper_image/2410.16317_1729718740.png"
        },

        {
            "startTime": "06:44",
            "arxivId": "2410.16152",
            "arxivLink": "https://arxiv.org/abs/2410.16152",
            "title": "WarpedDiffusion: Making Videos Less Jumpy with Image Magic!",
            "institute": "UT Austin, NVIDIA",
            "text": "This paper proposes a new method for solving video inverse problems using image diffusion models. Unlike previous approaches that rely on fine-tuning or warping network features, WarpedDiffusion treats frames as continuous functions and uses a function space perspective to achieve temporal consistency.",
            "paper-title": "Warped Diffusion: Solving Video Inverse Problems with Image Diffusion Models",
            "image-path": "flux_paper_image/2410.16152_1729716610.png"
        },

        {
            "startTime": "07:14",
            "arxivId": "2410.17242",
            "arxivLink": "https://arxiv.org/abs/2410.17242",
            "title": "Say Goodbye to 3D Bias: New Model Makes View Synthesis a Breeze!",
            "institute": "Cornell University, The University of Texas at Austin, Adobe Research...",
            "text": "This research introduces the Large View Synthesis Model (LVSM), a transformer-based approach that minimizes 3D inductive biases in novel view synthesis. Unlike previous methods that rely on 3D representations like NeRF or 3DGS, LVSM learns directly from data, enabling more flexible and scalable view synthesis.",
            "paper-title": "LVSM: A Large View Synthesis Model with Minimal 3D Inductive Bias",
            "image-path": "flux_paper_image/2410.17242_1729715482.png"
        },

        {
            "startTime": "07:41",
            "arxivId": "2410.16534",
            "arxivLink": "https://arxiv.org/abs/2410.16534",
            "title": "Soft Prompts: The Secret Weapon for Generating Synthetic Data",
            "institute": "Google",
            "text": "This paper proposes a novel framework called SoftSRV that uses soft prompts to generate synthetic text data for fine-tuning smaller language models. Unlike previous approaches that rely on human-crafted prompts, SoftSRV learns a parameterized soft prompt through data-driven optimization, making it more adaptable and less labor-intensive.",
            "paper-title": "No more hard prompts: SoftSRV prompting for synthetic data generation",
            "image-path": "flux_paper_image/2410.16534_1729718233.png"
        },

        {
            "startTime": "08:01",
            "arxivId": "2410.16474",
            "arxivLink": "https://arxiv.org/abs/2410.16474",
            "title": "QuickBind: Molecular Docking Gets a Speed Boost, Without Losing Its Smarts!",
            "institute": "University of Oxford, Columbia University",
            "text": "This research introduces QuickBind, a new molecular docking model that prioritizes speed over accuracy. Unlike previous methods that rely on complex neural networks, QuickBind uses a simplified architecture, making it significantly faster for high-throughput virtual screening applications.",
            "paper-title": "QuickBind: A Light-Weight And Interpretable Molecular Docking Model",
            "image-path": "flux_paper_image/2410.16474_1729715244.png"
        },

        {
            "startTime": "08:19",
            "arxivId": "2410.17055",
            "arxivLink": "https://arxiv.org/abs/2410.17055",
            "title": "RLHF's New Trick: Picking the Best Pairs for Human Feedback",
            "institute": "CNRS, INRIA, \u00c9cole Polytechnique...",
            "text": "This research focuses on the data collection process for RLHF, specifically how to select the most informative pairs of language model outputs for human feedback. Unlike previous work that primarily focuses on preference optimization, this paper proposes a method called ODPO (Optimal Design for Policy Optimization) to guide the dataset selection process.",
            "paper-title": "Optimal Design for Reward Modeling in RLHF",
            "image-path": "flux_paper_image/2410.17055_1729718649.png"
        },

        {
            "startTime": "08:45",
            "arxivId": "2410.17251",
            "arxivLink": "https://arxiv.org/abs/2410.17251",
            "title": "Alt-Text Gets a Makeover: How Re-aligning Web Descriptions Boosts Image Captioning",
            "institute": "Meta, University of Washington, New York University",
            "text": "This research focuses on improving image captions by re-aligning existing alt-text with the image content. Unlike previous work that generates captions from scratch, this approach leverages the detailed information already present in alt-text, making it more accurate and relevant.",
            "paper-title": "Altogether: Image Captioning via Re-aligning Alt-text",
            "image-path": "flux_paper_image/2410.17251_1729716085.png"
        },

        {
            "startTime": "09:06",
            "arxivId": "2410.16663",
            "arxivLink": "https://arxiv.org/abs/2410.16663",
            "title": "FlashAttention Gets a Speed Boost: Now for NPUs and Low-Resource GPUs!",
            "institute": "Shandong University, Tsinghua University",
            "text": "This research extends the FlashAttention series, which is typically designed for high-end GPUs, to NPUs and low-resource GPUs. It introduces new tiling strategies and memory optimization techniques to make FlashAttention work efficiently on these less powerful hardware platforms.",
            "paper-title": "FastAttention: Extend FlashAttention2 to NPUs and Low-resource GPUs",
            "image-path": "flux_paper_image/2410.16663_1729717103.png"
        },

        {
            "startTime": "09:24",
            "arxivId": "2410.16232",
            "arxivLink": "https://arxiv.org/abs/2410.16232",
            "title": "Sketching Your Way to Code: Can AI Turn Doodles into Websites?",
            "institute": "Stanford University, Georgia Institute of Technology",
            "text": "This research introduces Sketch2Code, a benchmark that evaluates vision-language models (VLMs) on their ability to convert sketches into web prototypes. Unlike previous work that focused on high-fidelity inputs like screenshots, Sketch2Code uses low-fidelity sketches, making it more accessible and realistic for real-world design workflows.",
            "paper-title": "Sketch2Code: Evaluating Vision-Language Models for Interactive Web Design Prototyping",
            "image-path": "flux_paper_image/2410.16232_1729715584.png"
        },

        {
            "startTime": "09:42",
            "arxivId": "2410.16770",
            "arxivLink": "https://arxiv.org/abs/2410.16770",
            "title": "Scene Language: A Program for Your Visual Dreams",
            "institute": "Stanford University, UC Berkeley",
            "text": "This research introduces the Scene Language, a novel representation for visual scenes that combines programs, words, and embeddings. Unlike previous scene representations that rely on scene graphs or generative model latents, the Scene Language explicitly models scene structures using programs, enabling precise control and editing.",
            "paper-title": "The Scene Language: Representing Scenes with Programs, Words, and Embeddings",
            "image-path": "flux_paper_image/2410.16770_1729717646.png"
        },

        {
            "startTime": "10:04",
            "arxivId": "2410.17086",
            "arxivLink": "https://arxiv.org/abs/2410.17086",
            "title": "Convince Me to Explore: How to Trick Selfish Agents into Discovering New Things",
            "institute": "Microsoft",
            "text": "This research explores how to incentivize self-interested agents to explore new options, even when they'd rather stick with what they know. It does this by introducing a \"principal\" who can communicate with the agents and make recommendations, but can't force them to comply. The key innovation is that the principal leverages information asymmetry \u2013 they know more than any individual agent \u2013 to strategically reveal information and nudge the agents towards exploration.",
            "paper-title": "Exploration and Persuasion",
            "image-path": "flux_paper_image/2410.17086_1729715506.png"
        },

        {
            "startTime": "10:29",
            "arxivId": "2410.16491",
            "arxivLink": "https://arxiv.org/abs/2410.16491",
            "title": "LLMs Get a Personality Makeover: Training on Human Chat Makes Them More Than Just Bots",
            "institute": "CMU",
            "text": "This research introduces BIG5-CHAT, a dataset of 100,000 dialogues designed to capture how humans express their personality in text. Unlike previous work that relied on prompting, this study explores training-based methods like supervised fine-tuning (SFT) and direct preference optimization (DPO) to align LLMs with human personality patterns.",
            "paper-title": "BIG5-CHAT: Shaping LLM Personalities Through Training on Human-Grounded Data",
            "image-path": "flux_paper_image/2410.16491_1729717759.png"
        },

        {
            "startTime": "10:54",
            "arxivId": "2410.16531",
            "arxivLink": "https://arxiv.org/abs/2410.16531",
            "title": "Bayesian Scaling Laws: Unlocking the Secrets of In-Context Learning",
            "institute": "Stanford University",
            "text": "This paper proposes a novel Bayesian scaling law for in-context learning (ICL), which models the relationship between the number of in-context examples and the accuracy of a language model's predictions. This approach differs from previous work by explicitly incorporating Bayesian assumptions into the model, leading to interpretable parameters for task priors, learning efficiency, and per-example probabilities.",
            "paper-title": "Bayesian scaling laws for in-context learning",
            "image-path": "flux_paper_image/2410.16531_1729715745.png"
        },

        {
            "startTime": "11:20",
            "arxivId": "2410.17215",
            "arxivLink": "https://arxiv.org/abs/2410.17215",
            "title": "Tiny Teacher, Big Brains: How to Train Smart Language Models on a Budget",
            "institute": "Tsinghua University",
            "text": "This research proposes a new knowledge distillation framework called MINIPLM for pre-training language models. Unlike previous methods that rely on online teacher inference or tokenization matching, MINIPLM performs offline teacher inference and operates solely on the training corpus, enabling knowledge distillation across model families.",
            "paper-title": "MiniPLM: Knowledge Distillation for Pre-Training Language Models",
            "image-path": "flux_paper_image/2410.17215_1729716027.png"
        },

        {
            "startTime": "11:43",
            "arxivId": "2410.16415",
            "arxivLink": "https://arxiv.org/abs/2410.16415",
            "title": "Diffusion Models: Forecasting the Weather, One Noisy Observation at a Time!",
            "institute": "University of Cambridge, Technical University of Denmark, Microsoft",
            "text": "This research proposes new ways to condition and sample diffusion models for forecasting and data assimilation, particularly focusing on the combination of these tasks. The authors introduce an autoregressive sampling strategy for joint models, which significantly improves performance in forecasting, and a novel training procedure for amortised models that achieves stable performance over a range of history lengths.",
            "paper-title": "On conditional diffusion models for PDE simulations",
            "image-path": "flux_paper_image/2410.16415_1729715948.png"
        },

        {
            "startTime": "12:08",
            "arxivId": "2410.16608",
            "arxivLink": "https://arxiv.org/abs/2410.16608",
            "title": "Neighbor Embedding's Hidden Discontinuities: A Map-Continuity Perspective",
            "institute": "University of Wisconsin-Madison, Harvard University",
            "text": "This research introduces a novel framework called LOO-map, which extends the embedding map from a discrete set of input points to the entire input space. This allows for a systematic assessment of map continuity, a concept not previously explored in neighbor embedding methods.",
            "paper-title": "Assessing and improving reliability of neighbor embedding methods: a map-continuity perspective",
            "image-path": "flux_paper_image/2410.16608_1729716727.png"
        },

        {
            "startTime": "12:37",
            "arxivId": "2410.16397",
            "arxivLink": "https://arxiv.org/abs/2410.16397",
            "title": "Space Astronauts Get a Smart AI Assistant (That Doesn't Hallucinate!)",
            "institute": "German Aerospace Center, European Space Agency, University of Washington",
            "text": "This research proposes a new approach to AI assistants for astronauts, combining GPT models with Knowledge Graphs (KGs) and Augmented Reality (AR) to provide more reliable and contextually relevant information. This differs from previous work by addressing the limitations of GPT models in safety-critical environments, such as their tendency to \"hallucinate\" or generate inaccurate information.",
            "paper-title": "Towards a Reliable Offline Personal AI Assistant for Long Duration Spaceflight",
            "image-path": "flux_paper_image/2410.16397_1729714440.png"
        },

        {
            "startTime": "13:03",
            "arxivId": "2410.16458",
            "arxivLink": "https://arxiv.org/abs/2410.16458",
            "title": "LLMs for Recommendations: No Training, Just Smartness!",
            "institute": "University of Southern California, Google",
            "text": "This research proposes a training-free approach for recommendation systems using large language models (LLMs). Unlike previous methods that rely on fine-tuning LLMs, this approach leverages LLMs directly for retrieval and ranking, making it more efficient and less resource-intensive.",
            "paper-title": "STAR: A Simple Training-free Approach for Recommendations using Large Language Models",
            "image-path": "flux_paper_image/2410.16458_1729714824.png"
        },

        {
            "startTime": "13:26",
            "arxivId": "2410.16464",
            "arxivLink": "https://arxiv.org/abs/2410.16464",
            "title": "Web Agents: Ditch the Browser, Embrace the API!",
            "institute": "CMU",
            "text": "This research explores the use of APIs, specifically designed for machine interaction, as an alternative to web browsing for AI agents. It compares the performance of agents that use only browsing, only APIs, and a hybrid approach.",
            "paper-title": "Beyond Browsing: API-Based Web Agents",
            "image-path": "flux_paper_image/2410.16464_1729718754.png"
        },

        {
            "startTime": "13:51",
            "arxivId": "2410.16795",
            "arxivLink": "https://arxiv.org/abs/2410.16795",
            "title": "Traffic Prediction: A Diffusion of Explanations",
            "institute": "The Hong Kong University of Science and Technology (Guangzhou), Li Auto Inc, Southeast University...",
            "text": "This research introduces Traj-Explainer, a trajectory prediction model that uses a conditional diffusion model to capture the complex interactions between agents in a traffic scene. Unlike previous models, Traj-Explainer also provides explainability by using a modified Shapley Value model to identify the importance of different features in the prediction.",
            "paper-title": "Traj-Explainer: An Explainable and Robust Multi-modal Trajectory Prediction Approach",
            "image-path": "flux_paper_image/2410.16795_1729715597.png"
        },

        {
            "startTime": "14:26",
            "arxivId": "2410.16153",
            "arxivLink": "https://arxiv.org/abs/2410.16153",
            "title": "PANGEA: A Multi-Lingual LLM That Speaks Your Language (and Understands Your Culture)",
            "institute": "CMU",
            "text": "This research introduces PANGEA, a multilingual multimodal LLM trained on a diverse dataset spanning 39 languages. Unlike previous work, PANGEA focuses on addressing cultural biases in visual understanding tasks by incorporating culturally relevant images and instructions.",
            "paper-title": "Pangea: A Fully Open Multilingual Multimodal LLM for 39 Languages",
            "image-path": "flux_paper_image/2410.16153_1729718492.png"
        },

        {
            "startTime": "14:50",
            "arxivId": "2410.16340",
            "arxivLink": "https://arxiv.org/abs/2410.16340",
            "title": "SGD Goes Wild: When Gradients Get Heavy-Tailed",
            "institute": "Stanford University, University of Warwick",
            "text": "This research extends the study of stochastic gradient descent (SGD) to scenarios where the gradients have infinite variance, a phenomenon known as heavy-tailed noise. Previous work primarily focused on finite variance gradients, but this paper establishes the asymptotic behavior of SGD in the presence of infinite variance gradients, specifically when the stochastic gradient is regular varying with index \u03b1 \u2208 (1, 2).",
            "paper-title": "Limit Theorems for Stochastic Gradient Descent with Infinite Variance",
            "image-path": "flux_paper_image/2410.16340_1729715870.png"
        },

        {
            "startTime": "15:13",
            "arxivId": "2410.16505",
            "arxivLink": "https://arxiv.org/abs/2410.16505",
            "title": "AI Can't Hear You If You Change Your Words: New Study Shows Audio Models Struggle with Linguistic Variations",
            "institute": "University of Maryland, Nvidia",
            "text": "This research investigates the robustness of audio-language models (ALMs) to linguistic variations in text queries. Unlike previous work that focused on scaling ALMs or enhancing their reasoning capabilities, this study specifically examines how ALMs perform when presented with paraphrased versions of the same query.",
            "paper-title": "Do Audio-Language Models Understand Linguistic Variations?",
            "image-path": "flux_paper_image/2410.16505_1729716504.png"
        },

        {
            "startTime": "15:36",
            "arxivId": "2410.16456",
            "arxivLink": "https://arxiv.org/abs/2410.16456",
            "title": "AI Travel Agent: From \"Where to?\" to \"Book It!\" in 5 Seconds!",
            "institute": "Meta AI (FAIR)",
            "text": "This research proposes a system called To the Globe (TTG) that combines a large language model (LLM) with a symbolic solver to generate guaranteed travel itineraries based on natural language requests. Unlike previous work that relies solely on LLMs, TTG leverages the strengths of both LLMs and symbolic solvers to ensure feasibility and optimality of the generated itineraries.",
            "paper-title": "To the Globe (TTG): Towards Language-Driven Guaranteed Travel Planning",
            "image-path": "flux_paper_image/2410.16456_1729718868.png"
        },

        {
            "startTime": "16:02",
            "arxivId": "2410.17032",
            "arxivLink": "https://arxiv.org/abs/2410.17032",
            "title": "AI Safety: Not Everyone Sees It the Same Way!",
            "institute": "Google",
            "text": "This research examines how different demographic groups perceive the safety of text-to-image AI models, going beyond previous work that focused primarily on text-based safety.",
            "paper-title": "Insights on Disagreement Patterns in Multimodal Safety Perception across Diverse Rater Groups",
            "image-path": "flux_paper_image/2410.17032_1729716920.png"
        },

        {
            "startTime": "16:23",
            "arxivId": "2410.16135",
            "arxivLink": "https://arxiv.org/abs/2410.16135",
            "title": "Sparsity Beyond 2:4: Transformers Get a Speed Boost!",
            "institute": "Huawei, Tsinghua University, Beijing Jiaotong University",
            "text": "This research explores V:N:M sparsity, a new pattern for compressing Transformer models, which goes beyond the commonly used 2:4 sparsity. It allows for higher and more flexible pruning ratios, leading to greater speedups.",
            "paper-title": "Beyond 2:4: exploring V:N:M sparsity for efficient transformer inference on GPUs",
            "image-path": "flux_paper_image/2410.16135_1729718599.png"
        },

        {
            "startTime": "16:48",
            "arxivId": "2410.16493",
            "arxivLink": "https://arxiv.org/abs/2410.16493",
            "title": "AMP-ing Up Conformal Prediction: A Speed Demon for Uncertainty Quantification",
            "institute": "\u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne",
            "text": "This research proposes a novel algorithm based on Approximate Message Passing (AMP) to accelerate the computation of prediction intervals using full conformal prediction. Unlike previous work that focused on linearizing the solution of an empirical risk minimization problem, this approach leverages AMP to approximate the computation of conformity scores.",
            "paper-title": "Building Conformal Prediction Intervals with Approximate Message Passing",
            "image-path": "flux_paper_image/2410.16493_1729715261.png"
        },

        {
            "startTime": "17:07",
            "arxivId": "2410.16454",
            "arxivLink": "https://arxiv.org/abs/2410.16454",
            "title": "LLMs Can't Forget: Quantization Brings Back \"Forgotten\" Knowledge",
            "institute": "Pennsylvania State University, Harvard University, Amazon",
            "text": "This research investigates the impact of quantization on LLMs that have undergone unlearning, revealing that quantization can inadvertently recover knowledge that was intended to be forgotten. This finding challenges the effectiveness of existing unlearning methods and highlights a previously overlooked aspect of LLM unlearning.",
            "paper-title": "Does your LLM truly unlearn? An embarrassingly simple approach to recover unlearned knowledge",
            "image-path": "flux_paper_image/2410.16454_1729718174.png"
        },

        {
            "startTime": "17:27",
            "arxivId": "2410.17001",
            "arxivLink": "https://arxiv.org/abs/2410.17001",
            "title": "Octree-powered Point Cloud Makeover: Upsampling and Cleaning in One Go!",
            "institute": "Peking University",
            "text": "This research proposes a single neural network architecture, leveraging an octree-based 3D U-Net, to jointly perform point cloud upsampling and cleaning. This approach differs from previous methods that typically address these tasks independently or rely on more complex architectures.",
            "paper-title": "Joint Point Cloud Upsampling and Cleaning with Octree-based CNNs",
            "image-path": "flux_paper_image/2410.17001_1729718979.png"
        },

        {
            "startTime": "17:48",
            "arxivId": "2410.16999",
            "arxivLink": "https://arxiv.org/abs/2410.16999",
            "title": "Road Ponding Detection: Seeing Through the Watery Haze with AI!",
            "institute": "Sun Yat-sen University, Beihang University, Tsinghua University",
            "text": "This research introduces a new deep learning model called AGSENet, which incorporates self-attention mechanisms to enhance the detection of road ponding. Unlike previous methods that rely on general image features, AGSENet focuses on learning salient features related to the reflection phenomenon, improving detection accuracy in complex driving scenarios.",
            "paper-title": "AGSENet: A Robust Road Ponding Detection Method for Proactive Traffic Safety",
            "image-path": "flux_paper_image/2410.16999_1729717677.png"
        },

        {
            "startTime": "18:15",
            "arxivId": "2410.16282",
            "arxivLink": "https://arxiv.org/abs/2410.16282",
            "title": "Ground Station Selection: Finding the Best Spot for Your Spacecraft's Calls!",
            "institute": "Stanford University",
            "text": "This research focuses on selecting the optimal ground station network for low-Earth orbiting satellites by formulating the problem as an integer programming problem. Unlike previous work that focused on specific aspects like ground station placement or scheduling, this paper presents a comprehensive framework for optimizing the entire ground segment.",
            "paper-title": "Optimal Ground Station Selection for Low-Earth Orbiting Satellites",
            "image-path": "flux_paper_image/2410.16282_1729716107.png"
        },

        {
            "startTime": "18:38",
            "arxivId": "2410.16560",
            "arxivLink": "https://arxiv.org/abs/2410.16560",
            "title": "Money Talks: How Paying People More Makes AI Advice More Appealing",
            "institute": "University of Washington",
            "text": "This research explores the impact of performance pressure on how people use AI advice, a factor often overlooked in previous studies. The authors manipulate pressure by varying the potential monetary gains and losses participants can experience, demonstrating how this can influence their reliance on AI.",
            "paper-title": "Raising the Stakes: Performance Pressure Improves AI-Assisted Decision Making",
            "image-path": "flux_paper_image/2410.16560_1729717981.png"
        },

        {
            "startTime": "18:58",
            "arxivId": "2410.16237",
            "arxivLink": "https://arxiv.org/abs/2410.16237",
            "title": "Byzantine Generals Go Local: A New Protocol for Multi-Agent Coordination",
            "institute": "Tsinghua University, Washington University in St. Louis",
            "text": "This paper introduces the Imperfect Byzantine Generals Problem (IBGP), a variation of the classic Byzantine Generals Problem (BGP) that focuses on achieving partial consensus among agents in multi-agent systems. Unlike BGP, which requires global agreement, IBGP allows for successful coordination even if some agents fail to reach consensus.",
            "paper-title": "IBGP: Imperfect Byzantine Generals Problem for Zero-Shot Robustness in Communicative Multi-Agent Systems",
            "image-path": "flux_paper_image/2410.16237_1729718843.png"
        },

        {
            "startTime": "19:19",
            "arxivId": "2410.17221",
            "arxivLink": "https://arxiv.org/abs/2410.17221",
            "title": "Network Control: Spectral Magic Makes Multi-Agent Learning Scalable!",
            "institute": "Harvard University",
            "text": "This paper introduces a novel approach to multi-agent control in networks with continuous state-action spaces by leveraging spectral representations of local transition kernels. Unlike previous work that focused on tabular settings, this method allows for scalable learning even with large and continuous state-action spaces.",
            "paper-title": "Scalable spectral representations for network multiagent control",
            "image-path": "flux_paper_image/2410.17221_1729718809.png"
        },

        {
            "startTime": "19:41",
            "arxivId": "2410.17146",
            "arxivLink": "https://arxiv.org/abs/2410.17146",
            "title": "Fine-Tuning Forgetfulness: A New Trick to Keep Your AI Sharp!",
            "institute": "\u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne, Google, University of Geneva",
            "text": "This research introduces LiNeS, a post-training technique that scales parameter updates based on layer depth. Unlike previous methods that modify the fine-tuning process, LiNeS directly edits the model's weights after training.",
            "paper-title": "LiNeS: Post-training Layer Scaling Prevents Forgetting and Enhances Model Merging",
            "image-path": "flux_paper_image/2410.17146_1729717565.png"
        },

        {
            "startTime": "20:00",
            "arxivId": "2410.17159",
            "arxivLink": "https://arxiv.org/abs/2410.17159",
            "title": "Time Series Forecasting: Deep Dive into Linear and Nonlinear Patterns with LiNo!",
            "institute": "Peking University, Hong Kong Polytechnic University",
            "text": "This research introduces a novel approach called Recursive Residual Decomposition (RRD) for time series forecasting. Unlike previous methods that focus on simple linear patterns, LiNo explicitly extracts both linear and nonlinear patterns through a deeper-level decomposition framework.",
            "paper-title": "LiNo: Advancing Recursive Residual Decomposition of Linear and Nonlinear Patterns for Robust Time Series Forecasting",
            "image-path": "flux_paper_image/2410.17159_1729718796.png"
        },

        {
            "startTime": "20:19",
            "arxivId": "2410.16834",
            "arxivLink": "https://arxiv.org/abs/2410.16834",
            "title": "Correlation Confusion: How Different Measures Mess Up NLG Evaluation",
            "institute": "Peking University",
            "text": "This research delves into the impact of different correlation measures used in meta-evaluation of NLG systems, highlighting how different grouping methods and correlation coefficients can lead to varying results. Previous studies often overlooked these variations, simply following conventional practices.",
            "paper-title": "Analyzing and Evaluating Correlation Measures in NLG Meta-Evaluation",
            "image-path": "flux_paper_image/2410.16834_1729715635.png"
        },

        {
            "startTime": "20:42",
            "arxivId": "2410.16972",
            "arxivLink": "https://arxiv.org/abs/2410.16972",
            "title": "Symmetry Superpowers: How Invariance Makes Bayesian Optimization Fly!",
            "institute": "University College London",
            "text": "This research explores how to improve the efficiency of Bayesian optimization by incorporating known invariances into the kernel of the Gaussian process model. This approach differs from previous work that focused on data augmentation or constrained optimization.",
            "paper-title": "Sample-efficient Bayesian Optimisation Using Known Invariances",
            "image-path": "flux_paper_image/2410.16972_1729716811.png"
        },

        {
            "startTime": "21:06",
            "arxivId": "2410.16794",
            "arxivLink": "https://arxiv.org/abs/2410.16794",
            "title": "One-Step Diffusion Distillation: Turning Slow Learners into Speedy Generators!",
            "institute": "Peking University, Westlake University, CMU",
            "text": "This paper introduces Score Implicit Matching (SIM), a new method for distilling pre-trained diffusion models into single-step generators. Unlike previous methods that rely on specific divergences like KL or Fisher, SIM uses a broader class of score-based divergences, allowing for more flexibility in the distillation process.",
            "paper-title": "One-Step Diffusion Distillation through Score Implicit Matching",
            "image-path": "flux_paper_image/2410.16794_1729715715.png"
        },

        {
            "startTime": "21:37",
            "arxivId": "2410.16719",
            "arxivLink": "https://arxiv.org/abs/2410.16719",
            "title": "Diffusion Models Learn to Compose Like a Pro: A Curriculum for Better Images",
            "institute": "Yale University, University of Southern California, MIT",
            "text": "This research introduces a new method for training diffusion models to understand compositional relationships between objects and attributes. Unlike previous work that focused on optimizing attention mechanisms or learning from minimally changed captions, this paper proposes a curriculum contrastive learning approach. The key idea is to progressively introduce more complex compositional scenarios during fine-tuning, allowing the model to build a solid foundation before tackling intricate cases.",
            "paper-title": "Progressive Compositionality In Text-to-Image Generative Models",
            "image-path": "flux_paper_image/2410.16719_1729718328.png"
        },

        {
            "startTime": "21:58",
            "arxivId": "2410.17021",
            "arxivLink": "https://arxiv.org/abs/2410.17021",
            "title": "AI Gets Its Thinking Cap: New Method Breaks Down Complex Questions for Better Answers",
            "institute": "Peking University, International Digital Economy Academy, Monash University...",
            "text": "This research introduces a new prompting paradigm called Self-Guiding Finite State Machine (SG-FSM) for multi-hop question answering. Unlike traditional chain-of-thought methods, SG-FSM iteratively breaks down complex questions into sub-questions, allowing the model to correct itself and improve accuracy.",
            "paper-title": "SG-FSM: A Self-Guiding Zero-Shot Prompting Paradigm for Multi-Hop Question Answering Based on Finite State Machine",
            "image-path": "flux_paper_image/2410.17021_1729717263.png"
        },

        {
            "startTime": "22:25",
            "arxivId": "2410.16647",
            "arxivLink": "https://arxiv.org/abs/2410.16647",
            "title": "Keyword Spotting: A New Loss Function Makes It Easier to Say \"Hey Google\"",
            "institute": "Google",
            "text": "This research introduces a new loss function called GE2E-KWS, which simulates the real-world process of keyword spotting by separating enrollment and testing utterances during training. This differs from previous work that used triplet loss, which only compared a single anchor utterance to one positive and one negative utterance.",
            "paper-title": "GE2E-KWS: Generalized End-to-End Training and Evaluation for Zero-shot Keyword Spotting",
            "image-path": "flux_paper_image/2410.16647_1729716410.png"
        },

        {
            "startTime": "22:54",
            "arxivId": "2410.16658",
            "arxivLink": "https://arxiv.org/abs/2410.16658",
            "title": "AI-Powered Catalyst: A Language Model Helps Find the Best Fit!",
            "institute": "CMU",
            "text": "This research introduces Adsorb-Agent, an LLM agent that autonomously identifies stable adsorption configurations for catalysts, reducing the number of initial configurations needed and improving the accuracy of adsorption energy predictions. This approach differs from previous work by leveraging the reasoning capabilities of LLMs to guide the search for optimal configurations, rather than relying solely on algorithmic approaches.",
            "paper-title": "Adsorb-Agent: Autonomous Identification of Stable Adsorption Configurations via Large Language Model Agent",
            "image-path": "flux_paper_image/2410.16658_1729717278.png"
        },

        {
            "startTime": "23:14",
            "arxivId": "2410.16392",
            "arxivLink": "https://arxiv.org/abs/2410.16392",
            "title": "LLMs: The New AI System Optimizers?",
            "institute": "Tsinghua University",
            "text": "This paper explores a novel approach to optimizing compound AI systems by using LLMs as optimizers. Unlike traditional gradient-based or reinforcement learning methods, this approach leverages the generative capabilities of LLMs to directly optimize system parameters, such as instructions and tool definitions.",
            "paper-title": "LLM-based Optimization of Compound AI Systems: A Survey",
            "image-path": "flux_paper_image/2410.16392_1729716094.png"
        },

        {
            "startTime": "23:40",
            "arxivId": "2410.16606",
            "arxivLink": "https://arxiv.org/abs/2410.16606",
            "title": "Graph Jigsaw Puzzle: Solving Domain Adaptation with Diffusion",
            "institute": "Peking University, UC Los Angeles",
            "text": "This research focuses on source-free graph domain adaptation, a challenging problem where the source data is unavailable during adaptation. The key innovation is using a graph diffusion model to transform target graphs into source-style graphs, effectively bridging the domain gap without accessing the source data.",
            "paper-title": "GALA: Graph Diffusion-based Alignment with Jigsaw for Source-free Domain Adaptation.",
            "image-path": "flux_paper_image/2410.16606_1729715542.png"
        },

        {
            "startTime": "24:02",
            "arxivId": "2410.16546",
            "arxivLink": "https://arxiv.org/abs/2410.16546",
            "title": "Can Transformers Learn to Predict the Future? A Kalman Filter in Disguise!",
            "institute": "University of Texas at Austin",
            "text": "This research investigates whether transformers can learn to predict the behavior of a linear dynamical system by using observations and system parameters as context. Unlike previous work that focused on simpler functions, this study explores the ability of transformers to emulate the Kalman filter, a well-known algorithm for optimal state estimation.",
            "paper-title": "Can Transformers In-Context Learn Behavior of a Linear Dynamical System?",
            "image-path": "flux_paper_image/2410.16546_1729718133.png"
        },

        {
            "startTime": "24:21",
            "arxivId": "2410.16919",
            "arxivLink": "https://arxiv.org/abs/2410.16919",
            "title": "Robots Learn From Their Mistakes: EnvBridge Makes Embodied AI More Adaptable",
            "institute": "Panasonic Connect Co. Ltd., National University of Singapore, Panasonic R&D Center Singapore...",
            "text": "This research introduces EnvBridge, a novel method that uses cross-environment knowledge transfer to improve the adaptability of embodied AI agents. Unlike previous approaches that rely on environment-specific training or fixed prompts, EnvBridge leverages successful control codes from one environment and applies them to another, enhancing the agent's ability to handle diverse and unseen scenarios.",
            "paper-title": "EnvBridge: Bridging Diverse Environments with Cross-Environment Knowledge Transfer for Embodied AI",
            "image-path": "flux_paper_image/2410.16919_1729717225.png"
        },

        {
            "startTime": "24:46",
            "arxivId": "2410.16441",
            "arxivLink": "https://arxiv.org/abs/2410.16441",
            "title": "Tired of Robots Spilling All Your Secrets? New Research Finds Sparse Strategies for Smarter Teams!",
            "institute": "University of Texas at Austin, UC Berkeley, United States Army",
            "text": "This research proposes a new approach to finding sparse feedback policies in dynamic games. Unlike previous work that relies on full state information, this method selectively depends on the states of a subset of agents, making it more efficient and robust in real-world scenarios.",
            "paper-title": "Policies with Sparse Inter-Agent Dependencies in Dynamic Games: A Dynamic Programming Approach",
            "image-path": "flux_paper_image/2410.16441_1729716361.png"
        },

        {
            "startTime": "25:08",
            "arxivId": "2410.16329",
            "arxivLink": "https://arxiv.org/abs/2410.16329",
            "title": "LoRAT: Tracking Objects Like a Pro, Without the Lag!",
            "institute": "Nanjing University of Science and Technology, Tsinghua University",
            "text": "This research adapts LoRA, a parameter-efficient fine-tuning technique, to the domain of visual tracking. Unlike previous methods that focus on computational aspects, this approach prioritizes perceptual capabilities.",
            "paper-title": "The Solution for Single Object Tracking Task of Perception Test Challenge 2024",
            "image-path": "flux_paper_image/2410.16329_1729717075.png"
        },

        {
            "startTime": "25:33",
            "arxivId": "2410.16713",
            "arxivLink": "https://arxiv.org/abs/2410.16713",
            "title": "AI's Data Diet: Will Synthetic Data Make Models Fatter or Finer?",
            "institute": "Stanford University",
            "text": "This research expands on previous work by examining the impact of synthetic data on model performance in three new generative modeling settings: multivariate Gaussian modeling, kernel density estimation, and supervised fine-tuning of language models. It also introduces a new data paradigm, Accumulate-Subsample, where data accumulate but are then subsampled to ensure a fixed compute budget.",
            "paper-title": "Collapse or Thrive? Perils and Promises of Synthetic Data in a Self-Generating World",
            "image-path": "flux_paper_image/2410.16713_1729716335.png"
        },

        {
            "startTime": "25:52",
            "arxivId": "2410.16714",
            "arxivLink": "https://arxiv.org/abs/2410.16714",
            "title": "LLMs Get a Magnetic Makeover: Self-Play for Smarter, Safer AI",
            "institute": "Peking University, Beijing Academy of Artificial Intelligence, Nanjing University...",
            "text": "This research introduces Magnetic Preference Optimization (MPO), a new method for aligning LLMs with human preferences. Unlike previous methods that rely on average-iterate convergence or regularized games, MPO achieves last-iterate convergence to the Nash equilibrium of the original preference game.",
            "paper-title": "Magnetic Preference Optimization: Achieving Last-iterate Convergence for Language Models Alignment",
            "image-path": "flux_paper_image/2410.16714_1729714478.png"
        },

        {
            "startTime": "26:20",
            "arxivId": "2410.16484",
            "arxivLink": "https://arxiv.org/abs/2410.16484",
            "title": "Neural Networks: Unmasking the Hidden Functions with Gromov-Wasserstein!",
            "institute": "IBM",
            "text": "This research introduces a novel approach to understanding neural networks by identifying functionally similar sub-networks using the Gromov-Wasserstein distance. Unlike previous methods that rely on manual inspection or specific tasks, this approach is automated and task-agnostic, allowing for a more efficient and comprehensive analysis of network behavior.",
            "paper-title": "Identifying Sub-networks in Neural Networks via Functionally Similar Representations",
            "image-path": "flux_paper_image/2410.16484_1729715671.png"
        },

        {
            "startTime": "26:38",
            "arxivId": "2410.17136",
            "arxivLink": "https://arxiv.org/abs/2410.17136",
            "title": "Chimp-tastic Vision: AI Learns to Read Chimpanzee Body Language",
            "institute": "Peking University, UC San Diego",
            "text": "This research introduces AlphaChimp, a new AI model that simultaneously detects, tracks, and recognizes chimpanzee behaviors in videos. Unlike previous methods that focused on individual tasks, AlphaChimp integrates these tasks into a unified framework, allowing for more efficient and accurate analysis of complex social interactions.",
            "paper-title": "AlphaChimp: Tracking and Behavior Recognition of Chimpanzees",
            "image-path": "flux_paper_image/2410.17136_1729716516.png"
        },

        {
            "startTime": "26:57",
            "arxivId": "2410.16138",
            "arxivLink": "https://arxiv.org/abs/2410.16138",
            "title": "Line Graph Magic: Untangling the Knots of Graph Isomorphism",
            "institute": "University of Oxford",
            "text": "This research delves into the theoretical impact of line graph transformation on the expressivity of graph neural networks (GNNs), particularly focusing on challenging graph types like Cai-F\u00a8urer-Immerman (CFI) graphs and strongly regular graphs. Unlike previous work that primarily focused on experimental results, this study provides a theoretical framework for understanding how line graph transformation affects the ability of GNNs to distinguish between these complex graph structures.",
            "paper-title": "Theoretical Insights into Line Graph Transformation on Graph Learning",
            "image-path": "flux_paper_image/2410.16138_1729717202.png"
        },

        {
            "startTime": "27:27",
            "arxivId": "2410.17207",
            "arxivLink": "https://arxiv.org/abs/2410.17207",
            "title": "Point Cloud Pre-training: A Memory-Friendly Approach to Understanding 3D Worlds",
            "institute": "Peking University",
            "text": "This research introduces EPContrast, a new method for point-level contrastive learning in large-scale point clouds. Unlike previous methods that rely on random sampling or segment-level contrastive learning, EPContrast utilizes asymmetric granularity embedding and channel-wise contrastive learning to achieve better performance with lower memory consumption.",
            "paper-title": "EPContrast: Effective Point-level Contrastive Learning for Large-scale Point Cloud Understanding",
            "image-path": "flux_paper_image/2410.17207_1729716425.png"
        },

        {
            "startTime": "27:46",
            "arxivId": "2410.16438",
            "arxivLink": "https://arxiv.org/abs/2410.16438",
            "title": "Lip Reading Gets a Tune-Up: Audio-Visual Alignment for Better Speech Recognition",
            "institute": "Beijing University of Posts and Telecommunications, Tsinghua University",
            "text": "This research introduces a novel audio-visual cross-modal alignment method called AlignVSR. Unlike previous approaches that focus solely on global alignment, AlignVSR incorporates a two-layer alignment mechanism, combining global and local alignment to enhance the utilization of audio information for visual speech recognition.",
            "paper-title": "AlignVSR: Audio-Visual Cross-Modal Alignment for Visual Speech Recognition",
            "image-path": "flux_paper_image/2410.16438_1729716721.png"
        },

        {
            "startTime": "28:08",
            "arxivId": "2410.16429",
            "arxivLink": "https://arxiv.org/abs/2410.16429",
            "title": "Lean 4's New Tool: Pantograph Makes Theorem Proving a Breeze!",
            "institute": "Stanford University",
            "text": "This paper introduces Pantograph, a new interface for Lean 4, a proof assistant. Unlike previous interfaces, Pantograph allows for more efficient proof search using powerful algorithms like Monte Carlo Tree Search (MCTS). It also supports advanced reasoning steps and data extraction tasks, making it more versatile for machine learning models.",
            "paper-title": "Pantograph: A Machine-to-Machine Interaction Interface for Advanced Theorem Proving, High Level Reasoning, and Data Extraction in Lean 4",
            "image-path": "flux_paper_image/2410.16429_1729715823.png"
        },

        {
            "startTime": "28:31",
            "arxivId": "2410.17196",
            "arxivLink": "https://arxiv.org/abs/2410.17196",
            "title": "Voice Assistants: Can They Handle a \"What's the Placebo Phenomenon?\" with a Stutter?",
            "institute": "National University of Singapore",
            "text": "This research introduces VoiceBench, a new benchmark specifically designed to evaluate the performance of LLM-based voice assistants in real-world scenarios. Unlike previous benchmarks that primarily focused on ASR or clean speech, VoiceBench incorporates variations in speaker characteristics, environmental conditions, and content, providing a more comprehensive assessment of these systems.",
            "paper-title": "VoiceBench: Benchmarking LLM-Based Voice Assistants",
            "image-path": "flux_paper_image/2410.17196_1729718933.png"
        },

        {
            "startTime": "28:47",
            "arxivId": "2410.17233",
            "arxivLink": "https://arxiv.org/abs/2410.17233",
            "title": "LLMs Learn to Reward: A New Way to Train AI with Human Preferences",
            "institute": "Tsinghua University, Shanghai Qi Zhi Institute, New York University",
            "text": "This research proposes a new method called In-Context Preference Learning (ICPL) that uses large language models (LLMs) to learn reward functions from human preferences. Unlike previous methods that rely on iterative feedback, ICPL leverages the LLM's ability to generate and refine reward functions based on human rankings of agent behaviors.",
            "paper-title": "Few-shot In-Context Preference Learning Using Large Language Models",
            "image-path": "flux_paper_image/2410.17233_1729714608.png"
        },

        {
            "startTime": "29:10",
            "arxivId": "2410.16398",
            "arxivLink": "https://arxiv.org/abs/2410.16398",
            "title": "Fed Up with Communication Costs? This Multi-Objective Optimization Algorithm Has Got Your Back!",
            "institute": "Carnegie Mellon University",
            "text": "This research proposes a new federated multi-objective optimization (FMOO) algorithm called FedCMOO that significantly reduces communication costs compared to existing methods. Unlike previous approaches, FedCMOO's communication complexity does not scale with the number of objectives, making it more efficient for problems with many objectives.",
            "paper-title": "Federated Communication-Efficient Multi-Objective Optimization",
            "image-path": "flux_paper_image/2410.16398_1729716531.png"
        },

        {
            "startTime": "29:31",
            "arxivId": "2410.16935",
            "arxivLink": "https://arxiv.org/abs/2410.16935",
            "title": "Graph Neural Networks Get Directionally Aware: Edge Signals Go Beyond the Flow!",
            "institute": "Technical University of Munich, \u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne",
            "text": "This research introduces a new type of graph neural network (GNN) specifically designed for edge-level signals. Unlike previous GNNs that primarily focused on node-level tasks, this model can handle both directed and undirected edges, as well as signals with and without inherent direction.",
            "paper-title": "Graph Neural Networks for Edge Signals: Orientation Equivariance and Invariance",
            "image-path": "flux_paper_image/2410.16935_1729718044.png"
        },

        {
            "startTime": "29:59",
            "arxivId": "2410.16517",
            "arxivLink": "https://arxiv.org/abs/2410.16517",
            "title": "Decision Trees Get a Makeover: New Algorithm Minimizes Return Gaps in Multi-Agent RL",
            "institute": "George Washington University, CMU, United States Military Academy",
            "text": "This research introduces a novel approach to extracting decision tree policies from deep reinforcement learning models, focusing on minimizing the return gap between the original policy and the extracted decision tree. Unlike previous work that primarily focused on single-agent settings or heuristic designs, this paper provides a theoretical framework for multi-agent decentralized decision tree extraction with guaranteed performance bounds.",
            "paper-title": "RGMDT: Return-Gap-Minimizing Decision Tree Extraction in Non-Euclidean Metric Space",
            "image-path": "flux_paper_image/2410.16517_1729718633.png"
        },

        {
            "startTime": "30:25",
            "arxivId": "2410.16950",
            "arxivLink": "https://arxiv.org/abs/2410.16950",
            "title": "AI Agents: Tricked by a Simple \"Foot in the Door\"",
            "institute": "IBM",
            "text": "This research introduces a new attack method called \"Foot-in-the-Door\" (FITD) that exploits the ReAct framework's vulnerability to indirect prompt injection (IPI). Unlike previous IPI attacks, FITD uses a harmless request to manipulate the agent into executing a subsequent malicious action.",
            "paper-title": "Breaking ReAct Agents: Foot-in-the-Door Attack Will Get You In",
            "image-path": "flux_paper_image/2410.16950_1729716596.png"
        },

        {
            "startTime": "30:49",
            "arxivId": "2410.16128",
            "arxivLink": "https://arxiv.org/abs/2410.16128",
            "title": "AI Learns to Think Like Us: No More Guesswork, Just Smart Reasoning!",
            "institute": "ETH Zurich",
            "text": "This research introduces a novel framework called SMART that enables language models to learn and select the most effective reasoning strategies for various tasks on their first attempt, without the need for iterative refinement. This differs from previous work that relies on multiple inference passes or external feedback.",
            "paper-title": "SMART: Self-learning Meta-strategy Agent for Reasoning Tasks",
            "image-path": "flux_paper_image/2410.16128_1729717483.png"
        },

        {
            "startTime": "31:10",
            "arxivId": "2410.17194",
            "arxivLink": "https://arxiv.org/abs/2410.17194",
            "title": "Knowledge Editing: When Fixing Facts Breaks Brains",
            "institute": "Harvard University",
            "text": "This research introduces a novel synthetic task to study the effects of knowledge editing (KE) on Transformers. Unlike previous work that focused on empirical evaluations, this paper delves into the mechanistic level, analyzing how KE distorts model representations.",
            "paper-title": "Representation Shattering in Transformers: A Synthetic Study with Knowledge Editing",
            "image-path": "flux_paper_image/2410.17194_1729716627.png"
        },

        {
            "startTime": "31:34",
            "arxivId": "2410.16186",
            "arxivLink": "https://arxiv.org/abs/2410.16186",
            "title": "Multilingual Benchmarks: Are They Just a Big Game of Telephone?",
            "institute": "Microsoft",
            "text": "This research expands upon previous work by examining the contamination of multilingual benchmarks in a wider range of LLMs, including both base and instruction-tuned models. It also utilizes a more robust statistical approach to detect contamination.",
            "paper-title": "Contamination Report for Multilingual Benchmarks",
            "image-path": "flux_paper_image/2410.16186_1729716369.png"
        },

        {
            "startTime": "31:57",
            "arxivId": "2410.16769",
            "arxivLink": "https://arxiv.org/abs/2410.16769",
            "title": "Tiny Object, Big Impact: Detecting Small Objects on Tiny Microcontrollers",
            "institute": "ETH Zurich, KyungHee University",
            "text": "This research proposes an adaptive tiling method for object detection networks, specifically designed for low-power microcontrollers. This approach differs from previous work by focusing on optimizing the detection of small objects, a challenge often overlooked in TinyML research.",
            "paper-title": "DSORT-MCU: Detecting Small Objects in Real-Time on Microcontroller Units",
            "image-path": "flux_paper_image/2410.16769_1729717765.png"
        },

        {
            "startTime": "32:19",
            "arxivId": "2410.16215",
            "arxivLink": "https://arxiv.org/abs/2410.16215",
            "title": "Pre-training Distillation: LLMs Learn From Their Elders, But Not Always!",
            "institute": "Tsinghua University",
            "text": "This research explores the design space of pre-training distillation (PD), a technique that transfers knowledge from a large teacher LLM to a smaller student LLM during the pre-training phase. This differs from previous work that typically focused on post-training distillation.",
            "paper-title": "Pre-training Distillation for Large Language Models: A Design Space Exploration",
            "image-path": "flux_paper_image/2410.16215_1729715499.png"
        },

        {
            "startTime": "32:46",
            "arxivId": "2410.16712",
            "arxivLink": "https://arxiv.org/abs/2410.16712",
            "title": "Denoising for Fairness: How to Make Speech Recognition Less Biased",
            "institute": "IIT Kharagpur, Joint Plant Committee",
            "text": "This research explores the use of denoising techniques as a strategy to mitigate bias in Automatic Speech Recognition (ASR) systems. Unlike previous work that focused on noise-robust ASRs or data augmentation, this study investigates the impact of denoising on reducing performance disparities across demographic groups, specifically gender.",
            "paper-title": "DENOASR: Debiasing ASRs through Selective Denoising",
            "image-path": "flux_paper_image/2410.16712_1729715926.png"
        },

        {
            "startTime": "33:07",
            "arxivId": "2410.16168",
            "arxivLink": "https://arxiv.org/abs/2410.16168",
            "title": "Forget and Learn: How Active Forgetting Makes Language Models Multilingual",
            "institute": "Microsoft",
            "text": "This research explores the use of \"active forgetting\" during pretraining to improve the cross-lingual transfer capabilities of decoder-only language models. Unlike previous work that focused on adapting existing models to new languages, this study focuses on improving the base model itself.",
            "paper-title": "Exploring Pretraining via Active Forgetting for Improving Cross Lingual Transfer for Decoder Language Models",
            "image-path": "flux_paper_image/2410.16168_1729716418.png"
        },

        {
            "startTime": "33:28",
            "arxivId": "2410.16271",
            "arxivLink": "https://arxiv.org/abs/2410.16271",
            "title": "FrugalNeRF: NeRF's Budget-Friendly Makeover for Speedy 3D Scene Creation!",
            "institute": "National Yang Ming Chiao Tung University, NVIDIA Research",
            "text": "FrugalNeRF introduces a weight-sharing voxel representation across multiple scales, enabling efficient scene representation and faster training compared to previous methods. This approach eliminates the need for external priors, such as pre-trained models, and relies solely on the available training data.",
            "paper-title": "FrugalNeRF: Fast Convergence for Few-shot Novel View Synthesis without Learned Priors",
            "image-path": "flux_paper_image/2410.16271_1729716260.png"
        },

        {
            "startTime": "33:58",
            "arxivId": "2410.16179",
            "arxivLink": "https://arxiv.org/abs/2410.16179",
            "title": "LLM Decoding: MagicPIG Turns Attention Sparse, Not Sparse!",
            "institute": "Carnegie Mellon University, University of Washington, New York University...",
            "text": "This research proposes MagicPIG, a novel approach that leverages Locality Sensitive Hashing (LSH) sampling to approximate attention output in large language models (LLMs). Unlike previous methods that rely on selecting the top-k attention scores, MagicPIG samples keys and values based on their distribution, leading to more accurate and efficient attention estimation.",
            "paper-title": "MagicPIG: LSH Sampling for Efficient LLM Generation",
            "image-path": "flux_paper_image/2410.16179_1729714734.png"
        },

        {
            "startTime": "34:25",
            "arxivId": "2410.16710",
            "arxivLink": "https://arxiv.org/abs/2410.16710",
            "title": "Data Selection: A Gradient's Journey to Model Perfection!",
            "institute": "Google",
            "text": "This research proposes a new algorithm called Gradient Trajectory Pursuit (GTP) for selecting influential language data. Unlike previous methods that rely on individual sample rankings or inefficient matching processes, GTP performs joint selection by matching gradient trajectories in a subspace. This approach leads to more efficient and effective data selection, especially for large datasets.",
            "paper-title": "Influential Language Data Selection via Gradient Trajectory Pursuit",
            "image-path": "flux_paper_image/2410.16710_1729717179.png"
        },

        {
            "startTime": "34:50",
            "arxivId": "2410.16561",
            "arxivLink": "https://arxiv.org/abs/2410.16561",
            "title": "Gradient Normalization: Clipping is SO Last Season!",
            "institute": "National University of Defense Technology, Peking University",
            "text": "This paper improves upon previous work on gradient normalization with clipping for nonconvex optimization under heavy-tailed noise. It demonstrates that gradient normalization alone is sufficient for convergence, eliminating the need for clipping. Additionally, the paper removes logarithmic factors from the convergence rates and recovers the deterministic convergence rate when the noise variance is zero.",
            "paper-title": "Gradient Normalization with(out) Clipping Ensures Convergence of Nonconvex SGD under Heavy-Tailed Noise with Improved Results",
            "image-path": "flux_paper_image/2410.16561_1729716438.png"
        },

        {
            "startTime": "35:09",
            "arxivId": "2410.17218",
            "arxivLink": "https://arxiv.org/abs/2410.17218",
            "title": "AI's Creative Quotient: Can Machines Really Think Outside the Box?",
            "institute": "Idiap Research Institute, \u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne, University of Italian Switzerland",
            "text": "This research provides a comprehensive overview of AI creativity across various domains, including linguistic, artistic, and scientific creativity. It goes beyond previous work by focusing on the challenges AI faces in tasks requiring creative problem-solving, abstract reasoning, and compositionality.",
            "paper-title": "Creativity in AI: Progresses and Challenges",
            "image-path": "flux_paper_image/2410.17218_1729715406.png"
        },

        {
            "startTime": "35:38",
            "arxivId": "2410.16600",
            "arxivLink": "https://arxiv.org/abs/2410.16600",
            "title": "Fairness, Imitation, and Creativity: A New Game for Multi-Agent Learning",
            "institute": "Google, MIT",
            "text": "This research introduces the concept of \"convex Markov games,\" which allows for more complex preferences in multi-agent learning than traditional Markov games. Instead of just maximizing rewards, agents can now consider factors like fairness, imitation, and creativity.",
            "paper-title": "Convex Markov Games: A Framework for Fairness, Imitation, and Creativity in Multi-Agent Learning",
            "image-path": "flux_paper_image/2410.16600_1729717242.png"
        },

        {
            "startTime": "36:06",
            "arxivId": "2410.17230",
            "arxivLink": "https://arxiv.org/abs/2410.17230",
            "title": "Outlier-Busting Algorithms: When Data Gets a Little (or a Lot) Messy",
            "institute": "University of Wisconsin-Madison, UC Berkeley",
            "text": "This paper extends existing robust estimation algorithms to handle a new type of data corruption, combining both global outliers and local perturbations. Previous work focused on either one or the other, but not both simultaneously.",
            "paper-title": "Optimal Robust Estimation under Local and Global Corruptions: Stronger Adversary and Smaller Error",
            "image-path": "flux_paper_image/2410.17230_1729718355.png"
        },

        {
            "startTime": "36:27",
            "arxivId": "2410.16184",
            "arxivLink": "https://arxiv.org/abs/2410.16184",
            "title": "Reward Models: Style Over Substance? A New Benchmark Tests Their Limits!",
            "institute": "Tsinghua University",
            "text": "This research introduces RM-BENCH, a new benchmark for evaluating reward models that focuses on their ability to distinguish subtle content changes and resist style biases. Unlike previous benchmarks that often rely on responses generated by different language models, RM-BENCH uses the same powerful language model to generate both chosen and rejected responses, ensuring a more accurate assessment of the reward model's sensitivity to subtle changes.",
            "paper-title": "RM-Bench: Benchmarking Reward Models of Language Models with Subtlety and Style",
            "image-path": "flux_paper_image/2410.16184_1729718373.png"
        },

        {
            "startTime": "36:54",
            "arxivId": "2410.17161",
            "arxivLink": "https://arxiv.org/abs/2410.17161",
            "title": "Token Twisters: Learning Interchangeable Words for Expandable Language Models",
            "institute": "Middle East Technical University, Microsoft",
            "text": "This research proposes a novel approach for representing interchangeable tokens in neural network models. Unlike previous methods that learn all token embeddings during training, this approach constructs some parts of the embeddings on-the-fly, allowing for generalization to unseen tokens.",
            "paper-title": "Interchangeable Token Embeddings for Extendable Vocabulary and Alpha-Equivalence",
            "image-path": "flux_paper_image/2410.17161_1729717097.png"
        },

        {
            "startTime": "37:18",
            "arxivId": "2410.16682",
            "arxivLink": "https://arxiv.org/abs/2410.16682",
            "title": "Taming the Wild Logits: How to Stop LLMs from Going Bonkers",
            "institute": "Nvidia",
            "text": "This research extends previous work on LLM training stability by analyzing the growth of outputs in all linear layers of the Transformer block, not just the logits. It then proposes new methods for improving stability by applying layer normalization after specific layers, including QKV, Proj, and FC2.",
            "paper-title": "Methods of improving LLM training stability",
            "image-path": "flux_paper_image/2410.16682_1729718166.png"
        },

        {
            "startTime": "37:45",
            "arxivId": "2410.16281",
            "arxivLink": "https://arxiv.org/abs/2410.16281",
            "title": "Neural Network Safety Check: Symbolic Bounds for Robot Control",
            "institute": "CMU",
            "text": "This paper proposes a new verification framework for neural control barrier functions (CBFs) using symbolic derivative bound propagation. Unlike previous methods that rely on interval arithmetic, this approach leverages the linear nature of ReLU activation functions to propagate bounds more efficiently and accurately.",
            "paper-title": "Verification of Neural Control Barrier Functions with Symbolic Derivative Bounds Propagation",
            "image-path": "flux_paper_image/2410.16281_1729718434.png"
        },

        {
            "startTime": "38:04",
            "arxivId": "2410.16926",
            "arxivLink": "https://arxiv.org/abs/2410.16926",
            "title": "LLMs Get a Spherical Makeover: Pyramid Vector Quantization for Compression",
            "institute": "Imperial College London, Microsoft",
            "text": "This paper proposes using Pyramid Vector Quantization (PVQ) to quantize the weights of large language models (LLMs). Unlike previous methods that quantize weights on Euclidean grids, PVQ leverages the spherical geometry of weights, resulting in a more efficient and accurate quantization process.",
            "paper-title": "Pyramid Vector Quantization for LLMs",
            "image-path": "flux_paper_image/2410.16926_1729715921.png"
        },

        {
            "startTime": "38:29",
            "arxivId": "2410.16910",
            "arxivLink": "https://arxiv.org/abs/2410.16910",
            "title": "Clustering Diffusion: Making AI See the World in Clusters!",
            "institute": "ETH Zurich",
            "text": "This research combines hierarchical clustering with diffusion models, a novel approach that conditions the diffusion process on cluster-specific representations learned by a TreeVAE model. This differs from previous work that either focuses on clustering or diffusion separately, or uses simpler clustering methods like k-means.",
            "paper-title": "Hierarchical Clustering for Conditional Diffusion in Image Generation",
            "image-path": "flux_paper_image/2410.16910_1729717068.png"
        },

        {
            "startTime": "38:49",
            "arxivId": "2410.16121",
            "arxivLink": "https://arxiv.org/abs/2410.16121",
            "title": "Spatiotemporal Data: Can AI Sniff Out Your Location From Your Phone?",
            "institute": "Tokyo Institute of Technology, University of Tokyo, Xidian University...",
            "text": "This research focuses on gradient inversion attacks in the context of spatiotemporal federated learning, a specific type of machine learning where data is kept on individual devices. Unlike previous work that primarily focused on image and text data, this paper explores the vulnerability of location data in this setting.",
            "paper-title": "Extracting Spatiotemporal Data from Gradients with Large Language Models",
            "image-path": "flux_paper_image/2410.16121_1729717877.png"
        },

        {
            "startTime": "39:10",
            "arxivId": "2410.16665",
            "arxivLink": "https://arxiv.org/abs/2410.16665",
            "title": "AI Safety Gets a Tree Hug: New System Predicts Harm with Interpretable \"Harm-Benefit Trees\"",
            "institute": "UC Berkeley, Allen Institute for AI",
            "text": "This research introduces SAFETYANALYST, a framework for LLM content moderation that generates \"harm-benefit trees\" to predict the potential consequences of a prompt. Unlike previous systems that rely on black-box models, SAFETYANALYST provides a transparent and interpretable way to understand the reasoning behind its decisions.",
            "paper-title": "SafetyAnalyst: Interpretable, transparent, and steerable LLM safety moderation",
            "image-path": "flux_paper_image/2410.16665_1729715617.png"
        },

        {
            "startTime": "39:45",
            "arxivId": "2410.16320",
            "arxivLink": "https://arxiv.org/abs/2410.16320",
            "title": "YOLOv4: Making Object Detection Super Speedy for Real-Time Action!",
            "institute": "Anna University",
            "text": "This research focuses on accelerating object detection using YOLOv4, specifically addressing the challenges of real-time applications in dynamic environments. The paper proposes modifications to the traditional YOLOv4 architecture to improve accuracy and efficiency, particularly for detecting small objects.",
            "paper-title": "Accelerating Object Detection with YOLOv4 for Real-Time Applications",
            "image-path": "flux_paper_image/2410.16320_1729718050.png"
        },

        {
            "startTime": "40:04",
            "arxivId": "2410.17147",
            "arxivLink": "https://arxiv.org/abs/2410.17147",
            "title": "Markov Chains: The Covariance Whisperers!",
            "institute": "Georgia Institute of Technology, University of Toronto",
            "text": "This research investigates covariance estimation using Markov chain Monte Carlo (MCMC) methods, specifically for distributions satisfying a Poincar\u00e9 inequality. Unlike previous work that focused on independent samples, this paper leverages the spectral gap property of the Markov chain to achieve similar sample complexity with potentially much better query complexity.",
            "paper-title": "Covariance estimation using Markov chain Monte Carlo",
            "image-path": "flux_paper_image/2410.17147_1729716037.png"
        },

        {
            "startTime": "40:25",
            "arxivId": "2410.16122",
            "arxivLink": "https://arxiv.org/abs/2410.16122",
            "title": "Training Set Selection: When Less is More, and ILP is the Key!",
            "institute": "\u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne",
            "text": "This research introduces an Integer Linear Programming (ILP) approach for selecting molecular training sets in physics-inspired machine learning. Unlike previous methods that rely on global similarity, this approach focuses on local similarity, comparing atomic environments within molecules.",
            "paper-title": "Integer linear programming for unsupervised training set selection in molecular machine learning",
            "image-path": "flux_paper_image/2410.16122_1729718510.png"
        },

        {
            "startTime": "40:52",
            "arxivId": "2410.17128",
            "arxivLink": "https://arxiv.org/abs/2410.17128",
            "title": "Transfer Learning: A Mean-Field Analysis of Overfitting",
            "institute": "The Alan Turing Institute, University of Oxford, University of Edinburgh",
            "text": "This research uses differential calculus on the space of probability measures to analyze the generalization error of transfer learning algorithms, specifically \u03b1-ERM and fine-tuning, in the over-parameterized regime. This approach differs from previous work that focused on under-parameterized models or used Gaussian complexity analysis.",
            "paper-title": "Understanding Transfer Learning via Mean-field Analysis",
            "image-path": "flux_paper_image/2410.17128_1729716715.png"
        },

        {
            "startTime": "41:20",
            "arxivId": "2410.16592",
            "arxivLink": "https://arxiv.org/abs/2410.16592",
            "title": "Fact-Checking TikTok: New AI Can Tell If Your Videos Are Fake News",
            "institute": "Weston High School, Noble and Greenough School, Google",
            "text": "This research introduces ViMGuard, a novel multi-modal system for video misinformation guarding. Unlike previous approaches that rely solely on text analysis, ViMGuard analyzes both visual and audio elements of a video to determine its informative intent before fact-checking the spoken words.",
            "paper-title": "ViMGuard: A Novel Multi-Modal System for Video Misinformation Guarding",
            "image-path": "flux_paper_image/2410.16592_1729716148.png"
        },

        {
            "startTime": "41:50",
            "arxivId": "2410.16571",
            "arxivLink": "https://arxiv.org/abs/2410.16571",
            "title": "Robots Learn to Feel: New AI Predicts Contact Sequences for Deformable Objects",
            "institute": "University of Michigan",
            "text": "This research introduces a novel approach to long-horizon contact-rich manipulation by using a latent diffusion model to predict sequences of contact relationships between a deformable object and its environment. This differs from previous work that typically focuses on planning to exact locations or directly predicting actions without explicit contact reasoning.",
            "paper-title": "Implicit Contact Diffuser: Sequential Contact Reasoning with Latent Point Cloud Diffusion",
            "image-path": "flux_paper_image/2410.16571_1729718533.png"
        },

        {
            "startTime": "42:14",
            "arxivId": "2410.16377",
            "arxivLink": "https://arxiv.org/abs/2410.16377",
            "title": "LLMs: More Attempts, Less Errors? A Simple Model Explains Inference Scaling Laws",
            "institute": "\u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne",
            "text": "This paper focuses on inference scaling laws, specifically how model performance improves with repeated inference attempts. Unlike previous work that primarily focused on training scaling laws, this study explores the impact of multiple inference trials on model accuracy.",
            "paper-title": "A Simple Model of Inference Scaling Laws",
            "image-path": "flux_paper_image/2410.16377_1729716755.png"
        },

        {
            "startTime": "42:34",
            "arxivId": "2410.17126",
            "arxivLink": "https://arxiv.org/abs/2410.17126",
            "title": "Teaching LLMs to Code: Can We Ditch the Human Feedback?",
            "institute": "ETH Zurich, Maastricht University",
            "text": "This paper explores using programmed reward signals for directly training LLMs on formal language tasks, unlike the common approach of using human feedback to train an intermediary reward model.",
            "paper-title": "Exploring RL-based LLM Training for Formal Language Tasks with Programmed Rewards",
            "image-path": "flux_paper_image/2410.17126_1729717688.png"
        },

        {
            "startTime": "42:54",
            "arxivId": "2410.16540",
            "arxivLink": "https://arxiv.org/abs/2410.16540",
            "title": "Chain-of-Thought: Thinking Like a Human, Not a Robot",
            "institute": "Michigan State University, Amazon",
            "text": "This research explores the impact of integrating reasoning steps in a chain-of-thought (CoT) model, contrasting it with the traditional approach of treating each step in isolation.",
            "paper-title": "A Theoretical Understanding of Chain-of-Thought: Coherent Reasoning and Error-Aware Demonstration",
            "image-path": "flux_paper_image/2410.16540_1729717596.png"
        },

        {
            "startTime": "43:14",
            "arxivId": "2410.16983",
            "arxivLink": "https://arxiv.org/abs/2410.16983",
            "title": "AI's Got a Case of the Order Blues: New Research Shows How AI Models Get Confused by the Order of Things",
            "institute": "Peking University",
            "text": "This research explores the impact of input order on the performance of Multimodal Large Language Models (MLLMs). Unlike previous work that focused on text-only order sensitivity, this study investigates the influence of image order and mixed-modality (image-text) order on MLLM performance.",
            "paper-title": "Order Matters: Exploring Order Sensitivity in Multimodal Large Language Models",
            "image-path": "flux_paper_image/2410.16983_1729718908.png"
        },

        {
            "startTime": "43:40",
            "arxivId": "2410.17173",
            "arxivLink": "https://arxiv.org/abs/2410.17173",
            "title": "Protein Folding: A Diffusion Model's Quest for Diversity!",
            "institute": "Harvard University",
            "text": "This research introduces a new protein inverse folding model, RL-DIF, which uses a categorical diffusion model pre-trained on sequence recovery and fine-tuned with reinforcement learning to optimize structural consistency. This approach aims to improve the \"foldable diversity\" of generated sequences, meaning the model can produce multiple, diverse sequences that fold into the desired structure. This differs from previous methods that often prioritize sequence recovery, which can limit the diversity of generated sequences.",
            "paper-title": "Reinforcement learning on structure-conditioned categorical diffusion for protein inverse folding",
            "image-path": "flux_paper_image/2410.17173_1729718605.png"
        },

        {
            "startTime": "44:06",
            "arxivId": "2410.16290",
            "arxivLink": "https://arxiv.org/abs/2410.16290",
            "title": "MRI's New Trick: One Model to Rule Them All!",
            "institute": "Caltech",
            "text": "This research introduces a unified model for Compressed Sensing MRI (CS-MRI) that uses neural operators, which are discretization-agnostic, to learn both local and global features for more flexible MRI reconstruction. This approach allows the model to handle different subsampling patterns and image resolutions without requiring retraining, unlike previous methods.",
            "paper-title": "Unifying Subsampling Pattern Variations for Compressed Sensing MRI with Neural Operators",
            "image-path": "flux_paper_image/2410.16290_1729717231.png"
        },

        {
            "startTime": "44:25",
            "arxivId": "2410.17186",
            "arxivLink": "https://arxiv.org/abs/2410.17186",
            "title": "Fire-Fighting Robots Get Smarter: New AI Predicts Wildfire Dynamics",
            "institute": "CMU, Georgia Institute of Technology, University of North Carolina at Charlotte",
            "text": "This research introduces DyPNIPP, a new framework for informative path planning (IPP) that incorporates domain randomization and a dynamics prediction model to improve the robustness of RL-based IPP algorithms in spatio-temporal environments. This is different from previous work because it specifically addresses the challenge of varying environment dynamics, which is crucial for real-world applications.",
            "paper-title": "DyPNIPP: Predicting Environment Dynamics for RL-based Robust Informative Path Planning",
            "image-path": "flux_paper_image/2410.17186_1729718038.png"
        },

        {
            "startTime": "44:47",
            "arxivId": "2410.16942",
            "arxivLink": "https://arxiv.org/abs/2410.16942",
            "title": "Diffusion Models Get a Speed Boost: Pruning Away Redundant Calculations!",
            "institute": "Tsinghua University, Advanced Micro Devices",
            "text": "This research proposes a novel pruning method called DiP-GO that uses a neural network to identify and remove redundant computations in diffusion models during inference. Unlike previous methods that rely on static strategies or require retraining, DiP-GO dynamically learns the optimal pruning strategy through gradient optimization.",
            "paper-title": "DiP-GO: A Diffusion Pruner via Few-step Gradient Optimization",
            "image-path": "flux_paper_image/2410.16942_1729717402.png"
        },

        {
            "startTime": "45:07",
            "arxivId": "2410.17234",
            "arxivLink": "https://arxiv.org/abs/2410.17234",
            "title": "LLMs Get a New Trick: Abstaining with Semantic Entropy!",
            "institute": "University of Oxford",
            "text": "This research proposes fine-tuning LLMs to abstain from answering questions they are uncertain about using semantic entropy, a measure of uncertainty that considers the semantic meaning of the generated text. This approach differs from previous work by not relying on ground-truth labels or being limited to short-form responses.",
            "paper-title": "Fine-Tuning Large Language Models to Appropriately Abstain with Semantic Entropy",
            "image-path": "flux_paper_image/2410.17234_1729715972.png"
        },

        {
            "startTime": "45:29",
            "arxivId": "2410.16547",
            "arxivLink": "https://arxiv.org/abs/2410.16547",
            "title": "AI Tutors Get a Makeover: Subject Matter Experts Take the Wheel with PromptHive!",
            "institute": "University of Toronto, UC Berkeley",
            "text": "This research introduces PromptHive, a collaborative interface for prompt engineering that allows subject matter experts to directly guide the output of large language models (LLMs) for educational content creation. Unlike previous work that focuses on general prompt engineering, PromptHive is specifically designed to integrate with existing expert workflows and support rapid iteration on prompt variations.",
            "paper-title": "PromptHive: Bringing Subject Matter Experts Back to the Forefront with Collaborative Prompt Engineering for Educational Content Creation",
            "image-path": "flux_paper_image/2410.16547_1729717129.png"
        },

        {
            "startTime": "45:49",
            "arxivId": "2410.17018",
            "arxivLink": "https://arxiv.org/abs/2410.17018",
            "title": "LLMs Have a Memory Problem: New Metrics Reveal Forgetting in Pre-Training",
            "institute": "Tsinghua University",
            "text": "This research focuses on forgetting during the pre-training phase of LLMs, a topic that has received less attention than forgetting during fine-tuning. The paper introduces new metrics specifically designed to measure entity-related forgetting in pre-training.",
            "paper-title": "Exploring Forgetting in Large Language Model Pre-Training",
            "image-path": "flux_paper_image/2410.17018_1729718958.png"
        },

        {
            "startTime": "46:08",
            "arxivId": "2410.16302",
            "arxivLink": "https://arxiv.org/abs/2410.16302",
            "title": "AI-Powered Peptide Design: Turning Language Models into Molecular Matchmakers!",
            "institute": "University of Cambridge, Imperial College London",
            "text": "This research utilizes a Transformer-based machine learning model, TransformerBeta, to predict and design peptide binders targeting specific linear epitopes. Unlike previous methods, TransformerBeta leverages a large-scale database of beta-strand interaction motifs derived from AlphaFold2 predicted structures.",
            "paper-title": "Computational design of target-specific linear peptide binders with TransformerBeta",
            "image-path": "flux_paper_image/2410.16302_1729715493.png"
        },

        {
            "startTime": "46:28",
            "arxivId": "2410.16177",
            "arxivLink": "https://arxiv.org/abs/2410.16177",
            "title": "Fake It 'Til You Make It: Generating Synthetic Medical Data for Predictive Models",
            "institute": "University of Cambridge",
            "text": "This research introduces a novel framework for synthesizing complex medical data, specifically focusing on generating medical images paired with longitudinal patient observations. The framework leverages Variational Autoencoders (VAEs), Stable Diffusion (SD) models, and Nonlinear Mixed-Effects (NLME) models to create synthetic datasets with controlled levels of association between images and longitudinal data. This approach allows researchers to test and benchmark predictive models without relying on real patient data, addressing privacy concerns.",
            "paper-title": "A Framework for Evaluating Predictive Models Using Synthetic Image Covariates and Longitudinal Data",
            "image-path": "flux_paper_image/2410.16177_1729718848.png"
        },

        {
            "startTime": "46:55",
            "arxivId": "2410.16574",
            "arxivLink": "https://arxiv.org/abs/2410.16574",
            "title": "AI Doctors: Can We Fix Their Gender and Ethnicity Biases?",
            "institute": "University College London",
            "text": "This research introduces a novel Counterfactual Patient Variations (CPV) dataset derived from the JAMA Clinical Challenge 1, which allows for a more comprehensive evaluation of bias in LLMs for clinical decision-making.",
            "paper-title": "How Can We Diagnose and Treat Bias in Large Language Models for Clinical Decision-Making?",
            "image-path": "flux_paper_image/2410.16574_1729716329.png"
        },

        {
            "startTime": "47:22",
            "arxivId": "2410.16162",
            "arxivLink": "https://arxiv.org/abs/2410.16162",
            "title": "VLMs Learn to Navigate: Sparkle Makes AI Smarter About Space!",
            "institute": "University of Hong Kong, MIT, Shanghai Jiao Tong University...",
            "text": "This research focuses on improving the spatial reasoning capabilities of Vision Language Models (VLMs) by training them on three fundamental spatial tasks: direction comprehension, distance estimation, and localization. This approach differs from previous work by explicitly targeting these basic spatial capabilities, which are often implicitly learned in existing VLM training.",
            "paper-title": "Sparkle: Mastering Basic Spatial Capabilities in Vision Language Models Elicits Generalization to Composite Spatial Reasoning",
            "image-path": "flux_paper_image/2410.16162_1729718627.png"
        },

        {
            "startTime": "47:44",
            "arxivId": "2410.17043",
            "arxivLink": "https://arxiv.org/abs/2410.17043",
            "title": "MoE Models: Faster Inference with Expert Colocation and Communication Scheduling",
            "institute": "Google, Asmachine",
            "text": "This research proposes Aurora, a novel approach that optimizes both model deployment and communication scheduling to minimize inference time for Mixture-of-Experts (MoE) models. Unlike previous work that focuses on either load balancing or all-to-all communication acceleration, Aurora addresses the challenges of low GPU utilization and heterogeneous GPU environments.",
            "paper-title": "Optimizing Mixture-of-Experts Inference Time Combining Model Deployment and Communication Scheduling",
            "image-path": "flux_paper_image/2410.17043_1729718111.png"
        },

        {
            "startTime": "48:04",
            "arxivId": "2410.16750",
            "arxivLink": "https://arxiv.org/abs/2410.16750",
            "title": "VAE's Got the Moves: New Proof Shows How They Learn to Dance!",
            "institute": "Sorbonne Universit\u00e9, LOPF Califrais\u2019 Machine Learning Lab",
            "text": "This paper provides non-asymptotic convergence guarantees for Variational Autoencoders (VAE) trained using Stochastic Gradient Descent (SGD) and Adam algorithms, a significant step forward in understanding their theoretical properties. Unlike previous work, which focused on independent data, this research applies to both independent and sequential data.",
            "paper-title": "Theoretical Convergence Guarantees for Variational Autoencoders",
            "image-path": "flux_paper_image/2410.16750_1729718015.png"
        },

        {
            "startTime": "48:26",
            "arxivId": "2410.16780",
            "arxivLink": "https://arxiv.org/abs/2410.16780",
            "title": "Recommender Systems Get Chatty: LLMs Learn to Tell Stories About Your Shopping Habits",
            "institute": "Google",
            "text": "This research introduces a new dataset, REGEN, specifically designed for conversational recommender systems. It augments the Amazon Product Reviews dataset with rich user narratives, including personalized explanations of product preferences, product endorsements for recommended items, and summaries of user purchase history. The paper also proposes a fusion architecture that integrates collaborative filtering signals and semantic embeddings as input to an LLM, showcasing its potential for generating informative and engaging conversational recommendations.",
            "paper-title": "Beyond Retrieval: Generating Narratives in Conversational Recommender Systems",
            "image-path": "flux_paper_image/2410.16780_1729718521.png"
        },

        {
            "startTime": "48:45",
            "arxivId": "2410.17250",
            "arxivLink": "https://arxiv.org/abs/2410.17250",
            "title": "JMMMU: Testing AI's Cultural IQ with Japanese Trivia!",
            "institute": "The University of Tokyo, Carnegie Mellon University",
            "text": "This research introduces JMMMU, a new benchmark for evaluating large multimodal models (LMMs) specifically designed for the Japanese language and cultural context. Unlike previous benchmarks that primarily focus on English, JMMMU includes both culture-agnostic and culture-specific questions, allowing for a more nuanced assessment of LMMs' abilities in Japanese.",
            "paper-title": "JMMMU: A Japanese Massive Multi-discipline Multimodal Understanding Benchmark for Culture-aware Evaluation",
            "image-path": "flux_paper_image/2410.17250_1729715451.png"
        },

        {
            "startTime": "49:05",
            "arxivId": "2410.17248",
            "arxivLink": "https://arxiv.org/abs/2410.17248",
            "title": "Space Detectives: New AI Sniffs Out Methane Leaks Faster Than Ever!",
            "institute": "University of Oxford",
            "text": "This research introduces HyperspectralViTs, a new type of machine learning model specifically designed to analyze hyperspectral data. Unlike previous models, HyperspectralViTs are adapted to handle the high spectral dimensionality of this data without losing information, leading to improved accuracy and speed.",
            "paper-title": "HyperspectralViTs: Fast and Accurate methane detection on-board satellites",
            "image-path": "flux_paper_image/2410.17248_1729717947.png"
        },

        {
            "startTime": "49:28",
            "arxivId": "2410.16347",
            "arxivLink": "https://arxiv.org/abs/2410.16347",
            "title": "Lens-ing a Hand to AI: Domain Adaptation Boosts Gravitational Lens Modeling!",
            "institute": "University of Chicago, Fermilab",
            "text": "This research combines neural posterior estimation (NPE) with unsupervised domain adaptation (UDA) to improve the accuracy of strong gravitational lens modeling. Unlike previous work, this study demonstrates the effectiveness of UDA in mitigating domain shifts between simulated and real observational data.",
            "paper-title": "Domain-Adaptive Neural Posterior Estimation for Strong Gravitational Lens Analysis",
            "image-path": "flux_paper_image/2410.16347_1729715703.png"
        },

        {
            "startTime": "49:50",
            "arxivId": "2410.16476",
            "arxivLink": "https://arxiv.org/abs/2410.16476",
            "title": "CLIP's Sharpness Secret: How a Single Layer Can Make or Break OOD Performance",
            "institute": "\u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne",
            "text": "This research investigates the role of sharpness in the success of interpolation for CLIP models, focusing on layer-wise sharpness rather than overall model sharpness. It specifically examines the \"straggler layer\" phenomenon, where a single layer can significantly impact OOD generalization.",
            "paper-title": "In Search of the Successful Interpolation: On the Role of Sharpness in CLIP Generalization",
            "image-path": "flux_paper_image/2410.16476_1729718084.png"
        },

        {
            "startTime": "50:11",
            "arxivId": "2410.16156",
            "arxivLink": "https://arxiv.org/abs/2410.16156",
            "title": "Singlish POS Tagging: A Grammar-Grappling Adventure!",
            "institute": "CMU",
            "text": "This research focuses on the challenges of automatically tagging parts of speech (POS) in Singlish sentences, a task that has been largely overlooked in previous NLP research. The authors build a parallel Singlish dataset with English translations and POS tags, demonstrating that existing English POS taggers struggle to accurately analyze Singlish due to its unique linguistic features.",
            "paper-title": "Limpeh ga li gong: Challenges in Singlish Annotations",
            "image-path": "flux_paper_image/2410.16156_1729715954.png"
        }
    ],
    "stats": {
        "num_pick": 127,
        "num_total": 431,
    },
    "audio": "https://d2irtorupa9e8g.cloudfront.net/daily_podcast/202410231438_audio.mp3"
}
