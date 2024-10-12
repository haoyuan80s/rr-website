
daily_data = {
    "date": "2024-09-10",
    "tweets": [
            {
                "startTime": "01:01",
                "arxivId": "2409.05688",
                "arxivLink": "https://arxiv.org/abs/2409.05688",
                "title": "Seeing Through Walls: A New Benchmark for Optical Flow with Transparent Objects",
                "institute": "Princeton University",
                "text": "This research introduces LayeredFlow, a real-world benchmark for optical flow that includes multi-layer 3D annotations for objects occluded by transparent surfaces. This is different from previous benchmarks, which typically focus on single-layer annotations or lack the diversity of scenes and objects found in LayeredFlow.",
                "paper-title": "LayeredFlow: A Real-World Benchmark for Non-Lambertian Multi-Layer Optical Flow",
                "image-path": "flux_paper_image/2409.05688_1726023651.png"
            },

            {
                "startTime": "01:23",
                "arxivId": "2409.05862",
                "arxivLink": "https://arxiv.org/abs/2409.05862",
                "title": "Vision Models: Can They See Like Us? A New Test Puts Them to the 3D Shape Challenge!",
                "institute": "University of California Berkeley, Massachusetts Institute of Technology",
                "text": "This research introduces a new benchmark for evaluating computer vision models' ability to understand 3D shapes. It uses a task from cognitive science that requires zero-shot inference, meaning the models haven't been specifically trained on the task. This approach is different from previous work that often relies on tasks like depth estimation, which can be solved using 2D features.",
                "paper-title": "Evaluating Multiview Object Consistency in Humans and Image Models",
                "image-path": "flux_paper_image/2409.05862_1726023704.png"
            },

            {
                "startTime": "01:46",
                "arxivId": "2409.05867",
                "arxivLink": "https://arxiv.org/abs/2409.05867",
                "title": "Flash Cache: Unbiased Inverse Rendering, No More Bias!",
                "institute": "Carnegie Mellon University, Google Research",
                "text": "This paper introduces a new method for inverse rendering that uses a radiance cache to reduce bias in the rendering process. Unlike previous methods that rely on approximations, this approach leverages two techniques: occlusion-aware importance sampling and a fast cache architecture that acts as a control variate.",
                "paper-title": "Flash Cache: Reducing Bias in Radiance Cache Based Inverse Rendering",
                "image-path": "flux_paper_image/2409.05867_1726025500.png"
            },

            {
                "startTime": "02:06",
                "arxivId": "2409.05864",
                "arxivLink": "https://arxiv.org/abs/2409.05864",
                "title": "Robot Motion Planning: From Scratch to Super-Smart!",
                "institute": "Carnegie Mellon University",
                "text": "This research proposes a novel approach to motion planning that leverages large-scale data generation in simulation to train a generalist neural policy. Unlike previous methods that plan from scratch for each new problem, this approach distills the planning process into a reactive policy, enabling faster and more accurate motion planning in real-world environments.",
                "paper-title": "Neural MP: A Generalist Neural Motion Planner",
                "image-path": "flux_paper_image/2409.05864_1726024294.png"
            },

            {
                "startTime": "02:28",
                "arxivId": "2409.05816",
                "arxivLink": "https://arxiv.org/abs/2409.05816",
                "title": "LLMs: They're Not Just for Pretraining Anymore!",
                "institute": "Stanford University",
                "text": "This research proposes a novel data selection method that leverages the existing collection of publicly available, high-performance LLMs without requiring any additional model training. It uses correlations between perplexity and benchmark performance to identify high-quality pretraining data.",
                "paper-title": "Improving Pretraining Data Using Perplexity Correlations",
                "image-path": "flux_paper_image/2409.05816_1726024367.png"
            },

            {
                "startTime": "02:50",
                "arxivId": "2409.04574",
                "arxivLink": "https://arxiv.org/abs/2409.04574",
                "title": "Want Your AI to Write Like Shakespeare? This New Trick Makes It Possible!",
                "institute": "CMU",
                "text": "This research explores using parameter-efficient fine-tuning (PEFT) with Low-Rank Adaptation (LoRA) to customize the writing style of large language models (LLMs). This approach differs from previous methods like full model fine-tuning and prompt engineering, which are less efficient or rely heavily on prompt structure.",
                "paper-title": "Customizing Large Language Model Generation Style using Parameter-Efficient Finetuning",
                "image-path": "flux_paper_image/2409.04574_1726025336.png"
            },

            {
                "startTime": "03:14",
                "arxivId": "2409.05539",
                "arxivLink": "https://arxiv.org/abs/2409.05539",
                "title": "Collaborative Learning: When Clients Get Together, Models Get Smarter!",
                "institute": "\u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne",
                "text": "This research proposes a novel bilevel optimization framework for collaborative learning. Unlike previous methods that rely on global models or clustering, this approach dynamically selects collaborators based on gradient alignment, allowing for more flexible and fine-grained collaboration.",
                "paper-title": "CoBo: Collaborative Learning via Bilevel Optimization",
                "image-path": "flux_paper_image/2409.05539_1726023527.png"
            },

            {
                "startTime": "03:40",
                "arxivId": "2409.05334",
                "arxivLink": "https://arxiv.org/abs/2409.05334",
                "title": "Neural Fields Go Point-Cloud Crazy: Lagrangian Hashing for Compact Representations",
                "institute": "Simon Fraser University, University of Trento, University of Toronto...",
                "text": "This paper introduces Lagrangian Hashing, a new representation for neural fields that combines the speed of Eulerian grid-based methods with the memory efficiency of point-based representations. It achieves this by incorporating a point-based representation into the high-resolution layers of a hierarchical hash table, similar to InstantNGP.",
                "paper-title": "Lagrangian Hashing for Compressed Neural Field Representations",
                "image-path": "flux_paper_image/2409.05334_1726023532.png"
            },

            {
                "startTime": "04:12",
                "arxivId": "2409.05247",
                "arxivLink": "https://arxiv.org/abs/2409.05247",
                "title": "Data Detox: How to Train AI Models Without Exploiting Languages",
                "institute": "Google",
                "text": "This research paper focuses on the ethical implications of training large language models (LLMs) with data from underrepresented languages. It highlights the need for community engagement and data sovereignty to avoid perpetuating colonial power dynamics and linguistic disenfranchisement. Unlike previous work, this paper emphasizes the importance of understanding the cultural and historical context of language data, rather than simply treating it as a resource to be mined.",
                "paper-title": "Socially Responsible Data for Large Multilingual Language Models",
                "image-path": "flux_paper_image/2409.05247_1726024039.png"
            },

            {
                "startTime": "04:48",
                "arxivId": "2409.05804",
                "arxivLink": "https://arxiv.org/abs/2409.05804",
                "title": "Celcomen: Unraveling the Hidden Forces of Gene Expression in Space!",
                "institute": "Wellcome Sanger Institute, Cambridge Stem Cell Institute, University of Cambridge...",
                "text": "This research introduces Celcomen, a model that leverages a mathematical causality framework to disentangle intra- and inter-cellular gene regulation programs in spatial transcriptomics data. Unlike previous models, Celcomen provides mathematically guaranteed identifiability, ensuring robustness and interpretability.",
                "paper-title": "Celcomen: spatial causal disentanglement for single-cell and tissue perturbation modeling",
                "image-path": "flux_paper_image/2409.05804_1726025101.png"
            },

            {
                "startTime": "05:08",
                "arxivId": "2409.04597",
                "arxivLink": "https://arxiv.org/abs/2409.04597",
                "title": "Smart Contracts: Buggy Code? Let's Ask a Chatbot!",
                "institute": "Columbia University, The University of Chicago",
                "text": "This research introduces SMARTSYS, a system that uses foundation models to decide when to use fuzzing or concolic execution for smart contract testing. This approach differs from previous work by incorporating a forecast model to predict the best testing technique for specific code segments.",
                "paper-title": "Detecting Buggy Contracts via Smart Testing",
                "image-path": "flux_paper_image/2409.04597_1726024794.png"
            },

            {
                "startTime": "05:30",
                "arxivId": "2409.05112",
                "arxivLink": "https://arxiv.org/abs/2409.05112",
                "title": "Watermarked Text: Finding the Needle in the Haystack",
                "institute": "Tsinghua University",
                "text": "This research focuses on detecting watermarked segments within large documents, a scenario often overlooked in previous work. Existing methods primarily focused on distinguishing fully watermarked text from non-watermarked text.",
                "paper-title": "WaterSeeker: Efficient Detection of Watermarked Segments in Large Documents",
                "image-path": "flux_paper_image/2409.05112_1726025288.png"
            },

            {
                "startTime": "05:58",
                "arxivId": "2409.05286",
                "arxivLink": "https://arxiv.org/abs/2409.05286",
                "title": "LLMs Learn to Seek and Solve Table Questions Like Humans Do!",
                "institute": "University of Toronto",
                "text": "This research proposes a \"Seek-and-Solve\" pipeline for table question answering (TQA) that leverages LLMs' reasoning capabilities by mimicking how humans approach complex TQA tasks. Unlike previous work that focuses on simplifying the task, this approach emphasizes the reasoning process itself, integrating two stages of information seeking and question answering into a coherent reasoning path.",
                "paper-title": "Seek and Solve Reasoning for Table Question Answering",
                "image-path": "flux_paper_image/2409.05286_1726023980.png"
            },

            {
                "startTime": "06:31",
                "arxivId": "2409.04556",
                "arxivLink": "https://arxiv.org/abs/2409.04556",
                "title": "Code-Fueled Language Models: A Recipe for Better (and Worse) AI!",
                "institute": "Google",
                "text": "This research investigates the impact of code in language model pretraining by systematically varying the proportion of code in the training data, unlike previous studies that focused on binary comparisons (code vs. no code).",
                "paper-title": "How Does Code Pretraining Affect Language Model Task Performance?",
                "image-path": "flux_paper_image/2409.04556_1726024000.png"
            },

            {
                "startTime": "06:51",
                "arxivId": "2409.04882",
                "arxivLink": "https://arxiv.org/abs/2409.04882",
                "title": "Legged Robots Learn to Open Doors Like Humans, No Prior Knowledge Needed!",
                "institute": "ETH Zurich",
                "text": "This research presents a single control policy for a legged manipulator that can open both push and pull doors without prior knowledge of the door type. Unlike previous work, which often required separate policies or user input for different door types, this approach uses a teacher-student learning method to infer the opening direction during deployment.",
                "paper-title": "Learning to Open and Traverse Doors with a Legged Manipulator",
                "image-path": "flux_paper_image/2409.04882_1726025568.png"
            },

            {
                "startTime": "07:07",
                "arxivId": "2409.05294",
                "arxivLink": "https://arxiv.org/abs/2409.05294",
                "title": "Diffusion Models: Backdoor-Proofed with a Trigger-Reversing Trick!",
                "institute": "Peking University",
                "text": "This paper proposes TERD, a defense framework that tackles backdoor attacks in diffusion models. Unlike previous defenses, TERD focuses on the noise space, where diffusion models operate, and uses a unified loss function to reverse engineer the trigger.",
                "paper-title": "TERD: A Unified Framework for Safeguarding Diffusion Models Against Backdoors",
                "image-path": "flux_paper_image/2409.05294_1726024141.png"
            },

            {
                "startTime": "07:29",
                "arxivId": "2409.05558",
                "arxivLink": "https://arxiv.org/abs/2409.05558",
                "title": "CAPTCHA's New Mask: Fooling AI with Simple Patterns",
                "institute": "ETH Zurich",
                "text": "This research explores the effectiveness of geometric masks in fooling state-of-the-art image recognition models, focusing on visible perturbations that preserve semantic information for humans. This approach differs from traditional adversarial attacks that aim for imperceptibility.",
                "paper-title": "Seeing Through the Mask: Rethinking Adversarial Examples for CAPTCHAs",
                "image-path": "flux_paper_image/2409.05558_1726023666.png"
            },

            {
                "startTime": "07:46",
                "arxivId": "2409.04927",
                "arxivLink": "https://arxiv.org/abs/2409.04927",
                "title": "Speech LLMs: Can They Tell Who's Talking? A New Test for Voice Recognition!",
                "institute": "University of Washington, University of Illinois Urbana-Champaign, Columbia University",
                "text": "This research introduces a new way to evaluate speech language models (SpeechLLMs) by focusing on their ability to identify speakers in spoken dialogue. The authors propose two categories of questions: Identity-Critical Questions (ICQs) that require speaker identification and Context-Based Questions (CBQs) that can be answered without it.",
                "paper-title": "Just ASR + LLM? A Study on Speech Large Language Models' Ability to Identify and Understand Speaker in Spoken Dialogue",
                "image-path": "flux_paper_image/2409.04927_1726025601.png"
            },

            {
                "startTime": "08:16",
                "arxivId": "2409.05033",
                "arxivLink": "https://arxiv.org/abs/2409.05033",
                "title": "Diffusion Models for Recommender Systems: From Noise to Nirvana!",
                "institute": "Shanghai Jiao Tong University, Texas A&M University, Yale University",
                "text": "This research provides the first comprehensive survey on the application of diffusion models for recommender systems, categorizing existing works into three primary domains: data engineering & encoding, recommender models, and content presentation.",
                "paper-title": "A Survey on Diffusion Models for Recommender Systems",
                "image-path": "flux_paper_image/2409.05033_1726024253.png"
            },

            {
                "startTime": "08:40",
                "arxivId": "2409.05284",
                "arxivLink": "https://arxiv.org/abs/2409.05284",
                "title": "Learning from Dynamics: MRFs Get a Speed Boost!",
                "institute": "MIT",
                "text": "This research explores learning Markov Random Fields (MRFs) from dynamical samples, specifically Glauber dynamics, rather than the traditional i.i.d. samples. The key difference is that the algorithm's runtime scales near quadratically with the dimension, avoiding the exponential dependence on the order of interactions seen in previous work.",
                "paper-title": "Efficiently Learning Markov Random Fields from Dynamics",
                "image-path": "flux_paper_image/2409.05284_1726025510.png"
            },

            {
                "startTime": "09:05",
                "arxivId": "2409.04760",
                "arxivLink": "https://arxiv.org/abs/2409.04760",
                "title": "Point Clouds: Seeing is Believing, But Understanding Takes Fusion!",
                "institute": "Tsinghua University",
                "text": "This research proposes a novel method for point cloud recognition that combines both geometric and semantic features, unlike previous training-free methods that focused on only one type of feature.",
                "paper-title": "Training-Free Point Cloud Recognition Based on Geometric and Semantic Information Fusion",
                "image-path": "flux_paper_image/2409.04760_1726025229.png"
            },

            {
                "startTime": "09:25",
                "arxivId": "2409.05735",
                "arxivLink": "https://arxiv.org/abs/2409.05735",
                "title": "LLMs Go Database Diving: A New Benchmark for Question Answering Across Heterogeneous Data Sources",
                "institute": "IBM Research",
                "text": "This research introduces a new benchmark and system called \"siwarex\" that specifically addresses the challenge of question answering across heterogeneous data sources, unlike previous benchmarks that focus on either databases or APIs exclusively.",
                "paper-title": "A System and Benchmark for LLM-based Q\&A on Heterogeneous Data",
                "image-path": "flux_paper_image/2409.05735_1726025044.png"
            },

            {
                "startTime": "09:59",
                "arxivId": "2409.05866",
                "arxivLink": "https://arxiv.org/abs/2409.05866",
                "title": "Air Pollution Forecasts: Can We Predict When to Wear a Mask?",
                "institute": "MIT",
                "text": "This research introduces a new framework for evaluating PM2.5 forecasts, focusing on how they can help individuals make decisions about their exposure to air pollution. It goes beyond traditional metrics and considers the impact of forecasts on real-world choices.",
                "paper-title": "A Framework for Evaluating PM2.5 Forecasts from the Perspective of Individual Decision Making",
                "image-path": "flux_paper_image/2409.05866_1726024058.png"
            },

            {
                "startTime": "10:19",
                "arxivId": "2409.04919",
                "arxivLink": "https://arxiv.org/abs/2409.04919",
                "title": "Collaborative Learning: When More Clients Means Less Data!",
                "institute": "Duke University, Northeastern University, Tsinghua University",
                "text": "This research identifies the optimal statistical rate for collaborative learning in linear settings, bridging a gap between existing upper and lower bounds. It introduces a new spectral estimator with local averaging that achieves this optimal rate.",
                "paper-title": "Collaborative Learning with Shared Linear Representations: Statistical Rates and Optimal Algorithms",
                "image-path": "flux_paper_image/2409.04919_1726025037.png"
            },

            {
                "startTime": "10:40",
                "arxivId": "2409.05474",
                "arxivLink": "https://arxiv.org/abs/2409.05474",
                "title": "Sparse Views, Big Dreams: A New Way to Reconstruct 3D Objects with Fewer Images",
                "institute": "Tsinghua University, Beijing University of Technology, Beijing Jiaotong University...",
                "text": "This research introduces a novel approach to 3D surface reconstruction from sparse views by progressively planning the most informative viewpoints for image capture. Unlike previous methods that rely on predefined sets of sparse images, this system dynamically adds new views during the reconstruction process, leading to more accurate and detailed results.",
                "paper-title": "PVP-Recon: Progressive View Planning via Warping Consistency for Sparse-View Surface Reconstruction",
                "image-path": "flux_paper_image/2409.05474_1726024986.png"
            },

            {
                "startTime": "11:08",
                "arxivId": "2409.04585",
                "arxivLink": "https://arxiv.org/abs/2409.04585",
                "title": "AI-Powered Tuning: CubicML Makes Distributed Deep Learning Faster",
                "institute": "Meta",
                "text": "This research proposes CubicML, an automated machine learning (AutoML) system that uses a machine learning model to predict the performance of distributed deep learning training. This approach differs from previous work by focusing on a generic black-box AutoML solution for optimizing large-scale distributed ML systems, rather than specific co-design situations.",
                "paper-title": "CubicML: Automated ML for Distributed ML Systems Co-design with ML Prediction of Performance",
                "image-path": "flux_paper_image/2409.04585_1726024818.png"
            },

            {
                "startTime": "11:27",
                "arxivId": "2409.04897",
                "arxivLink": "https://arxiv.org/abs/2409.04897",
                "title": "Fairness in the Face of Bias: How to Match Students to Schools Without Screwing Up!",
                "institute": "Yale University, IIT Delhi",
                "text": "This paper tackles the problem of bias in centralized selection systems, where candidates are evaluated based on factors that may unfairly disadvantage certain groups. Unlike previous work that focused on single institutions, this research explores the multi-institution setting, where candidates have preferences over multiple options.",
                "paper-title": "Centralized Selection with Preferences in the Presence of Biases",
                "image-path": "flux_paper_image/2409.04897_1726024196.png"
            },

            {
                "startTime": "11:53",
                "arxivId": "2409.05325",
                "arxivLink": "https://arxiv.org/abs/2409.05325",
                "title": "Bayesian Optimization Gets a Transfer Learning Makeover for Heterogeneous Search Spaces!",
                "institute": "University of Minnesota Twin Cities, Meta",
                "text": "This research tackles the challenge of transferring knowledge between Bayesian optimization experiments with different search spaces. Unlike previous work that assumes identical search spaces, this paper proposes two methods that can handle these heterogeneous scenarios.",
                "paper-title": "Sample-Efficient Bayesian Optimization with Transfer Learning for Heterogeneous Search Spaces",
                "image-path": "flux_paper_image/2409.05325_1726023865.png"
            },

            {
                "startTime": "12:17",
                "arxivId": "2409.05312",
                "arxivLink": "https://arxiv.org/abs/2409.05312",
                "title": "Open-World Learning: Prompts Get Dynamic, Images Get Smarter!",
                "institute": "Yale University, Amazon",
                "text": "This research introduces a new approach to continual learning in open-world visual representation learning. Unlike previous methods that rely on static prompt pools, this paper proposes a dynamic prompt generation network that learns to generate prompts on-the-fly, improving generalization to unseen classes.",
                "paper-title": "Open-World Dynamic Prompt and Continual Visual Representation Learning",
                "image-path": "flux_paper_image/2409.05312_1726024014.png"
            },

            {
                "startTime": "12:38",
                "arxivId": "2409.05358",
                "arxivLink": "https://arxiv.org/abs/2409.05358",
                "title": "Reward Shaping: Don't Just Explore, Explore Smartly!",
                "institute": "UC Berkeley",
                "text": "This paper extends the concept of potential-based reward shaping from traditional Markov Decision Processes (MDPs) to Bayes-Adaptive Markov Decision Processes (BAMDPs), which model the agent's learning process. This allows for a more nuanced understanding of how pseudo-rewards can guide exploration and learning in reinforcement learning (RL) algorithms.",
                "paper-title": "BAMDP Shaping: a Unified Theoretical Framework for Intrinsic Motivation and Reward Shaping",
                "image-path": "flux_paper_image/2409.05358_1726024386.png"
            },

            {
                "startTime": "13:04",
                "arxivId": "2409.05847",
                "arxivLink": "https://arxiv.org/abs/2409.05847",
                "title": "Video Segmentation Goes Big: New Challenge Pushes the Limits of Object Tracking!",
                "institute": "Fudan University, Institute of Big Data",
                "text": "This research introduces the 6th Large-scale Video Object Segmentation (LSVOS) challenge, which uses three new datasets (MOSE, LVOS, and MeViS) to evaluate video object segmentation models in more complex and realistic scenarios. These datasets feature longer videos, more crowded scenes, and motion-based language descriptions, pushing the boundaries of current models.",
                "paper-title": "LSVOS Challenge Report: Large-scale Complex and Long Video Object Segmentation",
                "image-path": "flux_paper_image/2409.05847_1726025268.png"
            },

            {
                "startTime": "13:28",
                "arxivId": "2409.04888",
                "arxivLink": "https://arxiv.org/abs/2409.04888",
                "title": "Deep Learning for Alzheimer's: Can We See What They See?",
                "institute": "CMU, University of Illinois",
                "text": "This research introduces a quantitative disease-focusing strategy to assess how well deep learning models for Alzheimer's Disease classification focus on brain regions known to be affected by the disease. This approach combines saliency maps, which highlight important areas in an image, with brain segmentations to quantify the model's attention to specific regions.",
                "paper-title": "A Quantitative Approach for Evaluating Disease Focus and Interpretability of Deep Learning Models for Alzheimer's Disease Classification",
                "image-path": "flux_paper_image/2409.04888_1726023963.png"
            },

            {
                "startTime": "13:56",
                "arxivId": "2409.04779",
                "arxivLink": "https://arxiv.org/abs/2409.04779",
                "title": "Solving Stiff Equations: A Neural Network Gets a Boost from Asymptotic Analysis",
                "institute": "Nanjing University of Aeronautics and Astronautics, Tsinghua University",
                "text": "This research introduces a new neural network architecture called Component Fourier Neural Operator (ComFNO) specifically designed for solving singularly perturbed differential equations (SPDEs). Unlike previous methods that rely solely on data, ComFNO incorporates prior knowledge from asymptotic analysis, a mathematical technique that helps understand the behavior of solutions near specific points.",
                "paper-title": "Component Fourier Neural Operator for Singularly Perturbed Differential Equations",
                "image-path": "flux_paper_image/2409.04779_1726024522.png"
            },

            {
                "startTime": "14:19",
                "arxivId": "2409.04481",
                "arxivLink": "https://arxiv.org/abs/2409.04481",
                "title": "LLMs: From Disease Detectives to Drug Designers",
                "institute": "Monash University, Griffith University, Harvard University...",
                "text": "This research focuses on the application of Large Language Models (LLMs) in drug discovery and development, specifically highlighting their potential to automate tasks across all three stages: understanding disease mechanisms, drug discovery, and clinical trials. It differentiates itself from previous work by providing a comprehensive overview of LLM applications in this field, including a maturity assessment of various tasks.",
                "paper-title": "Large Language Models in Drug Discovery and Development: From Disease Mechanisms to Clinical Trials",
                "image-path": "flux_paper_image/2409.04481_1726025133.png"
            },

            {
                "startTime": "14:46",
                "arxivId": "2409.04992",
                "arxivLink": "https://arxiv.org/abs/2409.04992",
                "title": "LLMs Get a Storage Upgrade: Flash-Powered Attention for Long-Context Inference!",
                "institute": "Peking University, Xiamen University, Institute of Computing Technology Chinese Academy of Sciences...",
                "text": "This research proposes InstInfer, a system that offloads the computationally intensive attention operations and large KV caches to Computational Storage Drives (CSDs) during LLM inference. This approach differs from previous work by leveraging the high internal bandwidth of flash chips within CSDs, bypassing the bottleneck of PCIe bandwidth.",
                "paper-title": "InstInfer: In-Storage Attention Offloading for Cost-Effective Long-Context LLM Inference",
                "image-path": "flux_paper_image/2409.04992_1726023773.png"
            },

            {
                "startTime": "15:18",
                "arxivId": "2409.05096",
                "arxivLink": "https://arxiv.org/abs/2409.05096",
                "title": "Deep Learning Gets a Time Machine: Classifying IoT Traffic with a Twist!",
                "institute": "Toronto Metropolitan University, Tsinghua University",
                "text": "This research introduces a novel time-distributed feature learning method for network traffic classification, specifically focusing on the unique characteristics of IoT traffic. Unlike previous work that primarily relies on spatial and temporal features, this approach incorporates pseudo-temporal features, capturing the dynamic and complex nature of IoT data.",
                "paper-title": "Time-Distributed Feature Learning for Internet of Things Network Traffic Classification",
                "image-path": "flux_paper_image/2409.05096_1726024313.png"
            },

            {
                "startTime": "15:41",
                "arxivId": "2409.04613",
                "arxivLink": "https://arxiv.org/abs/2409.04613",
                "title": "Decentralized Learning: A Near-Potential Solution for Multi-Agent Games",
                "institute": "UC Berkeley",
                "text": "This research introduces the concept of a Markov Near-Potential Function (MNPF) to analyze the convergence of decentralized learning algorithms in general-sum Markov games. Unlike previous work that focused on zero-sum or potential games, this approach tackles the complexities of real-world interactions where agents can be both cooperative and competitive.",
                "paper-title": "Decentralized Learning in General-sum Markov Games",
                "image-path": "flux_paper_image/2409.04613_1726025696.png"
            },

            {
                "startTime": "16:04",
                "arxivId": "2409.05076",
                "arxivLink": "https://arxiv.org/abs/2409.05076",
                "title": "\"Is There a Clock?\" - Tricking AI with Silly Questions to Spot Fake Images",
                "institute": "Tsinghua University, University of Science and Technology Beijing",
                "text": "This research proposes a novel method called PIP (Probe Question-based Irrelevant Probe) to detect adversarial examples in large vision-language models (LVLMs). Unlike previous work that focuses on detecting adversarial examples in isolated vision models, PIP leverages the attention patterns of irrelevant probe questions to distinguish between clean and adversarial images.",
                "paper-title": "PIP: Detecting Adversarial Examples in Large Vision-Language Models via Attention Patterns of Irrelevant Probe Questions",
                "image-path": "flux_paper_image/2409.05076_1726024302.png"
            },

            {
                "startTime": "16:32",
                "arxivId": "2409.05028",
                "arxivLink": "https://arxiv.org/abs/2409.05028",
                "title": "LLMs: The New GUI Test Migrators?",
                "institute": "Peking University, Singapore Management University, Shanghai Jiao Tong University...",
                "text": "This research introduces a new paradigm for GUI test migration, the abstraction-concretization paradigm, which first extracts a general test logic from multiple source test cases and then uses this logic to guide the generation of concrete GUI test cases for the target app. This differs from existing approaches that rely on widget mapping, which can lead to incomplete or buggy test cases.",
                "paper-title": "LLM-based Abstraction and Concretization for GUI Test Migration",
                "image-path": "flux_paper_image/2409.05028_1726024699.png"
            },

            {
                "startTime": "17:12",
                "arxivId": "2409.04834",
                "arxivLink": "https://arxiv.org/abs/2409.04834",
                "title": "Log-Based Anomaly Detection: Less is More!",
                "institute": "Peking University, Alibaba",
                "text": "This research quantifies the impact of log event reduction on anomaly detection models, exploring the effectiveness of reducing log events without compromising model performance. Previous work has focused on anomaly detection methods, but the quantitative effects of log reduction have remained unexplored.",
                "paper-title": "Reducing Events to Augment Log-based Anomaly Detection Models: An Empirical Study",
                "image-path": "flux_paper_image/2409.04834_1726023798.png"
            },

            {
                "startTime": "17:30",
                "arxivId": "2409.05798",
                "arxivLink": "https://arxiv.org/abs/2409.05798",
                "title": "Stop Staring, Start Clicking: How Response Times Can Supercharge Preference Learning",
                "institute": "MIT, Harvard University",
                "text": "This research integrates human response times into preference-based linear bandits, a common framework for interactive learning. Unlike previous work that relies solely on choices, this approach leverages the inverse relationship between response time and preference strength to enhance utility estimation.",
                "paper-title": "Enhancing Preference-based Linear Bandits via Human Response Time",
                "image-path": "flux_paper_image/2409.05798_1726025138.png"
            },

            {
                "startTime": "17:47",
                "arxivId": "2409.04979",
                "arxivLink": "https://arxiv.org/abs/2409.04979",
                "title": "Radar and Camera: A Match Made in BEV Heaven!",
                "institute": "Peking University, University of Electronic Science and Technology of China",
                "text": "This research introduces RCBEVDet++, a framework that fuses radar and camera data in a bird's-eye view (BEV) space for 3D object detection. Unlike previous methods that simply concatenate or sum features, RCBEVDet++ uses a cross-attention mechanism to dynamically align and fuse the multi-modal features, resulting in more accurate and robust perception.",
                "paper-title": "RCBEVDet++: Toward High-accuracy Radar-Camera Fusion 3D Perception Network",
                "image-path": "flux_paper_image/2409.04979_1726025589.png"
            },

            {
                "startTime": "18:18",
                "arxivId": "2409.05780",
                "arxivLink": "https://arxiv.org/abs/2409.05780",
                "title": "Modular Networks: Breaking the Curse of Dimensionality with a Little Help from Their Friends",
                "institute": "MIT",
                "text": "This research investigates how modular neural networks can overcome the exponential increase in training data required for generalization as task dimensionality increases. Unlike previous work that focused on empirical observations, this paper provides a theoretical framework for understanding the benefits of modularity and proposes a novel learning rule to exploit these benefits.",
                "paper-title": "Breaking Neural Network Scaling Laws with Modularity",
                "image-path": "flux_paper_image/2409.05780_1726025257.png"
            },

            {
                "startTime": "18:41",
                "arxivId": "2409.05782",
                "arxivLink": "https://arxiv.org/abs/2409.05782",
                "title": "Big Models, Small Time: Training Efficiency Gets a Makeover!",
                "institute": "MIT",
                "text": "This paper introduces a novel concept called \"scale-time equivalence,\" which suggests that increasing the size of a neural network is functionally equivalent to increasing its training time proportionally. This differs from previous work that primarily focused on scaling laws with respect to model size and data volume, neglecting the impact of training time.",
                "paper-title": "Unified Neural Network Scaling Laws and Scale-time Equivalence",
                "image-path": "flux_paper_image/2409.05782_1726024044.png"
            },

            {
                "startTime": "19:05",
                "arxivId": "2409.05666",
                "arxivLink": "https://arxiv.org/abs/2409.05666",
                "title": "Deep Learning Helps See Through Skin to Guide Cancer Treatment",
                "institute": "Dartmouth College, Nvidia, University of Wisconsin-Madison",
                "text": "This research introduces a deep learning framework for segmenting bio-morphological features in Cherenkov images, which is a novel application of transfer learning in this field. Previous work relied on manual segmentation, which was slow and inconsistent.",
                "paper-title": "Robust Real-time Segmentation of Bio-Morphological Features in Human Cherenkov Imaging during Radiotherapy via Deep Learning",
                "image-path": "flux_paper_image/2409.05666_1726025056.png"
            },

            {
                "startTime": "19:30",
                "arxivId": "2409.04822",
                "arxivLink": "https://arxiv.org/abs/2409.04822",
                "title": "LLMs on Trial: Can AI Red Teams Crack the Code of Conversational Safety?",
                "institute": "IBM",
                "text": "This research explores the effectiveness of using off-the-shelf LLMs as \"red teamers\" in a conversational setting, focusing on multi-turn interactions rather than single-turn attacks.",
                "paper-title": "Exploring Straightforward Conversational Red-Teaming",
                "image-path": "flux_paper_image/2409.04822_1726024774.png"
            },

            {
                "startTime": "19:55",
                "arxivId": "2409.05401",
                "arxivLink": "https://arxiv.org/abs/2409.05401",
                "title": "Multilingual Retrieval Model Learns to Speak 200 Languages... Without Ever Leaving English!",
                "institute": "Indian Institute of Technology Patna, IBM",
                "text": "This research introduces NLLB-E5, a multilingual retrieval model that leverages a pre-trained multilingual encoder to handle multiple languages without requiring any multilingual training data. This approach differs from previous work that relied on large datasets of labeled multilingual examples.",
                "paper-title": "NLLB-E5: A Scalable Multilingual Retrieval Model",
                "image-path": "flux_paper_image/2409.05401_1726025013.png"
            },

            {
                "startTime": "20:21",
                "arxivId": "2409.05834",
                "arxivLink": "https://arxiv.org/abs/2409.05834",
                "title": "Vision-Driven BEV: Training 3D Perception with 2D Annotations",
                "institute": "Tsinghua University",
                "text": "This research proposes a fine-tuning method for BEV perception networks that utilizes 2D semantic perception from surround-view cameras, reducing the reliance on expensive LiDAR data for ground truth generation.",
                "paper-title": "Vision-Driven 2D Supervised Fine-Tuning Framework for Bird's Eye View Perception",
                "image-path": "flux_paper_image/2409.05834_1726024082.png"
            },

            {
                "startTime": "20:45",
                "arxivId": "2409.04840",
                "arxivLink": "https://arxiv.org/abs/2409.04840",
                "title": "Reinforcement Learning Gets a Computational Makeover: Skipping Over Low-Range States for Efficiency!",
                "institute": "Google",
                "text": "This research introduces a new reinforcement learning algorithm that efficiently finds near-optimal policies in MDPs with linearly realizable value functions. Unlike previous work, this algorithm relies on a cost-sensitive classification oracle, which can be efficiently implemented when the feature dimension is constant.",
                "paper-title": "Sample- and Oracle-Efficient Reinforcement Learning for MDPs with Linearly-Realizable Value Functions",
                "image-path": "flux_paper_image/2409.04840_1726024874.png"
            },

            {
                "startTime": "21:13",
                "arxivId": "2409.05477",
                "arxivLink": "https://arxiv.org/abs/2409.05477",
                "title": "TGNNs Get a Transformer Makeover: Faster, More Accurate Graph Modeling!",
                "institute": "Wuhan University, ETH Zurich, Peking University",
                "text": "This paper proposes TF-TGN, a temporal graph neural network (TGNN) that leverages the Transformer decoder architecture for efficient training. Unlike previous TGNNs that rely on specialized models and tailored training frameworks, TF-TGN adapts the Transformer's codebase, benefiting from its optimized kernels and distributed training schemes.",
                "paper-title": "Retrofitting Temporal Graph Neural Networks with Transformer",
                "image-path": "flux_paper_image/2409.05477_1726024204.png"
            },

            {
                "startTime": "21:34",
                "arxivId": "2409.05701",
                "arxivLink": "https://arxiv.org/abs/2409.05701",
                "title": "Federated Learning Gets a Diffusion Makeover: Say Goodbye to Linear Aggregation!",
                "institute": "Tsinghua University",
                "text": "This research proposes a novel approach to parameter aggregation in federated learning (FL) by leveraging diffusion models. Unlike traditional methods that rely on linear averaging, this framework uses a diffusion model to learn the distribution of model parameters across clients, enabling the generation of personalized parameters for each client.",
                "paper-title": "pFedGPA: Diffusion-based Generative Parameter Aggregation for Personalized Federated Learning",
                "image-path": "flux_paper_image/2409.05701_1726025122.png"
            },

            {
                "startTime": "22:00",
                "arxivId": "2409.04787",
                "arxivLink": "https://arxiv.org/abs/2409.04787",
                "title": "LLMs: Learning From Their Own Successes!",
                "institute": "IBM",
                "text": "This paper introduces Selective Self-Rehearsal (SSR), a fine-tuning approach that uses a model's own correct responses to improve generalization. Unlike standard supervised fine-tuning (SFT), which relies solely on gold responses, SSR leverages the model's ability to generate multiple valid answers, reducing overfitting and preserving the model's original capabilities.",
                "paper-title": "Selective Self-Rehearsal: A Fine-Tuning Approach to Improve Generalization in Large Language Models",
                "image-path": "flux_paper_image/2409.04787_1726025531.png"
            },

            {
                "startTime": "22:25",
                "arxivId": "2409.04778",
                "arxivLink": "https://arxiv.org/abs/2409.04778",
                "title": "Teacher's Pet: New Method Calibrates Logits to Avoid Mis-Instruction in Knowledge Distillation",
                "institute": "Tsinghua University",
                "text": "This research identifies a problem called \"mis-instruction\" in knowledge distillation, where the student model learns incorrect information from the teacher model's logits. The paper proposes a novel Logit Calibration (LoCa) method to address this issue by adjusting the teacher's logits to ensure they align with the ground truth labels.",
                "paper-title": "LoCa: Logit Calibration for Knowledge Distillation",
                "image-path": "flux_paper_image/2409.04778_1726023566.png"
            },

            {
                "startTime": "22:45",
                "arxivId": "2409.05427",
                "arxivLink": "https://arxiv.org/abs/2409.05427",
                "title": "Text Toucher: Feeling the Words, Generating the Textures!",
                "institute": "Zhejiang University, Yale University",
                "text": "This research focuses on generating tactile images directly from text descriptions, unlike previous work that relied on visual input. The paper analyzes tactile images at two levels of detail: object-level (texture and shape) and sensor-level (gel status), and proposes a method to model these aspects through text.",
                "paper-title": "TextToucher: Fine-Grained Text-to-Touch Generation",
                "image-path": "flux_paper_image/2409.05427_1726024349.png"
            },

            {
                "startTime": "23:12",
                "arxivId": "2409.05387",
                "arxivLink": "https://arxiv.org/abs/2409.05387",
                "title": "Motion Style Transfer: Hip Velocity is the New Black!",
                "institute": "Zhejiang University, Tencent Technology Co. Ltd., University College London",
                "text": "This research proposes a novel method for fine-grained control over contact in motion style transfer by indirectly controlling contact through hip velocity. This approach differs from previous methods that either treat contact as part of the content or struggle to decouple it from style.",
                "paper-title": "Decoupling Contact for Fine-Grained Motion Style Transfer",
                "image-path": "flux_paper_image/2409.05387_1726024119.png"
            },

            {
                "startTime": "23:43",
                "arxivId": "2409.05819",
                "arxivLink": "https://arxiv.org/abs/2409.05819",
                "title": "Gaussian Splatting Gets Physical: Simulating 3D Scenes with a Twist!",
                "institute": "Jagiellonian University, Cambridge, IDEAS",
                "text": "This research proposes a new method called GASP (Gaussian Splatting for Physics-Based Simulations) that integrates physical simulations directly into the Gaussian Splatting framework. Unlike previous approaches that relied on additional meshing techniques, GASP operates directly on Gaussian distributions, simplifying the process and eliminating the need for external modifications to the physical engine.",
                "paper-title": "GASP: Gaussian Splatting for Physic-Based Simulations",
                "image-path": "flux_paper_image/2409.05819_1726024240.png"
            },

            {
                "startTime": "24:07",
                "arxivId": "2409.05585",
                "arxivLink": "https://arxiv.org/abs/2409.05585",
                "title": "Brain MRI Counterfactuals: A Peek into What Could Be",
                "institute": "Stanford University, Weill Cornell Medicine, Imperial College London",
                "text": "This research proposes a novel method for generating counterfactual 3D brain MRIs by incorporating causality into a latent space. Unlike previous approaches that directly model causality in the high-dimensional MRI space, this method leverages a VQ-VAE to encode the MRI into a lower-dimensional representation, making it computationally more efficient.",
                "paper-title": "Latent 3D Brain MRI Counterfactual",
                "image-path": "flux_paper_image/2409.05585_1726023750.png"
            },

            {
                "startTime": "24:37",
                "arxivId": "2409.04596",
                "arxivLink": "https://arxiv.org/abs/2409.04596",
                "title": "Two X-rays, One 3D Heart: AI Reconstructs Coronary Arteries with a Single Patient's Data!",
                "institute": "University of Oxford",
                "text": "This research proposes a self-supervised deep learning method called NeCA for 3D coronary artery tree reconstruction from only two projections. Unlike previous methods that require large training datasets and 3D ground truth, NeCA leverages implicit neural representation and a multiresolution hash encoder to learn from a single patient's data.",
                "paper-title": "NeCA: 3D Coronary Artery Tree Reconstruction from Two 2D Projections by Neural Implicit Representation",
                "image-path": "flux_paper_image/2409.04596_1726023780.png"
            },

            {
                "startTime": "24:59",
                "arxivId": "2409.05622",
                "arxivLink": "https://arxiv.org/abs/2409.05622",
                "title": "Diffusion Models Get a Preference Makeover: Forward KL Regularization Makes Them More Human-Friendly!",
                "institute": "China Telecom, Tsinghua University, Northwest Polytechnical University...",
                "text": "This research proposes a novel framework called Forward KL regularized Preference optimization for aligning Diffusion policies (FKPD) to align diffusion policies with human preferences directly. Unlike previous methods that rely on pre-defined reward functions, FKPD learns a basic diffusion policy from offline data and then aligns it with preference data through a direct preference optimization process. This approach avoids the potential inaccuracies of manually defined reward functions.",
                "paper-title": "Forward KL Regularized Preference Optimization for Aligning Diffusion Policies",
                "image-path": "flux_paper_image/2409.05622_1726023934.png"
            },

            {
                "startTime": "25:25",
                "arxivId": "2409.05863",
                "arxivLink": "https://arxiv.org/abs/2409.05863",
                "title": "Traffic Simulation Gets a Prompt: Researchers Teach Cars to Follow Instructions!",
                "institute": "UT Austin, NVIDIA",
                "text": "This research introduces a new type of traffic simulation that allows users to give specific instructions to individual cars, influencing their behavior and creating more realistic and controllable scenarios. Unlike previous work that focused on generating realistic traffic without user control, this approach allows for more targeted and customized simulations.",
                "paper-title": "Promptable Closed-loop Traffic Simulation",
                "image-path": "flux_paper_image/2409.05863_1726024214.png"
            },

            {
                "startTime": "25:50",
                "arxivId": "2409.04723",
                "arxivLink": "https://arxiv.org/abs/2409.04723",
                "title": "Sleep Talk: How Last Night's Zzz's Can Predict Your Mood Today!",
                "institute": "Queen\u2019s University",
                "text": "This research introduces NapTune, a framework that uses sleep data from the previous night to improve mood classification using wearable time-series data. This approach differs from previous work by integrating sleep measures as an additional input modality, rather than relying solely on real-time wearable signals.",
                "paper-title": "NapTune: Efficient Model Tuning for Mood Classification using Previous Night's Sleep Measures along with Wearable Time-series",
                "image-path": "flux_paper_image/2409.04723_1726023689.png"
            },

            {
                "startTime": "26:06",
                "arxivId": "2409.04831",
                "arxivLink": "https://arxiv.org/abs/2409.04831",
                "title": "Mutation Testing: Giving LLMs a \"Prompt-Up\"",
                "institute": "Peking University",
                "text": "This research proposes a mutation testing framework specifically designed for in-context learning (ICL) systems, focusing on mutating the ICL prompts rather than the model itself. This approach is distinct from previous mutation testing work that primarily targeted conventional deep learning systems.",
                "paper-title": "MILE: A Mutation Testing Framework of In-Context Learning Systems",
                "image-path": "flux_paper_image/2409.04831_1726025168.png"
            },

            {
                "startTime": "26:37",
                "arxivId": "2409.04633",
                "arxivLink": "https://arxiv.org/abs/2409.04633",
                "title": "Mars Helicopter Gets Its Bearings: New Tech Navigates Rugged Terrain",
                "institute": "University of Zurich, California Institute of Technology, Jet Propulsion Laboratory",
                "text": "This research introduces a novel range-visual-inertial odometry (VIO) system that integrates 1D-LRF measurements without relying on terrain planarity assumptions, unlike previous methods.",
                "paper-title": "Structure-Invariant Range-Visual-Inertial Odometry",
                "image-path": "flux_paper_image/2409.04633_1726024838.png"
            },

            {
                "startTime": "27:00",
                "arxivId": "2409.05459",
                "arxivLink": "https://arxiv.org/abs/2409.05459",
                "title": "Matching Made in Heaven: A Geometric Approach to Causal Inference",
                "institute": "Microsoft",
                "text": "This research introduces GeoMatching, a novel matching method for treatment effect estimation that accounts for the geometry and uncertainty of confounders. Unlike previous methods that rely on Euclidean distances, GeoMatching leverages Riemannian geometry to define distances along the data manifold, resulting in more accurate estimates.",
                "paper-title": "Beyond Flatland: A Geometric Take on Matching Methods for Treatment Effect Estimation",
                "image-path": "flux_paper_image/2409.05459_1726024031.png"
            },

            {
                "startTime": "27:17",
                "arxivId": "2409.05635",
                "arxivLink": "https://arxiv.org/abs/2409.05635",
                "title": "Na\u00efve Bayes Gets a Makeover: Optimal Projections for Smarter Classification!",
                "institute": "Lancaster University, EPFL, Kohort",
                "text": "This research explores finding an optimal basis for factorizing class conditional densities in the Na\u00efve Bayes model, instead of using the standard cardinal basis. This approach aims to improve classification accuracy by finding a better way to represent the data.",
                "paper-title": "Optimal Projections for Classification with Naive Bayes",
                "image-path": "flux_paper_image/2409.05635_1726024834.png"
            },

            {
                "startTime": "27:40",
                "arxivId": "2409.04980",
                "arxivLink": "https://arxiv.org/abs/2409.04980",
                "title": "Self-Driving Cars Get a Social Life: New Dataset Simulates Connected Vehicles",
                "institute": "Tsinghua University",
                "text": "This research introduces a new dataset called Multi-V2X, which simulates various penetration rates of connected and autonomous vehicles (CAVs) in a traffic environment. Unlike previous datasets, Multi-V2X allows researchers to explore how cooperative perception algorithms perform under different levels of CAV adoption.",
                "paper-title": "Multi-V2X: A Large Scale Multi-modal Multi-penetration-rate Dataset for Cooperative Perception",
                "image-path": "flux_paper_image/2409.04980_1726024677.png"
            },

            {
                "startTime": "28:05",
                "arxivId": "2409.05486",
                "arxivLink": "https://arxiv.org/abs/2409.05486",
                "title": "Tiny Brains, Big Results: Can Smaller LLMs Rule the Biomedical World?",
                "institute": "Elsevier, OpenAI, Meta",
                "text": "This research compares the performance of a smaller, domain-specific LLM trained on Elsevier's biomedical data against larger, general-purpose models like GPT-3.5-turbo and Llama 2. The study uses human evaluation to assess the models' ability to generate accurate and fluent responses in the biomedical domain.",
                "paper-title": "Elsevier Arena: Human Evaluation of Chemistry/Biology/Health Foundational Large Language Models",
                "image-path": "flux_paper_image/2409.05486_1726024577.png"
            },

            {
                "startTime": "28:29",
                "arxivId": "2409.05283",
                "arxivLink": "https://arxiv.org/abs/2409.05283",
                "title": "Truthful AI, Left-Leaning Bias: When Facts Get Political",
                "institute": "MIT",
                "text": "This research investigates the relationship between truthfulness and political bias in language models, specifically examining how training models on datasets designed to capture objective truth can still lead to a left-leaning bias. This differs from previous work that focused on the political bias of base models and the influence of alignment datasets on their political stance.",
                "paper-title": "On the Relationship between Truth and Political Bias in Language Models",
                "image-path": "flux_paper_image/2409.05283_1726024124.png"
            },

            {
                "startTime": "28:51",
                "arxivId": "2409.05799",
                "arxivLink": "https://arxiv.org/abs/2409.05799",
                "title": "Speaker Verification: Don't Just Listen, Decode the Phoneme!",
                "institute": "Carnegie Mellon University",
                "text": "This research introduces a novel Phoneme-Debiasing Attention Framework (PDAF) that explicitly accounts for the phonetic sequence underlying a speech recording, unlike previous methods that treat speech as a generic time series.",
                "paper-title": "PDAF: A Phonetic Debiasing Attention Framework For Speaker Verification",
                "image-path": "flux_paper_image/2409.05799_1726025584.png"
            },

            {
                "startTime": "29:12",
                "arxivId": "2409.04732",
                "arxivLink": "https://arxiv.org/abs/2409.04732",
                "title": "Surgical Videos Get a Language Lesson: AI Learns to Understand the Operating Room",
                "institute": "Stanford University, Intuitive Surgical Inc.",
                "text": "This research introduces VidLPRO, a video-language pre-training framework that goes beyond contrastive learning to capture the intricate temporal dynamics of surgical videos. Unlike previous methods, VidLPRO incorporates video-text matching and masked language modeling objectives, allowing it to learn richer and more nuanced representations of surgical procedures.",
                "paper-title": "VidLPRO: A $\underline{Vid}$eo-$\underline{L}$anguage $\underline{P}$re-training Framework for $\underline{Ro}$botic and Laparoscopic Surgery",
                "image-path": "flux_paper_image/2409.04732_1726023899.png"
            },

            {
                "startTime": "29:36",
                "arxivId": "2409.05692",
                "arxivLink": "https://arxiv.org/abs/2409.05692",
                "title": "Building a Better Map: Unsupervised Learning Classifies Millions of US Buildings",
                "institute": "George Mason University, Microsoft",
                "text": "This research differs from previous work by using an unsupervised machine learning method to classify building types in the US, relying solely on OpenStreetMap data and auxiliary information.",
                "paper-title": "Extracting the U.S. building types from OpenStreetMap data",
                "image-path": "flux_paper_image/2409.05692_1726025450.png"
            },

            {
                "startTime": "29:53",
                "arxivId": "2409.05672",
                "arxivLink": "https://arxiv.org/abs/2409.05672",
                "title": "Outlier Detection: Model Selection? Who Needs It?!",
                "institute": "CMU",
                "text": "This paper introduces FoMo-0D, a foundation model for outlier detection that bypasses the need for model selection and training. It is pretrained on synthetic data generated from a novel data prior, enabling zero-shot inference on new datasets.",
                "paper-title": "Zero-shot Outlier Detection via Prior-data Fitted Networks: Model Selection Bygone!",
                "image-path": "flux_paper_image/2409.05672_1726023543.png"
            },

            {
                "startTime": "30:15",
                "arxivId": "2409.05242",
                "arxivLink": "https://arxiv.org/abs/2409.05242",
                "title": "FedFT: Shrinking Models, Boosting Brains in Federated Learning!",
                "institute": "Robert Gordon University, University College London",
                "text": "This paper introduces FedFT, a new method for improving communication efficiency in federated learning by transforming model parameters into the frequency space using the Discrete Cosine Transform (DCT). Unlike previous work that focuses on compressing training data, FedFT compresses model parameters, enabling efficient communication and aggregation in the frequency domain.",
                "paper-title": "FedFT: Improving Communication Performance for Federated Learning with Frequency Space Transformation",
                "image-path": "flux_paper_image/2409.05242_1726025322.png"
            },

            {
                "startTime": "30:39",
                "arxivId": "2409.05314",
                "arxivLink": "https://arxiv.org/abs/2409.05314",
                "title": "Telecom Talk: LLMs Get a Domain-Specific Makeover!",
                "institute": "Yale University, Amazon",
                "text": "This research focuses on adapting large language models (LLMs) specifically for the telecommunications domain, a gap in current research. Unlike previous work that relies on general-purpose LLMs, this study creates a series of specialized models trained on a curated dataset of telecommunications materials.",
                "paper-title": "Tele-LLMs: A Series of Specialized Large Language Models for Telecommunications",
                "image-path": "flux_paper_image/2409.05314_1726024266.png"
            },

            {
                "startTime": "31:01",
                "arxivId": "2409.05556",
                "arxivLink": "https://arxiv.org/abs/2409.05556",
                "title": "SciAgents: AI's New Brain for Scientific Discovery",
                "institute": "MIT",
                "text": "This research introduces SciAgents, a multi-agent system that uses a large ontological knowledge graph and LLMs to generate and refine research hypotheses. Unlike previous work, SciAgents incorporates a random path approach for knowledge graph exploration, leading to more diverse and potentially novel hypotheses.",
                "paper-title": "SciAgents: Automating scientific discovery through multi-agent intelligent graph reasoning",
                "image-path": "flux_paper_image/2409.05556_1726023578.png"
            },

            {
                "startTime": "31:23",
                "arxivId": "2409.05169",
                "arxivLink": "https://arxiv.org/abs/2409.05169",
                "title": "Polycrystal Plasticity Gets a Graph-ic Makeover: GNNs Speed Up Simulations 150x!",
                "institute": "Stanford University",
                "text": "This research uses Graph Neural Networks (GNNs) to learn the relationship between strain and stress in polycrystal plasticity, a departure from traditional methods that rely on fixed-size data. The GNN is trained on subgraphs of finite element meshes, allowing it to handle data with varying dimensions.",
                "paper-title": "Learning polycrystal plasticity using mesh-based subgraph geometric deep learning",
                "image-path": "flux_paper_image/2409.05169_1726024829.png"
            },

            {
                "startTime": "31:53",
                "arxivId": "2409.05636",
                "arxivLink": "https://arxiv.org/abs/2409.05636",
                "title": "3D Forest Scan: Machine Learning Helps Us See Trees (and Carbon) Better!",
                "institute": "University of Cambridge, Drexel University",
                "text": "This research uses 3D tomographic SAR data, which captures multiple images from different angles, to create a more detailed representation of forest structure than traditional SAR images. This approach is particularly relevant for the upcoming Biomass Satellite mission.",
                "paper-title": "3D-SAR Tomography and Machine Learning for High-Resolution Tree Height Estimation",
                "image-path": "flux_paper_image/2409.05636_1726023715.png"
            },

            {
                "startTime": "32:18",
                "arxivId": "2409.05305",
                "arxivLink": "https://arxiv.org/abs/2409.05305",
                "title": "Neural Networks: Unlocking the Secrets of Latent Spaces with Symbolic Search!",
                "institute": "University of Toronto, Perimeter Institute for Theoretical Physics",
                "text": "This research introduces a framework for interpreting individual neurons within the latent spaces of neural networks by finding closed-form expressions that represent the underlying concepts. This differs from previous work that focused on interpreting output neurons or required prior knowledge of the concept.",
                "paper-title": "Closed-Form Interpretation of Neural Network Latent Spaces with Symbolic Gradients",
                "image-path": "flux_paper_image/2409.05305_1726025669.png"
            },

            {
                "startTime": "32:43",
                "arxivId": "2409.04707",
                "arxivLink": "https://arxiv.org/abs/2409.04707",
                "title": "Deep Learning's New Trick: Borrowing from Math Class!",
                "institute": "Johns Hopkins University, Columbia University, Washington University in St. Louis...",
                "text": "This research explores the connection between deep learning optimization algorithms and numerical methods, specifically using the Taylor multi-step method to improve the SGD optimizer. This approach differs from previous work that focused on accelerating training speed, as this paper aims to enhance interpretability and accuracy.",
                "paper-title": "Enhancing Deep Learning with Optimized Gradient Descent: Bridging Numerical Methods and Neural Network Training",
                "image-path": "flux_paper_image/2409.04707_1726023851.png"
            },

            {
                "startTime": "33:04",
                "arxivId": "2409.05207",
                "arxivLink": "https://arxiv.org/abs/2409.05207",
                "title": "Transformers on FPGAs: Making Physics Calculations Super Speedy!",
                "institute": "University of Washington, Massachusetts Institute of Technology",
                "text": "This research extends the hls4ml compiler to automatically convert any TensorFlow-based transformer model into an FPGA-friendly format, enhancing the versatility of this method. Previous work mainly focused on implementing specific transformer models on FPGAs.",
                "paper-title": "Low Latency Transformer Inference on FPGAs for Physics Applications with hls4ml",
                "image-path": "flux_paper_image/2409.05207_1726023914.png"
            },

            {
                "startTime": "33:31",
                "arxivId": "2409.04475",
                "arxivLink": "https://arxiv.org/abs/2409.04475",
                "title": "Database Q&A Bots Get a Brain Upgrade: LLMs Learn to Talk the Talk and Walk the Walk",
                "institute": "Xiamen University, Tsinghua University, Huawei",
                "text": "This research introduces DQA, a comprehensive benchmark for evaluating Large Language Models (LLMs) in database question-answering tasks. Unlike previous work, DQA focuses specifically on database-related queries, including general database concepts, product-specific instructions, and instance-specific troubleshooting.",
                "paper-title": "Revolutionizing Database Q&A with Large Language Models: Comprehensive Benchmark and Evaluation",
                "image-path": "flux_paper_image/2409.04475_1726024135.png"
            },

            {
                "startTime": "33:51",
                "arxivId": "2409.04759",
                "arxivLink": "https://arxiv.org/abs/2409.04759",
                "title": "Deep Learning Gets a Contextual Makeover: Say Goodbye to Batch Size Blues!",
                "institute": "Sorbonne Paris Nord University, Paris-Saclay University, UVSQ...",
                "text": "This research introduces Adaptative Context Normalization (ACN), a new method for normalizing activations in deep neural networks. Unlike previous methods like Batch Normalization (BN) and Mixture Normalization (MN), ACN leverages the concept of \"context\" to group data with similar characteristics, allowing for more efficient and accurate normalization.",
                "paper-title": "Adaptative Context Normalization: A Boost for Deep Learning in Image Processing",
                "image-path": "flux_paper_image/2409.04759_1726025377.png"
            },

            {
                "startTime": "34:27",
                "arxivId": "2409.04838",
                "arxivLink": "https://arxiv.org/abs/2409.04838",
                "title": "Seizure Prediction on a Chip: TinyML Makes Big Moves!",
                "institute": "UC Berkeley",
                "text": "This research presents SPIRIT, a system-on-a-chip (SoC) designed for seizure prediction. Unlike previous work that focused on software-based implementations or hardware-based seizure detection, SPIRIT integrates both a low-power classifier and analog frontends (AFEs) for on-chip seizure prediction.",
                "paper-title": "SPIRIT: Low Power Seizure Prediction using Unsupervised Online-Learning and Zoom Analog Frontends",
                "image-path": "flux_paper_image/2409.04838_1726024412.png"
            },

            {
                "startTime": "34:47",
                "arxivId": "2409.05601",
                "arxivLink": "https://arxiv.org/abs/2409.05601",
                "title": "Punctuate This! Training Speech Models on Longer Sentences for Better Recognition and Translation",
                "institute": "Nvidia",
                "text": "This research explores training speech recognition and translation models on longer audio segments containing complete sentences with proper punctuation and capitalization. Unlike previous work that primarily focused on lowercase text and partial punctuation, this study investigates the benefits of incorporating full PnC information directly into the training process.",
                "paper-title": "Longer is (Not Necessarily) Stronger: Punctuated Long-Sequence Training for Enhanced Speech Recognition and Translation",
                "image-path": "flux_paper_image/2409.05601_1726025050.png"
            },

            {
                "startTime": "35:06",
                "arxivId": "2409.05699",
                "arxivLink": "https://arxiv.org/abs/2409.05699",
                "title": "Handwriting Recognition Gets a Brain Boost with Learnable Relaxation Labelling!",
                "institute": "Italian Institute of Technology, ETH Zurich, Ca\u2019 Foscari University of Venice",
                "text": "This research integrates Relaxation Labelling (RL) processes, a technique with roots in the 1970s, into modern handwriting recognition systems. Unlike attention mechanisms, RL offers a principled approach with theoretical foundations in variational inequality and game theory.",
                "paper-title": "Boosting CNN-based Handwriting Recognition Systems with Learnable Relaxation Labeling",
                "image-path": "flux_paper_image/2409.05699_1726024188.png"
            },

            {
                "startTime": "35:31",
                "arxivId": "2409.04994",
                "arxivLink": "https://arxiv.org/abs/2409.04994",
                "title": "NMF: Shrinking Big Data Without Losing the Good Stuff!",
                "institute": "Princeton University",
                "text": "This research proposes a new framework for Nonnegative Matrix Factorization (NMF) that uses compressed data, allowing for efficient processing of large datasets. Unlike previous work, this paper provides theoretical guarantees on the accuracy of the compressed NMF solutions and introduces new algorithms specifically designed for these compressed problems.",
                "paper-title": "Learning nonnegative matrix factorizations from compressed data",
                "image-path": "flux_paper_image/2409.04994_1726024863.png"
            },

            {
                "startTime": "35:52",
                "arxivId": "2409.04913",
                "arxivLink": "https://arxiv.org/abs/2409.04913",
                "title": "NGD: The Degeneracy Buster for Deep Learning Models",
                "institute": "Cambridge AI Safety Hub",
                "text": "This research compares the effective dimension of models trained using natural gradient descent (NGD) and stochastic gradient descent (SGD). It finds that NGD consistently leads to models with a higher effective dimension, suggesting that NGD avoids flatter, more degenerate regions in the loss landscape.",
                "paper-title": "NGD converges to less degenerate solutions than SGD",
                "image-path": "flux_paper_image/2409.04913_1726025280.png"
            },

            {
                "startTime": "36:14",
                "arxivId": "2409.04909",
                "arxivLink": "https://arxiv.org/abs/2409.04909",
                "title": "Tiny Data, Big Brains: A Transformer Trick for Predicting Drug Brain Power",
                "institute": "University of Toronto",
                "text": "This research proposes a modified GPS Transformer architecture that incorporates Self Attention, designed to perform well with limited data. This approach differs from previous work by focusing on improving performance with smaller datasets, which is crucial for computational efficiency in drug discovery.",
                "paper-title": "Efficient Training of Transformers for Molecule Property Prediction on Small-scale Datasets",
                "image-path": "flux_paper_image/2409.04909_1726025520.png"
            },

            {
                "startTime": "36:38",
                "arxivId": "2409.05225",
                "arxivLink": "https://arxiv.org/abs/2409.05225",
                "title": "Hemarthrosis Detection: Can Fake Images Help Real Patients?",
                "institute": "University of Toronto",
                "text": "This research compares two augmentation methods, data synthesis and traditional augmentation techniques, to improve the accuracy of hemophilia detection models. It's unique because it focuses on the similarity between synthetic and real images, which is often overlooked in augmentation studies.",
                "paper-title": "Comparison of Two Augmentation Methods in Improving Detection Accuracy of Hemarthrosis",
                "image-path": "flux_paper_image/2409.05225_1726024307.png"
            },

            {
                "startTime": "36:55",
                "arxivId": "2409.05200",
                "arxivLink": "https://arxiv.org/abs/2409.05200",
                "title": "Lung-DETR: A Deformable Transformer That Can Spot Tiny Lung Tumors!",
                "institute": "University of Toronto",
                "text": "This research combines Deformable-DETR, Focal Loss, and Maximum Intensity Projection (MIP) into a unified framework for detecting sparse lung nodules. This approach is unique because it addresses the challenge of nodule sparsity in real-world data, which is often overlooked in previous studies.",
                "paper-title": "Lung-DETR: Deformable Detection Transformer for Sparse Lung Nodule Anomaly Detection",
                "image-path": "flux_paper_image/2409.05200_1726024102.png"
            },

            {
                "startTime": "37:31",
                "arxivId": "2409.04465",
                "arxivLink": "https://arxiv.org/abs/2409.04465",
                "title": "AI Agents: The Semantic Web's New BFFs?",
                "institute": "University of Oxford",
                "text": "This research focuses on building a network of semi-autonomous agents that can represent individuals and organizations on the web, leveraging LLMs for natural language interaction and Notation3 rules for safety guarantees. This approach differs from previous work by emphasizing user control over data and decisions while utilizing LLMs for enhanced communication and task completion.",
                "paper-title": "Here's Charlie! Realising the Semantic Web vision of Agents in the age of LLMs",
                "image-path": "flux_paper_image/2409.04465_1726023989.png"
            }
    ],
    "stats": {
        "num_pick": 91,
        "num_total": 424,
    },
    "audio": "https://d2irtorupa9e8g.cloudfront.net/daily_podcast/202409102200_audio.mp3"
}