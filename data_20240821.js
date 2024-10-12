
daily_data = {
    "date": "2024-08-21",
    "tweets": [
            {
                "startTime": "00:54",
                "arxivId": "2408.11039",
                "arxivLink": "https://arxiv.org/abs/2408.11039",
                "title": "One Model to Rule Them All: Text and Images, Unified!",
                "institute": "Meta, Waymo, University of Southern California",
                "text": "This research introduces Transfusion, a method for training a single multi-modal model that can generate both discrete text and continuous images. Unlike previous approaches that either extend language models to use diffusion models as tools or quantize images into discrete tokens, Transfusion integrates both modalities seamlessly by training a single model on both next token prediction and diffusion objectives.",
                "paper-title": "Transfusion: Predict the Next Token and Diffuse Images with One Multi-Modal Model",
                "image-path": ""
            },

            {
                "startTime": "01:17",
                "arxivId": "2408.10261",
                "arxivLink": "https://arxiv.org/abs/2408.10261",
                "title": "R-GCN: A Knowledge Graph Network That Can't Learn Its Own Rules!",
                "institute": "University of Oxford, Royal Holloway University of London",
                "text": "This paper investigates the explainability of Relational Graph Convolutional Networks (R-GCN), a popular architecture for knowledge graph completion. Unlike previous work that focused on specific subclasses of GNNs, this study analyzes R-GCN and demonstrates that it cannot be faithfully captured by Datalog rules, a logic-based formalism.",
                "paper-title": "Relational Graph Convolutional Networks Do Not Learn Sound Rules",
                "image-path": ""
            },

            {
                "startTime": "01:43",
                "arxivId": "2408.10958",
                "arxivLink": "https://arxiv.org/abs/2408.10958",
                "title": "AI Predicts Storms: Can a Computer Outsmart Mother Nature?",
                "institute": "NVIDIA Corporation, Lawrence Berkeley National Laboratory, University of Washington...",
                "text": "This research introduces a generative diffusion model called StormCast that emulates the high-resolution rapid refresh (HRRR) model, a state-of-the-art 3km operational convection-allowing model (CAM). This is different from previous work because it uses a generative model to predict a dense atmospheric state with dozens of vertical levels, which is crucial for capturing the complex dynamics of km-scale convection.",
                "paper-title": "Kilometer-Scale Convection Allowing Model Emulation using Generative Diffusion Modeling",
                "image-path": ""
            },

            {
                "startTime": "02:14",
                "arxivId": "2408.10902",
                "arxivLink": "https://arxiv.org/abs/2408.10902",
                "title": "Chatbots Get a Reality Check: New Dataset Evaluates LLMs on Commonsense and Coherence",
                "institute": "INESC-ID, CMU",
                "text": "This research introduces SODA-EVAL, a new dataset for evaluating open-domain dialogue systems. Unlike previous benchmarks that focused on fluency and relevance, SODA-EVAL targets more complex aspects like coherence and commonsense reasoning, reflecting the challenges of contemporary LLMs.",
                "paper-title": "Soda-Eval: Open-Domain Dialogue Evaluation in the age of LLMs",
                "image-path": ""
            },

            {
                "startTime": "02:41",
                "arxivId": "2408.10609",
                "arxivLink": "https://arxiv.org/abs/2408.10609",
                "title": "Perturbation Prediction: Simple Models Win the Race!",
                "institute": "Altos Labs",
                "text": "This research introduces PerturBench, a comprehensive framework for benchmarking machine learning models that predict the effects of cellular perturbations. It differs from previous work by providing a standardized approach with diverse datasets, metrics for fair comparison, and detailed performance analysis.",
                "paper-title": "PerturBench: Benchmarking Machine Learning Models for Cellular Perturbation Analysis",
                "image-path": ""
            },

            {
                "startTime": "03:00",
                "arxivId": "2408.10490",
                "arxivLink": "https://arxiv.org/abs/2408.10490",
                "title": "LLMs Get a Plan: How Planning Can Stop AI from Making Stuff Up!",
                "institute": "University of Southern California, Google",
                "text": "This research explores how planning can be used to guide retrieval in language models, improving the accuracy of generated text by reducing hallucinations. Unlike previous work that focuses on post-hoc verification or heuristic-based retrieval, this study leverages the planning capabilities of instruction-tuned LLMs to proactively gather relevant information.",
                "paper-title": "Analysis of Plan-based Retrieval for Grounded Text Generation",
                "image-path": ""
            },

            {
                "startTime": "03:30",
                "arxivId": "2408.10433",
                "arxivLink": "https://arxiv.org/abs/2408.10433",
                "title": "CLIP-DPO: Fixing LVLMs' Lies with a Vision-Language Model",
                "institute": "Samsung AICenter Cambridge, Technical University of Iasi, Queen Mary University of London",
                "text": "This research proposes CLIP-DPO, a new method for training Large Vision-Language Models (LVLMs) that uses a pre-trained CLIP model to rank generated captions and identify hallucinated details. Unlike previous approaches, CLIP-DPO doesn't rely on paid APIs, additional data, or external LVLMs.",
                "paper-title": "CLIP-DPO: Vision-Language Models as a Source of Preference for Fixing Hallucinations in LVLMs",
                "image-path": ""
            },

            {
                "startTime": "04:02",
                "arxivId": "2408.11053",
                "arxivLink": "https://arxiv.org/abs/2408.11053",
                "title": "LLMs for Hardware: VerilogEval Gets a Turbo Boost!",
                "institute": "Nvidia",
                "text": "This research extends the VerilogEval benchmark to include specification-to-RTL tasks, incorporates in-context learning examples, and introduces a failure classification mechanism. This provides a more comprehensive evaluation framework for Verilog code generation tasks.",
                "paper-title": "Revisiting VerilogEval: Newer LLMs, In-Context Learning, and Specification-to-RTL Tasks",
                "image-path": ""
            },

            {
                "startTime": "04:26",
                "arxivId": "2408.10575",
                "arxivLink": "https://arxiv.org/abs/2408.10575",
                "title": "MUSE: Seeing the Big Picture (and the Tiny Details) in Text-Video Retrieval",
                "institute": "Peking University",
                "text": "This research introduces MUSE, a multi-scale learning method for text-video retrieval. Unlike previous methods that rely on single-scale representations, MUSE leverages a feature pyramid to extract information from different resolutions, allowing for a more comprehensive understanding of video content.",
                "paper-title": "MUSE: Mamba is Efficient Multi-scale Learner for Text-video Retrieval",
                "image-path": ""
            },

            {
                "startTime": "05:04",
                "arxivId": "2408.11052",
                "arxivLink": "https://arxiv.org/abs/2408.11052",
                "title": "Reinforcement Learning Gets a Speed Boost: JaxGCRL Makes Training a Breeze!",
                "institute": "Warsaw University of Technology, University of Warsaw, UC Berkeley...",
                "text": "This research introduces a new codebase and benchmark called JaxGCRL, which uses GPU-accelerated environments and a stable, batched version of the contrastive reinforcement learning algorithm to significantly speed up training times for self-supervised goal-conditioned reinforcement learning (GCRL) agents. This approach allows researchers to collect data from millions of environment steps in minutes on a single GPU, enabling faster experimentation and iteration on new ideas.",
                "paper-title": "Accelerating Goal-Conditioned RL Algorithms and Research",
                "image-path": ""
            },

            {
                "startTime": "05:33",
                "arxivId": "2408.10365",
                "arxivLink": "https://arxiv.org/abs/2408.10365",
                "title": "AI Reviewers: Can Robots Judge Your Research?",
                "institute": "Boston University, Tel Aviv University, Columbia University...",
                "text": "This research goes beyond simply using LLMs to generate reviews. It introduces a system for evaluating the quality of these reviews by comparing them to human reviews, both through human and LLM preferences.",
                "paper-title": "AI-Driven Review Systems: Evaluating LLMs in Scalable and Bias-Aware Academic Reviews",
                "image-path": ""
            },

            {
                "startTime": "06:02",
                "arxivId": "2408.10495",
                "arxivLink": "https://arxiv.org/abs/2408.10495",
                "title": "AI Code Wizards: Can They Write Secure Code Without Getting Hacked?",
                "institute": "Beihang University, Tsinghua University",
                "text": "This research goes beyond just generating code and examines the ability of large language models (LLMs) to identify and fix security vulnerabilities in the code they produce, a crucial step towards building truly secure software. Unlike previous studies that focused on LLMs' ability to generate code, this paper investigates their end-to-end capability to produce secure code, including self-review and repair.",
                "paper-title": "How Well Do Large Language Models Serve as End-to-End Secure Code Producers?",
                "image-path": ""
            },

            {
                "startTime": "06:26",
                "arxivId": "2408.10255",
                "arxivLink": "https://arxiv.org/abs/2408.10255",
                "title": "AI for Finance: Wall Street's New Trading Buddy?",
                "institute": "International Digital Economy Academy, The Hong Kong University of Science and Technology, Shanghai Advanced Institute of Finance...",
                "text": "This research proposes a new framework called the Large Investment Model (LIM) for quantitative investment. Unlike traditional multi-factor models, LIM uses an end-to-end deep learning approach to directly learn trading strategies from diverse financial data.",
                "paper-title": "Large Investment Model",
                "image-path": ""
            },

            {
                "startTime": "06:49",
                "arxivId": "2408.10717",
                "arxivLink": "https://arxiv.org/abs/2408.10717",
                "title": "Deep Learning Saves the Day: CO2 Storage Gets a Speed Boost!",
                "institute": "Stanford University, TotalEnergies",
                "text": "This research introduces a new surrogate modeling framework for CO2 storage operations that uses a combination of flow-only and coupled flow-geomechanics simulations for training. This approach significantly reduces the computational cost of training compared to previous methods that relied solely on coupled simulations.",
                "paper-title": "Accelerated training of deep learning surrogate models for surface displacement and flow, with application to MCMC-based history matching of CO2 storage operations",
                "image-path": ""
            },

            {
                "startTime": "07:09",
                "arxivId": "2408.10635",
                "arxivLink": "https://arxiv.org/abs/2408.10635",
                "title": "LLMs Learn to Play Games: A Self-Improving AI That's Smarter Than the Average Bear",
                "institute": "Rensselaer Polytechnic Institute, Shenzhen University, University of California Los Angeles...",
                "text": "This research introduces STRATEGIST, a method that uses LLMs to learn strategic skills in multi-agent games. Unlike previous LLM-based approaches, STRATEGIST incorporates a bi-level tree search, allowing it to learn both high-level strategies and low-level action planning through simulated self-play.",
                "paper-title": "Strategist: Learning Strategic Skills by LLMs via Bi-Level Tree Search",
                "image-path": ""
            },

            {
                "startTime": "07:35",
                "arxivId": "2408.10443",
                "arxivLink": "https://arxiv.org/abs/2408.10443",
                "title": "Training Giant Speech Models on Your Phone: Federated Learning Gets Real!",
                "institute": "Google LLC",
                "text": "This research focuses on training large Automatic Speech Recognition (ASR) models using Federated Learning (FL), a technique that allows training on user devices without sharing their data. The paper presents a novel approach to improve the quality of FL-trained ASR models by leveraging user-edited transcripts.",
                "paper-title": "Federated Learning of Large ASR Models in the Real World",
                "image-path": ""
            },

            {
                "startTime": "07:53",
                "arxivId": "2408.10491",
                "arxivLink": "https://arxiv.org/abs/2408.10491",
                "title": "Sigmoid Squeeze: New Trick Makes Neural Network Verification Faster!",
                "institute": "University of Vermont, University of Washington",
                "text": "This paper introduces a new method for tightening the bounds of sigmoid activation functions in neural networks, which are commonly used in verification tasks. Unlike previous approaches that rely on static linear approximations, this method uses tunable hyperplanes that dynamically adjust to achieve the tightest possible element-wise relaxation.",
                "paper-title": "Achieving the Tightest Relaxation of Sigmoids for Formal Verification",
                "image-path": ""
            },

            {
                "startTime": "08:17",
                "arxivId": "2408.10353",
                "arxivLink": "https://arxiv.org/abs/2408.10353",
                "title": "ICA Gets a Second Wind: Sparsity Solves Gaussian Source Separation",
                "institute": "CMU",
                "text": "This research introduces a new identifiability theory for Independent Component Analysis (ICA) that relies on second-order statistics, unlike traditional methods that assume non-Gaussianity. It achieves this by focusing on the connective structure between sources and observed variables, introducing a novel assumption called \"structural variability.\"",
                "paper-title": "On the Identifiability of Sparse ICA without Assuming Non-Gaussianity",
                "image-path": ""
            },

            {
                "startTime": "08:50",
                "arxivId": "2408.10599",
                "arxivLink": "https://arxiv.org/abs/2408.10599",
                "title": "Vision Calorimeter: Seeing Anti-neutrons with Deep Learning Eyes",
                "institute": "Chinese Academy of Sciences, Peking University, \u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne",
                "text": "This research introduces a novel method called Vision Calorimeter (ViC) for reconstructing anti-neutrons using deep learning. Unlike conventional methods that rely on clustering algorithms, ViC leverages the contextual information embedded in the energy distribution of anti-neutrons deposited in the electromagnetic calorimeter (EMC).",
                "paper-title": "Vision Calorimeter for Anti-neutron Reconstruction: A Baseline",
                "image-path": ""
            },

            {
                "startTime": "09:22",
                "arxivId": "2408.10733",
                "arxivLink": "https://arxiv.org/abs/2408.10733",
                "title": "CNNs and Transformers Team Up to Spot GI Trouble!",
                "institute": "Pashchimanchal Campus, Northwestern University",
                "text": "This research combines Convolutional Neural Networks (CNNs) and Transformers, specifically the Swin Transformer, to classify endoscopic images. This approach differs from previous work that primarily relied on CNNs alone.",
                "paper-title": "Classification of Endoscopy and Video Capsule Images using CNN-Transformer Model",
                "image-path": ""
            },

            {
                "startTime": "09:43",
                "arxivId": "2408.10920",
                "arxivLink": "https://arxiv.org/abs/2408.10920",
                "title": "RNNs Learn to Store Secrets in Onion Layers: A New Twist on Neural Network Representation",
                "institute": "Stanford University",
                "text": "This paper challenges the Linear Representation Hypothesis (LRH) by demonstrating that recurrent neural networks (RNNs) can learn to represent sequences using a non-linear \"onion\" representation, where information is stored at different magnitudes rather than in distinct linear subspaces.",
                "paper-title": "Recurrent Neural Networks Learn to Store and Generate Sequences using Non-Linear Representations",
                "image-path": ""
            },

            {
                "startTime": "10:08",
                "arxivId": "2408.10392",
                "arxivLink": "https://arxiv.org/abs/2408.10392",
                "title": "Teaching AI Ethics Without the Sermon: New Method Aligns LLMs to Values in Unstructured Text",
                "institute": "IBM",
                "text": "This research proposes a novel method for aligning LLMs to values embedded in unstructured text, unlike previous approaches that rely heavily on curated datasets or rule-based systems.",
                "paper-title": "Value Alignment from Unstructured Text",
                "image-path": ""
            },

            {
                "startTime": "10:29",
                "arxivId": "2408.10463",
                "arxivLink": "https://arxiv.org/abs/2408.10463",
                "title": "TTS Overfitting? Not With This Adversarial Trick!",
                "institute": "Google",
                "text": "This paper proposes using adversarial training to prevent keyword spotting (KWS) models from overfitting to synthetic text-to-speech (TTS) data. This approach differs from previous work by focusing on domain adaptation within the KWS domain, specifically addressing the mismatch between TTS and real speech.",
                "paper-title": "Adversarial training of Keyword Spotting to Minimize TTS Data Overfitting",
                "image-path": ""
            },

            {
                "startTime": "10:48",
                "arxivId": "2408.10556",
                "arxivLink": "https://arxiv.org/abs/2408.10556",
                "title": "Honor of Kings: A MOBA Dataset for Offline RL's Big Game",
                "institute": "Tsinghua University, Tencent",
                "text": "This research introduces Hokoff, a new dataset for offline reinforcement learning (RL) and offline multi-agent RL (MARL) based on the popular MOBA game Honor of Kings. Unlike previous datasets, Hokoff focuses on a complex, real-world game environment, offering a more realistic and practical setting for offline RL research.",
                "paper-title": "Hokoff: Real Game Dataset from Honor of Kings and its Offline Reinforcement Learning Benchmarks",
                "image-path": ""
            },

            {
                "startTime": "11:12",
                "arxivId": "2408.10646",
                "arxivLink": "https://arxiv.org/abs/2408.10646",
                "title": "LLMs: Speaking the Same Language, But Thinking Different Thoughts?",
                "institute": "Hebrew University of Jerusalem, Google",
                "text": "This research goes beyond simply looking at whether LLMs can answer the same question correctly in different languages. It investigates whether the models are actually storing and retrieving that knowledge in a shared, language-independent way. To do this, the researchers use knowledge editing techniques to modify the model's understanding of a fact in one language and then observe how that change affects the model's performance in other languages.",
                "paper-title": "Beneath the Surface of Consistency: Exploring Cross-lingual Knowledge Representation Sharing in LLMs",
                "image-path": ""
            },

            {
                "startTime": "11:44",
                "arxivId": "2408.10805",
                "arxivLink": "https://arxiv.org/abs/2408.10805",
                "title": "Lifting 3D Poses from 2D: A Multi-view Magic Trick!",
                "institute": "Universit\u00e9 Catholique de Louvain, \u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne",
                "text": "This research proposes a novel approach to 3D human pose estimation by decoupling the process into two stages: 2D pose estimation and 3D pose lifting. This allows the model to be trained on synthetic 2D-3D pose pairs, eliminating the need for real-world images paired with 3D poses, which are often scarce and limited to controlled environments.",
                "paper-title": "MPL: Lifting 3D Human Pose from Multi-view 2D Poses",
                "image-path": ""
            },

            {
                "startTime": "12:08",
                "arxivId": "2408.11019",
                "arxivLink": "https://arxiv.org/abs/2408.11019",
                "title": "Dendrites: The Brain's Secret Superpower for Faster Learning",
                "institute": "University of Stirling, University of Wolverhampton, University of Oxford",
                "text": "This research explores the role of context-sensitive dendrites in learning, going beyond the traditional focus on feedback connections. It proposes that dendrites integrate diverse contextual information, amplifying relevant signals and suppressing irrelevant ones, leading to faster and more efficient learning.",
                "paper-title": "An Overlooked Role of Context-Sensitive Dendrites",
                "image-path": ""
            },

            {
                "startTime": "12:38",
                "arxivId": "2408.10488",
                "arxivLink": "https://arxiv.org/abs/2408.10488",
                "title": "Sign Language Translation Gets a High-Def Upgrade: Event Streams to the Rescue!",
                "institute": "Anhui University, Peking University, Chinese Academy of Sciences",
                "text": "This research proposes using high-definition event streams for sign language translation, a departure from traditional methods relying on visible light videos. Event streams offer advantages like high dynamic range, dense temporal signals, and privacy protection due to their spatial sparsity.",
                "paper-title": "Event Stream based Sign Language Translation: A High-Definition Benchmark Dataset and A New Algorithm",
                "image-path": ""
            },

            {
                "startTime": "13:12",
                "arxivId": "2408.10291",
                "arxivLink": "https://arxiv.org/abs/2408.10291",
                "title": "Chatbots: More Insight, Less Weights, Please!",
                "institute": "Italian Institute of Technology, Harvard University",
                "text": "This paper argues that the pursuit of ever-increasing weights in large-scale machine learning applications is unsustainable and potentially manipulative. It proposes a shift from focusing on more weights to prioritizing insight and understanding.",
                "paper-title": "Chatbots and Zero Sales Resistance",
                "image-path": ""
            },

            {
                "startTime": "13:36",
                "arxivId": "2408.10807",
                "arxivLink": "https://arxiv.org/abs/2408.10807",
                "title": "Unmixing Music: Scientists Untangle the Secrets of Pitch and Timbre in Multi-Instrument Tracks",
                "institute": "Queen Mary University of London, Sony",
                "text": "This research focuses on disentangling pitch and timbre from mixtures of musical instruments, a task not addressed by previous work which primarily focused on single-instrument audio.",
                "paper-title": "DisMix: Disentangling Mixtures of Musical Instruments for Source-level Pitch and Timbre Manipulation",
                "image-path": ""
            },

            {
                "startTime": "14:09",
                "arxivId": "2408.10446",
                "arxivLink": "https://arxiv.org/abs/2408.10446",
                "title": "AI Watermarks: Paraphrasing Away the Proof!",
                "institute": "NIT Silchar, IIIT Delhi, BITS Pilani...",
                "text": "This research introduces the concept of \"visual paraphrasing attacks\" as a method to circumvent existing image watermarking techniques. Unlike previous work that focused on traditional image manipulation methods, this paper explores how AI-generated images can be subtly altered to remove watermarks while preserving their semantic content.",
                "paper-title": "The Brittleness of AI-Generated Image Watermarking Techniques: Examining Their Robustness Against Visual Paraphrasing Attacks",
                "image-path": ""
            },

            {
                "startTime": "14:35",
                "arxivId": "2408.10943",
                "arxivLink": "https://arxiv.org/abs/2408.10943",
                "title": "LLMs on Trial: Can They Follow Instructions Like a Boss?",
                "institute": "Peking University",
                "text": "This research introduces SysBench, a benchmark specifically designed to evaluate how well large language models (LLMs) follow system messages. Unlike previous work that focused on single-turn conversations or simplified instructions, SysBench analyzes LLMs' ability to follow complex instructions across multiple turns of conversation.",
                "paper-title": "SysBench: Can Large Language Models Follow System Messages?",
                "image-path": ""
            },

            {
                "startTime": "14:56",
                "arxivId": "2408.10284",
                "arxivLink": "https://arxiv.org/abs/2408.10284",
                "title": "MoE Models Get a Speed Boost: AdapMoE Makes LLMs Run Faster on Edge Devices",
                "institute": "Peking University",
                "text": "This research introduces AdapMoE, a framework that combines adaptive expert gating, prefetching, and caching to optimize MoE inference on edge devices. Unlike previous work, AdapMoE dynamically adjusts the number of activated experts based on sensitivity analysis, improving efficiency without sacrificing accuracy.",
                "paper-title": "AdapMoE: Adaptive Sensitivity-based Expert Gating and Management for Efficient MoE Inference",
                "image-path": ""
            },

            {
                "startTime": "15:22",
                "arxivId": "2408.10906",
                "arxivLink": "https://arxiv.org/abs/2408.10906",
                "title": "ShapeSplat: Giving 3D Objects a Gaussian Makeover!",
                "institute": "ETH Zurich, INSAIT, Sofia University...",
                "text": "This research introduces ShapeSplat, a large-scale dataset of 3D Gaussian Splats, which are 3D representations of objects using Gaussian primitives. This dataset is unique because it focuses on the trained parameters of Gaussian Splats, unlike previous work that primarily focused on rendering quality or scene compression.",
                "paper-title": "ShapeSplat: A Large-scale Dataset of Gaussian Splats and Their Self-Supervised Pretraining",
                "image-path": ""
            },

            {
                "startTime": "15:48",
                "arxivId": "2408.10263",
                "arxivLink": "https://arxiv.org/abs/2408.10263",
                "title": "Fraud Detection: When Spline Interpolation Meets KANs",
                "institute": "University of Cincinnati, Stanford University",
                "text": "This research explores the application of Kolmogorov\u2013Arnold Networks (KAN) for fraud detection, identifying limitations and proposing a quick assessment method to determine its suitability for a given problem. It also introduces a heuristic approach for selecting KAN hyperparameters, significantly reducing training time compared to traditional grid search methods.",
                "paper-title": "Kolmogorov Arnold Networks in Fraud Detection: Bridging the Gap Between Theory and Practice",
                "image-path": ""
            },

            {
                "startTime": "16:16",
                "arxivId": "2408.10504",
                "arxivLink": "https://arxiv.org/abs/2408.10504",
                "title": "Prompt Engineering Gets a Query-Specific Makeover: Offline RL to the Rescue!",
                "institute": "SenseTime, Tsinghua University",
                "text": "This research focuses on query-dependent prompt optimization, a concept often overlooked in previous work. It utilizes multi-loop offline reinforcement learning to fine-tune a small language model to generate prompts tailored to specific input queries, reducing the need for frequent interactions with the target LLM.",
                "paper-title": "QPO: Query-dependent Prompt Optimization via Multi-Loop Offline Reinforcement Learning",
                "image-path": ""
            },

            {
                "startTime": "16:44",
                "arxivId": "2408.11029",
                "arxivLink": "https://arxiv.org/abs/2408.11029",
                "title": "Scaling Laws Just Got a Learning Rate Makeover!",
                "institute": "Tsinghua University",
                "text": "This research introduces a new scaling law formulation that incorporates learning rate annealing, allowing for accurate prediction of loss at any training step across various learning rate schedules. Unlike previous scaling laws that only describe the final loss, this new formulation captures the dynamics of the entire training process.",
                "paper-title": "Scaling Law with Learning Rate Annealing",
                "image-path": ""
            },

            {
                "startTime": "17:10",
                "arxivId": "2408.10474",
                "arxivLink": "https://arxiv.org/abs/2408.10474",
                "title": "LLMs Under the Microscope: New Criteria for Testing Their Trustworthiness",
                "institute": "University of Alberta, The University of Tokyo, New York University",
                "text": "This research proposes a set of multi-level testing criteria, LECOV, for LLMs, focusing on three internal components: attention mechanism, feed-forward neurons, and uncertainty. This approach differs from previous work by going beyond input/output analysis and examining the internal workings of LLMs.",
                "paper-title": "LeCov: Multi-level Testing Criteria for Large Language Models",
                "image-path": ""
            },

            {
                "startTime": "17:39",
                "arxivId": "2408.10811",
                "arxivLink": "https://arxiv.org/abs/2408.10811",
                "title": "LLMs: Do They Think in English, Even When Speaking Japanese?",
                "institute": "Kyoto University, National Institute of Informatics, University of Tokyo",
                "text": "This research investigates the internal \"latent language\" of multilingual language models (LLMs) by analyzing the probability distribution of tokens in their intermediate layers. Unlike previous work that focused on English-centric models, this study examines models trained on Japanese data and explores how their internal language representation influences their performance on tasks involving different languages.",
                "paper-title": "Beyond English-Centric LLMs: What Language Do Multilingual Language Models Think in?",
                "image-path": ""
            },

            {
                "startTime": "18:10",
                "arxivId": "2408.11049",
                "arxivLink": "https://arxiv.org/abs/2408.11049",
                "title": "MagicDec: Decoding Long Texts Faster, Without Sacrificing Accuracy!",
                "institute": "CMU",
                "text": "This research challenges the conventional wisdom that speculative decoding is less effective for large batch sizes. It shows that for moderate to long sequences, speculative decoding can actually improve throughput and reduce latency without compromising accuracy.",
                "paper-title": "MagicDec: Breaking the Latency-Throughput Tradeoff for Long Context Generation with Speculative Decoding",
                "image-path": ""
            },

            {
                "startTime": "18:38",
                "arxivId": "2408.10668",
                "arxivLink": "https://arxiv.org/abs/2408.10668",
                "title": "LLMs: Safe? Not So Fast! Decoding the Hidden Danger",
                "institute": "Tsinghua University, Tencent",
                "text": "This research explores the safety boundaries of LLMs by focusing on the decoding process rather than the input or parameter space. It proposes a novel approach using a Cost Value Model (CVM) to identify potential harmful paths within the decoding process.",
                "paper-title": "Probing the Safety Response Boundary of Large Language Models via Unsafe Decoding Path Generation",
                "image-path": ""
            },

            {
                "startTime": "19:02",
                "arxivId": "2408.10987",
                "arxivLink": "https://arxiv.org/abs/2408.10987",
                "title": "Ultrasound Denoising Gets a Diffusion Makeover: From Noisy to Nifty!",
                "institute": "Concordia University, University of Toronto, Institut de Recherche en Informatique de Toulouse",
                "text": "This research adapts Denoising Diffusion Probabilistic Models (DDPMs) to enhance the quality of plane wave ultrasound images. Unlike previous work that focused on denoising B-mode images, this study directly denoises the radiofrequency (RF) data, which is the raw signal captured by the ultrasound transducer.",
                "paper-title": "Denoising Plane Wave Ultrasound Images Using Diffusion Probabilistic Models",
                "image-path": ""
            },

            {
                "startTime": "19:28",
                "arxivId": "2408.10683",
                "arxivLink": "https://arxiv.org/abs/2408.10683",
                "title": "Rejection in Argumentation: It's Harder to Say No Than Yes!",
                "institute": "Link\u00f6ping University, Massachusetts Institute of Technology, Universit\u00e4t Paderborn...",
                "text": "This paper introduces the concept of \"rejection conditions\" in abstract argumentation frameworks. Unlike previous work that focused on acceptance conditions, this research explores how arguments can be rejected based on specific constraints.",
                "paper-title": "Rejection in Abstract Argumentation: Harder Than Acceptance?",
                "image-path": ""
            },

            {
                "startTime": "19:56",
                "arxivId": "2408.10669",
                "arxivLink": "https://arxiv.org/abs/2408.10669",
                "title": "Tensor Trees: Unveiling Hidden Relationships in Data, One Branch at a Time!",
                "institute": "Kyoto University, University of Tokyo",
                "text": "This research proposes a new method for constructing generative models using a tensor tree network. The key innovation lies in dynamically optimizing the tree structure by minimizing the bond mutual information, which measures the information flow between different parts of the network. This approach differs from previous work that used fixed tensor network structures, such as tensor trains or balanced trees.",
                "paper-title": "Tensor tree learns hidden relational structures in data to construct generative models",
                "image-path": ""
            },

            {
                "startTime": "20:18",
                "arxivId": "2408.10264",
                "arxivLink": "https://arxiv.org/abs/2408.10264",
                "title": "Shrinking Big Data: How to Squeeze Scientific Data Without Losing the Good Stuff",
                "institute": "University of Washington, Pacific Northwest National Laboratory",
                "text": "This research proposes a new method called Order-Preserving Dimension Reduction (OPDR) to reduce the dimensionality of embedding vectors generated by large language models while preserving the relationships between data points. This differs from previous work that focused on preserving pairwise distances or local neighborhoods, but not the specific order of nearest neighbors.",
                "paper-title": "OPDR: Order-Preserving Dimension Reduction for Semantic Embedding of Multimodal Scientific Data",
                "image-path": ""
            },

            {
                "startTime": "20:48",
                "arxivId": "2408.10436",
                "arxivLink": "https://arxiv.org/abs/2408.10436",
                "title": "Graph Inverse Problems: When Data Hides, GNNs Come to the Rescue!",
                "institute": "University of Cambridge, University of British Columbia",
                "text": "This research introduces a framework for solving Graph Inverse Problems (GRIP) by integrating learned regularization techniques with Graph Neural Networks (GNNs). Unlike previous work, this approach leverages meta-data associated with the graph, which can be used to improve the accuracy of the solution.",
                "paper-title": "Learning Regularization for Graph Inverse Problems",
                "image-path": ""
            },

            {
                "startTime": "21:14",
                "arxivId": "2408.11042",
                "arxivLink": "https://arxiv.org/abs/2408.11042",
                "title": "Teaching Machines to Think Like Algorithms: GraphFSA Learns the Rules of the Game!",
                "institute": "ETH Zurich",
                "text": "This paper introduces GraphFSA, a framework for learning finite state automata on graphs. Unlike previous work that focuses on continuous state spaces, GraphFSA uses discrete states, making it easier to interpret and visualize the learned rules.",
                "paper-title": "GraphFSA: A Finite State Automaton Framework for Algorithmic Learning on Graphs",
                "image-path": ""
            },

            {
                "startTime": "21:43",
                "arxivId": "2408.10946",
                "arxivLink": "https://arxiv.org/abs/2408.10946",
                "title": "LLMs: The New Chatty Recommender System?",
                "institute": "Meta, Google",
                "text": "This research explores the use of large language models (LLMs) in recommendation systems, focusing on how LLMs can be used to generate personalized recommendations and explanations through natural language interactions. It differs from previous work by emphasizing the use of LLMs for general reasoning and conversational recommendation, rather than solely relying on standardized user feedback like purchases or clicks.",
                "paper-title": "Large Language Model Driven Recommendation",
                "image-path": ""
            },

            {
                "startTime": "22:08",
                "arxivId": "2408.10383",
                "arxivLink": "https://arxiv.org/abs/2408.10383",
                "title": "BrewCLIP: When Speech Gets a Second Wind, Images Get a Better Match!",
                "institute": "CMU",
                "text": "This research proposes a \"bifurcated\" model, meaning it uses two separate channels to process audio: one for transcription and another for raw audio. This allows the model to capture both textual and non-textual information from speech, which is often overlooked by traditional methods.",
                "paper-title": "BrewCLIP: A Bifurcated Representation Learning Framework for Audio-Visual Retrieval",
                "image-path": ""
            },

            {
                "startTime": "22:34",
                "arxivId": "2408.10689",
                "arxivLink": "https://arxiv.org/abs/2408.10689",
                "title": "Genesis: A Robot Scientist Aims to Crack the Code of Life",
                "institute": "University of Cambridge, University of Manchester",
                "text": "This research focuses on developing a robot scientist called Genesis, designed to automate the process of improving complex systems biology models. Unlike previous robot scientists, Genesis aims to handle models with thousands of interacting components, a significant leap in complexity.",
                "paper-title": "Genesis: Towards the Automation of Systems Biology Research",
                "image-path": ""
            },

            {
                "startTime": "23:01",
                "arxivId": "2408.10818",
                "arxivLink": "https://arxiv.org/abs/2408.10818",
                "title": "Transformers Go Rogue: Learning Randomized Algorithms with Deep Neural Networks",
                "institute": "Google, ETH Zurich",
                "text": "This research introduces a novel training objective for transformers that encourages the emergence of randomized algorithms within the model's architecture. Unlike previous work that focuses on deterministic strategies, this approach leverages randomness as a key component of the learning process.",
                "paper-title": "Learning Randomized Algorithms with Transformers",
                "image-path": ""
            },

            {
                "startTime": "23:24",
                "arxivId": "2408.10524",
                "arxivLink": "https://arxiv.org/abs/2408.10524",
                "title": "Speech Recognition Gets Bilingual: A New Trick for Understanding Code-Switching",
                "institute": "Huawei",
                "text": "This research introduces a novel Cross-lingual Contextual Biasing (XCB) module to improve speech recognition accuracy for phrases in a secondary language within code-switching scenarios. Unlike previous approaches that rely on large-scale training data or separate language-specific representations, XCB leverages a lightweight module and a language-specific loss function to enhance the learning of representations for the secondary language.",
                "paper-title": "XCB: an effective contextual biasing approach to bias cross-lingual phrases in speech recognition",
                "image-path": ""
            },

            {
                "startTime": "23:53",
                "arxivId": "2408.10871",
                "arxivLink": "https://arxiv.org/abs/2408.10871",
                "title": "Radio U-Net: A Deep Learning Recipe for Finding Cosmic Radio Sources",
                "institute": "INAF, University of Bologna, Hamburger Sternwarte",
                "text": "This research introduces Radio U-Net, a convolutional neural network based on the U-Net architecture, specifically designed to detect faint and extended radio sources in radio surveys. This approach differs from previous work by utilizing synthetic radio observations built upon cosmological simulations for training, allowing for accurate detection even in low-quality images.",
                "paper-title": "Radio U-Net: a convolutional neural network to detect diffuse radio sources in galaxy clusters and beyond",
                "image-path": ""
            },

            {
                "startTime": "24:21",
                "arxivId": "2408.10711",
                "arxivLink": "https://arxiv.org/abs/2408.10711",
                "title": "LLMs: Are They as Biased as We Are?",
                "institute": "University College London, University of Surrey, University of Southampton...",
                "text": "This research investigates whether large language models (LLMs) exhibit the same order bias as humans when making similarity judgments. Unlike previous work that focused on replicating human biases in LLMs, this study specifically examines the context-sensitive nature of similarity judgments.",
                "paper-title": "Investigating Context Effects in Similarity Judgements in Large Language Models",
                "image-path": ""
            },

            {
                "startTime": "24:53",
                "arxivId": "2408.10368",
                "arxivLink": "https://arxiv.org/abs/2408.10368",
                "title": "Deep Learning: The New Wall Street Wizard?",
                "institute": "University of Toronto, York University",
                "text": "This paper introduces Deep-MacroFin, a framework that uses deep learning to solve partial differential equations (PDEs) in continuous-time economic models. Unlike traditional numerical methods, Deep-MacroFin can handle higher-dimensional problems and offers a more user-friendly implementation.",
                "paper-title": "Deep-MacroFin: Informed Equilibrium Neural Network for Continuous Time Economic Models",
                "image-path": ""
            },

            {
                "startTime": "25:14",
                "arxivId": "2408.10351",
                "arxivLink": "https://arxiv.org/abs/2408.10351",
                "title": "Doomscrolling Teens: Algorithms, Anxiety, and a Call to Action",
                "institute": "Dakota State University",
                "text": "This research goes beyond simply highlighting the negative impacts of social media on teenagers. It delves into the specific role of algorithms and AI in shaping these impacts, calling for a multi-pronged approach involving government regulation, industry initiatives, and educational programs.",
                "paper-title": "The Psychological Impacts of Algorithmic and AI-Driven Social Media on Teenagers: A Call to Action",
                "image-path": ""
            },

            {
                "startTime": "25:40",
                "arxivId": "2408.10693",
                "arxivLink": "https://arxiv.org/abs/2408.10693",
                "title": "Chaos & Quanta: Feature Selection Gets a Quantum Boost!",
                "institute": "MIT",
                "text": "This research introduces a novel approach to feature selection by incorporating chaos-generated variables into quantum-inspired metaheuristics. This differs from previous work by utilizing the Lyapunov exponent to ensure the algorithm operates in a truly chaotic regime.",
                "paper-title": "Improved Differential Evolution based Feature Selection through Quantum, Chaos, and Lasso",
                "image-path": ""
            },

            {
                "startTime": "26:14",
                "arxivId": "2408.10557",
                "arxivLink": "https://arxiv.org/abs/2408.10557",
                "title": "Speech Models: \"What\" vs. \"How\" - A New Way to Learn!",
                "institute": "Indraprastha Institute of Information Technology Delhi, Microsoft",
                "text": "This research proposes a modified version of the HuBERT model, called Other HuBERT (O-HuBERT), which uses separate learnable parameters to model \"other\" information (like speaker characteristics) in speech, distinct from the \"content\" information (what is being said). This approach differs from previous work that typically uses a single set of parameters to encode both types of information.",
                "paper-title": "Speech Representation Learning Revisited: The Necessity of Separate Learnable Parameters and Robust Data Augmentation",
                "image-path": ""
            },

            {
                "startTime": "26:42",
                "arxivId": "2408.11017",
                "arxivLink": "https://arxiv.org/abs/2408.11017",
                "title": "Committee Chaos: When Voters Change Their Minds, Who Gets the Boot?",
                "institute": "University of Oxford, Hasso Plattner Institute, Alan Turing Institute",
                "text": "This research explores how winning committees in multiwinner elections adapt to changes in voter preferences, focusing on a specific class of voting rules called Thiele rules. Unlike previous work, this study considers the scenario where the second-stage preferences are unknown at the time of the first-stage election.",
                "paper-title": "Multiwinner Temporal Voting with Aversion to Change",
                "image-path": ""
            },

            {
                "startTime": "27:06",
                "arxivId": "2408.10595",
                "arxivLink": "https://arxiv.org/abs/2408.10595",
                "title": "Game On! When Learning Syncs with Change, Chaos Reigns!",
                "institute": "CyberAgent, UBI The University of Tokyo, RCIES Soken University...",
                "text": "This research explores learning in games where the rules change periodically, unlike previous studies that focused on games with fixed rules. It discovers that when the speed of learning matches the speed of the game's change, the learning process diverges from the optimal strategy, leading to unpredictable outcomes.",
                "paper-title": "Synchronization behind Learning in Periodic Zero-Sum Games Triggers Divergence from Nash equilibrium",
                "image-path": ""
            },

            {
                "startTime": "27:34",
                "arxivId": "2408.11032",
                "arxivLink": "https://arxiv.org/abs/2408.11032",
                "title": "AI Takes the Wheel: Neural Networks Drive CO2 Transport Modeling",
                "institute": "Max Planck Society",
                "text": "This research introduces CarbonBench, a new dataset specifically designed for training machine learning models to emulate atmospheric CO2 transport. It also explores the use of SwinTransformer, a deep neural network architecture, for this task, and demonstrates its ability to achieve stable and mass-conserving transport for over 6 months.",
                "paper-title": "Atmospheric Transport Modeling of CO$_2$ with Neural Networks",
                "image-path": ""
            },

            {
                "startTime": "28:03",
                "arxivId": "2408.10270",
                "arxivLink": "https://arxiv.org/abs/2408.10270",
                "title": "AI Alignment: Is Your Robot Really Listening?",
                "institute": "Harvard University",
                "text": "This research introduces new metrics to evaluate the effectiveness of aligning language models with human values. It goes beyond simply measuring how well a model performs on a task and delves into the internal mechanisms of how the model learns and represents those values.",
                "paper-title": "SEAL: Systematic Error Analysis for Value ALignment",
                "image-path": ""
            },

            {
                "startTime": "28:30",
                "arxivId": "2408.10935",
                "arxivLink": "https://arxiv.org/abs/2408.10935",
                "title": "Point Clouds to 3D: A New Way to Generate Realistic Objects from Images",
                "institute": "Tsinghua University",
                "text": "This research proposes a novel approach for image-to-3D generation that utilizes point clouds as input to generate 3D Gaussian parameters, instead of directly mapping 2D image features to 3D Gaussian representations. This method leverages the geometric priors provided by point clouds, which are generated from a pre-trained 3D diffusion model, to facilitate the learning of 3D Gaussian representations.",
                "paper-title": "Large Point-to-Gaussian Model for Image-to-3D Generation",
                "image-path": ""
            },

            {
                "startTime": "28:58",
                "arxivId": "2408.10500",
                "arxivLink": "https://arxiv.org/abs/2408.10500",
                "title": "Emotion-LLaMA Gets a Boost: Conv-Attention Makes Multimodal Emotion Recognition Smarter!",
                "institute": "Shenzhen University, Shenzhen Technology University, CMU",
                "text": "This research introduces Conv-Attention, a hybrid framework that combines convolutional and attention mechanisms for multimodal feature fusion. This approach differs from previous work by mitigating the limitations of each individual method, leading to improved performance, especially when dealing with limited data.",
                "paper-title": "SZTU-CMU at MER2024: Improving Emotion-LLaMA with Conv-Attention for Multimodal Emotion Recognition",
                "image-path": ""
            },

            {
                "startTime": "29:28",
                "arxivId": "2408.10808",
                "arxivLink": "https://arxiv.org/abs/2408.10808",
                "title": "Telecom Talk: Tiny AI Gets Big Brains for Tech Questions",
                "institute": "CMU",
                "text": "This research focuses on improving the performance of smaller language models (LLMs) on domain-specific question answering tasks, specifically in the telecommunications field. The authors achieve this by combining a retrieval-augmented generation (RAG) pipeline with a novel ensemble scoring system for responses. This approach differs from previous work by focusing on enhancing the capabilities of smaller LLMs, rather than solely relying on larger, more resource-intensive models.",
                "paper-title": "ColBERT Retrieval and Ensemble Response Scoring for Language Model Question Answering",
                "image-path": ""
            },

            {
                "startTime": "29:58",
                "arxivId": "2408.10258",
                "arxivLink": "https://arxiv.org/abs/2408.10258",
                "title": "Ultrasound in the Wild: NeRF-US Removes Artifacts and Makes 3D Imaging a Breeze!",
                "institute": "University of Toronto",
                "text": "This research introduces NeRF-US, a novel approach that incorporates 3D geometric guidance into NeRF training for ultrasound imaging. Unlike previous methods, NeRF-US utilizes a diffusion model to learn priors for border probability and scattering density, resulting in artifact-free reconstructions from casually captured ultrasound data.",
                "paper-title": "NeRF-US: Removing Ultrasound Imaging Artifacts from Neural Radiance Fields in the Wild",
                "image-path": ""
            },

            {
                "startTime": "30:18",
                "arxivId": "2408.10437",
                "arxivLink": "https://arxiv.org/abs/2408.10437",
                "title": "AI's Secret Code: Unmasking the Hidden Language of Generative Models",
                "institute": "MIT, Pacific Northwest National Laboratory, Rutgers University",
                "text": "This research uses pre-trained deep neural networks (DNNs) as feature extractors to analyze the internal representations of data, called embeddings. This approach allows for the identification of latent biases and high-level information within unstructured data, such as text and images. Unlike previous work that focused on hand-crafted features, this study leverages the automated feature engineering capabilities of DNNs.",
                "paper-title": "Understanding Generative AI Content with Embedding Models",
                "image-path": ""
            },

            {
                "startTime": "30:42",
                "arxivId": "2408.10872",
                "arxivLink": "https://arxiv.org/abs/2408.10872",
                "title": "AI Road Safety Auditors: Can Language Models Replace Human Inspectors?",
                "institute": "University College London, Chulalongkorn University",
                "text": "This research explores the use of Vision Language Models (VLMs) for road safety assessment, a departure from traditional Convolutional Neural Networks (CNNs) that require extensive training data.",
                "paper-title": "V-RoAst: A New Dataset for Visual Road Assessment",
                "image-path": ""
            },

            {
                "startTime": "31:04",
                "arxivId": "2408.10239",
                "arxivLink": "https://arxiv.org/abs/2408.10239",
                "title": "Evaluating AI: It's Not Just About the Model, It's About the Test!",
                "institute": "CMU, Northwestern University, Stanford University",
                "text": "This research focuses on the ethical implications of evaluating machine learning systems, a topic often overlooked in Responsible AI discussions. It proposes a utility framework that balances information gain from an evaluation against potential ethical harms.",
                "paper-title": "A Conceptual Framework for Ethical Evaluation of Machine Learning Systems",
                "image-path": ""
            },

            {
                "startTime": "31:29",
                "arxivId": "2408.10240",
                "arxivLink": "https://arxiv.org/abs/2408.10240",
                "title": "Blind Artists, Meet Your New Muse: AI-Powered Tile-Based Image Editor",
                "institute": "Stanford University, University of Michigan",
                "text": "This research introduces AltCanvas, a tile-based image editor that integrates generative AI with a constructive approach, providing users with enhanced control and editing capabilities. Unlike previous text-to-image tools that lack precise control over image composition, AltCanvas allows users to build images incrementally, adding, editing, and arranging objects while receiving speech and audio feedback.",
                "paper-title": "AltCanvas: A Tile-Based Image Editor with Generative AI for Blind or Visually Impaired People",
                "image-path": ""
            },

            {
                "startTime": "31:50",
                "arxivId": "2408.10619",
                "arxivLink": "https://arxiv.org/abs/2408.10619",
                "title": "Change Detection: Stable Diffusion Makes Remote Sensing See the Light!",
                "institute": "University of California Berkeley",
                "text": "This research proposes a novel change detection framework that combines Stable Diffusion models with the Structural Similarity Index (SSIM) to improve accuracy and interpretability. This approach differs from previous work by leveraging the generative capabilities of diffusion models to model changes between images, rather than relying solely on pixel-wise differences.",
                "paper-title": "Novel Change Detection Framework in Remote Sensing Imagery Using Diffusion Models and Structural Similarity Index (SSIM)",
                "image-path": ""
            },

            {
                "startTime": "32:17",
                "arxivId": "2408.10720",
                "arxivLink": "https://arxiv.org/abs/2408.10720",
                "title": "MLP-Mixer: The New Kid on the Block for Chemical Kinetics Forecasting",
                "institute": "IBM, University of Surrey",
                "text": "This research proposes using a novel MLP-Mixer architecture, PatchTSMixer, to model the time-series evolution of stiff chemical kinetics. This approach differs from previous work by utilizing a multi-layer perceptron mixer architecture instead of traditional numerical techniques.",
                "paper-title": "Towards Foundation Models for the Industrial Forecasting of Chemical Kinetics",
                "image-path": ""
            },

            {
                "startTime": "32:43",
                "arxivId": "2408.10665",
                "arxivLink": "https://arxiv.org/abs/2408.10665",
                "title": "Point Cloud Compression: A Deep Dive into Attribute Compression with a Twist!",
                "institute": "Friedrich-Alexander-Universit\u00e4t Erlangen-N\u00fcrnberg",
                "text": "This research introduces an end-to-end learned dynamic lossy attribute coding approach for point cloud compression, utilizing a high-dimensional convolution to capture inter-point dependencies. This differs from previous methods that primarily focused on geometry compression or relied on geometry-dependent transformations.",
                "paper-title": "End-to-end learned Lossy Dynamic Point Cloud Attribute Compression",
                "image-path": ""
            },

            {
                "startTime": "33:06",
                "arxivId": "2408.10845",
                "arxivLink": "https://arxiv.org/abs/2408.10845",
                "title": "Self-Driving Cars Get Chatty: New Dataset Teaches AI to Talk and Drive!",
                "institute": "Turing Inc., University of Tokyo, University of Tsukuba...",
                "text": "This research introduces CoVLA, a dataset for autonomous driving that combines vision, language, and action data. Unlike previous datasets, CoVLA uses automated methods to generate captions and trajectories, making it more scalable and comprehensive.",
                "paper-title": "CoVLA: Comprehensive Vision-Language-Action Dataset for Autonomous Driving",
                "image-path": ""
            }
    ],
    "stats": {
        "num_pick": 74,
        "num_total": 322,
    },
    "audio": "https://d2irtorupa9e8g.cloudfront.net/daily_podcast/202408211831_audio.mp3"
}