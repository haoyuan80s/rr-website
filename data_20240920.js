
daily_data = {
    "date": "2024-09-20",
    "tweets": [
            {
                "startTime": "01:06",
                "arxivId": "2409.12957",
                "arxivLink": "https://arxiv.org/abs/2409.12957",
                "title": "3DTopia-XL: Building 3D Worlds One Tiny Voxel at a Time!",
                "institute": "Nanyang Technological University, Peking University, Shanghai AI Laboratory...",
                "text": "This research introduces PrimX, a novel 3D representation that encodes shape, texture, and material into a compact tensor. This differs from previous methods that often struggle with optimization speed, geometric fidelity, and PBR asset generation.",
                "paper-title": "3DTopia-XL: Scaling High-quality 3D Asset Generation via Primitive Diffusion",
                "image-path": "flux_paper_image/2409.12957_1726876767.png"
            },

            {
                "startTime": "01:35",
                "arxivId": "2409.12961",
                "arxivLink": "https://arxiv.org/abs/2409.12961",
                "title": "Visual Data, No Problem: Oryx MLLM Handles Any Resolution!",
                "institute": "Tsinghua University, Tencent, NTU",
                "text": "This research introduces Oryx, a multi-modal LLM that can process visual data at any resolution, unlike previous models that often standardize inputs to a fixed size. Oryx achieves this through a pre-trained visual encoder called OryxViT and a dynamic compressor module that can adjust downsampling ratios on demand.",
                "paper-title": "Oryx MLLM: On-Demand Spatial-Temporal Understanding at Arbitrary Resolution",
                "image-path": "flux_paper_image/2409.12961_1726876372.png"
            },

            {
                "startTime": "02:00",
                "arxivId": "2409.12954",
                "arxivLink": "https://arxiv.org/abs/2409.12954",
                "title": "Gaussians Get a Makeover: Texturing for Sharper 3D Scenes",
                "institute": "University of Toronto, Vector Institute",
                "text": "This paper introduces GStex, a new approach for 3D scene reconstruction that decouples appearance and geometry modeling by texturing each 2D Gaussian primitive. This differs from previous methods that couple these attributes, often requiring a large number of primitives for high-fidelity appearance modeling.",
                "paper-title": "GStex: Per-Primitive Texturing of 2D Gaussian Splatting for Decoupled Appearance and Geometry Modeling",
                "image-path": "flux_paper_image/2409.12954_1726876360.png"
            },

            {
                "startTime": "02:37",
                "arxivId": "2409.12941",
                "arxivLink": "https://arxiv.org/abs/2409.12941",
                "title": "LLMs: Fact-Checking, Retrieval, and Reasoning - All in One Go!",
                "institute": "Harvard University",
                "text": "This research introduces FRAMES, a new dataset for evaluating Retrieval-Augmented Generation (RAG) systems. Unlike previous datasets that focus on isolated aspects of RAG, FRAMES assesses factuality, retrieval, and reasoning simultaneously, providing a more holistic evaluation of RAG systems.",
                "paper-title": "Fact, Fetch, and Reason: A Unified Evaluation of Retrieval-Augmented Generation",
                "image-path": "flux_paper_image/2409.12941_1726874732.png"
            },

            {
                "startTime": "03:00",
                "arxivId": "2409.12917",
                "arxivLink": "https://arxiv.org/abs/2409.12917",
                "title": "LLMs Learn to Self-Correct: A Multi-Turn RL Approach to Fix Their Own Mistakes",
                "institute": "Google",
                "text": "This research introduces a novel multi-turn reinforcement learning (RL) approach called SCoRe, which trains a single language model (LLM) to self-correct its responses using entirely self-generated data. Unlike previous methods that rely on multiple models or external supervision, SCoRe addresses the challenges of distribution mismatch and mode collapse in self-correction training.",
                "paper-title": "Training Language Models to Self-Correct via Reinforcement Learning",
                "image-path": "flux_paper_image/2409.12917_1726870983.png"
            },

            {
                "startTime": "03:19",
                "arxivId": "2409.12293",
                "arxivLink": "https://arxiv.org/abs/2409.12293",
                "title": "Transformers Learn to Solve PDEs: A New Era of In-Context Learning!",
                "institute": "University of Minnesota",
                "text": "This research provides a rigorous error analysis for transformer-based in-context learning (ICL) applied to solving linear elliptic partial differential equations (PDEs). It differs from previous work by establishing quantitative error bounds for learning PDE solutions and quantifying the adaptability of pre-trained transformers on downstream PDE tasks that experience distribution shifts.",
                "paper-title": "Provable In-Context Learning of Linear Systems and Linear Elliptic PDEs with Transformers",
                "image-path": "flux_paper_image/2409.12293_1726876418.png"
            },

            {
                "startTime": "03:41",
                "arxivId": "2409.12824",
                "arxivLink": "https://arxiv.org/abs/2409.12824",
                "title": "Multi-Agent Systems: No Network Map? No Problem!",
                "institute": "Beihang University, Peking University, City University of Hong Kong",
                "text": "This research tackles the cooperative output regulation problem for continuous-time multi-agent systems, but with a twist: it doesn't require knowing the network topology. Previous work typically assumed this information was readily available, but this paper proposes a method to estimate the network structure using only edge weight bounds.",
                "paper-title": "Data-Driven Cooperative Output Regulation of Continuous-Time Multi-Agent Systems with Unknown Network Topology",
                "image-path": "flux_paper_image/2409.12824_1726876343.png"
            },

            {
                "startTime": "04:02",
                "arxivId": "2409.12403",
                "arxivLink": "https://arxiv.org/abs/2409.12403",
                "title": "TTS Gets a Human Touch: Preference Alignment Makes Speech Models Sound More Like Us!",
                "institute": "CMU, Tencent",
                "text": "This research applies preference alignment algorithms, specifically Direct Preference Optimization (DPO), to improve the quality of language model-based text-to-speech (TTS) systems. Unlike previous work that focused on ground truth or unpaired preference data, this study explores the use of generated win-lose pairs for preference alignment.",
                "paper-title": "Preference Alignment Improves Language Model-Based TTS",
                "image-path": "flux_paper_image/2409.12403_1726876445.png"
            },

            {
                "startTime": "04:23",
                "arxivId": "2409.12452",
                "arxivLink": "https://arxiv.org/abs/2409.12452",
                "title": "LLMs Get a Code-Based Brain Boost: Planning with Pseudocode!",
                "institute": "Tsinghua University",
                "text": "This research introduces CODEPLAN, a method that uses code-form plans (pseudocode) to guide large language models (LLMs) through multi-step reasoning tasks. This differs from previous work that relies on prompting or task-specific fine-tuning, which often struggle with robustness and generalization.",
                "paper-title": "CodePlan: Unlocking Reasoning Potential in Large Langauge Models by Scaling Code-form Planning",
                "image-path": "flux_paper_image/2409.12452_1726874671.png"
            },

            {
                "startTime": "04:44",
                "arxivId": "2409.12640",
                "arxivLink": "https://arxiv.org/abs/2409.12640",
                "title": "Beyond Haystacks: Chiseling Long-Context Understanding with Michelangelo",
                "institute": "Google",
                "text": "This research introduces a novel framework called Latent Structure Queries (LSQ) for evaluating long-context reasoning in large language models. Unlike previous work that focuses on retrieval tasks, LSQ constructs tasks that require models to synthesize information from the context, revealing a latent structure.",
                "paper-title": "Michelangelo: Long Context Evaluations Beyond Haystacks via Latent Structure Queries",
                "image-path": "flux_paper_image/2409.12640_1726870995.png"
            },

            {
                "startTime": "05:06",
                "arxivId": "2409.12947",
                "arxivLink": "https://arxiv.org/abs/2409.12947",
                "title": "Unrolling the Mystery: Deep Learning Cracks the Code of Bayesian Inference",
                "institute": "Harvard University, University of Texas at Austin, Weizmann Institute of Science",
                "text": "This research provides the first rigorous proof that unrolled neural networks can learn optimal Bayesian inference algorithms, specifically for compressed sensing. Previous work focused on representational guarantees for unrolled networks, but this paper demonstrates that these networks can actually learn the optimal denoisers used in Bayesian inference.",
                "paper-title": "Unrolled denoising networks provably learn optimal Bayesian inference",
                "image-path": "flux_paper_image/2409.12947_1726876486.png"
            },

            {
                "startTime": "05:31",
                "arxivId": "2409.12314",
                "arxivLink": "https://arxiv.org/abs/2409.12314",
                "title": "Poisoned Prompts: How Text-to-Image Models Implode Under Attack",
                "institute": "University of Chicago",
                "text": "This research introduces a novel analytical framework to model the impact of poisoned training data on text-to-image generative models. Unlike previous work that focused on empirical observations, this study provides a formal understanding of how poisoning attacks affect the cross-attention mechanism in these models.",
                "paper-title": "Understanding Implosion in Text-to-Image Generative Models",
                "image-path": "flux_paper_image/2409.12314_1726876426.png"
            },

            {
                "startTime": "05:51",
                "arxivId": "2409.12370",
                "arxivLink": "https://arxiv.org/abs/2409.12370",
                "title": "Speech Recognition Gets a Visual Makeover: Experts Help AI Understand Videos Better!",
                "institute": "Renmin University of China, CMU",
                "text": "This research introduces EVA, a new audiovisual speech recognition model that uses a mixture-of-experts (MoE) module to integrate visual information into a pretrained speech recognition model. This approach differs from previous work by leveraging the strengths of a pretrained ASR model while incorporating visual context through a dynamic expert selection mechanism.",
                "paper-title": "Robust Audiovisual Speech Recognition Models with Mixture-of-Experts",
                "image-path": "flux_paper_image/2409.12370_1726871012.png"
            },

            {
                "startTime": "06:13",
                "arxivId": "2409.12589",
                "arxivLink": "https://arxiv.org/abs/2409.12589",
                "title": "Tokenization? Nah, We're Flowing Now!",
                "institute": "University of Geneva, Meta, European Organization for Nuclear Research...",
                "text": "This paper explores alternative reconstruction tasks for masked particle modeling (MPM), a self-supervised learning scheme for high-energy physics, without relying on tokenization. It introduces new methods using conditional generative models, such as conditional normalizing flows and flow-matching, and compares their performance to the original MPM approach.",
                "paper-title": "Is Tokenization Needed for Masked Particle Modelling?",
                "image-path": "flux_paper_image/2409.12589_1726876758.png"
            },

            {
                "startTime": "06:40",
                "arxivId": "2409.12946",
                "arxivLink": "https://arxiv.org/abs/2409.12946",
                "title": "Semi-Supervised Learning: A New Recipe for Robust AI",
                "institute": "University of California Berkeley, National Taiwan University, Mobile Drive Technology",
                "text": "This research introduces a novel framework called SNORD (Semi-supervised Noise-aware Online Robust Distillation) for semi-supervised adversarial training. Unlike previous methods that rely on robust pretrained models, SNORD utilizes advanced semi-supervised learning techniques to enhance pseudo label quality and manage noisy training data, achieving state-of-the-art performance without the need for pretrained models.",
                "paper-title": "Revisiting Semi-supervised Adversarial Robustness via Noise-aware Online Robust Distillation",
                "image-path": "flux_paper_image/2409.12946_1726867202.png"
            },

            {
                "startTime": "07:06",
                "arxivId": "2409.12963",
                "arxivLink": "https://arxiv.org/abs/2409.12963",
                "title": "Video-LLMs Get a Training-Free Makeover: Longer Videos, Less Memory!",
                "institute": "Illinois Institute of Technology, UW-Madison, UC-Berkeley",
                "text": "This research proposes a training-free method for interpolating Video-LLMs, allowing them to process longer video sequences without requiring additional training. This is different from previous work that relied on extensive training or fine-tuning to handle longer videos.",
                "paper-title": "Interpolating Video-LLMs: Toward Longer-sequence LMMs in a Training-free Manner",
                "image-path": "flux_paper_image/2409.12963_1726867195.png"
            },

            {
                "startTime": "07:27",
                "arxivId": "2409.12507",
                "arxivLink": "https://arxiv.org/abs/2409.12507",
                "title": "Spiking Neural Networks: A New Trick to Make Event-Based Vision Faster!",
                "institute": "Wuhan University of Technology, Peking University",
                "text": "This research proposes a new training method called Hybrid Step-wise Distillation (HSD) for spiking neural networks (SNNs) that aims to improve accuracy while reducing latency in event-based visual recognition tasks. Unlike previous methods that rely on a fixed number of event frames for both training and inference, HSD separates these stages, allowing for more event frame information to be used during training for better performance and fewer frames during inference for faster processing.",
                "paper-title": "Towards Low-latency Event-based Visual Recognition with Hybrid Step-wise Distillation Spiking Neural Networks",
                "image-path": "flux_paper_image/2409.12507_1726875743.png"
            },

            {
                "startTime": "08:14",
                "arxivId": "2409.12296",
                "arxivLink": "https://arxiv.org/abs/2409.12296",
                "title": "Landau Equation Gets a Neural Network Makeover: Particle Method Takes the Stage!",
                "institute": "University of Minnesota",
                "text": "This research introduces a novel implicit particle method for solving the Landau equation, based on the JKO scheme and a neural network approximation of the flow map. This approach differs from previous work by utilizing a Lagrangian formulation and a tailored mini-batch stochastic gradient descent method, which preserves particle interactions and reduces computational complexity.",
                "paper-title": "JKO for Landau: a variational particle method for homogeneous Landau equation",
                "image-path": "flux_paper_image/2409.12296_1726874822.png"
            },

            {
                "startTime": "08:40",
                "arxivId": "2409.12567",
                "arxivLink": "https://arxiv.org/abs/2409.12567",
                "title": "Nerve Damage Simulation Gets a Speed Boost with Parallel Evolution Algorithm",
                "institute": "Polytechnic University of Madrid, University of Oxford",
                "text": "This research introduces a parallel implementation of the differential evolution algorithm to calibrate a coupled mechanical-electrophysiological model of nerve damage. This approach differs from previous work by leveraging OpenMP to speed up the parameter tuning process, enabling more efficient exploration of the parameter space.",
                "paper-title": "Model calibration using a parallel differential evolution algorithm in computational neuroscience: Simulation of stretch induced nerve deficit",
                "image-path": "flux_paper_image/2409.12567_1726876714.png"
            },

            {
                "startTime": "09:02",
                "arxivId": "2409.12887",
                "arxivLink": "https://arxiv.org/abs/2409.12887",
                "title": "Unsupervised Sentence Embedding: Knowledge is Power, Even for Bots!",
                "institute": "Peking University",
                "text": "This research introduces a novel data augmentation method for unsupervised sentence embedding models that leverages LLMs to synthesize domain-specific datasets. Unlike previous work that focused on generic corpora, this approach emphasizes the importance of few-shot domain data and utilizes entity and quantity information to generate more diverse and relevant samples.",
                "paper-title": "Knowledge-Based Domain-Oriented Data Augmentation for Enhancing Unsupervised Sentence Embedding",
                "image-path": "flux_paper_image/2409.12887_1726876618.png"
            },

            {
                "startTime": "09:26",
                "arxivId": "2409.12822",
                "arxivLink": "https://arxiv.org/abs/2409.12822",
                "title": "AI Learned to BS Humans: How RLHF Makes Language Models More Convincing, Not Smarter",
                "institute": "Tsinghua University, University of California Berkeley, Anthropic...",
                "text": "This research focuses on \"U-SOPHISTRY,\" a phenomenon where language models trained with Reinforcement Learning from Human Feedback (RLHF) become better at convincing humans they are correct, even when they are wrong. This differs from previous work that intentionally induces misleading behavior in models.",
                "paper-title": "Language Models Learn to Mislead Humans via RLHF",
                "image-path": "flux_paper_image/2409.12822_1726867134.png"
            },

            {
                "startTime": "09:49",
                "arxivId": "2409.12716",
                "arxivLink": "https://arxiv.org/abs/2409.12716",
                "title": "Steering with Style: How Optical Flow Makes Self-Driving Cars Smarter",
                "institute": "Capgemini Engineering, Massachusetts Institute of Technology",
                "text": "This research explores fusing optical flow data with RGB images from a single camera to improve steering estimation in autonomous vehicles, unlike previous methods that rely solely on RGB data or require multiple sensors.",
                "paper-title": "Optical Flow Matters: an Empirical Comparative Study on Fusing Monocular Extracted Modalities for Better Steering",
                "image-path": "flux_paper_image/2409.12716_1726876570.png"
            },

            {
                "startTime": "10:09",
                "arxivId": "2409.12493",
                "arxivLink": "https://arxiv.org/abs/2409.12493",
                "title": "ECG Reconstruction Gets a Convex Makeover: Explainable AI for Personalized Cardiac Monitoring",
                "institute": "Stanford University",
                "text": "This research introduces ConvexECG, a method for reconstructing six-lead ECGs from single-lead data using convex neural networks. Unlike traditional deep learning models, ConvexECG offers explainability, deterministic behavior, and guaranteed global optimality.",
                "paper-title": "ConvexECG: Lightweight and Explainable Neural Networks for Personalized, Continuous Cardiac Monitoring",
                "image-path": "flux_paper_image/2409.12493_1726874909.png"
            },

            {
                "startTime": "10:27",
                "arxivId": "2409.12929",
                "arxivLink": "https://arxiv.org/abs/2409.12929",
                "title": "Code-Driven Reasoning: Teaching AI Logic with LeetCode Problems",
                "institute": "Peking University, Zhejiang University, Meituan...",
                "text": "This research proposes a novel approach to enhance Large Language Models' (LLMs) complex logical reasoning abilities by leveraging widely available algorithmic problems and their code solutions. Unlike previous work that relies on synthetic data based on propositional logic, this method utilizes the intermediate variable outputs of code solutions to construct a more challenging and diverse dataset.",
                "paper-title": "LogicPro: Improving Complex Logical Reasoning via Program-Guided Learning",
                "image-path": "flux_paper_image/2409.12929_1726874623.png"
            },

            {
                "startTime": "10:53",
                "arxivId": "2409.12642",
                "arxivLink": "https://arxiv.org/abs/2409.12642",
                "title": "Tabular Data's New Nightmare: Deep Generative Models Go Rogue!",
                "institute": "University of Luxembourg, University of Oxford, Imperial College London",
                "text": "This research adapts four popular tabular DGMs into adversarial DGMs (AdvDGMs) and evaluates their effectiveness in generating realistic adversarial examples that conform to domain constraints. This approach differs from previous work by focusing on tabular data and incorporating a constraint repair layer to ensure the generated examples adhere to domain-specific rules.",
                "paper-title": "Deep generative models as an adversarial attack strategy for tabular machine learning",
                "image-path": "flux_paper_image/2409.12642_1726876801.png"
            },

            {
                "startTime": "11:21",
                "arxivId": "2409.12962",
                "arxivLink": "https://arxiv.org/abs/2409.12962",
                "title": "AI Judges Audio Captions: A New Metric That's Got Ears!",
                "institute": "UC Berkeley",
                "text": "This research proposes CLAIRA, a new method for evaluating audio captions that leverages the zero-shot capabilities of large language models (LLMs). Unlike previous methods that rely on specific aspects of the caption, CLAIRA directly asks an LLM to assess the semantic distance between a candidate caption and a reference set.",
                "paper-title": "CLAIR-A: Leveraging Large Language Models to Judge Audio Captions",
                "image-path": "flux_paper_image/2409.12962_1726876624.png"
            },

            {
                "startTime": "11:40",
                "arxivId": "2409.12386",
                "arxivLink": "https://arxiv.org/abs/2409.12386",
                "title": "Speech Recognition's New Trick: Making AI Sound Like It's In The Room With You!",
                "institute": "National Taiwan Normal University, Academia Sinica, United-Link Co. Ltd.",
                "text": "This research introduces a novel method called CADA-GAN, which uses a channel encoder to extract acoustic characteristics from target-domain speech and then guides a GAN to synthesize speech that mimics those characteristics. This differs from previous work by explicitly conditioning the generation process on channel embeddings, allowing for more precise alignment with the target channel.",
                "paper-title": "Channel-Aware Domain-Adaptive Generative Adversarial Network for Robust Speech Recognition",
                "image-path": "flux_paper_image/2409.12386_1726871117.png"
            },

            {
                "startTime": "12:14",
                "arxivId": "2409.12195",
                "arxivLink": "https://arxiv.org/abs/2409.12195",
                "title": "Feature Selection Gets a Topological Makeover: IVFS Algorithm Takes the Stage!",
                "institute": "Tsinghua University",
                "text": "This research introduces the IVFS algorithm for feature selection, which focuses on preserving the topological structure of the data rather than just local manifold structure. This approach is different from previous methods that primarily focus on preserving pairwise distances.",
                "paper-title": "Reproduction of IVFS algorithm for high-dimensional topology preservation feature selection",
                "image-path": "flux_paper_image/2409.12195_1726867224.png"
            },

            {
                "startTime": "12:36",
                "arxivId": "2409.12707",
                "arxivLink": "https://arxiv.org/abs/2409.12707",
                "title": "Nozzle Optimization: AI Gives Rocket Thrust a Boost!",
                "institute": "Tsinghua University",
                "text": "This research uses a machine learning model to optimize fluidic injection parameters for a single expansion ramp nozzle (SERN) under multiple operating conditions. Unlike previous studies that focused on single-point optimization, this paper tackles the challenge of multipoint optimization, which is crucial for improving nozzle performance during vehicle acceleration.",
                "paper-title": "Machine-learning-based multipoint optimization of fluidic injection parameters for improving nozzle performance",
                "image-path": "flux_paper_image/2409.12707_1726874763.png"
            },

            {
                "startTime": "12:56",
                "arxivId": "2409.12711",
                "arxivLink": "https://arxiv.org/abs/2409.12711",
                "title": "Swept Wings, Tiny Data: How AI Learned to Fly with Less",
                "institute": "Tsinghua University, Yale University",
                "text": "This research proposes a physics-embedded transfer learning framework for predicting swept wing aerodynamics. Unlike previous work, it leverages the strong relationship between 2D airfoil flow fields and 3D wing flow fields, using a pretrained airfoil model to reduce the need for extensive wing training data.",
                "paper-title": "Rapid aerodynamic prediction of swept wings via physics-embedded transfer learning",
                "image-path": "flux_paper_image/2409.12711_1726876517.png"
            },

            {
                "startTime": "13:15",
                "arxivId": "2409.12661",
                "arxivLink": "https://arxiv.org/abs/2409.12661",
                "title": "Radiance Fields: Uncertainty Solved, One Manifold at a Time!",
                "institute": "Max-Planck-Institut f\u00fcr Informatik, MIT, Meta",
                "text": "This paper proposes a novel approach for learning Gaussian radiance fields with explicit uncertainty estimates. Unlike previous methods that rely on stochastic approaches or Laplace approximations, this work introduces manifold sampling, a technique that efficiently models uncertainties as a low-dimensional manifold in the space of radiance field parameters.",
                "paper-title": "Manifold Sampling for Differentiable Uncertainty in Radiance Fields",
                "image-path": "flux_paper_image/2409.12661_1726870951.png"
            },

            {
                "startTime": "13:42",
                "arxivId": "2409.12670",
                "arxivLink": "https://arxiv.org/abs/2409.12670",
                "title": "Shopping Spree Secrets: AI Uncovers Hidden Customer Motives",
                "institute": "University of Tokyo, CyberAgent, Nara Institute of Science and Technology",
                "text": "This research introduces a novel \"learning-by-synthesis\" framework called Text2Traj2Text for contextual captioning of human movement trajectories. Unlike previous work that relies on real-world data, this approach leverages large language models to synthesize realistic and diverse collections of contextual captions and corresponding trajectories.",
                "paper-title": "Text2Traj2Text: Learning-by-Synthesis Framework for Contextual Captioning of Human Movement Trajectories",
                "image-path": "flux_paper_image/2409.12670_1726876612.png"
            },

            {
                "startTime": "14:11",
                "arxivId": "2409.12924",
                "arxivLink": "https://arxiv.org/abs/2409.12924",
                "title": "WaveletGPT: Making LLMs Learn Like a Pro, Faster!",
                "institute": "Stanford University",
                "text": "This paper introduces a novel approach to pre-training LLMs by incorporating wavelet transforms into the intermediate embeddings. Unlike previous work that focuses on improving attention mechanisms or using larger models for knowledge distillation, this method modifies the internal structure of the model without adding any extra parameters.",
                "paper-title": "WaveletGPT: Wavelets Meet Large Language Models",
                "image-path": "flux_paper_image/2409.12924_1726876353.png"
            },

            {
                "startTime": "14:30",
                "arxivId": "2409.12618",
                "arxivLink": "https://arxiv.org/abs/2409.12618",
                "title": "LLMs Get Chatty: Inner Dialogue Makes Them Think Better",
                "institute": "Agnostiq Inc., University of Toronto",
                "text": "This paper proposes a new framework called Iteration of Thought (IoT) for improving LLM reasoning. Unlike existing methods like Chain of Thought (CoT) or Tree of Thoughts (ToT), IoT uses a dynamic approach where an \"Inner Dialogue Agent\" (IDA) generates prompts based on the LLM's previous responses, leading to more adaptive and context-aware reasoning.",
                "paper-title": "Iteration of Thought: Leveraging Inner Dialogue for Autonomous Large Language Model Reasoning",
                "image-path": "flux_paper_image/2409.12618_1726871019.png"
            },

            {
                "startTime": "15:00",
                "arxivId": "2409.12741",
                "arxivLink": "https://arxiv.org/abs/2409.12741",
                "title": "Fine-Tuning LLMs for Medicine: DPO is the New Doctor in Town!",
                "institute": "Stanford University, Linguamind AI, M.P. Shah Government Medical College",
                "text": "This research compares two fine-tuning methods, Supervised Fine Tuning (SFT) and Direct Parameter Optimization (DPO), for five common natural language tasks in medicine. It finds that DPO outperforms SFT for more complex tasks like clinical reasoning, summarization, and triage.",
                "paper-title": "Fine Tuning Large Language Models for Medicine: The Role and Importance of Direct Parameter Optimization",
                "image-path": "flux_paper_image/2409.12741_1726867240.png"
            },

            {
                "startTime": "15:27",
                "arxivId": "2409.12809",
                "arxivLink": "https://arxiv.org/abs/2409.12809",
                "title": "AI Explanations: Don't Be Fooled by Fake Wisdom!",
                "institute": "Karlsruhe Institute of Technology, CMU, University of Bayreuth",
                "text": "This research focuses on the negative impact of incorrect explanations provided by AI systems, even when the AI advice itself is accurate. Previous work has mainly explored the effects of incorrect AI advice or the influence of explanations on trust and reliance.",
                "paper-title": "Don't be Fooled: The Misinformation Effect of Explanations in Human-AI Collaboration",
                "image-path": "flux_paper_image/2409.12809_1726874696.png"
            },

            {
                "startTime": "15:44",
                "arxivId": "2409.12951",
                "arxivLink": "https://arxiv.org/abs/2409.12951",
                "title": "LayerNorm: A Redundant Step? The Uniform Vector's Big Secret Revealed!",
                "institute": "UC Berkeley",
                "text": "This research delves into the geometric implications of LayerNorm, a crucial component of transformer architectures. It presents a novel interpretation of the standardization step in LayerNorm, showing that it can be understood as removing the component of a vector along the uniform vector, normalizing the remaining vector, and scaling the result. The paper also introduces the concept of \"irreversibility\" for LayerNorm, demonstrating that information lost during normalization cannot be recovered. This contrasts with BatchNorm, where the network can learn an identity transformation.",
                "paper-title": "Re-Introducing LayerNorm: Geometric Meaning, Irreversibility and a Comparative Study with RMSNorm",
                "image-path": "flux_paper_image/2409.12951_1726867235.png"
            },

            {
                "startTime": "16:08",
                "arxivId": "2409.12197",
                "arxivLink": "https://arxiv.org/abs/2409.12197",
                "title": "AI in Africa: Experts vs. the People, Who's Got the Trust?",
                "institute": "Google",
                "text": "This study uniquely combines expert interviews and general population surveys to understand AI for health in African countries, offering a nuanced perspective on trust, fairness, and bias considerations.",
                "paper-title": "Nteasee: A mixed methods study of expert and general population perspectives on deploying AI for health in African countries",
                "image-path": "flux_paper_image/2409.12197_1726876809.png"
            },

            {
                "startTime": "16:29",
                "arxivId": "2409.12446",
                "arxivLink": "https://arxiv.org/abs/2409.12446",
                "title": "Neural Networks: They're Not Just for Pictures Anymore!",
                "institute": "Stanford University",
                "text": "This paper introduces a new way to measure the complexity of neural networks, based on the length of a simple program that can be encoded by the network. This is different from previous work that focused on the VC dimension or other distribution-independent measures of complexity.",
                "paper-title": "Neural Networks Generalize on Low Complexity Data",
                "image-path": "flux_paper_image/2409.12446_1726871067.png"
            },

            {
                "startTime": "16:48",
                "arxivId": "2409.12447",
                "arxivLink": "https://arxiv.org/abs/2409.12447",
                "title": "Prompts Are Programs, Too: The Secret Life of AI Developers",
                "institute": "CMU",
                "text": "This research focuses on the process of developing software that uses natural language prompts to interact with foundation models, a topic that has received limited attention in previous studies. The authors argue that prompt programming is a distinct phenomenon in programming, requiring its own set of tools and processes.",
                "paper-title": "Prompts Are Programs Too! Understanding How Developers Build Software Containing Prompts",
                "image-path": "flux_paper_image/2409.12447_1726876538.png"
            },

            {
                "startTime": "17:11",
                "arxivId": "2409.12798",
                "arxivLink": "https://arxiv.org/abs/2409.12798",
                "title": "LLMs: The New Credit Assignment Ninjas?",
                "institute": "University College London",
                "text": "This paper proposes CALM, a method that uses pretrained LLMs to automate credit assignment in reinforcement learning (RL) by breaking down tasks into subgoals and providing auxiliary rewards. This differs from previous work by leveraging the knowledge encoded in LLMs as a prior for credit assignment, rather than relying on human-designed reward shaping or options.",
                "paper-title": "Assessing the Zero-Shot Capabilities of LLMs for Action Evaluation in RL",
                "image-path": "flux_paper_image/2409.12798_1726876525.png"
            },

            {
                "startTime": "17:33",
                "arxivId": "2409.12601",
                "arxivLink": "https://arxiv.org/abs/2409.12601",
                "title": "Stubborn Agents Get Their Way: How Diminishing Competition Leads to Consensus",
                "institute": "Delft University of Technology, Harvard University, Bar-Ilan University",
                "text": "This research explores the Friedkin-Johnsen (FJ) model with a time-varying competition parameter, where the competition gradually decreases over time. This differs from previous work that focused on constant competition or assumed it never vanished.",
                "paper-title": "Frisking-Johnsen Model with Diminishing Competition",
                "image-path": "flux_paper_image/2409.12601_1726876772.png"
            },

            {
                "startTime": "17:59",
                "arxivId": "2409.12347",
                "arxivLink": "https://arxiv.org/abs/2409.12347",
                "title": "Axial Attention: A Transformer's Trick for Spotting Tiny Tumors",
                "institute": "University of California Los Angeles, Johns Hopkins University, Northeastern University...",
                "text": "This research introduces an axial attention mechanism within a Transformer-based segmentation model, specifically tailored for breast cancer image analysis. This approach differs from previous work by decomposing the traditional self-attention mechanism into two one-dimensional axial attentions, which improves computational efficiency and allows for more accurate localization of small lesions.",
                "paper-title": "Axial Attention Transformer Networks: A New Frontier in Breast Cancer Detection",
                "image-path": "flux_paper_image/2409.12347_1726876576.png"
            },

            {
                "startTime": "18:29",
                "arxivId": "2409.12255",
                "arxivLink": "https://arxiv.org/abs/2409.12255",
                "title": "Data Diet: Training Deep Learning Models on a Budget",
                "institute": "Indian Institute of Technology Bombay, Google, University of Texas at Dallas",
                "text": "This research introduces SUBSELNET, a trainable subset selection framework that generalizes across different neural network architectures. Unlike previous methods, which are tailored to specific architectures, SUBSELNET learns to select a representative subset of data that can be used to train any new architecture efficiently.",
                "paper-title": "Efficient Data Subset Selection to Generalize Training Across Models: Transductive and Inductive Networks",
                "image-path": "flux_paper_image/2409.12255_1726871086.png"
            },

            {
                "startTime": "18:57",
                "arxivId": "2409.12397",
                "arxivLink": "https://arxiv.org/abs/2409.12397",
                "title": "Can Robots Learn to Help Without Talking? New Study Says Yes!",
                "institute": "University of Texas at Austin, University of Liverpool, University of Oxford",
                "text": "This research explores how an autonomous agent can learn to cooperate with a human partner without relying on direct communication. Unlike previous work that focuses on explicit communication, this study investigates how agents can infer intentions solely through observing each other's actions.",
                "paper-title": "Learning to Coordinate without Communication under Incomplete Information",
                "image-path": "flux_paper_image/2409.12397_1726876479.png"
            },

            {
                "startTime": "19:25",
                "arxivId": "2409.12304",
                "arxivLink": "https://arxiv.org/abs/2409.12304",
                "title": "Brain Time Travel: Self-Supervised Learning for Autism Detection",
                "institute": "Yale University",
                "text": "This research explores the use of self-supervised pre-training tasks for an fMRI time-series transformer model in autism detection. Unlike previous work that relies on functional connectivity matrices, this study directly analyzes time-series fMRI data without computing connectivity.",
                "paper-title": "Self-Supervised Pre-training Tasks for an fMRI Time-series Transformer in Autism Detection",
                "image-path": "flux_paper_image/2409.12304_1726876851.png"
            },

            {
                "startTime": "19:43",
                "arxivId": "2409.12737",
                "arxivLink": "https://arxiv.org/abs/2409.12737",
                "title": "Sentence Embeddings: A Token-Level Twist for Cross-Lingual Understanding!",
                "institute": "Meta",
                "text": "This research proposes a novel approach called MEXMA, which integrates both sentence-level and token-level objectives during the training of cross-lingual sentence encoders. This differs from previous methods that primarily focused on sentence-level objectives.",
                "paper-title": "MEXMA: Token-level objectives improve sentence representations",
                "image-path": "flux_paper_image/2409.12737_1726876642.png"
            },

            {
                "startTime": "20:10",
                "arxivId": "2409.12915",
                "arxivLink": "https://arxiv.org/abs/2409.12915",
                "title": "Time Series Models: Learning the Ropes, One Sine Wave at a Time!",
                "institute": "CMU",
                "text": "This research focuses on identifying and manipulating specific concepts learned by time series foundation models (TSFMs) using synthetic data. Unlike previous work that primarily focused on forecasting, this study explores the internal representations of these models and how they can be steered to influence predictions.",
                "paper-title": "Unveiling and Manipulating Concepts in Time Series Foundation Models",
                "image-path": "flux_paper_image/2409.12915_1726876746.png"
            },

            {
                "startTime": "20:34",
                "arxivId": "2409.12892",
                "arxivLink": "https://arxiv.org/abs/2409.12892",
                "title": "3D Scene Reconstruction: Faster Than a Speeding Gaussian!",
                "institute": "Technical University of Munich, Meta",
                "text": "This paper introduces a new optimization method called 3DGS-LM, which uses Levenberg-Marquardt (LM) instead of the commonly used ADAM optimizer to speed up the reconstruction of 3D scenes using Gaussian Splatting (3DGS). This approach is different from previous work that focused on reducing the number of Gaussians or improving the rasterizer implementation.",
                "paper-title": "3DGS-LM: Faster Gaussian-Splatting Optimization with Levenberg-Marquardt",
                "image-path": "flux_paper_image/2409.12892_1726876839.png"
            }
    ],
    "stats": {
        "num_pick": 49,
        "num_total": 247,
    },
    "audio": "https://d2irtorupa9e8g.cloudfront.net/daily_podcast/202409201705_audio.mp3"
}