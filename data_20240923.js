
daily_data = {
    "date": "2024-09-23",
    "tweets": [
            {
                "startTime": "01:03",
                "arxivId": "2409.13430",
                "arxivLink": "https://arxiv.org/abs/2409.13430",
                "title": "Occupancy Prediction Gets a Time Machine: New Research Uses Temporal Fusion to See Through Walls!",
                "institute": "Tsinghua University",
                "text": "This research introduces CVT-Occ, a novel approach that leverages temporal fusion through the geometric correspondence of voxels over time to improve the accuracy of 3D occupancy predictions. Unlike previous methods that primarily rely on warping and concatenating features, CVT-Occ explicitly utilizes parallax cues from historical observations to refine the depth of 3D voxels.",
                "paper-title": "CVT-Occ: Cost Volume Temporal Fusion for 3D Occupancy Prediction",
                "image-path": "flux_paper_image/2409.13430_1727119489.png"
            },

            {
                "startTime": "01:30",
                "arxivId": "2409.13426",
                "arxivLink": "https://arxiv.org/abs/2409.13426",
                "title": "Smart Glasses, Dumb Body? New AI Makes Your Virtual Self Move!",
                "institute": "University of T\u00fcbingen, Max Planck Institute for Informatics, Stanford University...",
                "text": "This research introduces HMD2, a system that generates full-body motion from a single head-mounted device, unlike previous methods that rely on multiple sensors or offline processing. HMD2 utilizes a multi-modal conditional motion diffusion model, incorporating a time-series backbone for temporal coherence and autoregressive in-painting for online inference with minimal latency.",
                "paper-title": "HMD$^2$: Environment-aware Motion Generation from Single Egocentric Head-Mounted Device",
                "image-path": "flux_paper_image/2409.13426_1727119054.png"
            },

            {
                "startTime": "02:00",
                "arxivId": "2409.13038",
                "arxivLink": "https://arxiv.org/abs/2409.13038",
                "title": "Radiology Reports: Ontology-Normalized Evaluation for AI-Generated Head CTs",
                "institute": "Harvard University, NYU Langone Health, Columbia University...",
                "text": "This research introduces HeadCT-ONE, a metric for evaluating AI-generated head CT reports that uses ontology normalization to address the variability in radiological language. This approach differs from previous work by incorporating a standardized framework for medical terminology, enabling fine-grained categorization of concepts and allowing for customizable weighting of different entities.",
                "paper-title": "HeadCT-ONE: Enabling Granular and Controllable Automated Evaluation of Head CT Radiology Report Generation",
                "image-path": "flux_paper_image/2409.13038_1727119265.png"
            },

            {
                "startTime": "02:21",
                "arxivId": "2409.13222",
                "arxivLink": "https://arxiv.org/abs/2409.13222",
                "title": "Watermarking 3D Scenes: A Gaussian Splatting Surprise!",
                "institute": "Korea University, Google Research, University of Alberta",
                "text": "This paper introduces a novel watermarking method specifically designed for 3D Gaussian splatting, a popular technique for representing 3D scenes. Unlike previous methods that embed watermarks after rendering, this approach integrates the watermark directly into the 3D model during the training process.",
                "paper-title": "3D-GSW: 3D Gaussian Splatting Watermark for Protecting Copyrights in Radiance Fields",
                "image-path": "flux_paper_image/2409.13222_1727118967.png"
            },

            {
                "startTime": "02:49",
                "arxivId": "2409.13175",
                "arxivLink": "https://arxiv.org/abs/2409.13175",
                "title": "Cache Allocation: A Reinforcement Learning Framework for Recommender Systems That's Actually Smart!",
                "institute": "Kuaishou Technology, Tsinghua University",
                "text": "This research tackles the challenge of allocating real-time and cached recommendations in large-scale recommender systems by considering the value-strategy dependency and the streaming allocation problem. Unlike previous work, it proposes a two-stage framework that uses reinforcement learning to estimate the value of different cache choices and then allocates them in a streaming manner.",
                "paper-title": "RPAF: A Reinforcement Prediction-Allocation Framework for Cache Allocation in Large-Scale Recommender Systems",
                "image-path": "flux_paper_image/2409.13175_1727120011.png"
            },

            {
                "startTime": "03:18",
                "arxivId": "2409.13523",
                "arxivLink": "https://arxiv.org/abs/2409.13523",
                "title": "EMMeTT: Training a Speech-to-Text Model That Doesn't Forget How to Read!",
                "institute": "Nvidia",
                "text": "This research proposes a novel training framework called EMMeTT for multimodal machine translation, specifically focusing on joint training of speech and text translation. The key innovation lies in its data sampling strategies and 2D bucketing scheme, which aim to improve training efficiency and prevent catastrophic forgetting of text translation capabilities when extending to speech.",
                "paper-title": "EMMeTT: Efficient Multimodal Machine Translation Training",
                "image-path": "flux_paper_image/2409.13523_1727119744.png"
            },

            {
                "startTime": "03:38",
                "arxivId": "2409.13065",
                "arxivLink": "https://arxiv.org/abs/2409.13065",
                "title": "Multi-Agent Vulcan: When Robots Team Up to Find Treasure!",
                "institute": "MIT",
                "text": "This research extends previous work on single-agent adaptive sampling to a multi-agent setting, addressing challenges like redundant observations and limited communication.",
                "paper-title": "Multi-Agent Vulcan: An Information-Driven Multi-Agent Path Finding Approach",
                "image-path": "flux_paper_image/2409.13065_1727119657.png"
            },

            {
                "startTime": "04:01",
                "arxivId": "2409.13652",
                "arxivLink": "https://arxiv.org/abs/2409.13652",
                "title": "Pruning Transformers: Outlier-Aware Compression for a Speedier Brain!",
                "institute": "University of Toronto",
                "text": "This research introduces OATS, a method for compressing large transformer models without retraining. Unlike previous methods, OATS leverages the second moment of input embeddings to decompose model weights into sparse and low-rank matrices.",
                "paper-title": "OATS: Outlier-Aware Pruning Through Sparse and Low Rank Decomposition",
                "image-path": "flux_paper_image/2409.13652_1727119569.png"
            },

            {
                "startTime": "04:21",
                "arxivId": "2409.13689",
                "arxivLink": "https://arxiv.org/abs/2409.13689",
                "title": "Audio-Visual Alignment: When Your Ears and Eyes Finally Agree!",
                "institute": "Tampere University, University of Oxford",
                "text": "This research introduces V-AURA, an autoregressive model that generates audio aligned with video, unlike previous diffusion and RFM-based models. V-AURA uses a high-framerate visual feature extractor and a cross-modal audio-visual feature fusion strategy to achieve precise temporal alignment.",
                "paper-title": "Temporally Aligned Audio for Video with Autoregression",
                "image-path": "flux_paper_image/2409.13689_1727119315.png"
            },

            {
                "startTime": "04:42",
                "arxivId": "2409.13551",
                "arxivLink": "https://arxiv.org/abs/2409.13551",
                "title": "Data Wrangling: From Notebook Chaos to Code Nirvana!",
                "institute": "Chinese University of Hong Kong, Sun Yat-sen University, Microsoft",
                "text": "This research focuses on generating data wrangling code within the context of computational notebooks, incorporating code, textual, and data context. Unlike previous work that primarily relies on textual or input-output examples, this study emphasizes the importance of integrating all three modalities for more accurate code generation.",
                "paper-title": "Contextualized Data-Wrangling Code Generation in Computational Notebooks",
                "image-path": "flux_paper_image/2409.13551_1727118882.png"
            },

            {
                "startTime": "05:11",
                "arxivId": "2409.13213",
                "arxivLink": "https://arxiv.org/abs/2409.13213",
                "title": "Malware Classification: A Few-Shot Learning Recipe for a Safer Internet",
                "institute": "Vanderbilt University, Stanford University",
                "text": "This research introduces a novel data augmentation technique for malware classification that leverages domain knowledge to generate synthetic malware samples. Unlike previous work that relies on image-based augmentation, this approach focuses on manipulating static features of malware binaries in a more semantically meaningful way.",
                "paper-title": "MalMixer: Few-Shot Malware Classification with Retrieval-Augmented Semi-Supervised Learning",
                "image-path": "flux_paper_image/2409.13213_1727119828.png"
            },

            {
                "startTime": "05:39",
                "arxivId": "2409.13507",
                "arxivLink": "https://arxiv.org/abs/2409.13507",
                "title": "Singing Sketches: How Your Voice Can Paint Soundscapes",
                "institute": "MIT",
                "text": "This research explores \"non-phonorealistic\" sound representation, focusing on how people use vocal imitation to communicate the essence of sounds rather than replicating them perfectly. Unlike previous work on realistic sound synthesis, this study investigates the cognitive processes behind auditory abstraction.",
                "paper-title": "Sketching With Your Voice:"Non-Phonorealistic"Rendering of Sounds via Vocal Imitation",
                "image-path": "flux_paper_image/2409.13507_1727119928.png"
            },

            {
                "startTime": "06:06",
                "arxivId": "2409.12964",
                "arxivLink": "https://arxiv.org/abs/2409.12964",
                "title": "OpenRANet: Deep Learning Gets a Power Boost with Convex Optimization!",
                "institute": "City University of Hong Kong, Nanyang Technological University, Nanjing University of Aeronautics and Astronautics...",
                "text": "This research proposes OpenRANet, a deep learning model that integrates convex optimization layers to address the nonconvex problem of joint subcarrier and power allocation in Open RAN systems. This approach differs from previous work by combining machine learning techniques with iterative optimization algorithms, leading to improved constraint adherence, solution accuracy, and computational efficiency.",
                "paper-title": "OpenRANet: Neuralized Spectrum Access by Joint Subcarrier and Power Allocation with Optimization-based Deep Learning",
                "image-path": "flux_paper_image/2409.12964_1727119574.png"
            },

            {
                "startTime": "06:35",
                "arxivId": "2409.12993",
                "arxivLink": "https://arxiv.org/abs/2409.12993",
                "title": "Verilog Code Generation: Fixing Tiny Mistakes for Big Gains!",
                "institute": "Nvidia",
                "text": "This research focuses on improving the quality of synthetic data used to train LLMs for Verilog code generation. It introduces two novel techniques: generating correct-by-construction data for non-textual representations and creating a targeted code repair dataset to address common \"minor\" errors.",
                "paper-title": "CraftRTL: High-quality Synthetic Data Generation for Verilog Code Models with Correct-by-Construction Non-Textual Representations and Targeted Code Repair",
                "image-path": "flux_paper_image/2409.12993_1727119856.png"
            },

            {
                "startTime": "06:55",
                "arxivId": "2409.13669",
                "arxivLink": "https://arxiv.org/abs/2409.13669",
                "title": "Brain Waves: The Secret to Super-Smart Memories?",
                "institute": "Harvard University, Western University, Salk Institute for Biological Studies...",
                "text": "This paper proposes a new \"spacetime\" perspective on neural computation, arguing that structured spatiotemporal dynamics, like traveling waves, are not just noise but a fundamental mechanism for encoding symmetries and improving generalization and working memory. This differs from previous work that focused primarily on single-neuron selectivity and static representations.",
                "paper-title": "A Spacetime Perspective on Dynamical Computation in Neural Information Processing Systems",
                "image-path": "flux_paper_image/2409.13669_1727119279.png"
            },

            {
                "startTime": "07:21",
                "arxivId": "2409.13156",
                "arxivLink": "https://arxiv.org/abs/2409.13156",
                "title": "Reward Models: Stop Hacking, Start Learning!",
                "institute": "Google",
                "text": "This research introduces a causal framework for reward model training, which aims to disentangle contextual preference signals from irrelevant artifacts. Unlike previous work that focuses on specific artifacts like length, this approach tackles a broader range of potential biases by augmenting the training data with counterfactual examples.",
                "paper-title": "RRM: Robust Reward Model Training Mitigates Reward Hacking",
                "image-path": "flux_paper_image/2409.13156_1727119363.png"
            },

            {
                "startTime": "07:42",
                "arxivId": "2409.13082",
                "arxivLink": "https://arxiv.org/abs/2409.13082",
                "title": "Rust's Proof-Generating Pal: AutoVerus Makes Verification a Breeze!",
                "institute": "University of Illinois, Columbia University, UC Irvine...",
                "text": "This research focuses on automatically generating correctness proofs for Rust code using a large language model (LLM) specifically for the Verus verification tool. Unlike previous work that focuses on proof-oriented languages like LEAN or F*, this paper tackles the unique challenges of Verus, which directly works on Rust code and has a limited amount of training data available.",
                "paper-title": "AutoVerus: Automated Proof Generation for Rust Code",
                "image-path": "flux_paper_image/2409.13082_1727119386.png"
            },

            {
                "startTime": "08:09",
                "arxivId": "2409.13609",
                "arxivLink": "https://arxiv.org/abs/2409.13609",
                "title": "Tuning Up Vision: A New Trick for Understanding Images with Words",
                "institute": "Tsinghua University, National University of Defense Technology, Hefei University of Technology...",
                "text": "This paper proposes a new framework called MaPPER for referring expression comprehension (REC). Unlike previous methods that fine-tune the entire model, MaPPER uses a parameter-efficient approach, focusing on updating only a small subset of parameters. This approach is more efficient and less computationally expensive.",
                "paper-title": "MaPPER: Multimodal Prior-guided Parameter Efficient Tuning for Referring Expression Comprehension",
                "image-path": "flux_paper_image/2409.13609_1727119355.png"
            },

            {
                "startTime": "08:32",
                "arxivId": "2409.13464",
                "arxivLink": "https://arxiv.org/abs/2409.13464",
                "title": "Compressed Images? No Problem! New AI Makes Salient Object Detection Robust",
                "institute": "Peking University",
                "text": "This research focuses on salient object detection (SOD) for compressed images, a less explored area. It proposes a hybrid prior learning strategy to improve the robustness of SOD models by mimicking feature learning from clean images.",
                "paper-title": "Robust Salient Object Detection on Compressed Images Using Convolutional Neural Networks",
                "image-path": "flux_paper_image/2409.13464_1727119247.png"
            },

            {
                "startTime": "08:51",
                "arxivId": "2409.13241",
                "arxivLink": "https://arxiv.org/abs/2409.13241",
                "title": "Deep Ritz Method: Cracking the Code of Strain Localization",
                "institute": "University of Cuenca, California Institute of Technology",
                "text": "This research explores the Deep Ritz Method (DRM) for modeling strain localization in solids as a sharp discontinuity in the displacement field. Unlike previous approaches that rely on regularizing gradients or introducing new fields, this method directly incorporates discontinuities into the kinematics using a customized activation function within an Artificial Neural Network (ANN).",
                "paper-title": "Exploring the ability of the Deep Ritz Method to model strain localization as a sharp discontinuity",
                "image-path": "flux_paper_image/2409.13241_1727118699.png"
            },

            {
                "startTime": "09:21",
                "arxivId": "2409.13347",
                "arxivLink": "https://arxiv.org/abs/2409.13347",
                "title": "Virtual Whiteboard, Real Hands: New Tech Tracks Your Fingers for Remote Collaboration!",
                "institute": "Microsoft",
                "text": "This research introduces a real-time method for tracking 3D hand poses from capacitive touchscreen images, unlike previous methods that either require bulky cameras or only track static hand poses.",
                "paper-title": "V-Hands: Touchscreen-based Hand Tracking for Remote Whiteboard Interaction",
                "image-path": "flux_paper_image/2409.13347_1727119638.png"
            },

            {
                "startTime": "09:41",
                "arxivId": "2409.13171",
                "arxivLink": "https://arxiv.org/abs/2409.13171",
                "title": "Low-Res to High-Res: AI Makes 3D Printing See Clearly",
                "institute": "Carnegie Mellon University, Sandia National Laboratories",
                "text": "This research uses a generative diffusion model to upscale low-resolution images of a 3D printing process to high-resolution, enabling more detailed defect detection. This approach differs from previous work by leveraging a latent space for efficiency and incorporating a pre-trained segmentation model for 3D reconstruction.",
                "paper-title": "Deep Learning based Optical Image Super-Resolution via Generative Diffusion Models for Layerwise in-situ LPBF Monitoring",
                "image-path": "flux_paper_image/2409.13171_1727119465.png"
            },

            {
                "startTime": "10:03",
                "arxivId": "2409.13346",
                "arxivLink": "https://arxiv.org/abs/2409.13346",
                "title": "Imagine Yourself: Personalized Images Without the Tuning Blues!",
                "institute": "Meta",
                "text": "This research proposes a tuning-free approach to personalized image generation, unlike previous methods that require individual model adjustments for each user.",
                "paper-title": "Imagine yourself: Tuning-Free Personalized Image Generation",
                "image-path": "flux_paper_image/2409.13346_1727119294.png"
            },

            {
                "startTime": "10:31",
                "arxivId": "2409.13582",
                "arxivLink": "https://arxiv.org/abs/2409.13582",
                "title": "Speech Dysfluency Detection: Tokenizing the Stutters and Slips",
                "institute": "UC Berkeley",
                "text": "This research proposes a novel token-based approach to speech dysfluency detection, contrasting with the prevalent time-based methods. Instead of focusing on the temporal location of dysfluencies, this method tokenizes dysfluencies and models the detection problem as an automatic speech recognition (ASR) task.",
                "paper-title": "Time and Tokens: Benchmarking End-to-End Speech Dysfluency Detection",
                "image-path": "flux_paper_image/2409.13582_1727119897.png"
            },

            {
                "startTime": "10:54",
                "arxivId": "2409.13074",
                "arxivLink": "https://arxiv.org/abs/2409.13074",
                "title": "Diffusion Guidance: Not What You Think, But Still Kinda Cool",
                "institute": "Duke University, MIT, Harvard University...",
                "text": "This paper rigorously proves that diffusion guidance, a popular technique for controlling diffusion models, doesn't actually sample from the intended distribution. It provides a fine-grained analysis of the dynamics of guidance in two simple settings: mixtures of compactly supported distributions and mixtures of Gaussians.",
                "paper-title": "What does guidance do? A fine-grained analysis in a simple setting",
                "image-path": "flux_paper_image/2409.13074_1727119812.png"
            },

            {
                "startTime": "11:18",
                "arxivId": "2409.13167",
                "arxivLink": "https://arxiv.org/abs/2409.13167",
                "title": "E-Noses Get a Multi-Source Makeover: Unsupervised Learning for Drift-Proof Gas Detection",
                "institute": "Nanyang Technological University, Tongji University",
                "text": "This research introduces an unsupervised attention-based multi-source domain adaptation framework (AMDS-PFFA) for gas identification with drift compensation in electronic nose systems. Unlike previous work that focuses on domain-invariant features, AMDS-PFFA leverages both shared and private features from multiple source domains to improve accuracy and mitigate drift in the target domain.",
                "paper-title": "Unsupervised Attention-Based Multi-Source Domain Adaptation Framework for Drift Compensation in Electronic Nose Systems",
                "image-path": "flux_paper_image/2409.13167_1727119088.png"
            },

            {
                "startTime": "11:43",
                "arxivId": "2409.13138",
                "arxivLink": "https://arxiv.org/abs/2409.13138",
                "title": "HLS Design Space Exploration: A Tale of Two Designs!",
                "institute": "Nvidia, UC Los Angeles",
                "text": "This research introduces a novel approach to design space exploration (DSE) in high-level synthesis (HLS) that leverages comparative learning. Unlike traditional methods that focus on predicting performance for individual designs, this approach learns to compare designs directly, focusing on the most informative differences between them.",
                "paper-title": "Learning to Compare Hardware Designs for High-Level Synthesis",
                "image-path": "flux_paper_image/2409.13138_1727118778.png"
            },

            {
                "startTime": "12:11",
                "arxivId": "2409.13153",
                "arxivLink": "https://arxiv.org/abs/2409.13153",
                "title": "Neuro-Symbolic AI: It's Not Just About Brains, It's About Brawn Too!",
                "institute": "Georgia Institute of Technology, University of California Berkeley, IBM Research",
                "text": "This research delves into the computational demands of neuro-symbolic AI, going beyond just algorithm performance and exploring the hardware implications. It systematically categorizes neuro-symbolic AI algorithms and then analyzes their performance on various platforms, including CPUs, GPUs, and edge SoCs.",
                "paper-title": "Towards Efficient Neuro-Symbolic AI: From Workload Characterization to Hardware Architecture",
                "image-path": "flux_paper_image/2409.13153_1727119008.png"
            },

            {
                "startTime": "12:33",
                "arxivId": "2409.13244",
                "arxivLink": "https://arxiv.org/abs/2409.13244",
                "title": "Robots with Foresight: Navigating Crowds with Precognition!",
                "institute": "Hong Kong University of Science and Technology",
                "text": "This research introduces a new framework for social navigation that incorporates trajectory prediction, allowing robots to anticipate human movements and avoid collisions more effectively. Unlike previous methods that rely on current human positions, this approach explicitly predicts future trajectories, enabling proactive collision avoidance and social compliance.",
                "paper-title": "From Cognition to Precognition: A Future-Aware Framework for Social Navigation",
                "image-path": "flux_paper_image/2409.13244_1727119752.png"
            },

            {
                "startTime": "12:57",
                "arxivId": "2409.13221",
                "arxivLink": "https://arxiv.org/abs/2409.13221",
                "title": "RLHFuse: Fusing LLMs for Faster Training, No More Bubbles!",
                "institute": "Peking University, StepFun",
                "text": "This research proposes a new approach to RLHF training by breaking down tasks into smaller subtasks, enabling inter- and intra-stage fusion. This differs from previous work that focused on optimizing individual tasks without considering their internal structure.",
                "paper-title": "RLHFuse: Efficient RLHF Training for Large Language Models with Inter- and Intra-Stage Fusion",
                "image-path": "flux_paper_image/2409.13221_1727120049.png"
            },

            {
                "startTime": "13:20",
                "arxivId": "2409.13321",
                "arxivLink": "https://arxiv.org/abs/2409.13321",
                "title": "Tiny AI, Big Results: New Model Makes Chest X-Ray Reports a Breeze!",
                "institute": "University College London, University of Oxford",
                "text": "This research introduces a new training method called Re3 Training, which simulates the cognitive development of radiologists. It also proposes a data synthesis method called RADEX, which generates a high-quality and diverse training corpus for chest X-ray report automation. This approach differs from previous work by focusing on training a smaller, more efficient model that can be used in resource-constrained environments.",
                "paper-title": "SLaVA-CXR: Small Language and Vision Assistant for Chest X-ray Report Automation",
                "image-path": "flux_paper_image/2409.13321_1727119368.png"
            },

            {
                "startTime": "13:44",
                "arxivId": "2409.13317",
                "arxivLink": "https://arxiv.org/abs/2409.13317",
                "title": "Japanese LLMs Get a Medical Checkup: JMedBench Benchmark Unveiled!",
                "institute": "University of Tokyo, National Institute of Informatics",
                "text": "This research introduces JMedBench, a new benchmark specifically designed for evaluating Japanese biomedical large language models (LLMs). Unlike previous benchmarks that primarily focus on English or general domains, JMedBench includes a diverse set of Japanese biomedical datasets across five tasks, including multi-choice question-answering, named entity recognition, machine translation, document classification, and semantic text similarity.",
                "paper-title": "JMedBench: A Benchmark for Evaluating Japanese Biomedical Large Language Models",
                "image-path": "flux_paper_image/2409.13317_1727118830.png"
            },

            {
                "startTime": "14:06",
                "arxivId": "2409.13166",
                "arxivLink": "https://arxiv.org/abs/2409.13166",
                "title": "Modular Satellites: Building Brains and Bodies for Space!",
                "institute": "Tsinghua University, Beijing Institute of Technology",
                "text": "This research introduces a novel gradient-based approach to simultaneously optimize both the morphology and control of modular satellites, unlike previous work that relied on evolutionary algorithms.",
                "paper-title": "Morphology and Behavior Co-Optimization of Modular Satellites for Attitude Control",
                "image-path": "flux_paper_image/2409.13166_1727119167.png"
            },

            {
                "startTime": "14:30",
                "arxivId": "2409.13262",
                "arxivLink": "https://arxiv.org/abs/2409.13262",
                "title": "Pinyin Power: How Chinese Speech Recognition Got a Pronunciation Boost",
                "institute": "Huawei",
                "text": "This research introduces Pinyin-enhanced Generative Error Correction (PY-GEC), which uses Pinyin, the phonetic representation of Mandarin Chinese, as supplementary information to improve Chinese Automatic Speech Recognition (ASR) error correction. This approach differs from previous work by exclusively utilizing the one-best hypothesis instead of the N-best hypotheses, employing pseudo ASR errors for model training rather than real ASR errors, and incorporating multitask training.",
                "paper-title": "Large Language Model Should Understand Pinyin for Chinese ASR Error Correction",
                "image-path": "flux_paper_image/2409.13262_1727118838.png"
            },

            {
                "startTime": "14:49",
                "arxivId": "2409.12979",
                "arxivLink": "https://arxiv.org/abs/2409.12979",
                "title": "Goodbye Shots, Hello Guidelines: A New Way to Prompt LLMs",
                "institute": "Fudan University, Microsoft Azure AI, Monash University",
                "text": "This research proposes a novel multi-agent framework called FGT to automatically learn task-specific guidelines from data, instead of relying on human-crafted examples or optimization trajectories.",
                "paper-title": "Can we only use guideline instead of shot in prompt?",
                "image-path": "flux_paper_image/2409.12979_1727119686.png"
            },

            {
                "startTime": "15:13",
                "arxivId": "2409.13532",
                "arxivLink": "https://arxiv.org/abs/2409.13532",
                "title": "MRI Magic: Synthesizing Brain Scans with a Physics-Informed Twist!",
                "institute": "Technical University of Munich, Munich Center for Machine Learning, Stanford University",
                "text": "This research introduces a physics-informed generative model for multimodal brain MRI synthesis. Unlike previous models that are limited to fixed sets of modalities, this approach can generate a variable number of modalities, even those not present in the original dataset.",
                "paper-title": "Physics-Informed Latent Diffusion for Multimodal Brain MRI Synthesis",
                "image-path": "flux_paper_image/2409.13532_1727119271.png"
            },

            {
                "startTime": "15:32",
                "arxivId": "2409.13626",
                "arxivLink": "https://arxiv.org/abs/2409.13626",
                "title": "Brain Tumor Segmentation Gets a GSConv-ECA Boost!",
                "institute": "George Washington University, University of California Berkeley",
                "text": "This research introduces a novel approach to brain tumor segmentation by incorporating the GSConv module and ECA attention mechanism into the U-Net architecture. This combination aims to improve feature extraction and utilization, leading to more accurate segmentation results.",
                "paper-title": "Improved Unet brain tumor image segmentation based on GSConv module and ECA attention mechanism",
                "image-path": "flux_paper_image/2409.13626_1727119413.png"
            },

            {
                "startTime": "15:51",
                "arxivId": "2409.13095",
                "arxivLink": "https://arxiv.org/abs/2409.13095",
                "title": "Kids Say the Darndest Things: AI Learns to Understand Them on the Fly!",
                "institute": "University of Southern California, Columbia University, Sara Technology Inc.",
                "text": "This research focuses on adapting pre-trained speech recognition models to individual children's speech at test time, rather than requiring extensive training data for each child. This approach uses unsupervised test-time adaptation (TTA) methods, which allows the model to learn from the child's speech during the recognition process without needing labeled data.",
                "paper-title": "Personalized Speech Recognition for Children with Test-Time Adaptation",
                "image-path": "flux_paper_image/2409.13095_1727119628.png"
            },

            {
                "startTime": "16:14",
                "arxivId": "2409.12965",
                "arxivLink": "https://arxiv.org/abs/2409.12965",
                "title": "Training AI with Light: A New Way to Build Super-Smart Brains!",
                "institute": "\u00c9cole Normale Sup\u00e9rieure",
                "text": "This research explores training large-scale neural networks using direct feedback alignment (DFA) implemented on an optical processing unit (OPU). Unlike traditional backpropagation, DFA uses a random projection of the error signal to update the network's parameters, enabling parallel processing. This approach is particularly well-suited for optical hardware, which excels at performing large-scale random matrix multiplications.",
                "paper-title": "Optical training of large-scale Transformers and deep neural networks with direct feedback alignment",
                "image-path": "flux_paper_image/2409.12965_1727119437.png"
            },

            {
                "startTime": "16:36",
                "arxivId": "2409.13598",
                "arxivLink": "https://arxiv.org/abs/2409.13598",
                "title": "PrithviWxC: The AI That's Got the Weather Forecast Down to a Science (and a Few Billion Parameters)",
                "institute": "IBM, National Aeronautics and Space Administration",
                "text": "This research introduces PrithviWxC, a foundation model for weather and climate applications, trained on a vast dataset of atmospheric variables. Unlike previous work that focused on task-specific models, PrithviWxC is designed to be adaptable to a range of downstream tasks, including forecasting, downscaling, and parameterization.",
                "paper-title": "Prithvi WxC: Foundation Model for Weather and Climate",
                "image-path": "flux_paper_image/2409.13598_1727118749.png"
            },

            {
                "startTime": "16:59",
                "arxivId": "2409.13312",
                "arxivLink": "https://arxiv.org/abs/2409.13312",
                "title": "Text Classification Gets a Graph Makeover: Prototypes Meet Attention!",
                "institute": "Drexel University, Tsinghua University",
                "text": "This research introduces GAProtoNet, a novel text classification model that uses multi-head graph attention to learn relationships between input text and prototype vectors. This approach differs from previous work by actively training prototype vectors through edge construction within a graph, rather than relying solely on heuristic distance metrics.",
                "paper-title": "GAProtoNet: A Multi-head Graph Attention-based Prototypical Network for Interpretable Text Classification",
                "image-path": "flux_paper_image/2409.13312_1727119228.png"
            },

            {
                "startTime": "17:21",
                "arxivId": "2409.13053",
                "arxivLink": "https://arxiv.org/abs/2409.13053",
                "title": "F1 Score for Time Series Anomaly Detection: A Fairer Fight!",
                "institute": "IBM",
                "text": "This research proposes a new point adjustment protocol called \"Balanced Point Adjustment\" (BA) for evaluating time-series anomaly detectors. Unlike previous methods, BA penalizes false positives and balances adjustments made for true positives, leading to a more accurate and fair evaluation.",
                "paper-title": "Towards Unbiased Evaluation of Time-series Anomaly Detector",
                "image-path": "flux_paper_image/2409.13053_1727119970.png"
            },

            {
                "startTime": "17:44",
                "arxivId": "2409.13210",
                "arxivLink": "https://arxiv.org/abs/2409.13210",
                "title": "Recommender Systems: Are You Really in Control?",
                "institute": "CMU, University of Texas at Austin",
                "text": "This research proposes a causal framework for auditing recommender systems, focusing on user agency. It introduces two new classes of metrics: reachability and stability, which measure a user's ability to influence their own and other users' recommendations. This differs from previous work by considering the multi-step dynamics of the recommendation process.",
                "paper-title": "A Unified Causal Framework for Auditing Recommender Systems for Ethical Concerns",
                "image-path": "flux_paper_image/2409.13210_1727119080.png"
            },

            {
                "startTime": "18:13",
                "arxivId": "2409.13155",
                "arxivLink": "https://arxiv.org/abs/2409.13155",
                "title": "Local Adam: Adaptive Optimization Gets a Speed Boost!",
                "institute": "UC Berkeley, MIT",
                "text": "This paper proves that distributed adaptive optimization algorithms with local updates can outperform their minibatch counterparts in terms of communication efficiency, particularly in convex and weakly convex settings. This is a novel finding, as previous research has not fully explored the theoretical benefits of local updates within adaptive methods.",
                "paper-title": "Convergence of Distributed Adaptive Optimization with Local Updates",
                "image-path": "flux_paper_image/2409.13155_1727119978.png"
            },

            {
                "startTime": "18:49",
                "arxivId": "2409.13035",
                "arxivLink": "https://arxiv.org/abs/2409.13035",
                "title": "Prompt Compression: Reinforcement Learning Makes LLMs Think Lean and Mean!",
                "institute": "Microsoft",
                "text": "This research proposes a novel task-aware prompt compression method using reinforcement learning (RL). Unlike previous methods that rely on task-agnostic approaches or expensive fine-tuning, TACO-RL leverages task-specific reward signals to guide the compression process, resulting in a more efficient and effective model.",
                "paper-title": "TACO-RL: Task Aware Prompt Compression Optimization with Reinforcement Learning",
                "image-path": "flux_paper_image/2409.13035_1727119380.png"
            },

            {
                "startTime": "19:09",
                "arxivId": "2409.13474",
                "arxivLink": "https://arxiv.org/abs/2409.13474",
                "title": "LLMs Forget Facts, But Not Their Sense of Humor: New Unlearning Method Keeps AI Chatty and Consistent",
                "institute": "University of Massachusetts, Microsoft",
                "text": "This research introduces a novel unlearning method called Alternate Preference Optimization (AltPO) that combines negative feedback with in-domain positive feedback to improve the effectiveness and stability of unlearning in large language models (LLMs). Unlike previous methods that rely solely on negative feedback, AltPO generates multiple plausible alternative answers to forgotten information, guiding the model towards more coherent and consistent responses.",
                "paper-title": "Alternate Preference Optimization for Unlearning Factual Knowledge in Large Language Models",
                "image-path": "flux_paper_image/2409.13474_1727119073.png"
            },

            {
                "startTime": "19:37",
                "arxivId": "2409.13133",
                "arxivLink": "https://arxiv.org/abs/2409.13133",
                "title": "Privacy-Preserving Machine Learning: Sharing Secrets Without Sharing Data",
                "institute": "Florida International University, University of Michigan",
                "text": "This research introduces a new privacy mechanism called CorBin-FL, which uses correlated binary stochastic quantization to achieve differential privacy in federated learning. This approach differs from previous work by utilizing shared common randomness among clients to coordinate their updates without compromising individual privacy.",
                "paper-title": "CorBin-FL: A Differentially Private Federated Learning Mechanism using Common Randomness",
                "image-path": "flux_paper_image/2409.13133_1727119805.png"
            },

            {
                "startTime": "19:59",
                "arxivId": "2409.13682",
                "arxivLink": "https://arxiv.org/abs/2409.13682",
                "title": "Robots with Memories: How AI is Giving Robots Long-Term Recall!",
                "institute": "University of Southern California, Nvidia",
                "text": "This research introduces ReMEmbR, a system that uses a retrieval-based LLM-agent to query a long-horizon memory of a robot's experiences. This differs from previous work that focused on short-term memory or fixed-size context windows.",
                "paper-title": "ReMEmbR: Building and Reasoning Over Long-Horizon Spatio-Temporal Memory for Robot Navigation",
                "image-path": "flux_paper_image/2409.13682_1727118980.png"
            },

            {
                "startTime": "20:23",
                "arxivId": "2409.13655",
                "arxivLink": "https://arxiv.org/abs/2409.13655",
                "title": "Ads Auction Tuning: A Mix-Master Approach to Finding the Sweet Spot",
                "institute": "Microsoft",
                "text": "This research proposes a novel approach to tuning ads auctions using a mixture distribution as the proposal distribution. Unlike previous methods that rely on single Gaussian distributions, this approach dynamically adjusts both the mixture distribution parameters and their mixing rates at each iteration, enhancing search diversity and efficiency.",
                "paper-title": "Adaptive Mixture Importance Sampling for Automated Ads Auction Tuning",
                "image-path": "flux_paper_image/2409.13655_1727119037.png"
            },

            {
                "startTime": "20:45",
                "arxivId": "2409.13108",
                "arxivLink": "https://arxiv.org/abs/2409.13108",
                "title": "RL's Regretful Heart: When AI Gets Lost in the Pixels",
                "institute": "Harvard University, Nokia Bell Labs",
                "text": "This paper introduces the concepts of \"recognition regret\" and \"decision regret\" to disentangle the sources of error in image-based reinforcement learning (RL) agents. This approach allows researchers to pinpoint whether the agent's problem lies in extracting relevant features from images or in making decisions based on those features.",
                "paper-title": "Disentangling Recognition and Decision Regrets in Image-Based Reinforcement Learning",
                "image-path": "flux_paper_image/2409.13108_1727119729.png"
            },

            {
                "startTime": "21:18",
                "arxivId": "2409.13589",
                "arxivLink": "https://arxiv.org/abs/2409.13589",
                "title": "MRI's Secret Sauce: Unlocking the Power of Frequency Domain Data!",
                "institute": "MIT",
                "text": "This research integrates k-space features, representing the frequency domain data in MRI scans, into a CNN model. This approach differs from previous work by directly incorporating frequency domain information, enhancing model interpretability and diagnostic accuracy.",
                "paper-title": "Analyzing the Effect of $k$-Space Features in MRI Classification Models",
                "image-path": "flux_paper_image/2409.13589_1727119651.png"
            },

            {
                "startTime": "21:37",
                "arxivId": "2409.13471",
                "arxivLink": "https://arxiv.org/abs/2409.13471",
                "title": "Brain's Got a New Trick: Learning by Mimicking!",
                "institute": "Caltech",
                "text": "This study proposes a new model of stimulus substitution in the cortex, using two-compartment neurons and mixed stimulus representations, which allows for learning a wide range of associations without task-specific parameter fine-tuning.",
                "paper-title": "Stimulus-to-Stimulus Learning in RNNs with Cortical Inductive Biases",
                "image-path": "flux_paper_image/2409.13471_1727119301.png"
            },

            {
                "startTime": "21:57",
                "arxivId": "2409.13096",
                "arxivLink": "https://arxiv.org/abs/2409.13096",
                "title": "Decision Trees: The Key to Cracking Code-Breaking?",
                "institute": "Stanford",
                "text": "This paper establishes a novel connection between the problem of learning decision trees and the parameterized Nearest Codeword Problem (k-NCP). It shows that any improvement in the runtime of the fastest known algorithm for learning decision trees would lead to exponentially better approximation algorithms for k-NCP. This connection is unique as previous research on these two problems has proceeded independently.",
                "paper-title": "Fast decision tree learning solves hard coding-theoretic problems",
                "image-path": "flux_paper_image/2409.13096_1727118945.png"
            },

            {
                "startTime": "22:18",
                "arxivId": "2409.13688",
                "arxivLink": "https://arxiv.org/abs/2409.13688",
                "title": "Microplastics: A Deep Dive into a New Dataset for Detecting Tiny Plastic Troublemakers",
                "institute": "Toronto Metropolitan University",
                "text": "This research introduces a new, open-source dataset called MiNa, specifically designed for training deep learning algorithms to detect and classify microplastics and nanoplastics. Unlike previous datasets, MiNa focuses on categorizing particles by polymer type rather than just their physical shape.",
                "paper-title": "Morphological Detection and Classification of Microplastics and Nanoplastics Emerged from Consumer Products by Deep Learning",
                "image-path": "flux_paper_image/2409.13688_1727119563.png"
            },

            {
                "startTime": "22:44",
                "arxivId": "2409.13530",
                "arxivLink": "https://arxiv.org/abs/2409.13530",
                "title": "Time Series Models Get a Memory Boost: Infini-Channel Mixer Makes Long Data a Breeze!",
                "institute": "CMU",
                "text": "This research introduces a novel compressive memory mechanism called Infini-Channel Mixer (ICM) to enable encoder-only Transformers to effectively model multivariate time series. Unlike previous approaches that either downsample long time series or treat channels independently, ICM allows the model to handle long and multivariate data by aggregating information from all channels into a compressive memory matrix.",
                "paper-title": "Towards Long-Context Time Series Foundation Models",
                "image-path": "flux_paper_image/2409.13530_1727119349.png"
            },

            {
                "startTime": "23:04",
                "arxivId": "2409.13654",
                "arxivLink": "https://arxiv.org/abs/2409.13654",
                "title": "Neural Network's Long-Term Memory: A Kalman Filter for Better Predictions",
                "institute": "University of Maryland",
                "text": "This research introduces a \"neural filter\" that combines neural network predictions with measurements from the physical system to improve long-term prediction accuracy. This approach differs from previous work by directly addressing the issue of error accumulation in neural network models of dynamic systems.",
                "paper-title": "Neural filtering for Neural Network-based Models of Dynamic Systems",
                "image-path": "flux_paper_image/2409.13654_1727119233.png"
            },

            {
                "startTime": "23:24",
                "arxivId": "2409.13371",
                "arxivLink": "https://arxiv.org/abs/2409.13371",
                "title": "Prostate Segmentation Gets a Semi-Supervised Makeover: MCICSAM to the Rescue!",
                "institute": "Northeastern University, China Medical University, University of Chicago...",
                "text": "This research introduces MCICSAM, a semi-supervised learning model that leverages the Segment Anything Model (SAM) for prostate segmentation. Unlike previous approaches, MCICSAM incorporates Monte Carlo uncertainty analysis into interpolation consistency training, enhancing the model's ability to learn from unlabeled data.",
                "paper-title": "MCICSAM: Monte Carlo-guided Interpolation Consistency Segment Anything Model for Semi-Supervised Prostate Zone Segmentation",
                "image-path": "flux_paper_image/2409.13371_1727119021.png"
            },

            {
                "startTime": "23:51",
                "arxivId": "2409.13385",
                "arxivLink": "https://arxiv.org/abs/2409.13385",
                "title": "LLMs on a Diet: How to Shrink Knowledge Without Losing the Brains!",
                "institute": "IBM",
                "text": "This research focuses on contextual compression techniques for Large Language Models (LLMs), specifically exploring methods to reduce the size of the context while preserving its meaning and relevance. This is different from previous work that primarily focused on increasing the context window size or using more efficient attention mechanisms.",
                "paper-title": "Contextual Compression in Retrieval-Augmented Generation for Large Language Models: A Survey",
                "image-path": "flux_paper_image/2409.13385_1727119306.png"
            }
    ],
    "stats": {
        "num_pick": 58,
        "num_total": 262,
    },
    "audio": "https://d2irtorupa9e8g.cloudfront.net/daily_podcast/202409231517_audio.mp3"
}