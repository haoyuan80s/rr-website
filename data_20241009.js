
daily_data = {
    "date": "2024-10-09",
    "tweets": [
            {
                "startTime": "01:02",
                "arxivId": "2410.04166",
                "arxivLink": "https://arxiv.org/abs/2410.04166",
                "title": "Learning From Mistakes: A New Way to Train AI with Both Good and Bad Feedback",
                "institute": "Google",
                "text": "This research proposes a new method for preference optimization that can leverage unpaired preferred or dis-preferred examples, unlike existing methods that rely on paired examples. This flexibility allows the method to be applied in scenarios with varying forms of feedback and models, including training generative language models based on human feedback as well as training policies for sequential decision-making problems.",
                "paper-title": "Preference Optimization as Probabilistic Inference",
                "image-path": "flux_paper_image/2410.04166_1728495686.png"
            },

            {
                "startTime": "01:28",
                "arxivId": "2410.03859",
                "arxivLink": "https://arxiv.org/abs/2410.03859",
                "title": "AI Can't See Code: New Benchmark Tests Software Bots on Visual Bugs",
                "institute": "Stanford University, Princeton University",
                "text": "This research introduces SWE-bench Multimodal, a new benchmark for evaluating software engineering systems that focuses on tasks involving visual elements, such as images and videos. Unlike previous benchmarks, which primarily used text-based tasks, SWE-bench Multimodal challenges systems to solve bugs in JavaScript repositories that require understanding visual information.",
                "paper-title": "SWE-bench Multimodal: Do AI Systems Generalize to Visual Software Domains?",
                "image-path": "flux_paper_image/2410.03859_1728495559.png"
            },

            {
                "startTime": "01:49",
                "arxivId": "2410.03806",
                "arxivLink": "https://arxiv.org/abs/2410.03806",
                "title": "Time Series Forecasting: Don't Just Look at the Numbers, Read the Metadata!",
                "institute": "Tsinghua University",
                "text": "This research introduces a new approach to time series forecasting by incorporating metadata, such as dataset descriptions and task details, into the model's training process. This differs from previous work that primarily focused on analyzing the time series data itself.",
                "paper-title": "Metadata Matters for Time Series: Informative Forecasting with Transformers",
                "image-path": "flux_paper_image/2410.03806_1728497838.png"
            },

            {
                "startTime": "02:15",
                "arxivId": "2410.04010",
                "arxivLink": "https://arxiv.org/abs/2410.04010",
                "title": "LLMs Go Hyperbolic: Fine-Tuning with a Twist!",
                "institute": "Yale University, University of Stuttgart, The Chinese University of Hong Kong",
                "text": "This research explores the use of hyperbolic geometry for fine-tuning large language models (LLMs). Unlike previous work that relies on Euclidean space, this study proposes a new method called HypLoRA that directly adapts LLMs in hyperbolic space, preserving the inherent geometric properties.",
                "paper-title": "Hyperbolic Fine-tuning for Large Language Models",
                "image-path": "flux_paper_image/2410.04010_1728497054.png"
            },

            {
                "startTime": "02:37",
                "arxivId": "2410.04265",
                "arxivLink": "https://arxiv.org/abs/2410.04265",
                "title": "AI's Creativity: A Remix or Original Score?",
                "institute": "University of Washington",
                "text": "This research introduces CREATIVITY INDEX, a novel metric that quantifies the linguistic creativity of a text by measuring how much of it can be reconstructed from existing web text snippets. This differs from previous work that relied on human evaluators or focused solely on verbatim matches.",
                "paper-title": "AI as Humanity's Salieri: Quantifying Linguistic Creativity of Language Models via Systematic Attribution of Machine Text against Web Text",
                "image-path": "flux_paper_image/2410.04265_1728497637.png"
            },

            {
                "startTime": "02:57",
                "arxivId": "2410.03766",
                "arxivLink": "https://arxiv.org/abs/2410.03766",
                "title": "FutureFill: Conquering the Speed Demon of Sequence Generation",
                "institute": "Google",
                "text": "This paper introduces FutureFill, a method for speeding up the generation of sequences in convolutional sequence prediction models. Unlike previous methods that require time proportional to the length of the sequence, FutureFill achieves a square root dependence on the sequence length. This is achieved by pre-computing and storing a cache of information that captures the dependence of the generated tokens on the context.",
                "paper-title": "FutureFill: Fast Generation from Convolutional Sequence Models",
                "image-path": "flux_paper_image/2410.03766_1728497448.png"
            },

            {
                "startTime": "03:18",
                "arxivId": "2410.03868",
                "arxivLink": "https://arxiv.org/abs/2410.03868",
                "title": "Can AI Understand Your Inner Values? New Study Tests Language Models on Individualistic Preferences!",
                "institute": "University of Washington",
                "text": "This research focuses on individualistic value reasoning, a new approach to AI alignment that aims to understand and predict individual preferences without relying on pre-defined categories like demographics or personality traits.",
                "paper-title": "Can Language Models Reason about Individualistic Human Values and Preferences?",
                "image-path": "flux_paper_image/2410.03868_1728496791.png"
            },

            {
                "startTime": "03:40",
                "arxivId": "2410.03825",
                "arxivLink": "https://arxiv.org/abs/2410.03825",
                "title": "MonST3R: A Point Cloud Revolution for Dynamic Scenes!",
                "institute": "UC Berkeley, Google DeepMind, Stability AI...",
                "text": "This research introduces MonST3R, a novel approach that directly estimates geometry from dynamic scenes by representing them as per-timestep point clouds. Unlike previous methods that rely on multi-stage pipelines or global optimizations, MonST3R takes a geometry-first approach, simplifying the process and improving robustness.",
                "paper-title": "MonST3R: A Simple Approach for Estimating Geometry in the Presence of Motion",
                "image-path": "flux_paper_image/2410.03825_1728496305.png"
            },

            {
                "startTime": "03:57",
                "arxivId": "2410.03747",
                "arxivLink": "https://arxiv.org/abs/2410.03747",
                "title": "AI for 6G: A Distributed Platform to Tame the Data Beast!",
                "institute": "Microsoft",
                "text": "This research proposes a distributed AI platform architecture specifically tailored for 6G RAN, addressing the challenges of data collection and orchestration of AI models in a distributed network environment. It differs from previous work by focusing on dynamic data collection through programmable probes and a flexible AI processor runtime for seamless deployment across various edge locations.",
                "paper-title": "Distributed AI Platform for the 6G RAN",
                "image-path": "flux_paper_image/2410.03747_1728496476.png"
            },

            {
                "startTime": "04:19",
                "arxivId": "2410.04368",
                "arxivLink": "https://arxiv.org/abs/2410.04368",
                "title": "Random Transformers: They're Not Just Dumb Luck!",
                "institute": "MIT",
                "text": "This research investigates the capabilities of randomly initialized transformer models by training only their embedding layers, leaving the internal parameters fixed. This approach differs from previous work that focused on training full models or pruning sub-networks.",
                "paper-title": "Algorithmic Capabilities of Random Transformers",
                "image-path": "flux_paper_image/2410.04368_1728495938.png"
            },

            {
                "startTime": "04:37",
                "arxivId": "2410.04207",
                "arxivLink": "https://arxiv.org/abs/2410.04207",
                "title": "LoRA-ing Around: Learning on Low-Rank Weights for Fine-Tuned Models",
                "institute": "UC Berkeley, MIT",
                "text": "This paper introduces \"Learning on LoRAs\" (LoL), a new paradigm where low-rank weight decompositions (LoRAs) are used as input to machine learning models. Unlike previous work on weight-space learning, which focuses on different symmetry groups, LoL models are specifically designed to handle the unique symmetries of LoRA weights.",
                "paper-title": "Learning on LoRAs: GL-Equivariant Processing of Low-Rank Weight Spaces for Large Finetuned Models",
                "image-path": "flux_paper_image/2410.04207_1728497608.png"
            },

            {
                "startTime": "05:03",
                "arxivId": "2410.04499",
                "arxivLink": "https://arxiv.org/abs/2410.04499",
                "title": "Pre-trained Models Get a Performativity Makeover: Adapting Deep Learning for a Changing World",
                "institute": "Institute of Science and Technology Austria, Max Planck Institute for Intelligent Systems, ELLIS Institute T\u00fcbingen...",
                "text": "This research proposes a novel technique to adjust pretrained backbones for performativity in a modular way, focusing on performative label shift. Unlike previous approaches that require training from scratch with performativity-augmented datasets, this method utilizes existing pretrained models and learns a shallow adapter module to correct for the shift.",
                "paper-title": "Adjusting Pretrained Backbones for Performativity",
                "image-path": "flux_paper_image/2410.04499_1728495326.png"
            },

            {
                "startTime": "05:28",
                "arxivId": "2410.04056",
                "arxivLink": "https://arxiv.org/abs/2410.04056",
                "title": "RetNet to the Rescue: Super-Fast Image Completion with a Memory Boost!",
                "institute": "Tsinghua University",
                "text": "This paper introduces RetCompletion, a novel image completion framework that leverages the Retentive Network (RetNet) architecture, originally developed for natural language processing, to achieve faster inference speeds while maintaining high reconstruction quality. Unlike previous Transformer-based methods, RetCompletion utilizes a pixel-wise inference strategy, enabling it to incorporate previously generated pixel information during inference, leading to more accurate and consistent results.",
                "paper-title": "RetCompletion:High-Speed Inference Image Completion with Retentive Network",
                "image-path": "flux_paper_image/2410.04056_1728495525.png"
            },

            {
                "startTime": "05:50",
                "arxivId": "2410.03959",
                "arxivLink": "https://arxiv.org/abs/2410.03959",
                "title": "Robots Talking to Each Other: A New Test for AI Communication",
                "institute": "UC Berkeley",
                "text": "This research introduces a new task and dataset for evaluating how well language models can understand and generate referring expressions in a multi-agent setting. Unlike previous work, this study focuses on embodied agents with different perspectives of the same scene, making it more relevant to real-world applications.",
                "paper-title": "Grounding Language in Multi-Perspective Referential Communication",
                "image-path": "flux_paper_image/2410.03959_1728495395.png"
            },

            {
                "startTime": "06:16",
                "arxivId": "2410.03794",
                "arxivLink": "https://arxiv.org/abs/2410.03794",
                "title": "Foundation Models Get a Medical Makeover: Repurposing for Time Series Classification",
                "institute": "University of North Carolina at Charlotte, Stanford University, Harvard University",
                "text": "This research proposes a novel approach to repurpose pre-trained foundation models for medical time series classification. Unlike previous work that focused on task-specific adaptation, this paper introduces a generalizable adaptation layer that allows the model to handle datasets with varying channel configurations, time series lengths, and diagnostic targets.",
                "paper-title": "Repurposing Foundation Model for Generalizable Medical Time Series Classification",
                "image-path": "flux_paper_image/2410.03794_1728497851.png"
            },

            {
                "startTime": "06:40",
                "arxivId": "2410.04191",
                "arxivLink": "https://arxiv.org/abs/2410.04191",
                "title": "Diffusion Models: One Teacher, Many Students, Faster Images!",
                "institute": "Shanghai Jiao Tong University, Tsinghua University",
                "text": "This paper introduces a new knowledge distillation technique called \"one-to-many knowledge distillation\" (O2MKD) for accelerating diffusion models. Unlike previous methods that distill a single teacher model into a single student, O2MKD trains multiple student models, each focusing on a specific subset of timesteps in the diffusion process.",
                "paper-title": "Accelerating Diffusion Models with One-to-Many Knowledge Distillation",
                "image-path": "flux_paper_image/2410.04191_1728497188.png"
            },

            {
                "startTime": "07:09",
                "arxivId": "2410.03901",
                "arxivLink": "https://arxiv.org/abs/2410.03901",
                "title": "Node Embeddings Get a Boost: Target-Aware Contrastive Learning Makes Graph Networks Smarter",
                "institute": "Purdue University, Microsoft",
                "text": "This research introduces Target-Aware Contrastive Learning (Target-aware CL), a self-supervised approach that adapts its contrastive loss function based on the target task. Unlike previous self-supervised methods, Target-aware CL strategically selects positive examples that enhance the mutual information between the target task and node representations.",
                "paper-title": "Improving Node Representation by Boosting Target-Aware Contrastive Loss",
                "image-path": "flux_paper_image/2410.03901_1728495817.png"
            },

            {
                "startTime": "07:34",
                "arxivId": "2410.03972",
                "arxivLink": "https://arxiv.org/abs/2410.03972",
                "title": "RNNs: They're Not All Created Equal! Degeneracy Revealed and Controlled.",
                "institute": "Harvard University",
                "text": "This research introduces a unified framework for analyzing degeneracy in task-trained RNNs across three levels: behavior, neural dynamics, and weight space. It goes beyond previous work by quantifying task complexity using information-theoretic measures and demonstrating how this complexity influences degeneracy at each level.",
                "paper-title": "Measuring and Controlling Solution Degeneracy across Task-Trained Recurrent Neural Networks",
                "image-path": "flux_paper_image/2410.03972_1728497614.png"
            },

            {
                "startTime": "07:54",
                "arxivId": "2410.03720",
                "arxivLink": "https://arxiv.org/abs/2410.03720",
                "title": "NeuralQP: QCQP Solver Gets a Hypergraph Makeover!",
                "institute": "Tsinghua University",
                "text": "This paper introduces NeuralQP, a framework that uses hypergraphs to represent and solve large-scale Quadratically Constrained Quadratic Programs (QCQPs). Unlike previous ML-based QCQP optimization frameworks, NeuralQP doesn't rely on strong problem assumptions or large-scale solvers.",
                "paper-title": "NeuralQP: A General Hypergraph-based Optimization Framework for Large-scale QCQPs",
                "image-path": "flux_paper_image/2410.03720_1728497455.png"
            },

            {
                "startTime": "08:16",
                "arxivId": "2410.04287",
                "arxivLink": "https://arxiv.org/abs/2410.04287",
                "title": "GNNs: Fair When Everyone's in the Same Clique?",
                "institute": "University of Michigan",
                "text": "This research focuses on the impact of local homophily on GNN fairness, going beyond the traditional global homophily analysis. It introduces a new out-of-distribution (OOD) problem for local homophily levels, demonstrating how underrepresented local homophily can lead to unfair predictions.",
                "paper-title": "Unveiling the Impact of Local Homophily on GNN Fairness: In-Depth Analysis and New Benchmarks",
                "image-path": "flux_paper_image/2410.04287_1728496666.png"
            },

            {
                "startTime": "08:34",
                "arxivId": "2410.03804",
                "arxivLink": "https://arxiv.org/abs/2410.03804",
                "title": "LLMs on a Diet: Speculative Decoding Gets a Makeover with Mixture of Attentions",
                "institute": "Huawei, University College London",
                "text": "This paper proposes a new architecture for speculative decoding, a technique that uses smaller models to speed up the generation of text by large language models (LLMs). The key innovation is the introduction of a \"Mixture of Attentions\" that addresses limitations in previous approaches, such as partial observability and lack of on-policyness during training.",
                "paper-title": "Mixture of Attentions For Speculative Decoding",
                "image-path": "flux_paper_image/2410.03804_1728496035.png"
            },

            {
                "startTime": "08:57",
                "arxivId": "2410.04320",
                "arxivLink": "https://arxiv.org/abs/2410.04320",
                "title": "CAVs Get Smart: Channel-Aware Data Fusion for Autonomous Driving!",
                "institute": "City University of Hong Kong, Tsinghua University, The University of Hong Kong",
                "text": "This research proposes a channel-aware throughput maximization approach for cooperative data fusion in connected and autonomous vehicles (CAVs). Unlike previous work that assumes time-invariant communication channels, this study considers the dynamic nature of wireless channels and leverages a self-supervised autoencoder for adaptive data compression.",
                "paper-title": "Channel-Aware Throughput Maximization for Cooperative Data Fusion in CAV",
                "image-path": "flux_paper_image/2410.04320_1728497035.png"
            },

            {
                "startTime": "09:25",
                "arxivId": "2410.03849",
                "arxivLink": "https://arxiv.org/abs/2410.03849",
                "title": "Contextual Shtarkov Sums: The Secret Sauce for Optimal Online Learning",
                "institute": "University of Toronto, Ben-Gurion University of the Negev",
                "text": "This research introduces a new complexity measure called the contextual Shtarkov sum, which characterizes the minimax regret for sequential probability assignment with contexts. This differs from previous work that relied on sequential covering numbers, which were shown to be insufficient for characterizing minimax risk in general.",
                "paper-title": "Sequential Probability Assignment with Contexts: Minimax Regret, Contextual Shtarkov Sums, and Contextual Normalized Maximum Likelihood",
                "image-path": ""
            },

            {
                "startTime": "09:43",
                "arxivId": "2410.03781",
                "arxivLink": "https://arxiv.org/abs/2410.03781",
                "title": "AI Tutors: Can We Teach Them to Fail Productively?",
                "institute": "ETH Zurich, \u00c9cole polytechnique, ETH AI Center...",
                "text": "This research introduces a novel approach called \"Pedagogical Steering\" to address the lack of pedagogical properties in Large Language Models (LLMs) used for tutoring. Unlike previous work that focuses on fine-tuning LLMs or using extensive prompts, this study proposes an algorithm called StratL that dynamically updates tutoring intents based on student responses, effectively steering the LLM towards a specific pedagogical strategy.",
                "paper-title": "Towards the Pedagogical Steering of Large Language Models for Tutoring: A Case Study with Modeling Productive Failure",
                "image-path": "flux_paper_image/2410.03781_1728497557.png"
            },

            {
                "startTime": "10:17",
                "arxivId": "2410.03893",
                "arxivLink": "https://arxiv.org/abs/2410.03893",
                "title": "Chess Bot Learns to Think Like a Human, Even Makes Mistakes!",
                "institute": "Carnegie Mellon University, MIT, Visa Research",
                "text": "This research introduces ALLIE, a chess-playing AI trained on human game data. Unlike previous systems that focused on maximizing performance, ALLIE aims to match the skill levels of human players across the spectrum, including non-move behaviors like pondering time and resignation.",
                "paper-title": "Human-aligned Chess with a Bit of Search",
                "image-path": "flux_paper_image/2410.03893_1728497806.png"
            },

            {
                "startTime": "10:41",
                "arxivId": "2410.04081",
                "arxivLink": "https://arxiv.org/abs/2410.04081",
                "title": "Visual Decoding: Turning Noise into Art with Diffusion!",
                "institute": "Google",
                "text": "This paper proposes a new approach to visual tokenization by replacing the traditional decoder in an autoencoder with a diffusion process. Instead of reconstructing the image in a single step, the diffusion model iteratively refines noisy data to recover the original image, guided by the latent representation provided by the encoder.",
                "paper-title": "$\epsilon$-VAE: Denoising as Visual Decoding",
                "image-path": "flux_paper_image/2410.04081_1728496868.png"
            },

            {
                "startTime": "11:00",
                "arxivId": "2410.03983",
                "arxivLink": "https://arxiv.org/abs/2410.03983",
                "title": "MetricX-24: A Machine Translation Metric That's Not Afraid to Say \"No\" to Bad References!",
                "institute": "Google",
                "text": "This research introduces a hybrid reference-based/reference-free machine translation evaluation metric, MetricX-24, which can score translations regardless of whether a reference is provided. This differs from previous versions of MetricX, which relied solely on reference-based evaluation.",
                "paper-title": "MetricX-24: The Google Submission to the WMT 2024 Metrics Shared Task",
                "image-path": "flux_paper_image/2410.03983_1728496885.png"
            },

            {
                "startTime": "11:20",
                "arxivId": "2410.04224",
                "arxivLink": "https://arxiv.org/abs/2410.04224",
                "title": "One-Step Diffusion: Super-Resolution Without the Teacher!",
                "institute": "Shanghai Jiao Tong University, ETH Zurich, Westlake University...",
                "text": "This paper proposes a Distillation-Free One-Step Diffusion (DFOSD) model for real-world image super-resolution (Real-ISR). Unlike previous one-step diffusion SR models, DFOSD does not employ knowledge distillation to train its one-step diffusion generator.",
                "paper-title": "Distillation-Free One-Step Diffusion for Real-World Image Super-Resolution",
                "image-path": "flux_paper_image/2410.04224_1728496070.png"
            },

            {
                "startTime": "11:50",
                "arxivId": "2410.04060",
                "arxivLink": "https://arxiv.org/abs/2410.04060",
                "title": "LLMs Get a Tensor Makeover: Parameter Efficiency Goes 5D!",
                "institute": "Stanford, University of Pennsylvania",
                "text": "This paper introduces LoRTA, a novel approach that uses a low-rank tensor model to adapt large language models (LLMs) for downstream tasks. Unlike previous methods that use low-rank matrices, LoRTA leverages the redundancy in weight updates across different layers, heads, and attention matrices by representing them as a unified 5th-order tensor.",
                "paper-title": "LoRTA: Low Rank Tensor Adaptation of Large Language Models",
                "image-path": "flux_paper_image/2410.04060_1728497254.png"
            },

            {
                "startTime": "12:06",
                "arxivId": "2410.04254",
                "arxivLink": "https://arxiv.org/abs/2410.04254",
                "title": "Wikipedia's Missing Links: A New Task for AI to Fill the Gaps",
                "institute": "Aarhus University, Wikimedia Foundation, \u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne",
                "text": "This research introduces the task of \"entity insertion,\" which focuses on identifying the most suitable place to add a link to a target entity within a Wikipedia article, even when no mention of that entity exists in the text. This differs from traditional entity linking, which assumes the entity is already mentioned.",
                "paper-title": "Entity Insertion in Multilingual Linked Corpora: The Case of Wikipedia",
                "image-path": "flux_paper_image/2410.04254_1728497587.png"
            },

            {
                "startTime": "12:27",
                "arxivId": "2410.03707",
                "arxivLink": "https://arxiv.org/abs/2410.03707",
                "title": "Mamba Strikes Back: A Graph-Powered Stock Prediction Model That's Actually Fast!",
                "institute": "University of British Columbia, Simon Fraser University, University of Pittsburgh...",
                "text": "This paper proposes SAMBA, a stock prediction model that combines the Mamba architecture with graph neural networks. Unlike previous transformer-based models, SAMBA achieves near-linear computational complexity, making it more practical for real-time trading and long-sequence data processing.",
                "paper-title": "Mamba Meets Financial Markets: A Graph-Mamba Approach for Stock Price Prediction",
                "image-path": "flux_paper_image/2410.03707_1728497131.png"
            },

            {
                "startTime": "12:51",
                "arxivId": "2410.03812",
                "arxivLink": "https://arxiv.org/abs/2410.03812",
                "title": "SLAM-ing the Speed Limit: Event Cameras Boost Neural Mapping",
                "institute": "ETH Zurich, INSAIT, Sofia University",
                "text": "This research integrates event cameras into the NICE-SLAM framework, a neural implicit encoding SLAM system. This allows for accurate camera tracking and mapping even when the input RGB-D images are temporally sparse.",
                "paper-title": "EvenNICER-SLAM: Event-based Neural Implicit Encoding SLAM",
                "image-path": "flux_paper_image/2410.03812_1728497602.png"
            },

            {
                "startTime": "13:12",
                "arxivId": "2410.04343",
                "arxivLink": "https://arxiv.org/abs/2410.04343",
                "title": "RAG's Big Brain: How More Compute Makes LLMs Smarter",
                "institute": "University of Illinois, Google",
                "text": "This research explores how increasing the amount of computation used during inference can improve the performance of retrieval-augmented generation (RAG) models, going beyond simply adding more knowledge. It introduces two new strategies, DRAG and IterDRAG, which leverage in-context learning and iterative prompting to effectively scale inference computation.",
                "paper-title": "Inference Scaling for Long-Context Retrieval Augmented Generation",
                "image-path": "flux_paper_image/2410.04343_1728495628.png"
            },

            {
                "startTime": "13:38",
                "arxivId": "2410.04489",
                "arxivLink": "https://arxiv.org/abs/2410.04489",
                "title": "Grokking: When AI Overthinks and Then Gets It Right",
                "institute": "\u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne",
                "text": "This research explores Grokking in a simplified setting where the optimal solution can always be identified, allowing for a clear definition of \"memorization\" and \"learning.\" It focuses on a binary classification task with constant labels and analyzes the asymptotic dynamics of the model.",
                "paper-title": "Grokking at the Edge of Linear Separability",
                "image-path": "flux_paper_image/2410.04489_1728496348.png"
            },

            {
                "startTime": "13:57",
                "arxivId": "2410.04133",
                "arxivLink": "https://arxiv.org/abs/2410.04133",
                "title": "ECG Founder: A Universal Model for Your Heart's Rhythm and Blues",
                "institute": "Peking University",
                "text": "This research introduces ECG Founder, a foundation model trained on over 10 million ECG recordings, which is significantly larger than previous datasets. This allows the model to learn more complex patterns and generalize better to different ECG types and diagnostic tasks. Unlike previous models, ECG Founder can handle both 12-lead and single-lead ECGs, making it suitable for both hospital and portable devices.",
                "paper-title": "From Hospital to Portables: A Universal ECG Foundation Model Built on 10+ Million Diverse Recordings",
                "image-path": "flux_paper_image/2410.04133_1728496772.png"
            },

            {
                "startTime": "14:23",
                "arxivId": "2410.03788",
                "arxivLink": "https://arxiv.org/abs/2410.03788",
                "title": "Missing Activity? No Problem! New Model Reconstructs Human Mobility Patterns",
                "institute": "UC Los Angeles, Texas A&M University, University of Louisville...",
                "text": "This research introduces a semi-supervised iterative transfer learning algorithm to reconstruct human mobility patterns from incomplete datasets. This approach differs from previous work by focusing on semantic activity chains and adapting models to diverse geographical contexts without relying on ground truth data.",
                "paper-title": "Reconstructing Human Mobility Pattern: A Semi-Supervised Approach for Cross-Dataset Transfer Learning",
                "image-path": "flux_paper_image/2410.03788_1728495977.png"
            },

            {
                "startTime": "14:51",
                "arxivId": "2410.03736",
                "arxivLink": "https://arxiv.org/abs/2410.03736",
                "title": "AI Chatbot Turns Clinicians into Data Scientists",
                "institute": "University of Cambridge",
                "text": "This research introduces CliMB, an AI-enabled chatbot that guides clinician scientists through the entire medical data science pipeline, enabling them to build predictive models using natural language. This approach differs from previous work by providing a comprehensive, user-friendly solution that integrates data-centric AI, AutoML, and interpretable ML methods.",
                "paper-title": "CliMB: An AI-enabled Partner for Clinical Predictive Modeling",
                "image-path": "flux_paper_image/2410.03736_1728496179.png"
            },

            {
                "startTime": "15:19",
                "arxivId": "2410.03989",
                "arxivLink": "https://arxiv.org/abs/2410.03989",
                "title": "Symmetry Cloning: Teaching AI to See the World Like We Do",
                "institute": "University of Toronto, Vector Institute for Artificial Intelligence",
                "text": "This research introduces \"symmetry-cloning,\" a method for training machine learning models to learn symmetries directly from data, rather than relying on pre-defined architectures. This approach allows for more flexibility and adaptability in handling real-world data that may not perfectly conform to expected symmetries.",
                "paper-title": "Symmetry From Scratch: Group Equivariance as a Supervised Learning Task",
                "image-path": "flux_paper_image/2410.03989_1728495339.png"
            },

            {
                "startTime": "15:43",
                "arxivId": "2410.04454",
                "arxivLink": "https://arxiv.org/abs/2410.04454",
                "title": "LLMs Got Talent? New Framework Detects Which Datasets Are the Stars!",
                "institute": "Peking University",
                "text": "This research introduces CopyLens, a framework that analyzes how copyrighted datasets influence LLM outputs. Unlike previous methods that focus on detecting verbatim copies or individual token contributions, CopyLens examines the impact of entire datasets on LLM responses.",
                "paper-title": "CopyLens: Dynamically Flagging Copyrighted Sub-Dataset Contributions to LLM Outputs",
                "image-path": "flux_paper_image/2410.04454_1728495715.png"
            },

            {
                "startTime": "16:10",
                "arxivId": "2410.04039",
                "arxivLink": "https://arxiv.org/abs/2410.04039",
                "title": "BlockFound: A Blockchain Anomaly Detector That's Not Just Rule-Based!",
                "institute": "Northwestern University, Meta, NYU...",
                "text": "This research proposes BlockFound, a customized foundation model for detecting anomalous blockchain transactions. Unlike previous methods that rely on rule-based systems or directly apply off-the-shelf large language models, BlockFound introduces a series of customized designs to model the unique data structure of blockchain transactions.",
                "paper-title": "BlockFound: Customized blockchain foundation model for anomaly detection",
                "image-path": "flux_paper_image/2410.04039_1728496006.png"
            },

            {
                "startTime": "16:31",
                "arxivId": "2410.04025",
                "arxivLink": "https://arxiv.org/abs/2410.04025",
                "title": "IdeaSynth: Turning Research Sparks into Full-Blown Projects!",
                "institute": "University of Toronto, University of Washington, Allen Institute for AI",
                "text": "This research focuses on helping researchers develop their initial ideas into concrete research briefs, unlike previous work that primarily focused on generating broad ideas. IdeaSynth uses a node-based canvas to represent different facets of a research idea, allowing users to explore variations and connections between them.",
                "paper-title": "IdeaSynth: Iterative Research Idea Development Through Evolving and Composing Idea Facets with Literature-Grounded Feedback",
                "image-path": "flux_paper_image/2410.04025_1728496162.png"
            },

            {
                "startTime": "16:51",
                "arxivId": "2410.04223",
                "arxivLink": "https://arxiv.org/abs/2410.04223",
                "title": "LLMs Go Molecular: Designing Drugs & Materials with a Chatty AI",
                "institute": "IBM",
                "text": "This research introduces Llamole, a multimodal large language model (LLM) that integrates text and graph generation for molecular design. Unlike previous LLMs that struggle with molecular data, Llamole can interleave text and graph generation, enabling it to design molecules with specific properties and plan their synthesis.",
                "paper-title": "Multimodal Large Language Models for Inverse Molecular Design with Retrosynthetic Planning",
                "image-path": "flux_paper_image/2410.04223_1728495764.png"
            },

            {
                "startTime": "17:15",
                "arxivId": "2410.03997",
                "arxivLink": "https://arxiv.org/abs/2410.03997",
                "title": "LLM-Powered MARL: One-Time Genius for Multi-Agent Teamwork",
                "institute": "University of Connecticut, University of Pennsylvania, Nvidia",
                "text": "This research proposes a novel framework called YOLO-MARL that leverages the planning capabilities of LLMs to enhance multi-agent reinforcement learning (MARL) policy training. Unlike previous approaches that frequently interact with LLMs during training, YOLO-MARL only requires a one-time interaction with the LLM for each game environment.",
                "paper-title": "YOLO-MARL: You Only LLM Once for Multi-agent Reinforcement Learning",
                "image-path": "flux_paper_image/2410.03997_1728495829.png"
            },

            {
                "startTime": "17:34",
                "arxivId": "2410.03740",
                "arxivLink": "https://arxiv.org/abs/2410.03740",
                "title": "Ophthalmology's New AI Doctor: LEME Sees All, Knows All!",
                "institute": "Harvard Medical School, Yale University, Singapore National Eye Centre...",
                "text": "This research introduces LEME, an open-source, ophthalmology-specific large language model (LLM) fine-tuned on a vast dataset of 127,000 training instances. Unlike previous ophthalmology-specific LLMs, LEME was evaluated on clinical scenario-related tasks involving electronic health records (EHRs), demonstrating its potential for real-world applications.",
                "paper-title": "Language Enhanced Model for Eye (LEME): An Open-Source Ophthalmology-Specific Large Language Model",
                "image-path": "flux_paper_image/2410.03740_1728497461.png"
            },

            {
                "startTime": "17:56",
                "arxivId": "2410.03742",
                "arxivLink": "https://arxiv.org/abs/2410.03742",
                "title": "LLMs as Judges: AI Learns to Judge, Not Just Score!",
                "institute": "Tsinghua University, University of Copenhagen",
                "text": "This research proposes a new method for training LLMs to make preference judgments, called Con-J. Unlike traditional scalar reward models, Con-J leverages the LLM's own judgment abilities by prompting it to generate both positive and negative judgments with rationales. This approach aims to improve interpretability and robustness against biases in datasets.",
                "paper-title": "Beyond Scalar Reward Model: Learning Generative Judge from Preference Data",
                "image-path": "flux_paper_image/2410.03742_1728495414.png"
            },

            {
                "startTime": "18:26",
                "arxivId": "2410.03795",
                "arxivLink": "https://arxiv.org/abs/2410.03795",
                "title": "Design Patterns: AI's Secret Weapon for Building Super-Smart Systems",
                "institute": "Kyoto University, Rutgers University, University of Wisconsin-Madison...",
                "text": "This research focuses on adapting classical software design patterns to the unique challenges of building and managing deep learning and machine learning systems. It goes beyond simply applying these patterns to traditional software development and explores their specific use cases in AI systems.",
                "paper-title": "Deep Learning and Machine Learning: Advancing Big Data Analytics and Management with Design Patterns",
                "image-path": "flux_paper_image/2410.03795_1728497228.png"
            },

            {
                "startTime": "18:47",
                "arxivId": "2410.03741",
                "arxivLink": "https://arxiv.org/abs/2410.03741",
                "title": "AI Cardiologist: Can a Chatbot Diagnose Your Heart?",
                "institute": "Stanford University, Google",
                "text": "This research evaluates a large language model (LLM) specifically designed for medical dialogue, AMIE, on its ability to assess patients with rare, life-threatening inherited cardiomyopathies. Unlike previous studies that used generic LLMs, this study focuses on a specialized LLM and uses real-world clinical data from a subspecialist center.",
                "paper-title": "Towards Democratization of Subspeciality Medical Expertise",
                "image-path": "flux_paper_image/2410.03741_1728495846.png"
            },

            {
                "startTime": "19:13",
                "arxivId": "2410.04315",
                "arxivLink": "https://arxiv.org/abs/2410.04315",
                "title": "Certainty Phrases: Not Just Words, But Distributions!",
                "institute": "MIT",
                "text": "This research models uncertainty as distributions over the probability simplex, rather than assigning a single score to each certainty phrase. This allows for a more nuanced understanding of the semantics of certainty expressions.",
                "paper-title": "Calibrating Expressions of Certainty",
                "image-path": "flux_paper_image/2410.04315_1728496515.png"
            },

            {
                "startTime": "19:38",
                "arxivId": "2410.04041",
                "arxivLink": "https://arxiv.org/abs/2410.04041",
                "title": "NeRF-tastic 3D Reconstruction: Endoscopy Gets a Depth Makeover!",
                "institute": "University of Washington, Chinese University of Hong Kong",
                "text": "This research introduces a novel NeRF-based 3D reconstruction pipeline that utilizes stereo vision derived from monocular endoscopic inputs to achieve high-accuracy depth estimation. This approach differs from previous methods by iteratively refining the NeRF model using depth supervision, leading to improved accuracy and resolution in the final 3D reconstruction.",
                "paper-title": "Hybrid NeRF-Stereo Vision: Pioneering Depth Estimation and 3D Reconstruction in Endoscopy",
                "image-path": "flux_paper_image/2410.04041_1728495429.png"
            },

            {
                "startTime": "20:00",
                "arxivId": "2410.04419",
                "arxivLink": "https://arxiv.org/abs/2410.04419",
                "title": "Visual Localization Goes Lite: Navigating the World with Tiny Maps",
                "institute": "University College London",
                "text": "This research proposes LiteVLoc, a visual localization framework that uses a lightweight topo-metric map to represent the environment. Unlike traditional methods that rely on detailed 3D maps, LiteVLoc reduces storage overhead by leveraging learning-based feature matching and geometric solvers for metric pose estimation.",
                "paper-title": "LiteVLoc: Map-Lite Visual Localization for Image Goal Navigation",
                "image-path": "flux_paper_image/2410.04419_1728497812.png"
            },

            {
                "startTime": "20:22",
                "arxivId": "2410.04417",
                "arxivLink": "https://arxiv.org/abs/2410.04417",
                "title": "Vision Models on a Diet: Sparsifying Visual Tokens for Efficiency",
                "institute": "Peking University, Fudan University, UC Berkeley...",
                "text": "This research proposes a training-free method for sparsifying visual tokens in vision-language models (VLMs) by leveraging the self-attention matrix to identify and prune irrelevant tokens. Unlike previous methods that rely on additional training data or text-agnostic approaches, this method utilizes text-aware guidance to adaptively determine the sparsification ratio for each layer.",
                "paper-title": "SparseVLM: Visual Token Sparsification for Efficient Vision-Language Model Inference",
                "image-path": "flux_paper_image/2410.04417_1728496837.png"
            },

            {
                "startTime": "20:47",
                "arxivId": "2410.04324",
                "arxivLink": "https://arxiv.org/abs/2410.04324",
                "title": "AI Voices: Can We Tell Real From Fake? New Benchmark Tests the Limits!",
                "institute": "Fordham University, IBM",
                "text": "This research introduces SONAR, a new framework and benchmark for evaluating AI-synthesized audio detection models. It differs from previous work by using a larger, more diverse dataset of fake audio generated by cutting-edge TTS models.",
                "paper-title": "SONAR: A Synthetic AI-Audio Detection Framework~and Benchmark",
                "image-path": "flux_paper_image/2410.04324_1728496824.png"
            },

            {
                "startTime": "21:11",
                "arxivId": "2410.03943",
                "arxivLink": "https://arxiv.org/abs/2410.03943",
                "title": "Oscillating Your Way to Better Sequence Modeling: MIT Researchers Harness Harmonic Oscillators for AI Breakthrough",
                "institute": "MIT",
                "text": "This research proposes a new state-space model called LinOSS, which is based on a system of forced harmonic oscillators. Unlike previous state-space models that rely on restrictive parameterizations, LinOSS only requires a nonnegative diagonal state matrix, making it more flexible and potentially more expressive.",
                "paper-title": "Oscillatory State-Space Models",
                "image-path": "flux_paper_image/2410.03943_1728495708.png"
            },

            {
                "startTime": "21:29",
                "arxivId": "2410.03752",
                "arxivLink": "https://arxiv.org/abs/2410.03752",
                "title": "Speech Recognition Gets a Streaming Makeover: LLMs Go Long Form!",
                "institute": "Meta",
                "text": "This research introduces SpeechLLM-XL, a streaming model that processes audio in chunks, enabling efficient speech recognition for long-form utterances. Unlike previous non-streaming models, SpeechLLM-XL scales linearly with audio length, addressing the computational challenges of handling long audio inputs.",
                "paper-title": "Efficient Streaming LLM for Speech Recognition",
                "image-path": "flux_paper_image/2410.03752_1728497260.png"
            },

            {
                "startTime": "21:53",
                "arxivId": "2410.04509",
                "arxivLink": "https://arxiv.org/abs/2410.04509",
                "title": "AI's Math Homework: Can It Spot Our Mistakes?",
                "institute": "HKUST(GZ), HKUST, Squirrel AI...",
                "text": "This research introduces a new benchmark called ERRORRADAR, which focuses on evaluating Multimodal Large Language Models (MLLMs) in the context of error detection in mathematical problem-solving. Unlike previous benchmarks that primarily assess problem-solving accuracy, ERRORRADAR specifically targets the ability of MLLMs to identify incorrect steps and categorize the types of errors made in a student's solution.",
                "paper-title": "ErrorRadar: Benchmarking Complex Mathematical Reasoning of Multimodal Large Language Models Via Error Detection",
                "image-path": "flux_paper_image/2410.04509_1728495452.png"
            },

            {
                "startTime": "22:18",
                "arxivId": "2410.03904",
                "arxivLink": "https://arxiv.org/abs/2410.03904",
                "title": "LLMs: Not Just for Chatbots Anymore - They're Making Audio Anomalies a Breeze!",
                "institute": "CMU",
                "text": "This research introduces a novel framework called AADG, which leverages large language models (LLMs) to generate synthetic audio data containing anomalies. Unlike existing datasets that primarily focus on industrial sounds, AADG aims to create more diverse and realistic audio data, particularly for real-world scenarios where only audio data is available.",
                "paper-title": "Did You Hear That? Introducing AADG: A Framework for Generating Benchmark Data in Audio Anomaly Detection",
                "image-path": "flux_paper_image/2410.03904_1728496733.png"
            },

            {
                "startTime": "22:39",
                "arxivId": "2410.03718",
                "arxivLink": "https://arxiv.org/abs/2410.03718",
                "title": "Assamese Language Models: Tokenizing the Tongue Twisters!",
                "institute": "The Assam Kaziranga University",
                "text": "This research focuses on evaluating the performance of tokenizers specifically for Assamese language models, a low-resource language, which is a gap in the existing literature.",
                "paper-title": "Performance Evaluation of Tokenizers in Large Language Models for the Assamese Language",
                "image-path": "flux_paper_image/2410.03718_1728497178.png"
            },

            {
                "startTime": "22:59",
                "arxivId": "2410.03968",
                "arxivLink": "https://arxiv.org/abs/2410.03968",
                "title": "Decoding Game: Why Text Generation Needs a Little Chaos",
                "institute": "Princeton University",
                "text": "This paper introduces Decoding Game, a theoretical framework that reimagines text generation as a game between a Strategist and Nature. Unlike previous work that focuses on maximizing likelihood, Decoding Game considers the adversarial nature of text generation, where Nature can distort the true distribution of language.",
                "paper-title": "Decoding Game: On Minimax Optimality of Heuristic Text Generation Strategies",
                "image-path": "flux_paper_image/2410.03968_1728495577.png"
            },

            {
                "startTime": "23:22",
                "arxivId": "2410.04225",
                "arxivLink": "https://arxiv.org/abs/2410.04225",
                "title": "Video Super-Resolution: A Blind Taste Test for AI!",
                "institute": "Moscow State University, University of W\u00fcrzburg",
                "text": "This research focuses on developing objective quality assessment (QA) methods specifically for video super-resolution (SR) algorithms. Unlike previous work that relied on general image QA metrics, this challenge aims to create metrics that better correlate with human perception of SR quality.",
                "paper-title": "AIM 2024 Challenge on Video Super-Resolution Quality Assessment: Methods and Results",
                "image-path": "flux_paper_image/2410.04225_1728495553.png"
            },

            {
                "startTime": "23:50",
                "arxivId": "2410.04346",
                "arxivLink": "https://arxiv.org/abs/2410.04346",
                "title": "Ranking LLMs: Aligning Models with Human Preferences Using NDCG",
                "institute": "Tsinghua University, University of Michigan, University of Florida",
                "text": "This research proposes a novel listwise approach called Ordinal Preference Optimization (OPO) for aligning large language models (LLMs) with human preferences. Unlike previous pairwise methods, OPO leverages the relative proximity of responses within a list, utilizing the Normalized Discounted Cumulative Gain (NDCG) metric for training.",
                "paper-title": "Ordinal Preference Optimization: Aligning Human Preferences via NDCG",
                "image-path": "flux_paper_image/2410.04346_1728495298.png"
            },

            {
                "startTime": "24:16",
                "arxivId": "2410.03798",
                "arxivLink": "https://arxiv.org/abs/2410.03798",
                "title": "LLMs Learn to Speak: Self-Powered Speech Models Ditch the Teacher!",
                "institute": "Harbin Institute of Technology, Nanyang Technological University",
                "text": "This research addresses the issue of \"speech anchor bias\" in large speech-text models (LSMs). Unlike previous methods that rely on extensive multi-modal data, this study proposes a self-powered approach where the model generates its own training data, effectively mitigating the bias towards speech inputs and improving instruction-following capabilities.",
                "paper-title": "Self-Powered LLM Modality Expansion for Large Speech-Text Models",
                "image-path": "flux_paper_image/2410.03798_1728496830.png"
            },

            {
                "startTime": "24:49",
                "arxivId": "2410.04234",
                "arxivLink": "https://arxiv.org/abs/2410.04234",
                "title": "Jailbreaking LLMs: A Homotopy-Fueled Attack on Language Models",
                "institute": "University of Wisconsin-Madison",
                "text": "This research introduces a novel optimization method called functional homotopy, which leverages the duality between model training and input generation to address the challenges of discrete optimization in language models. Unlike previous methods that rely on token gradients, functional homotopy utilizes gradient descent in the continuous parameter space to create a sequence of easy-to-hard optimization problems.",
                "paper-title": "Functional Homotopy: Smoothing Discrete Optimization via Continuous Parameters for LLM Jailbreak Attacks",
                "image-path": "flux_paper_image/2410.04234_1728496922.png"
            },

            {
                "startTime": "25:10",
                "arxivId": "2410.04279",
                "arxivLink": "https://arxiv.org/abs/2410.04279",
                "title": "Deep Learning's Secret Weapon: Reflections and the Lasso",
                "institute": "Stanford University",
                "text": "This research extends previous work on shallow networks by showing that deep networks with absolute value activation can be formulated as equivalent convex Lasso problems. This formulation reveals that deep networks favor symmetric structures, with greater depth enabling multilevel symmetries.",
                "paper-title": "Black Boxes and Looking Glasses: Multilevel Symmetries, Reflection Planes, and Convex Optimization in Deep Networks",
                "image-path": "flux_paper_image/2410.04279_1728497546.png"
            },

            {
                "startTime": "25:26",
                "arxivId": "2410.04070",
                "arxivLink": "https://arxiv.org/abs/2410.04070",
                "title": "LLMs Get Personal: Decoding-Time Alignment for Tailored Text",
                "institute": "Zhejiang University, National University of Singapore, University of Washington",
                "text": "This paper proposes a novel approach called Personalized Alignment at Decoding-time (PAD) that aligns LLMs with diverse personalized preferences during inference without requiring additional training. Unlike previous methods that rely on training separate policy models for each preference, PAD leverages a single personalized reward model to guide the decoding process, dynamically tailoring the base model's predictions to individual user preferences.",
                "paper-title": "PAD: Personalized Alignment at Decoding-Time",
                "image-path": "flux_paper_image/2410.04070_1728497867.png"
            },

            {
                "startTime": "25:52",
                "arxivId": "2410.04144",
                "arxivLink": "https://arxiv.org/abs/2410.04144",
                "title": "Federated Unlearning Gets a Speed Boost: CONDA Dumps Data, Not Performance!",
                "institute": "University of Cambridge",
                "text": "This research introduces CONDA, a federated unlearning method that doesn't require retraining or access to data from remaining clients. It achieves this by selectively dampening parameters influenced by the client whose data is being removed.",
                "paper-title": "ConDa: Fast Federated Unlearning with Contribution Dampening",
                "image-path": "flux_paper_image/2410.04144_1728496108.png"
            },

            {
                "startTime": "26:20",
                "arxivId": "2410.03723",
                "arxivLink": "https://arxiv.org/abs/2410.03723",
                "title": "AI Wrote It, But You Think It's Human: The Bias We All Have Against AI",
                "institute": "The Harker School, University of California Santa Barbara, Carnegie Mellon University",
                "text": "This research focuses on human bias against AI-generated text, a novel perspective compared to previous work that primarily examined AI bias towards different human populations.",
                "paper-title": "Human Bias in the Face of AI: The Role of Human Judgement in AI Generated Text Evaluation",
                "image-path": "flux_paper_image/2410.03723_1728496269.png"
            },

            {
                "startTime": "26:40",
                "arxivId": "2410.03818",
                "arxivLink": "https://arxiv.org/abs/2410.03818",
                "title": "LLMs: Self-Detoxifying Superheroes of Text Generation!",
                "institute": "IBM, MIT",
                "text": "This research proposes a novel decoding algorithm called Self-disciplined Autoregressive Sampling (SASA) that leverages the internal representations of LLMs to reduce toxicity in generated text without requiring external reward models or retraining. Unlike previous methods that rely on external models or retraining, SASA directly learns a subspace within the LLM's embedding space to identify and steer away from toxic outputs.",
                "paper-title": "Large Language Models can be Strong Self-Detoxifiers",
                "image-path": "flux_paper_image/2410.03818_1728496260.png"
            },

            {
                "startTime": "27:05",
                "arxivId": "2410.04350",
                "arxivLink": "https://arxiv.org/abs/2410.04350",
                "title": "Token-Level Tweaking: Giving LLMs a Grammar Lesson for Better Behavior",
                "institute": "Tsinghua University, University of Illinois at Chicago, Apple Inc.",
                "text": "This research proposes a new method called TIS-DPO, which assigns importance weights to individual tokens in a sequence during direct preference optimization (DPO). This differs from previous DPO methods that treat all tokens equally, potentially leading to less efficient optimization.",
                "paper-title": "TIS-DPO: Token-level Importance Sampling for Direct Preference Optimization With Estimated Weights",
                "image-path": "flux_paper_image/2410.04350_1728495346.png"
            },

            {
                "startTime": "27:32",
                "arxivId": "2410.04386",
                "arxivLink": "https://arxiv.org/abs/2410.04386",
                "title": "Data Valuation Gets a Distribution Makeover: How to Tell Which Data is Worth Its Weight in Gold",
                "institute": "National University of Singapore, CMU, A*STAR",
                "text": "This research focuses on valuing data distributions, not just datasets. It proposes a method using Maximum Mean Discrepancy (MMD) to compare the values of distributions based on their samples, addressing the challenge of data heterogeneity across vendors.",
                "paper-title": "Data Distribution Valuation",
                "image-path": "flux_paper_image/2410.04386_1728497080.png"
            },

            {
                "startTime": "27:59",
                "arxivId": "2410.04442",
                "arxivLink": "https://arxiv.org/abs/2410.04442",
                "title": "Time Series Forecasting: Non-Stationarity's Got Talent (and It's Not Just a One-Trick Pony)",
                "institute": "Tsinghua University",
                "text": "This research proposes TimeBridge, a framework that tackles the challenge of non-stationarity in time series forecasting by separating its impact on short-term and long-term modeling. Unlike previous methods that either eliminate or retain non-stationarity without considering its distinct effects, TimeBridge utilizes Integrated Attention to mitigate short-term non-stationarity and Cointegrated Attention to preserve it for long-term cointegration.",
                "paper-title": "TimeBridge: Non-Stationarity Matters for Long-term Time Series Forecasting",
                "image-path": "flux_paper_image/2410.04442_1728496060.png"
            },

            {
                "startTime": "28:24",
                "arxivId": "2410.04205",
                "arxivLink": "https://arxiv.org/abs/2410.04205",
                "title": "Deepfakes vs. Super-Resolution: A Battle for Authenticity",
                "institute": "ISTI-CNR, CNIT, Mercatorum University",
                "text": "This research delves deeper into the effectiveness of super-resolution (SR) attacks on deepfake detectors. Unlike previous work, it explores the impact of different SR techniques and scaling factors on various deepfake generation methods, including entirely synthetic images.",
                "paper-title": "Exploring Strengths and Weaknesses of Super-Resolution Attack in Deepfake Detection",
                "image-path": "flux_paper_image/2410.04205_1728497072.png"
            },

            {
                "startTime": "28:45",
                "arxivId": "2410.04108",
                "arxivLink": "https://arxiv.org/abs/2410.04108",
                "title": "Reinforcement Learning's New Trick: Occupancy Measure Approximation for Scalable Success!",
                "institute": "University of Maryland College Park, University of Central Florida, ETH Zurich",
                "text": "This research proposes a new policy gradient algorithm for reinforcement learning with general utilities (RLGU) that uses maximum likelihood estimation (MLE) to approximate occupancy measures. This approach allows the algorithm to scale to larger state-action spaces, unlike previous methods that relied on tabular estimates.",
                "paper-title": "On the Sample Complexity of a Policy Gradient Algorithm with Occupancy Approximation for General Utility Reinforcement Learning",
                "image-path": "flux_paper_image/2410.04108_1728496488.png"
            },

            {
                "startTime": "29:08",
                "arxivId": "2410.03748",
                "arxivLink": "https://arxiv.org/abs/2410.03748",
                "title": "Font-astic Fonts: AI Makes Words Look Like Their Meaning!",
                "institute": "Egypt-Japan University of Science and Technology, Mohamed bin Zayed University of Artificial Intelligence, \u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne",
                "text": "This research introduces a system that automatically generates semantic typography, where the visual design of a word reflects its meaning. Unlike previous methods that focus on single letters or rely on pre-defined icons, this system morphs multiple letters simultaneously, enhancing readability and handling cursive languages like Arabic.",
                "paper-title": "Khattat: Enhancing Readability and Concept Representation of Semantic Typography",
                "image-path": "flux_paper_image/2410.03748_1728495674.png"
            },

            {
                "startTime": "29:29",
                "arxivId": "2410.04097",
                "arxivLink": "https://arxiv.org/abs/2410.04097",
                "title": "Brain Scans Get a Super-Resolution Makeover: No Training Data Needed!",
                "institute": "Basque Center on Cognition Brain and Language, Harvard Medical School, Ikerbasque...",
                "text": "This research introduces a self-supervised deep learning method for super-resolution fMRI, eliminating the need for high-resolution ground truth data during training. This differs from previous approaches that relied on paired low-resolution and high-resolution images for training.",
                "paper-title": "TV-based Deep 3D Self Super-Resolution for fMRI",
                "image-path": "flux_paper_image/2410.04097_1728497786.png"
            },

            {
                "startTime": "29:49",
                "arxivId": "2410.03767",
                "arxivLink": "https://arxiv.org/abs/2410.03767",
                "title": "AI's Got a New Reasoning Game: Counterfactual Feedback Makes the Difference!",
                "institute": "Harvard University, Microsoft Research, Cornell Tech",
                "text": "This research focuses on improving the reasoning abilities of language models by introducing a novel fine-tuning approach that leverages counterfactual feedback. Unlike previous work that primarily relies on factual examples, this method incorporates both factual and counterfactual questions to elicit better reasoning mechanisms.",
                "paper-title": "Reasoning Elicitation in Language Models via Counterfactual Feedback",
                "image-path": "flux_paper_image/2410.03767_1728496218.png"
            },

            {
                "startTime": "30:16",
                "arxivId": "2410.04112",
                "arxivLink": "https://arxiv.org/abs/2410.04112",
                "title": "AI Doctors Get a Flowchart Makeover: New Method Makes Medical Chatbots More Human-Like",
                "institute": "Peking University, Beijing Jiaotong University",
                "text": "This research introduces a novel approach for annotating preference data in medical dialogue models using a multi-agent system. Unlike previous methods that rely heavily on expert input or general-purpose LLMs, this approach leverages a combination of Constitutional AI and flowchart-based representations of physician preferences to create a more autonomous and adaptable system.",
                "paper-title": "Exploring LLM-based Data Annotation Strategies for Medical Dialogue Preference Alignment",
                "image-path": "flux_paper_image/2410.04112_1728495751.png"
            },

            {
                "startTime": "30:38",
                "arxivId": "2410.03920",
                "arxivLink": "https://arxiv.org/abs/2410.03920",
                "title": "Robots Learn Object Properties by Feeling, Not Seeing!",
                "institute": "MIT, Amazon",
                "text": "This research proposes a novel method for identifying object properties using only robot proprioception, eliminating the need for external sensors or vision-based tracking systems. Unlike previous work that focuses on identifying robot properties or object properties using object-specific data, this approach calibrates object properties by analyzing the robot's responses to manipulated objects.",
                "paper-title": "Learning Object Properties Using Robot Proprioception via Differentiable Robot-Object Interaction",
                "image-path": "flux_paper_image/2410.03920_1728496145.png"
            },

            {
                "startTime": "31:04",
                "arxivId": "2410.04347",
                "arxivLink": "https://arxiv.org/abs/2410.04347",
                "title": "LLMs: Not Just Chatbots, Now They're Feature Detectives!",
                "institute": "University of California Los Angeles, Purdue University, University of Chicago",
                "text": "This research proposes a novel framework, FLAME, that leverages large language models (LLMs) to infer latent features from observed data. Unlike traditional latent feature mining techniques, FLAME incorporates contextual information provided in natural language and produces more interpretable outputs.",
                "paper-title": "Latent Feature Mining for Predictive Model Enhancement with Large Language Models",
                "image-path": "flux_paper_image/2410.04347_1728497434.png"
            },

            {
                "startTime": "31:21",
                "arxivId": "2410.03809",
                "arxivLink": "https://arxiv.org/abs/2410.03809",
                "title": "Mammograms: Not Just for Boobs, They're for... Artefacts?",
                "institute": "MIT, Imperial College London",
                "text": "This study uniquely investigates the impact of radio-opaque artefacts, like skin markers and implants, on the performance of mammography classification models. Previous research has primarily focused on global image changes, neglecting the localized effects of these artefacts.",
                "paper-title": "Radio-opaque artefacts in digital mammography: automatic detection and analysis of downstream effects",
                "image-path": "flux_paper_image/2410.03809_1728497831.png"
            },

            {
                "startTime": "31:44",
                "arxivId": "2410.03697",
                "arxivLink": "https://arxiv.org/abs/2410.03697",
                "title": "Simulating Success: How Importance Sampling Can Tune Large-Scale Recommenders",
                "institute": "Microsoft, University of Texas at Austin",
                "text": "This research proposes a novel approach called Simulator-Guided Importance Sampling (SGIS) that combines the strengths of open-box simulators and importance sampling for tuning large-scale recommender systems. Unlike previous methods that focus on bias-variance trade-offs, SGIS aims to achieve a computational trade-off by combining two unbiased estimators of key performance indicators (KPIs).",
                "paper-title": "Combining Open-box Simulation and Importance Sampling for Tuning Large-Scale Recommenders",
                "image-path": "flux_paper_image/2410.03697_1728498029.png"
            },

            {
                "startTime": "32:10",
                "arxivId": "2410.03952",
                "arxivLink": "https://arxiv.org/abs/2410.03952",
                "title": "Brain-Inspired Hack: Making AI Less Sensitive to Tiny Tweaks!",
                "institute": "Harvard University",
                "text": "This research proposes a new regularizer that mimics the computational function of neural regularizers without requiring neural recordings, expanding the usability and effectiveness of these techniques.",
                "paper-title": "A Brain-Inspired Regularizer for Adversarial Robustness",
                "image-path": "flux_paper_image/2410.03952_1728496716.png"
            },

            {
                "startTime": "32:31",
                "arxivId": "2410.04485",
                "arxivLink": "https://arxiv.org/abs/2410.04485",
                "title": "AI Chatbots: Can They Fix Your Code?",
                "institute": "Moscow State University",
                "text": "This research explores the potential of conversational program repair using LLMs, specifically focusing on the SWE-Bench dataset. Unlike previous work that primarily focused on repetitive patch generation, this study investigates the effectiveness of a conversational approach where the LLM receives feedback on test failures during the repair process.",
                "paper-title": "Exploring the Potential of Conversational Test Suite Based Program Repair on SWE-bench",
                "image-path": "flux_paper_image/2410.04485_1728496388.png"
            },

            {
                "startTime": "32:55",
                "arxivId": "2410.03768",
                "arxivLink": "https://arxiv.org/abs/2410.03768",
                "title": "LLMs Hiding Secrets in Plain Sight: Steganographic Collusion Exposed!",
                "institute": "LASR Labs, University College London, University of Amsterdam...",
                "text": "This research demonstrates that robust steganographic collusion in LLMs can arise indirectly from optimization pressure, unlike previous work that focused on predefined steganographic codes or prompting LLMs to devise codes.",
                "paper-title": "Hidden in Plain Text: Emergence&Mitigation of Steganographic Collusion in LLMs",
                "image-path": "flux_paper_image/2410.03768_1728495775.png"
            },

            {
                "startTime": "33:29",
                "arxivId": "2410.04498",
                "arxivLink": "https://arxiv.org/abs/2410.04498",
                "title": "RL's Memory Makeover: How AI Learns From Both Wins and Fails",
                "institute": "Peking University",
                "text": "This research introduces AdaMemento, a new RL framework that utilizes both successful and failed experiences to refine its policy. Unlike previous methods that solely focus on positive experiences, AdaMemento incorporates a memory-reflection module that learns from both successes and failures, enabling more accurate prediction of trajectories and confidence levels.",
                "paper-title": "AdaMemento: Adaptive Memory-Assisted Policy Optimization for Reinforcement Learning",
                "image-path": "flux_paper_image/2410.04498_1728497043.png"
            },

            {
                "startTime": "33:52",
                "arxivId": "2410.04135",
                "arxivLink": "https://arxiv.org/abs/2410.04135",
                "title": "IceCloudNet: Turning Satellite Snapshots into 3D Cloud Movies!",
                "institute": "ETH Zurich",
                "text": "This research uses machine learning to combine high-resolution satellite images with vertical cloud profiles, creating a 3D dataset of cloud ice properties with unprecedented temporal resolution. This approach differs from previous work by fusing data from different satellite instruments and leveraging the strengths of both.",
                "paper-title": "IceCloudNet: 3D reconstruction of cloud ice from Meteosat SEVIRI",
                "image-path": "flux_paper_image/2410.04135_1728496844.png"
            },

            {
                "startTime": "34:15",
                "arxivId": "2410.03791",
                "arxivLink": "https://arxiv.org/abs/2410.03791",
                "title": "AI Voices: So Convincing, You Can't Tell Fake From Real!",
                "institute": "UC Berkeley",
                "text": "This study expands on previous research by using state-of-the-art voice cloning technology, increasing the number of speakers to over 200, and examining how different tasks (identity and naturalness) impact our ability to distinguish AI-powered voices.",
                "paper-title": "People are poorly equipped to detect AI-powered voice clones",
                "image-path": "flux_paper_image/2410.03791_1728495374.png"
            },

            {
                "startTime": "34:32",
                "arxivId": "2410.04309",
                "arxivLink": "https://arxiv.org/abs/2410.04309",
                "title": "Pollution Hotspots: Hidden in Plain Sight?",
                "institute": "New York University, Google Research, Intel Corporation...",
                "text": "This research augments existing public sensor networks with low-cost sensors to uncover hidden pollution hotspots, demonstrating the limitations of sparse sensor networks and proposing a space-time kriging approach for more accurate hotspot identification.",
                "paper-title": "Discovering Hidden Pollution Hotspots Using Sparse Sensor Measurements",
                "image-path": "flux_paper_image/2410.04309_1728496722.png"
            },

            {
                "startTime": "34:56",
                "arxivId": "2410.03756",
                "arxivLink": "https://arxiv.org/abs/2410.03756",
                "title": "Building Brains: AI Learns to Save Energy (and the Planet!)",
                "institute": "Google",
                "text": "This research introduces the SmartBuildingsControlSuite, an open-source dataset and simulator for training AI agents to optimize energy consumption in commercial buildings. Unlike previous work that relies on proprietary data or expensive simulations, this suite provides real-world data and a calibrated simulator, enabling more accessible and scalable research.",
                "paper-title": "Real-World Data and Calibrated Simulation Suite for Offline Training of Reinforcement Learning Agents to Optimize Energy and Emission in Buildings for Environmental Sustainability",
                "image-path": "flux_paper_image/2410.03756_1728495231.png"
            },

            {
                "startTime": "35:24",
                "arxivId": "2410.04383",
                "arxivLink": "https://arxiv.org/abs/2410.04383",
                "title": "BrainCodec: Compressing Brain Scans for Smarter AI!",
                "institute": "University of Tokyo",
                "text": "This research proposes BrainCodec, a novel fMRI codec inspired by neural audio codecs, which uses a technique called Residual Vector Quantization (RVQ) to compress fMRI data. This differs from previous work that used continuous value-based compression methods like VAEs.",
                "paper-title": "BrainCodec: Neural fMRI codec for the decoding of cognitive brain states",
                "image-path": "flux_paper_image/2410.04383_1728497415.png"
            },

            {
                "startTime": "35:45",
                "arxivId": "2410.04253",
                "arxivLink": "https://arxiv.org/abs/2410.04253",
                "title": "AI Explanations: Not Just Why, But Why This, Not That!",
                "institute": "Harvard University, University of Massachusetts Amherst",
                "text": "This research introduces a new framework for generating contrastive explanations that compare an AI's decision to a predicted human response, highlighting the differences between the two. This approach differs from previous work that focuses on explaining the AI's decision in isolation, without considering the user's perspective.",
                "paper-title": "Contrastive Explanations That Anticipate Human Misconceptions Can Improve Human Decision-Making Skills",
                "image-path": "flux_paper_image/2410.04253_1728496859.png"
            },

            {
                "startTime": "36:09",
                "arxivId": "2410.04263",
                "arxivLink": "https://arxiv.org/abs/2410.04263",
                "title": "DeFoG: Graph Generation Gets a Flow-Based Makeover!",
                "institute": "\u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne",
                "text": "This paper introduces DeFoG, a novel graph generation framework that leverages discrete flow matching. Unlike diffusion models, DeFoG decouples the training and sampling stages, allowing for more efficient optimization of model performance.",
                "paper-title": "DeFoG: Discrete Flow Matching for Graph Generation",
                "image-path": "flux_paper_image/2410.04263_1728497106.png"
            },

            {
                "startTime": "36:23",
                "arxivId": "2410.04260",
                "arxivLink": "https://arxiv.org/abs/2410.04260",
                "title": "Safe Set Expansion: A Pareto-Perfect Solution for Input-Constrained Systems",
                "institute": "UC Berkeley",
                "text": "This research introduces the Pareto Control Barrier Function (PCBF) algorithm, which maximizes the inner safe set of dynamical systems under input constraints. Unlike previous methods that often fail to account for realistic input limitations, PCBF leverages the Pareto multi-task learning framework to balance safety and safe set volume.",
                "paper-title": "Pareto Control Barrier Function for Inner Safe Set Maximization Under Input Constraints",
                "image-path": "flux_paper_image/2410.04260_1728497266.png"
            },

            {
                "startTime": "36:50",
                "arxivId": "2410.04460",
                "arxivLink": "https://arxiv.org/abs/2410.04460",
                "title": "AI Predicts Brain Fluid Flow, Fewer Scans Needed!",
                "institute": "ETH Zurich",
                "text": "This research uses a U-net deep learning model to predict the distribution of a cerebrospinal fluid (CSF) tracer in the brain, potentially reducing the number of MRI scans needed for clinical analysis. Unlike previous work that relied on complex mathematical models or specific assumptions, this approach leverages data-driven machine learning to predict CSF flow patterns.",
                "paper-title": "U-net based prediction of cerebrospinal fluid distribution and ventricular reflux grading",
                "image-path": "flux_paper_image/2410.04460_1728496703.png"
            },

            {
                "startTime": "37:19",
                "arxivId": "2410.04422",
                "arxivLink": "https://arxiv.org/abs/2410.04422",
                "title": "LLMs: Long Context, Short Attention Span?",
                "institute": "Tsinghua University",
                "text": "This research delves into the specific challenges faced by long-context language models (LCLMs) when tackling complex tasks, identifying two key factors: multi-matching retrieval and logic-based retrieval. The paper goes beyond simply observing these difficulties and explores the underlying reason for their persistence, proposing the concept of \"hyper-multi-step\" problems.",
                "paper-title": "Hyper-multi-step: The Truth Behind Difficult Long-context Tasks",
                "image-path": "flux_paper_image/2410.04422_1728496797.png"
            },

            {
                "startTime": "37:42",
                "arxivId": "2410.04261",
                "arxivLink": "https://arxiv.org/abs/2410.04261",
                "title": "Spacecraft Landing: Diffusion Models Make the Descent a Breeze!",
                "institute": "MIT",
                "text": "This research introduces TrajDiffuser, a diffusion-based trajectory generator for spacecraft powered descent guidance. Unlike previous AI models that generate trajectories sequentially, TrajDiffuser generates the entire trajectory concurrently, improving stability and allowing for multi-modal distributions.",
                "paper-title": "Compositional Diffusion Models for Powered Descent Trajectory Generation with Flexible Constraints",
                "image-path": "flux_paper_image/2410.04261_1728495901.png"
            },

            {
                "startTime": "38:01",
                "arxivId": "2410.04201",
                "arxivLink": "https://arxiv.org/abs/2410.04201",
                "title": "Idempotent Test-Time Training: Making Models Forget What They Don't Know!",
                "institute": "\u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne, Bilkent University, Nvidia...",
                "text": "This paper introduces Idempotent Test-Time Training (IT3), a novel approach to addressing distribution shift. Unlike previous Test-Time Training (TTT) methods that rely on domain-specific auxiliary tasks, IT3 leverages the universal property of idempotence, a mathematical concept that ensures repeated application of an operator yields the same result as a single application.",
                "paper-title": "IT$^3$: Idempotent Test-Time Training",
                "image-path": "flux_paper_image/2410.04201_1728495654.png"
            },

            {
                "startTime": "38:31",
                "arxivId": "2410.04445",
                "arxivLink": "https://arxiv.org/abs/2410.04445",
                "title": "X-Ray Vision: New AI Technique Makes Cephalometric Landmark Detection More Accurate!",
                "institute": "University of Oxford",
                "text": "This research introduces a domain alignment strategy for cephalometric landmark detection, which involves a regional facial extraction module and an X-ray artefact augmentation procedure. This approach aims to improve the model's generalizability to unseen data from different imaging protocols.",
                "paper-title": "Optimising for the Unknown: Domain Alignment for Cephalometric Landmark Detection",
                "image-path": "flux_paper_image/2410.04445_1728495565.png"
            },

            {
                "startTime": "38:56",
                "arxivId": "2410.04264",
                "arxivLink": "https://arxiv.org/abs/2410.04264",
                "title": "Deep Learning's Secret Weapon: Unmasking the Minimal Feature Regime",
                "institute": "University of Oxford, Seoul National University, UC Berkeley",
                "text": "This research introduces a new method for analyzing feature learning in deep neural networks (DNNs) by decomposing them into a forward feature map and a final linear layer. The authors then diagonalize the forward feature map with respect to the gradient descent operator and track feature learning by measuring how the eigenfunctions and eigenvalues of the feature map change during training.",
                "paper-title": "Visualising Feature Learning in Deep Neural Networks by Diagonalizing the Forward Feature Map",
                "image-path": "flux_paper_image/2410.04264_1728496695.png"
            }
    ],
    "stats": {
        "num_pick": 98,
        "num_total": 384,
    },
    "audio": "https://d2irtorupa9e8g.cloudfront.net/daily_podcast/202410091314_audio.mp3"
}