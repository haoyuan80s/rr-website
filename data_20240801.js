
daily_data = {
    "date": "2024-08-01",
    "tweets": [
            {
                "startTime": "00:50",
                "arxivId": "2407.21417",
                "arxivLink": "https://arxiv.org/abs/2407.21417",
                "title": "Language Models: Dancing in Chains of Instruction and Faithfulness",
                "institute": "Stanford University, Amazon",
                "text": "This research investigates the trade-off between instruction following and faithfulness in language models (LLMs) when trained on different datasets. The authors propose a novel method called RESET (Rejection Sampling for Continued Self-instruction Tuning) that aims to reconcile these two objectives. Unlike previous multi-task learning (MTL) approaches, RESET leverages a reject-sampling strategy based on self-instruction, which involves sampling generations from the model and then using external judges to rate their quality.",
                "paper-title": "Dancing in Chains: Reconciling Instruction Following and Faithfulness in Language Models",
                "image-path": ""
            },

            {
                "startTime": "01:27",
                "arxivId": "2407.21792",
                "arxivLink": "https://arxiv.org/abs/2407.21792",
                "title": "AI Safety Benchmarks: Are We Just Measuring Smarts, Not Safety?",
                "institute": "Center for AI Safety, University of Pennsylvania, UC Berkeley...",
                "text": "This research goes beyond intuitive arguments and uses empirical analysis to determine whether AI safety benchmarks are actually measuring distinct safety properties or simply reflecting general model capabilities.",
                "paper-title": "Safetywashing: Do AI Safety Benchmarks Actually Measure Safety Progress?",
                "image-path": ""
            },

            {
                "startTime": "01:57",
                "arxivId": "2407.21130",
                "arxivLink": "https://arxiv.org/abs/2407.21130",
                "title": "Bach Bot: Can a Computer Really Understand Harmony?",
                "institute": "Princeton University, University of Michigan, Santa Fe Institute",
                "text": "This research uses hidden Markov models to automatically annotate Bach chorales, achieving an accuracy of 85% or greater in identifying chords and keys, without relying on human input. This differs from previous work that often used hand-tuned parameters based on expert knowledge.",
                "paper-title": "Computational music analysis from first principles",
                "image-path": ""
            },

            {
                "startTime": "02:16",
                "arxivId": "2407.21170",
                "arxivLink": "https://arxiv.org/abs/2407.21170",
                "title": "AI Tutor: Decomposed Prompting for Smarter Course Q&A",
                "institute": "University of Toronto",
                "text": "This research proposes a question-answering system that uses decomposed prompting to classify and answer student questions on a course discussion board. Unlike previous work, this system leverages a large language model (LLM) to categorize questions into four types, allowing for tailored responses.",
                "paper-title": "Decomposed Prompting to Answer Questions on a Course Discussion Board",
                "image-path": ""
            },

            {
                "startTime": "02:38",
                "arxivId": "2407.20471",
                "arxivLink": "https://arxiv.org/abs/2407.20471",
                "title": "Symmetry Breaking: When Neural Networks Get a Little Wild!",
                "institute": "MIT",
                "text": "This paper introduces a new type of graph neural network that can learn and represent symmetry breaking within continuous groups. It builds on the existing E(3)NN framework by introducing relaxed weights, which allow for controlled symmetry breaking.",
                "paper-title": "Relaxed Equivariant Graph Neural Networks",
                "image-path": ""
            },

            {
                "startTime": "03:13",
                "arxivId": "2407.20292",
                "arxivLink": "https://arxiv.org/abs/2407.20292",
                "title": "Generative Models Get a Makeover: Renormalization Group to the Rescue!",
                "institute": "University College London, Dresden University of Technology, University of Oxford",
                "text": "This paper introduces a new approach to generative modeling using the renormalization group (RG) to create scale-free models. Unlike previous work, it focuses on discrete state-space models, which are more efficient and easier to learn.",
                "paper-title": "From pixels to planning: scale-free active inference",
                "image-path": ""
            },

            {
                "startTime": "03:32",
                "arxivId": "2407.20722",
                "arxivLink": "https://arxiv.org/abs/2407.20722",
                "title": "SMC Gets a Memory Boost: Persistent Sampling for Bayesian Inference",
                "institute": "UC Berkeley",
                "text": "This paper introduces persistent sampling (PS), an extension of sequential Monte Carlo (SMC) that retains particles from previous iterations, creating a growing, weighted ensemble. This allows for more accurate posterior approximations and lower-variance marginal likelihood estimates.",
                "paper-title": "Persistent Sampling: Unleashing the Potential of Sequential Monte Carlo",
                "image-path": ""
            },

            {
                "startTime": "03:59",
                "arxivId": "2407.20336",
                "arxivLink": "https://arxiv.org/abs/2407.20336",
                "title": "Sun Off, Lights On: Turning Daytime Scenes Into Nighttime Dreams!",
                "institute": "ETH Zurich, University of Toronto, KU Leuven...",
                "text": "This research introduces a novel physically-based method for simulating photorealistic nighttime images from daytime counterparts. Unlike previous data-driven approaches, this method explicitly models the 3D geometry, materials, and light sources of the scene, enabling more accurate and realistic nighttime simulations.",
                "paper-title": "Sun Off, Lights On: Photorealistic Monocular Nighttime Simulation for Robust Semantic Perception",
                "image-path": ""
            },

            {
                "startTime": "04:25",
                "arxivId": "2407.20311",
                "arxivLink": "https://arxiv.org/abs/2407.20311",
                "title": "Language Models: Not Just Memorizing, They're Actually Thinking!",
                "institute": "CMU, Meta, Mohamed bin Zayed University of Artificial Intelligence",
                "text": "This research focuses on understanding how language models solve grade-school math problems by training them from scratch on a synthetic dataset. This approach allows the researchers to control the data and eliminate potential contamination from pre-trained models.",
                "paper-title": "Physics of Language Models: Part 2.1, Grade-School Math and the Hidden Reasoning Process",
                "image-path": ""
            },

            {
                "startTime": "04:57",
                "arxivId": "2407.20371",
                "arxivLink": "https://arxiv.org/abs/2407.20371",
                "title": "AI Hiring Tools: Are They Biased Against Black Men?",
                "institute": "University of Washington",
                "text": "This research investigates the biases of Massive Text Embedding (MTE) models, a specific type of large language model (LLM), when used for resume screening. Unlike previous work that focused on general LLMs or AI hiring tools, this study specifically examines MTEs and their potential for discrimination.",
                "paper-title": "Gender, Race, and Intersectional Bias in Resume Screening via Language Model Retrieval",
                "image-path": ""
            },

            {
                "startTime": "05:16",
                "arxivId": "2407.20351",
                "arxivLink": "https://arxiv.org/abs/2407.20351",
                "title": "LiteEFG: Solving Games Faster Than You Can Say \"Checkmate!\"",
                "institute": "MIT",
                "text": "This research introduces LiteEFG, a Python library for solving extensive-form games (EFGs) that leverages a C++ backend for significant speedups compared to pure Python implementations. Unlike existing libraries, LiteEFG automatically handles the complex structure of imperfect-information games, simplifying the implementation process for researchers.",
                "paper-title": "LiteEFG: An Efficient Python Library for Solving Extensive-form Games",
                "image-path": ""
            },

            {
                "startTime": "05:36",
                "arxivId": "2407.20243",
                "arxivLink": "https://arxiv.org/abs/2407.20243",
                "title": "Shrinking Embeddings: How to Make LLMs More Efficient Without Sacrificing Performance",
                "institute": "Google",
                "text": "This research introduces Matryoshka-Adaptor, a novel tuning framework that customizes embeddings from Large Language Models (LLMs) to achieve substantial dimensionality reduction without compromising performance. Unlike previous work that focuses on Matryoshka properties during pre-training, this approach tunes embeddings after they are extracted from pre-trained LLMs.",
                "paper-title": "Matryoshka-Adaptor: Unsupervised and Supervised Tuning for Smaller Embedding Dimensions",
                "image-path": ""
            },

            {
                "startTime": "05:54",
                "arxivId": "2407.21686",
                "arxivLink": "https://arxiv.org/abs/2407.21686",
                "title": "From Short Videos to Expressive Avatars: A 3D Gaussian Trick",
                "institute": "Daegu Gyeongbuk Institute of Science and Technology, Meta",
                "text": "This research introduces ExAvatar, a 3D human avatar model that can be created from a short monocular video. Unlike previous methods that require 3D scans or RGBD images, ExAvatar utilizes a hybrid representation of surface meshes and 3D Gaussians to achieve expressive whole-body animation with novel facial expressions and poses.",
                "paper-title": "Expressive Whole-Body 3D Gaussian Avatar",
                "image-path": ""
            },

            {
                "startTime": "06:20",
                "arxivId": "2407.21772",
                "arxivLink": "https://arxiv.org/abs/2407.21772",
                "title": "ShieldGemma: AI's New Safety Net for Toxic Content",
                "institute": "Google",
                "text": "This research introduces ShieldGemma, a suite of content moderation models built on Gemma 2, which are designed to identify and filter harmful content in both user input and LLM-generated output. The study distinguishes itself by focusing on harm-type level prediction, rather than just binary safe/unsafe classification, and by utilizing a novel synthetic data generation pipeline to reduce human annotation effort.",
                "paper-title": "ShieldGemma: Generative AI Content Moderation Based on Gemma",
                "image-path": ""
            },

            {
                "startTime": "06:41",
                "arxivId": "2407.21530",
                "arxivLink": "https://arxiv.org/abs/2407.21530",
                "title": "Data Contamination: The Dirty Little Secret of AI Models",
                "institute": "University of the Basque Country UPV/EHU, Bar Ilan University, Cohere...",
                "text": "This research compiles a database of documented cases of data contamination in NLP models, providing a structured and centralized resource for the community. It differs from previous work by focusing on collecting and analyzing real-world evidence of contamination, rather than just theoretical discussions.",
                "paper-title": "Data Contamination Report from the 2024 CONDA Shared Task",
                "image-path": ""
            },

            {
                "startTime": "07:04",
                "arxivId": "2407.21077",
                "arxivLink": "https://arxiv.org/abs/2407.21077",
                "title": "Coding LLMs: Evolving Instructions for Better Code!",
                "institute": "Nvidia",
                "text": "This research introduces Genetic-Instruct, a method for generating synthetic coding instructions for LLMs. Unlike previous methods that focus on either mutation or crossover, Genetic-Instruct combines both operations in a scalable pipeline.",
                "paper-title": "Genetic Instruct: Scaling up Synthetic Generation of Coding Instructions for Large Language Models",
                "image-path": ""
            },

            {
                "startTime": "07:42",
                "arxivId": "2407.21787",
                "arxivLink": "https://arxiv.org/abs/2407.21787",
                "title": "LLMs: More Attempts, More Success!",
                "institute": "University of Oxford, Stanford University, Google",
                "text": "This research explores the impact of increasing the number of attempts (samples) during inference, rather than focusing solely on model size or training data. It investigates how this approach affects the coverage of problems solved, particularly in domains like coding and formal proofs where solutions can be automatically verified.",
                "paper-title": "Large Language Monkeys: Scaling Inference Compute with Repeated Sampling",
                "image-path": ""
            },

            {
                "startTime": "08:17",
                "arxivId": "2407.21687",
                "arxivLink": "https://arxiv.org/abs/2407.21687",
                "title": "Forgetful AI? Not This Time! Dynamic Queries Give Object Detection a Memory Boost.",
                "institute": "Tsinghua University, Chinese Academy of Sciences",
                "text": "This paper introduces dynamic object queries for incremental object detection, a technique that expands the model's capacity to learn new classes without forgetting old ones. Unlike previous methods that rely on knowledge distillation or exemplar replay, this approach dynamically adds new queries to the model, allowing it to adapt to evolving data streams.",
                "paper-title": "Dynamic Object Queries for Transformer-based Incremental Object Detection",
                "image-path": ""
            },

            {
                "startTime": "08:41",
                "arxivId": "2407.20254",
                "arxivLink": "https://arxiv.org/abs/2407.20254",
                "title": "EEG Mamba Strikes: A Multi-Task Brainwave Classifier That's Both Smart and Speedy!",
                "institute": "Peking University",
                "text": "This research introduces EEGMamba, a novel EEG classification network that integrates Spatio-Temporal-Adaptive (ST-Adaptive) modules, Bidirectional Mamba, and Mixture of Experts (MoE) into a unified framework for multiple tasks. Unlike previous models that focus on single tasks, EEGMamba can handle EEG data from various tasks simultaneously, adapting to different signal lengths and channel counts.",
                "paper-title": "EEGMamba: Bidirectional State Space Models with Mixture of Experts for EEG Classification",
                "image-path": ""
            },

            {
                "startTime": "09:13",
                "arxivId": "2407.20584",
                "arxivLink": "https://arxiv.org/abs/2407.20584",
                "title": "Pruning LLMs: A New Trick to Make Big Models Tiny and Smart!",
                "institute": "Tsinghua University",
                "text": "This research proposes a novel training pipeline called Adaptive Sparse Trainer (AST) for semi-structured sparse models. Unlike previous methods that prune models after training, AST retrains dense pretrained LLMs into sparse ones, allowing the model to adaptively select better sparsity patterns during training.",
                "paper-title": "Pruning Large Language Models with Semi-Structural Adaptive Sparse Training",
                "image-path": ""
            },

            {
                "startTime": "09:38",
                "arxivId": "2407.21236",
                "arxivLink": "https://arxiv.org/abs/2407.21236",
                "title": "GNUMAP: Unsupervised Learning Gets a Graph-ical Makeover!",
                "institute": "University of Chicago",
                "text": "This research introduces GNUMAP, a parameter-free approach to unsupervised dimensionality reduction that combines the UMAP framework with graph neural networks (GNNs). Unlike previous GNN-based methods that rely heavily on hyperparameter tuning, GNUMAP offers a more robust and reliable solution for real-world applications.",
                "paper-title": "GNUMAP: A Parameter-Free Approach to Unsupervised Dimensionality Reduction via Graph Neural Networks",
                "image-path": ""
            },

            {
                "startTime": "10:05",
                "arxivId": "2407.21009",
                "arxivLink": "https://arxiv.org/abs/2407.21009",
                "title": "AI Makes Math Questions So Hard, Even AI Can't Solve Them!",
                "institute": "Mila \u2013 Quebec AI Institute, Universit\u00e9 de Montr\u00e9al, Princeton University...",
                "text": "This research proposes a novel framework for generating challenging math questions by combining the strengths of LLMs with human expertise. Unlike previous work that relies solely on LLMs or human experts, this approach leverages the metacognitive abilities of LLMs to extract core skills from existing datasets and then uses these skills to generate questions that require the application of multiple skills.",
                "paper-title": "AI-Assisted Generation of Difficult Math Questions",
                "image-path": ""
            },

            {
                "startTime": "10:30",
                "arxivId": "2407.20253",
                "arxivLink": "https://arxiv.org/abs/2407.20253",
                "title": "EEG Data Augmentation: A Diffusion Model's Random Reassembly Trick!",
                "institute": "Peking University",
                "text": "This research proposes a new data augmentation method for EEG classification networks that randomly reassembles original and generated EEG data to create \"vicinal\" data. This differs from previous methods that directly incorporated generated data into the training set, which often led to unstable performance.",
                "paper-title": "Improving EEG Classification Through Randomly Reassembling Original and Generated Data with Transformer-based Diffusion Models",
                "image-path": ""
            },

            {
                "startTime": "10:54",
                "arxivId": "2407.20756",
                "arxivLink": "https://arxiv.org/abs/2407.20756",
                "title": "Vision Models Get a Synthetic Makeover: 100k Fake Images, Real Results!",
                "institute": "Peking University",
                "text": "This paper introduces SynthVLM, a novel data synthesis pipeline for Vision Language Models (VLLMs). Unlike existing methods that generate captions from images, SynthVLM uses advanced diffusion models to generate images from captions, creating precisely aligned image-text pairs.",
                "paper-title": "SynthVLM: High-Efficiency and High-Quality Synthetic Data for Vision Language Models",
                "image-path": ""
            },

            {
                "startTime": "11:17",
                "arxivId": "2407.21011",
                "arxivLink": "https://arxiv.org/abs/2407.21011",
                "title": "Crafty CLEFT: A Language Model That's Smart, But Not Too Big for Medical Images",
                "institute": "Yale University",
                "text": "This research introduces CLEFT, a new method for contrastive language-image pre-training that uses a large language model (LLM) but focuses on fine-tuning only a small portion of the model's parameters. This approach aims to improve performance while reducing the computational resources needed for training, making it more suitable for medical applications where data is often limited.",
                "paper-title": "CLEFT: Language-Image Contrastive Learning with Efficient Large Language Model and Prompt Fine-Tuning",
                "image-path": ""
            },

            {
                "startTime": "11:41",
                "arxivId": "2407.20508",
                "arxivLink": "https://arxiv.org/abs/2407.20508",
                "title": "Spiking Neurons Go Graphing: A New Way to Learn from Networks",
                "institute": "Guangdong Institute of Intelligence Science and Technology, Tsinghua University, Hong Kong Polytechnic University...",
                "text": "This research introduces a novel framework for integrating spiking neural networks (SNNs) with graph representation learning, addressing the limitations of previous work in handling non-Euclidean data and exploring the impact of spiking dynamics on graph learning. The paper proposes a spatial-temporal feature normalization (STFN) technique to enhance training efficiency and model stability, offering a comprehensive spike-based modeling framework for graph tasks.",
                "paper-title": "Unveiling the Potential of Spiking Dynamics in Graph Representation Learning through Spatial-Temporal Normalization and Coding Strategies",
                "image-path": ""
            },

            {
                "startTime": "12:16",
                "arxivId": "2407.21034",
                "arxivLink": "https://arxiv.org/abs/2407.21034",
                "title": "Recommender Systems: Watermarked and Ready to Rumble!",
                "institute": "Nanyang Technological University, University of Queensland",
                "text": "This paper introduces a novel watermarking technique called Autoregressive Out-of-distribution Watermarking (AOW) specifically designed for recommender systems. Unlike previous methods that focus on computer vision or classification tasks, AOW leverages the sequential nature of recommendations to embed a watermark sequence into the model's memory.",
                "paper-title": "Watermarking Recommender Systems",
                "image-path": ""
            },

            {
                "startTime": "12:40",
                "arxivId": "2407.21507",
                "arxivLink": "https://arxiv.org/abs/2407.21507",
                "title": "Swin Transformer: Image Communication Gets a Semantic Makeover!",
                "institute": "Northwestern Polytechnical University, Samsung AI Center, Xidian University...",
                "text": "This research proposes a federated learning (FL) strategy for a Swin Transformer-based semantic communication system (FSSC). Unlike previous work, which often relies on centralized approaches, FSSC leverages a multi-user FL framework to train a global model without directly accessing users' private data.",
                "paper-title": "FSSC: Federated Learning of Transformer Neural Networks for Semantic Image Communication",
                "image-path": ""
            },

            {
                "startTime": "13:13",
                "arxivId": "2407.21057",
                "arxivLink": "https://arxiv.org/abs/2407.21057",
                "title": "LLMs Can't Tell Us Everything: New Research Makes Them More Honest About What They Don't Know!",
                "institute": "CMU",
                "text": "This research focuses on quantifying uncertainty in long-form text generation from LLMs, specifically by ensuring that uncertainty guarantees are valid not only across the entire dataset but also within identifiable subgroups of prompts. This differs from previous work that primarily focused on marginal uncertainty guarantees.",
                "paper-title": "Multi-group Uncertainty Quantification for Long-form Text Generation",
                "image-path": ""
            },

            {
                "startTime": "13:41",
                "arxivId": "2407.21402",
                "arxivLink": "https://arxiv.org/abs/2407.21402",
                "title": "Heart Rate from Your Face? New AI Can Filter Out the Noise!",
                "institute": "National Tsing Hua University",
                "text": "This research proposes a new method for unsupervised rPPG estimation that focuses on identifying and removing interference from facial videos. Unlike previous methods that rely on assumptions about rPPG signals, this approach directly models interference features and uses them to derive de-interfered rPPG signals.",
                "paper-title": "DD-rPPGNet: De-interfering and Descriptive Feature Learning for Unsupervised rPPG Estimation",
                "image-path": ""
            },

            {
                "startTime": "14:12",
                "arxivId": "2407.20273",
                "arxivLink": "https://arxiv.org/abs/2407.20273",
                "title": "Learning Material Behavior Without a Physics Textbook: AI Cracks the Code of Elasticity",
                "institute": "ETH Zurich",
                "text": "This research introduces a new machine learning approach called uLED, which learns the constitutive relations of hyperelastic materials solely from displacement data. Unlike previous methods, uLED does not require stress data or information about boundary forces, making it particularly suitable for in-situ applications.",
                "paper-title": "Learning Physics-Consistent Material Behavior Without Prior Knowledge",
                "image-path": ""
            },

            {
                "startTime": "14:38",
                "arxivId": "2407.21126",
                "arxivLink": "https://arxiv.org/abs/2407.21126",
                "title": "Predicting the Future: How AI Sees the Road Ahead, One Grid Cell at a Time",
                "institute": "Stanford University, UC Riverside",
                "text": "This research introduces a new framework for predicting the future occupancy of a scene using LiDAR data. Unlike previous methods that focus on deterministic predictions within the grid cell space, this approach leverages the latent space of a generative model to capture the stochastic nature of the environment.",
                "paper-title": "Self-supervised Multi-future Occupancy Forecasting for Autonomous Driving",
                "image-path": ""
            },

            {
                "startTime": "15:12",
                "arxivId": "2407.20399",
                "arxivLink": "https://arxiv.org/abs/2407.20399",
                "title": "LiDAR's New Trick: Seeing in the Dark with a Neighborhood Watch!",
                "institute": "UC Berkeley, Purdue University",
                "text": "This research delves into the theoretical limitations of the rank-ordered mean (ROM) filter, a common technique for removing noise in single-photon LiDAR systems. It then proposes a new method, the neighborhood consensus filter, which leverages the temporal closeness of signal timestamps to improve depth estimation accuracy.",
                "paper-title": "Analysis and Improvement of Rank-Ordered Mean Algorithm in Single-Photon LiDAR",
                "image-path": ""
            },

            {
                "startTime": "15:34",
                "arxivId": "2407.20962",
                "arxivLink": "https://arxiv.org/abs/2407.20962",
                "title": "Music to My Eyes: A New Dataset for Training AI to Understand Videos with Soundtrack",
                "institute": "The Hong Kong University of Science and Technology, Peking University",
                "text": "This research introduces a new dataset, MMTrail, that focuses on trailer videos, incorporating both visual and audio information, including music descriptions. Unlike previous datasets that primarily rely on visual captions, MMTrail aims to capture the inherent relationship between visual and audio elements, particularly music.",
                "paper-title": "MMTrail: A Multimodal Trailer Video Dataset with Language and Music Descriptions",
                "image-path": ""
            },

            {
                "startTime": "15:59",
                "arxivId": "2407.20272",
                "arxivLink": "https://arxiv.org/abs/2407.20272",
                "title": "LLMs on a Diet: New Framework Makes Large Language Models Slim and Speedy!",
                "institute": "Peking University",
                "text": "This research focuses on building an efficient inference framework specifically for early-exit LLMs, a type of LLM that can skip layers during inference to save time and resources. This is different from previous work on LLM inference frameworks, which were designed for traditional LLMs that always run through all layers.",
                "paper-title": "An Efficient Inference Framework for Early-exit Large Language Models",
                "image-path": ""
            },

            {
                "startTime": "16:20",
                "arxivId": "2407.21740",
                "arxivLink": "https://arxiv.org/abs/2407.21740",
                "title": "Factor Analysis Gets a Contrastive Makeover: Learning with a Twist!",
                "institute": "Xidian University, MIT, University of Texas at Austin",
                "text": "This paper introduces a new framework called Contrastive Factor Analysis (CFA) that combines traditional Factor Analysis (FA) with contrastive learning. Unlike FA, which directly models observation data, CFA models the relationship matrix, representing the relationship between positive and negative samples.",
                "paper-title": "Contrastive Factor Analysis",
                "image-path": ""
            },

            {
                "startTime": "16:44",
                "arxivId": "2407.20447",
                "arxivLink": "https://arxiv.org/abs/2407.20447",
                "title": "AI Agent Makes Prescriptive Decisions, No Data Science Degree Required!",
                "institute": "MIT, IBM Research",
                "text": "This research focuses on making prescriptive AI accessible to users without data science expertise by developing a domain-adaptable conversational agent called PrecAIse. Unlike previous work that relied heavily on in-context learning, PrecAIse incorporates prompt tuning for improved accuracy and a fully automated pipeline for generalization to new datasets.",
                "paper-title": "Domain Adaptable Prescriptive AI Agent for Enterprise",
                "image-path": ""
            },

            {
                "startTime": "17:08",
                "arxivId": "2407.20455",
                "arxivLink": "https://arxiv.org/abs/2407.20455",
                "title": "Portrait Editing: From Fake Friends to Feature-Preserving Fun!",
                "institute": "University of Washington",
                "text": "This paper proposes a novel training-based method for portrait editing that leverages automatically generated paired data to learn desired editing while preserving subject features. Unlike previous training-free methods, this approach doesn't rely on inverting images into a model's latent space, which can lead to editability issues and feature loss.",
                "paper-title": "Learning Feature-Preserving Portrait Editing from Generated Pairs",
                "image-path": ""
            },

            {
                "startTime": "17:32",
                "arxivId": "2407.20859",
                "arxivLink": "https://arxiv.org/abs/2407.20859",
                "title": "LLM Agents: Not So Smart After All? New Attack Makes Them Go Bonkers!",
                "institute": "CISPA Helmholtz Center for Information Security, NetApp, Microsoft...",
                "text": "This research focuses on a new type of attack against LLM agents that aims to disrupt their normal functioning by inducing malfunctions, rather than focusing on overtly harmful or policy-violating actions.",
                "paper-title": "Breaking Agents: Compromising Autonomous LLM Agents Through Malfunction Amplification",
                "image-path": ""
            },

            {
                "startTime": "17:57",
                "arxivId": "2407.20754",
                "arxivLink": "https://arxiv.org/abs/2407.20754",
                "title": "Querying Inconsistent Knowledge Bases: When Rules Break, Costs Take Over!",
                "institute": "University of Bordeaux, \u00c9cole Normale Sup\u00e9rieure",
                "text": "This research introduces a novel approach to querying inconsistent knowledge bases by assigning weights to both axioms and assertions, allowing for a cost-based evaluation of interpretations. This differs from previous work that primarily focused on repairing inconsistent ABoxes while leaving the TBox untouched.",
                "paper-title": "Cost-Based Semantics for Querying Inconsistent Weighted Knowledge Bases",
                "image-path": ""
            },

            {
                "startTime": "18:23",
                "arxivId": "2407.21757",
                "arxivLink": "https://arxiv.org/abs/2407.21757",
                "title": "Movie Magic: A Language Model That Gets the Plot Twists",
                "institute": "National University of Singapore, Meta, DSO National Laboratories",
                "text": "This research introduces MovieSeq, a multimodal language model that represents videos as interleaved sequences of images, plots, subtitles, and video history. This approach differs from previous work by allowing for flexible multimodal instructions, enabling the model to interact with videos in a more comprehensive and nuanced way.",
                "paper-title": "Learning Video Context as Interleaved Multimodal Sequences",
                "image-path": ""
            },

            {
                "startTime": "18:51",
                "arxivId": "2407.20798",
                "arxivLink": "https://arxiv.org/abs/2407.20798",
                "title": "AI Agents Get a Diffusion Makeover: Learning Faster with Synthetic Experiences!",
                "institute": "Imperial College London, Google DeepMind",
                "text": "This research introduces Diffusion Augmented Agents (DAAG), a framework that uses diffusion models to modify visual observations, creating synthetic experiences for training reinforcement learning agents. This differs from previous work by leveraging diffusion models for autonomous, geometrically and temporally consistent data augmentation, enabling more efficient learning and transfer.",
                "paper-title": "Diffusion Augmented Agents: A Framework for Efficient Exploration and Transfer Learning",
                "image-path": ""
            },

            {
                "startTime": "19:18",
                "arxivId": "2407.21124",
                "arxivLink": "https://arxiv.org/abs/2407.21124",
                "title": "Zero-Shot Health Predictions: AI That's Smarter Than Your Doctor (Maybe)",
                "institute": "Massachusetts General Hospital, Harvard Medical School, AGH University of Science and Technology...",
                "text": "This research introduces ETHOS, a transformer-based model that predicts future health trajectories without requiring task-specific training or labeled data. This differs from previous work that often relies on fine-tuning for specific tasks.",
                "paper-title": "Zero Shot Health Trajectory Prediction Using Transformer",
                "image-path": ""
            },

            {
                "startTime": "19:41",
                "arxivId": "2407.21439",
                "arxivLink": "https://arxiv.org/abs/2407.21439",
                "title": "Multimodal Models Get a Reranking Makeover: Fighting Noise with Knowledge and a Pinch of Visual Uncertainty!",
                "institute": "IDEA Research, Peking University",
                "text": "This research tackles the \"multi-granularity noisy correspondence\" problem in multimodal retrieval-augmented generation. Unlike previous work, it introduces a knowledge-enhanced reranking method using an instruction-tuned MLLM to filter out irrelevant images. Additionally, it employs noise-injected training to improve the model's robustness to visual noise.",
                "paper-title": "MLLM Is a Strong Reranker: Advancing Multimodal Retrieval-augmented Generation via Knowledge-enhanced Reranking and Noise-injected Training",
                "image-path": ""
            },

            {
                "startTime": "20:08",
                "arxivId": "2407.20266",
                "arxivLink": "https://arxiv.org/abs/2407.20266",
                "title": "AI Models on a Diet: Low-Rank Decomposition Gets a Speed Boost",
                "institute": "Huawei Technologies",
                "text": "This research focuses on improving the efficiency of low-rank decomposition (LRD) for compressing AI models. Unlike previous work that primarily focused on compression, this paper explores strategies to accelerate both training and inference by optimizing rank selection and introducing layer freezing and merging techniques.",
                "paper-title": "Accelerating the Low-Rank Decomposed Models",
                "image-path": ""
            },

            {
                "startTime": "20:37",
                "arxivId": "2407.20256",
                "arxivLink": "https://arxiv.org/abs/2407.20256",
                "title": "LLMs: From Web Wizards to Data Dwarfs?",
                "institute": "MIT, UW, Intel",
                "text": "This research investigates the performance of LLMs on enterprise data tasks, specifically text-to-SQL and semantic column type detection, highlighting the challenges and potential solutions for effectively utilizing LLMs in enterprise settings. This differs from previous work that primarily focused on LLMs' performance on public datasets.",
                "paper-title": "Making LLMs Work for Enterprise Data Tasks",
                "image-path": ""
            },

            {
                "startTime": "21:03",
                "arxivId": "2407.20635",
                "arxivLink": "https://arxiv.org/abs/2407.20635",
                "title": "Robots Learn From Their Mistakes, And It's Hilarious!",
                "institute": "UC Berkeley",
                "text": "This research introduces SOAR, a system that allows robots to autonomously improve their instruction-following skills by leveraging internet-scale knowledge from vision-language models (VLMs) and learning from their own experiences. This differs from previous work that often relies on costly human-provided demonstrations or hand-specified tasks.",
                "paper-title": "Autonomous Improvement of Instruction Following Skills via Foundation Models",
                "image-path": ""
            },

            {
                "startTime": "21:23",
                "arxivId": "2407.21791",
                "arxivLink": "https://arxiv.org/abs/2407.21791",
                "title": "Deep Learning for Options Trading: A No-Frills Approach to Making Bank",
                "institute": "University of Oxford",
                "text": "This research introduces a novel approach to options trading strategies using deep learning models. Unlike traditional methods that rely on specific market dynamics or assumptions about option pricing models, this approach directly learns mappings from market data to optimal trading signals.",
                "paper-title": "Deep Learning for Options Trading: An End-To-End Approach",
                "image-path": ""
            },

            {
                "startTime": "21:49",
                "arxivId": "2407.21669",
                "arxivLink": "https://arxiv.org/abs/2407.21669",
                "title": "Empathy Bots Get a Synthetic Makeover: New Data Makes Them More Human",
                "institute": "Peking University, Chinese Academy of Sciences",
                "text": "This research proposes a novel method for generating high-quality empathetic data using a three-step pipeline. Unlike previous work that relies heavily on human-labeled data, this approach leverages large language models (LLMs) to automatically generate and curate empathetic responses.",
                "paper-title": "Synth-Empathy: Towards High-Quality Synthetic Empathy Data",
                "image-path": ""
            },

            {
                "startTime": "22:16",
                "arxivId": "2407.21314",
                "arxivLink": "https://arxiv.org/abs/2407.21314",
                "title": "Diffusion Models: Data Assimilation's New BFF?",
                "institute": "Peking University",
                "text": "This paper proposes a novel data assimilation algorithm called SOAD (State-Observation Augmented Diffusion) that leverages generative models to handle nonlinear physical and observational models. Unlike previous score-based assimilation methods, SOAD's marginal posterior distribution is proven to match the real posterior under mild assumptions.",
                "paper-title": "State-observation augmented diffusion model for nonlinear assimilation",
                "image-path": ""
            },

            {
                "startTime": "22:39",
                "arxivId": "2407.21783",
                "arxivLink": "https://arxiv.org/abs/2407.21783",
                "title": "Llama 3: The AI Herd That's Smarter Than Your Average Cow",
                "institute": "Meta",
                "text": "This paper introduces Llama 3, a new family of language models that are trained on a significantly larger dataset than previous versions, including more code, math, and multilingual data. The paper also explores the use of system-level safety measures to mitigate potential risks associated with large language models.",
                "paper-title": "The Llama 3 Herd of Models",
                "image-path": ""
            },

            {
                "startTime": "23:04",
                "arxivId": "2407.21216",
                "arxivLink": "https://arxiv.org/abs/2407.21216",
                "title": "MRI Segmentation: A Continual Learning Journey with a Memory for Features!",
                "institute": "Technical University of Darmstadt, Stanford University, The Hessian Center for Artificial Intelligence",
                "text": "This research introduces a distribution-aware replay strategy for continual MRI segmentation. Unlike previous methods that rely on data rehearsal or parameter regularization, this approach uses a variational autoencoder (VAE) to model the distribution of features learned by the UNet, enabling pseudo-rehearsal without storing actual data.",
                "paper-title": "Distribution-Aware Replay for Continual MRI Segmentation",
                "image-path": ""
            },

            {
                "startTime": "23:31",
                "arxivId": "2407.21046",
                "arxivLink": "https://arxiv.org/abs/2407.21046",
                "title": "Masked Language Models: The Fast and the Furious (of Text Generation)",
                "institute": "CMU, Google",
                "text": "This paper introduces a theoretical framework for analyzing Generative Masked Language Models (GMLMs), a non-autoregressive approach to text generation. It differs from previous work by focusing on the statistical efficiency of learning and the speed of inference, relating these aspects to the mixing time of a corresponding Markov Chain.",
                "paper-title": "Promises and Pitfalls of Generative Masked Language Modeling: Theoretical Framework and Practical Guidelines",
                "image-path": ""
            },

            {
                "startTime": "23:59",
                "arxivId": "2407.21721",
                "arxivLink": "https://arxiv.org/abs/2407.21721",
                "title": "Can AI Hear and See What You Can't? Open-Vocabulary Audio-Visual Segmentation is Here!",
                "institute": "UC Berkeley, CMU, Peking University...",
                "text": "This research introduces a new task called \"open-vocabulary audio-visual semantic segmentation,\" which goes beyond recognizing pre-defined categories. It aims to segment and classify sounding objects in videos, even those never seen or heard during training. This differs from previous work that focused on closed-set assumptions, where models could only identify objects they were trained on.",
                "paper-title": "Open-Vocabulary Audio-Visual Semantic Segmentation",
                "image-path": ""
            },

            {
                "startTime": "24:24",
                "arxivId": "2407.20990",
                "arxivLink": "https://arxiv.org/abs/2407.20990",
                "title": "AI Explains Itself: Chatting with Your Car's Brain",
                "institute": "University of Oxford",
                "text": "This research introduces a traceable question-answering approach for explaining AI model outputs using LLMs and an external knowledge repository. This differs from previous work by integrating feature importance and contrastive explanations into the LLM's responses.",
                "paper-title": "From Feature Importance to Natural Language Explanations Using LLMs with RAG",
                "image-path": ""
            },

            {
                "startTime": "24:51",
                "arxivId": "2407.21467",
                "arxivLink": "https://arxiv.org/abs/2407.21467",
                "title": "Fundus Photos Predict Myopia: No More Eye Exams?",
                "institute": "Beijing Tongren Hospital, Capital Medical University, Beihang University...",
                "text": "This research uses a deep learning model to predict myopia progression in children using only fundus images and baseline refraction data, unlike previous methods that rely on extensive data and multiple visits.",
                "paper-title": "Deep Learning-Based Longitudinal Prediction of Childhood Myopia Progression Using Fundus Image Sequences and Baseline Refraction Data",
                "image-path": ""
            },

            {
                "startTime": "25:20",
                "arxivId": "2407.21615",
                "arxivLink": "https://arxiv.org/abs/2407.21615",
                "title": "AI-Made Metal: Can You Tell the Difference?",
                "institute": "Queen Mary University of London",
                "text": "This research focuses on the subjective evaluation of AI-generated progressive metal music in symbolic format, specifically guitar tablature, using a mixed methods approach. This differs from previous work by focusing on a less explored genre and using a more nuanced evaluation method.",
                "paper-title": "Between the AI and Me: Analysing Listeners' Perspectives on AI- and Human-Composed Progressive Metal Music",
                "image-path": ""
            },

            {
                "startTime": "25:38",
                "arxivId": "2407.20441",
                "arxivLink": "https://arxiv.org/abs/2407.20441",
                "title": "Multi-Agent Learning: Faster Than a Speeding Bullet (Even With Delays!)",
                "institute": "University of Padua, Princeton University, North Carolina State University...",
                "text": "This paper analyzes the convergence of an asynchronous multi-agent TD learning algorithm, AsyncMATD, which incorporates bounded delays in communication between agents. This differs from previous work by providing finite-time convergence guarantees for asynchronous MARL under Markovian sampling, a more realistic scenario than the i.i.d. sampling assumption used in prior studies.",
                "paper-title": "Finite-Time Analysis of Asynchronous Multi-Agent TD Learning",
                "image-path": ""
            },

            {
                "startTime": "26:02",
                "arxivId": "2407.21072",
                "arxivLink": "https://arxiv.org/abs/2407.21072",
                "title": "LLMs: Smarter Than We Think, Or Just Better at Taking Tests?",
                "institute": "M42",
                "text": "This research delves into the variability of accuracy metrics used to evaluate large language models (LLMs) by analyzing how different calculation methodologies impact performance. It focuses on multiple-choice question-answering tasks and compares the results of four popular LLMs across various benchmarks.",
                "paper-title": "Beyond Metrics: A Critical Analysis of the Variability in Large Language Model Evaluation Frameworks",
                "image-path": ""
            },

            {
                "startTime": "26:24",
                "arxivId": "2407.21341",
                "arxivLink": "https://arxiv.org/abs/2407.21341",
                "title": "Potato-Vision: Deep Learning Helps Harvesters See the Whole Spud",
                "institute": "The University of Tokyo, University of Bonn",
                "text": "This research builds upon previous work using RGB-D cameras to estimate potato yield. However, it introduces a novel 3D shape completion network called CoRe++ that can accurately reconstruct the full 3D shape of potatoes from partially captured images, even when they are occluded. This is a significant improvement over previous methods that relied on multiple cameras or time-consuming laser triangulation techniques.",
                "paper-title": "High-throughput 3D shape completion of potato tubers on a harvester",
                "image-path": ""
            },

            {
                "startTime": "26:49",
                "arxivId": "2407.21712",
                "arxivLink": "https://arxiv.org/abs/2407.21712",
                "title": "Conversational AI's New Trick: When to Stop Googling!",
                "institute": "University of Sheffield, University of Liverpool, University of Aberdeen...",
                "text": "This research explores the need for external knowledge in every turn of a conversation, proposing a \"gate\" mechanism to decide when to retrieve information. Unlike previous work that assumes constant knowledge augmentation, this study investigates the adaptive use of external knowledge.",
                "paper-title": "Adaptive Retrieval-Augmented Generation for Conversational Systems",
                "image-path": ""
            },

            {
                "startTime": "27:18",
                "arxivId": "2407.20276",
                "arxivLink": "https://arxiv.org/abs/2407.20276",
                "title": "AI's Got a Gambling Problem: Random Guessers Beat Sophisticated Algorithms!",
                "institute": "IBM",
                "text": "This research introduces a \"random guesser test\" to evaluate the rationality of AI systems in sequential decision-making scenarios. Unlike previous work that focuses on regret analysis, this study emphasizes the importance of exploration and highlights the potential for AI systems to favor overly low-risk options.",
                "paper-title": "Assessing AI Rationality: The Random Guesser Test for Sequential Decision-Making Systems",
                "image-path": ""
            },

            {
                "startTime": "27:55",
                "arxivId": "2407.21488",
                "arxivLink": "https://arxiv.org/abs/2407.21488",
                "title": "Hourglass of Data: How a Simple Trick Makes Generative Retrieval Smarter",
                "institute": "Central South University, Tsinghua University, JD.com",
                "text": "This research identifies and addresses a \"hourglass\" phenomenon in Residual Quantization-based Semantic Identifiers (RQ-SID) used in generative retrieval. This phenomenon, characterized by overly concentrated codebook tokens in intermediate layers, hinders the full utilization of generative retrieval methods. The paper proposes two methods to mitigate this issue, improving codebook utilization and addressing token long-tail distributions.",
                "paper-title": "Breaking the Hourglass Phenomenon of Residual Quantization: Enhancing the Upper Bound of Generative Retrieval",
                "image-path": ""
            },

            {
                "startTime": "28:22",
                "arxivId": "2407.21001",
                "arxivLink": "https://arxiv.org/abs/2407.21001",
                "title": "AI's Got a Gender Bias: Can Robots Tell a Man From a Woman Doing the Dishes?",
                "institute": "Sharif University of Technology, \u00c9cole Polytechnique F\u00e9d\u00e9rale de lausanne (EPFL), IDIAP research institute...",
                "text": "This research focuses on a specific type of bias in vision-language models (VLMs) called \"Gender-Activity Binding (GAB) bias.\" It investigates how VLMs associate activities with specific genders, even when the activity is performed by someone of the opposite gender. This is different from previous work that has looked at gender bias in VLMs more generally.",
                "paper-title": "GABInsight: Exploring Gender-Activity Binding Bias in Vision-Language Models",
                "image-path": ""
            },

            {
                "startTime": "28:49",
                "arxivId": "2407.20893",
                "arxivLink": "https://arxiv.org/abs/2407.20893",
                "title": "ECG Diagnosis Gets a Brain Boost: MambaCapsule Makes Heart Health Transparent!",
                "institute": "Zhejiang University, Stanford University, Shanghai University",
                "text": "This research introduces MambaCapsule, a deep neural network for ECG arrhythmia classification that focuses on explainability. Unlike previous models that prioritize performance, MambaCapsule provides not only a confidence score but also signal features, making the diagnostic process more transparent.",
                "paper-title": "MambaCapsule: Towards Transparent Cardiac Disease Diagnosis with Electrocardiography Using Mamba Capsule Network",
                "image-path": ""
            },

            {
                "startTime": "29:14",
                "arxivId": "2407.20281",
                "arxivLink": "https://arxiv.org/abs/2407.20281",
                "title": "DNNs on a Diet: Semantic Slicing for Leaner, Meaner Models",
                "institute": "Nanyang Technological University, Huazhong University of Science and Technology",
                "text": "This research introduces a new technique called \"semantic slicing\" that identifies and manipulates individual neurons within a deep neural network (DNN) for model maintenance tasks. Unlike previous work that focused on layer-level manipulation, this approach allows for more precise control over the model's structure and behavior.",
                "paper-title": "NeuSemSlice: Towards Effective DNN Model Maintenance via Neuron-level Semantic Slicing",
                "image-path": ""
            },

            {
                "startTime": "29:48",
                "arxivId": "2407.21225",
                "arxivLink": "https://arxiv.org/abs/2407.21225",
                "title": "AI Makes Quantum Compiling a Breeze: New Method Speeds Up Unitary Synthesis",
                "institute": "IBM",
                "text": "This research explores the use of AI methods for approximate compiling of unitaries, focusing on the use of fixed two-qubit gates and arbitrary single-qubit rotations. The authors propose AI-driven approaches for template selection and parameter prediction, which are then refined through gradient descent to achieve the desired fidelity. This approach differs from previous work by utilizing deep learning models for both template selection and parameter prediction, rather than relying solely on exhaustive search methods.",
                "paper-title": "AI methods for approximate compiling of unitaries",
                "image-path": ""
            },

            {
                "startTime": "30:12",
                "arxivId": "2407.20446",
                "arxivLink": "https://arxiv.org/abs/2407.20446",
                "title": "Event-Based Vision: A Dataset for Cars That See Like Humans!",
                "institute": "University of Michigan",
                "text": "This research introduces a new dataset, MEVDT, specifically designed for event-based vision, a technology inspired by the human retina. Unlike previous datasets, MEVDT provides synchronized streams of event data and grayscale images, along with detailed annotations for object detection and tracking.",
                "paper-title": "MEVDT: Multi-Modal Event-Based Vehicle Detection and Tracking Dataset",
                "image-path": ""
            },

            {
                "startTime": "30:35",
                "arxivId": "2407.21025",
                "arxivLink": "https://arxiv.org/abs/2407.21025",
                "title": "Market Makers: High-Frequency Trading's New Game of Speed and Complexity",
                "institute": "Princeton University",
                "text": "This research provides a theoretical analysis of reinforcement learning (RL) in high-frequency market making, focusing on the effects of sampling frequency on the algorithm's performance. Unlike previous work that primarily focused on methodological research, this paper explores the trade-off between learning error and complexity when adjusting the sampling frequency.",
                "paper-title": "Reinforcement Learning in High-frequency Market Making",
                "image-path": ""
            },

            {
                "startTime": "30:57",
                "arxivId": "2407.21263",
                "arxivLink": "https://arxiv.org/abs/2407.21263",
                "title": "X-Ray Vision: UMAP Uncovers Hidden Errors in Medical Datasets",
                "institute": "Princeton University",
                "text": "This research uses the UMAP algorithm to identify outlier images in large radiological datasets, focusing on the unique clusters formed by these anomalies. This approach differs from previous work by leveraging the graph-based structure of UMAP to visualize and analyze outliers, rather than relying solely on statistical methods.",
                "paper-title": "Outlier Detection in Large Radiological Datasets using UMAP",
                "image-path": ""
            },

            {
                "startTime": "31:19",
                "arxivId": "2407.21220",
                "arxivLink": "https://arxiv.org/abs/2407.21220",
                "title": "DeepBaR: Sneaky Backdoors for Deep Learning, One Faulty ReLU at a Time!",
                "institute": "ETH Zurich",
                "text": "This research introduces DeepBaR, a novel backdoor attack that exploits faults in deep neural networks during training, specifically targeting ReLU activation functions. Unlike previous work that focused on manipulating weights or training data, DeepBaR leverages the vulnerability of ReLU functions to inject backdoors by causing them to output zero.",
                "paper-title": "DeepBaR: Fault Backdoor Attack on Deep Neural Network Layers",
                "image-path": ""
            },

            {
                "startTime": "31:47",
                "arxivId": "2407.21118",
                "arxivLink": "https://arxiv.org/abs/2407.21118",
                "title": "KV-Cache Compression: Squeezing LLMs with Low-Rank Magic!",
                "institute": "National Yang Ming Chiao Tung University, University of Washington",
                "text": "This paper introduces Palu, a novel KV-Cache compression framework that utilizes low-rank projection to reduce the size of the KV-Cache. Unlike previous methods that focus on quantization or token eviction, Palu explores the hidden dimensions of KV tensors, where redundancy often occurs.",
                "paper-title": "Palu: Compressing KV-Cache with Low-Rank Projection",
                "image-path": ""
            },

            {
                "startTime": "32:08",
                "arxivId": "2407.20241",
                "arxivLink": "https://arxiv.org/abs/2407.20241",
                "title": "NudgeRank\u2122: AI Makes Your Steps Count (and Your Health Improve!)",
                "institute": "University of Washington",
                "text": "This research introduces NudgeRank\u2122, a recommender system that uses a novel combination of graph neural networks and a knowledge graph to deliver personalized health nudges. Unlike previous work that relies on rule-based systems or focuses on a single health goal, NudgeRank\u2122 dynamically generates nudges for multiple health outcomes, considering individual preferences and contextual states.",
                "paper-title": "NudgeRank: Digital Algorithmic Nudging for Personalized Health",
                "image-path": ""
            },

            {
                "startTime": "32:34",
                "arxivId": "2407.20257",
                "arxivLink": "https://arxiv.org/abs/2407.20257",
                "title": "Video Question Answering: It's Not Just About What, But Why and When!",
                "institute": "CMU",
                "text": "This research focuses on improving Video Question Answering (VQA) models by addressing the limitations of existing approaches. Unlike previous methods that rely on either single-frame or complete-video information, this paper proposes a novel approach that leverages a smart aggregation of sub-sampled information to enhance performance.",
                "paper-title": "Causal Understanding For Video Question Answering",
                "image-path": ""
            },

            {
                "startTime": "32:57",
                "arxivId": "2407.20535",
                "arxivLink": "https://arxiv.org/abs/2407.20535",
                "title": "DeepSpeech Models: Cochlear Implants Get a Brain Boost!",
                "institute": "Columbia University, DeepMind",
                "text": "This research uses a deep neural network model, DeepSpeech2, to simulate how cochlear implants process speech signals. Unlike previous work that focused on modeling the cochlea itself, this study investigates the entire auditory processing hierarchy, from sound to phonemes to words.",
                "paper-title": "DeepSpeech models show Human-like Performance and Processing of Cochlear Implant Inputs",
                "image-path": ""
            },

            {
                "startTime": "33:23",
                "arxivId": "2407.21748",
                "arxivLink": "https://arxiv.org/abs/2407.21748",
                "title": "Robot Diagnosis: When Your Machine Learns to Feel Sick",
                "institute": "Stanford University",
                "text": "This research introduces a framework for diagnosing distribution shifts in real-time systems using multiple martingale-based monitors. Unlike previous work that focused on detecting shifts in system inputs, this approach monitors both inputs and outputs, enabling more precise identification of the underlying cause of the shift.",
                "paper-title": "Diagnostic Runtime Monitoring with Martingales",
                "image-path": ""
            },

            {
                "startTime": "33:49",
                "arxivId": "2407.21185",
                "arxivLink": "https://arxiv.org/abs/2407.21185",
                "title": "Amelia: The AI That Predicts Airport Chaos (and Maybe Saves Lives)",
                "institute": "Carnegie Mellon University",
                "text": "This research introduces Amelia-48, a large-scale dataset of airport surface movement data, and Amelia-TF, a transformer-based model trained on this dataset to predict aircraft trajectories. Unlike previous work, this study focuses on generalizability across multiple airports, addressing the lack of publicly available datasets and the need for models that can adapt to different airport layouts and traffic patterns.",
                "paper-title": "Amelia: A Large Model and Dataset for Airport Surface Movement Forecasting",
                "image-path": ""
            },

            {
                "startTime": "34:13",
                "arxivId": "2407.21243",
                "arxivLink": "https://arxiv.org/abs/2407.21243",
                "title": "Diffusion Models Get a Smart Corrector: Informed Correctors Boost Discrete Sampling!",
                "institute": "Stanford University, Google, Microsoft",
                "text": "This research introduces a new family of \"informed correctors\" for discrete diffusion models, which leverage information learned by the model to more effectively counteract discretization error during sampling. This approach differs from previous work that relied on standard forward-backward correctors, which often proved ineffective in fixing errors, especially in absorbing state diffusion.",
                "paper-title": "Informed Correctors for Discrete Diffusion Models",
                "image-path": ""
            },

            {
                "startTime": "34:29",
                "arxivId": "2407.20466",
                "arxivLink": "https://arxiv.org/abs/2407.20466",
                "title": "Reinforcement Learning Gets a Speed Boost: Pre-trained Critics Make Agents Learn Faster!",
                "institute": "University of Washington, Western Washington University, Kennesaw State University...",
                "text": "This research introduces a novel approach to accelerate reinforcement learning by leveraging pre-trained critic value functions from multiple environments. Unlike traditional methods that require extensive retraining, this approach integrates existing knowledge to enable agents to adapt swiftly to new settings.",
                "paper-title": "A Method for Fast Autonomy Transfer in Reinforcement Learning",
                "image-path": ""
            },

            {
                "startTime": "34:55",
                "arxivId": "2407.21070",
                "arxivLink": "https://arxiv.org/abs/2407.21070",
                "title": "Can an Octopus Learn Science? A Playful Debate on AI and Understanding",
                "institute": "University of Toronto",
                "text": "This paper presents a lecture and activity designed to challenge the argument put forth by Bender and Koller in their 2020 ACL paper. It focuses on the counterarguments to their claim that a language model, like an octopus, can't truly understand the world based solely on data.",
                "paper-title": "Occam's Razor and Bender and Koller's Octopus",
                "image-path": ""
            },

            {
                "startTime": "35:15",
                "arxivId": "2407.20444",
                "arxivLink": "https://arxiv.org/abs/2407.20444",
                "title": "Sampling from Unnormalized Densities: A Neural JKO with a Rejection Twist!",
                "institute": "University College London, Free University of Berlin",
                "text": "This paper proposes a new sampling method that combines continuous normalizing flows (CNFs) with rejection-resampling steps based on importance weights. This approach aims to overcome local minima and slow convergence issues often encountered in Wasserstein gradient flows (WGFs) for multimodal distributions.",
                "paper-title": "Importance Corrected Neural JKO Sampling",
                "image-path": ""
            },

            {
                "startTime": "35:48",
                "arxivId": "2407.20529",
                "arxivLink": "https://arxiv.org/abs/2407.20529",
                "title": "LLMs: Not So Smart After All? New Research Uncovers Their Hidden Weaknesses!",
                "institute": "Microsoft",
                "text": "This research goes beyond simply identifying vulnerabilities in LLMs and proposes two novel mitigation strategies: \"Model Editing\" and \"Chroma Teaming.\" Model Editing focuses on modifying the LLM itself to improve its behavior, while Chroma Teaming brings together different teams (red, blue, green, and purple) to work collaboratively on LLM security.",
                "paper-title": "Can LLMs be Fooled? Investigating Vulnerabilities in LLMs",
                "image-path": ""
            },

            {
                "startTime": "36:13",
                "arxivId": "2407.20267",
                "arxivLink": "https://arxiv.org/abs/2407.20267",
                "title": "SMILES, But Make It Fashion: A New Foundation Model for Chemical Language",
                "institute": "IBM",
                "text": "This research introduces a new family of encoder-decoder foundation models for chemical language, pre-trained on a curated dataset of 91 million SMILES samples from PubChem. This differs from previous work by focusing on a larger, more carefully curated dataset and incorporating a Mixture-of-Experts approach for scalability.",
                "paper-title": "A Large Encoder-Decoder Family of Foundation Models For Chemical Language",
                "image-path": ""
            },

            {
                "startTime": "36:35",
                "arxivId": "2407.21054",
                "arxivLink": "https://arxiv.org/abs/2407.21054",
                "title": "AI Gets a Heart: New Research Makes Machines Understand Your Feelings",
                "institute": "University of Toronto, William & Mary",
                "text": "This research introduces a new task called \"Sentiment Reasoning\" for both speech and text. It focuses on analyzing the attitude expressed through human voice, going beyond simple sentiment polarity. This is different from previous work that primarily focused on text-based sentiment analysis.",
                "paper-title": "Sentiment Reasoning for Healthcare",
                "image-path": ""
            },

            {
                "startTime": "37:12",
                "arxivId": "2407.21273",
                "arxivLink": "https://arxiv.org/abs/2407.21273",
                "title": "Ultrasound Segmentation Gets a Confidence Boost with MSU-Net!",
                "institute": "CMU",
                "text": "This research introduces MSU-Net, a multi-stage ensemble approach for training U-Nets to improve uncertainty estimation in ultrasound image segmentation. Unlike previous single-model architectures, MSU-Net leverages a decorrelation maximization method to select diverse ensemble members, resulting in more accurate and reliable predictions.",
                "paper-title": "Enhanced Uncertainty Estimation in Ultrasound Image Segmentation with MSU-Net",
                "image-path": ""
            },

            {
                "startTime": "37:39",
                "arxivId": "2407.21191",
                "arxivLink": "https://arxiv.org/abs/2407.21191",
                "title": "GenRec: Recommending Your Next Favorite Thing, One Masked Item at a Time!",
                "institute": "University of Michigan, University of Cambridge",
                "text": "This research proposes GenRec, a generative model for personalized sequential recommendation that utilizes a masked item prediction objective for both pretraining and finetuning. Unlike previous methods that rely on manually designed prompts, GenRec learns sequential patterns directly from the user-item interaction data.",
                "paper-title": "GenRec: Generative Personalized Sequential Recommendation",
                "image-path": ""
            },

            {
                "startTime": "38:09",
                "arxivId": "2407.21347",
                "arxivLink": "https://arxiv.org/abs/2407.21347",
                "title": "Deep Learning's New Shuffle: Privacy-Preserving Gradients Go Block-by-Block!",
                "institute": "CMU",
                "text": "This research introduces a new algorithm called Differentially Private Block-wise Gradient Shuffle (DP-BloGS) for deep learning. Unlike traditional DP-SGD, which adds noise to all gradients uniformly, DP-BloGS takes a parameter-wise approach, allowing for different privacy levels for different parts of the model.",
                "paper-title": "Differentially Private Block-wise Gradient Shuffle for Deep Learning",
                "image-path": ""
            },

            {
                "startTime": "38:33",
                "arxivId": "2407.21320",
                "arxivLink": "https://arxiv.org/abs/2407.21320",
                "title": "LLMs Go Fluid: AI Makes CFD Simulations a Breeze!",
                "institute": "Tsinghua University",
                "text": "This research introduces MetaOpenFOAM, a framework that uses multiple AI agents to automate CFD simulations using natural language input. Unlike previous work, this framework leverages the MetaGPT assembly line paradigm and Langchain's Retrieval-Augmented Generation (RAG) technology to break down complex tasks into manageable subtasks.",
                "paper-title": "MetaOpenFOAM: an LLM-based multi-agent framework for CFD",
                "image-path": ""
            },

            {
                "startTime": "38:56",
                "arxivId": "2407.21317",
                "arxivLink": "https://arxiv.org/abs/2407.21317",
                "title": "Pathology's New BFF: Foundation Models are Here to Help!",
                "institute": "The University of Tokyo",
                "text": "This research focuses on the application of Foundation Models (FMs) in pathology, specifically highlighting their potential to address the challenges of annotation cost and limited public datasets. Unlike traditional AI models, FMs are trained on massive datasets and can be adapted to a wide range of tasks, making them more efficient and versatile.",
                "paper-title": "Pathology Foundation Models",
                "image-path": ""
            },

            {
                "startTime": "39:30",
                "arxivId": "2407.21638",
                "arxivLink": "https://arxiv.org/abs/2407.21638",
                "title": "AI Radiologists Need a Second Opinion: Auditing for Accuracy in Report Generation",
                "institute": "University of Oxford",
                "text": "This research introduces a novel quality control framework for AI-generated radiology reports. Unlike previous work that focuses on improving the accuracy of the reports themselves, this study proposes an independent auditing system using auxiliary components to assess the reliability of the generated content.",
                "paper-title": "Quality Control for Radiology Report Generation Models via Auxiliary Auditing Components",
                "image-path": ""
            }
    ],
    "stats": {
        "num_pick": 90,
        "num_total": 503,
    },
    "audio": "https://d2irtorupa9e8g.cloudfront.net/daily_podcast/202408010835_audio.mp3"
}