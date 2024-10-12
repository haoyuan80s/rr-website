
daily_data = {
    "date": "2024-07-12",
    "tweets": [
            {
                "startTime": "00:49",
                "arxivId": "2407.07950",
                "arxivLink": "https://arxiv.org/abs/2407.07950",
                "title": "AI's Confidence Game: How Chatbots' Warmth Makes Us Trust Their Lies",
                "institute": "Stanford University",
                "text": "This research focuses on how human reliance on language models (LLMs) is influenced by the interaction context, going beyond just the verbalized confidence of the model. It introduces a new methodology called REL-A.I. to measure this reliance in situ.",
                "paper-title": "Rel-A.I.: An Interaction-Centered Approach To Measuring Human-LM Reliance",
                "image-path": ""
            },

            {
                "startTime": "01:13",
                "arxivId": "2407.08103",
                "arxivLink": "https://arxiv.org/abs/2407.08103",
                "title": "Decoding Decoded: How Automata Make Language Models Speak the Right Language",
                "institute": "Google",
                "text": "This paper introduces a novel approach to constraining language models by leveraging automata theory. Unlike previous methods that rely on bespoke algorithms or dynamic vocabulary matching, this research proposes a closed-form solution using finite-state automata (FSAs) and push-down automata (PDAs) to pre-compute valid token sequences, making it more efficient and scalable.",
                "paper-title": "Automata-based constraints for language model decoding",
                "image-path": ""
            },

            {
                "startTime": "01:39",
                "arxivId": "2407.08351",
                "arxivLink": "https://arxiv.org/abs/2407.08351",
                "title": "AutoBencher: Building Better Benchmarks for Language Models, One Question at a Time!",
                "institute": "Stanford University",
                "text": "This research introduces a novel approach to creating benchmarks for language models by using a language model itself to automatically search for datasets that are salient, difficult, and novel. This differs from previous work that relied on human-constructed benchmarks.",
                "paper-title": "AutoBencher: Creating Salient, Novel, Difficult Datasets for Language Models",
                "image-path": ""
            },

            {
                "startTime": "02:03",
                "arxivId": "2407.07972",
                "arxivLink": "https://arxiv.org/abs/2407.07972",
                "title": "Adam's Reign Is Over: New Optimizers Rule the Language Model Kingdom!",
                "institute": "Harvard University",
                "text": "This research compares the performance and stability of several optimization algorithms, including Adam, Adafactor, Lion, and Signum, for training autoregressive language models across different model sizes, hyperparameters, and architectures. Unlike previous work, this study focuses on the stability of these optimizers with respect to hyperparameter choices, demonstrating that many of them are comparable to Adam in terms of both performance and stability.",
                "paper-title": "Deconstructing What Makes a Good Optimizer for Language Models",
                "image-path": ""
            },

            {
                "startTime": "02:28",
                "arxivId": "2407.08674",
                "arxivLink": "https://arxiv.org/abs/2407.08674",
                "title": "Still-Moving: Making Videos Dance Without Video Data!",
                "institute": "Google DeepMind, Tel Aviv University, Weizmann Institute of Science...",
                "text": "This research introduces a novel framework called Still-Moving that allows for customizing text-to-video models without requiring any customized video data. This is achieved by training lightweight adapters on still images, effectively transferring the spatial prior of a customized text-to-image model to the text-to-video model.",
                "paper-title": "Still-Moving: Customized Video Generation without Customized Video Data",
                "image-path": ""
            },

            {
                "startTime": "02:52",
                "arxivId": "2407.08737",
                "arxivLink": "https://arxiv.org/abs/2407.08737",
                "title": "Video Diffusion Gets a Gradient Makeover: Rewarding AI with Pixel-Perfect Feedback!",
                "institute": "Carnegie Mellon University",
                "text": "This research introduces VADER, a method for adapting video diffusion models using reward gradients. Unlike previous approaches that rely on policy gradients or direct preference optimization, VADER leverages the dense gradient information from reward models to efficiently align video generation with specific tasks.",
                "paper-title": "Video Diffusion Alignment via Reward Gradients",
                "image-path": ""
            },

            {
                "startTime": "03:17",
                "arxivId": "2407.08447",
                "arxivLink": "https://arxiv.org/abs/2407.08447",
                "title": "WildGaussians: 3D Scene Reconstruction Goes Wild!",
                "institute": "Czech Technical University in Prague, ETH Zurich, Google DeepMind",
                "text": "This paper introduces WildGaussians, a novel approach that extends 3D Gaussian Splatting (3DGS) to handle occlusions and appearance changes in real-world scenes. Unlike previous methods, WildGaussians leverages robust DINO features and integrates an appearance modeling module within 3DGS, achieving state-of-the-art results.",
                "paper-title": "WildGaussians: 3D Gaussian Splatting in the Wild",
                "image-path": ""
            },

            {
                "startTime": "03:44",
                "arxivId": "2407.08551",
                "arxivLink": "https://arxiv.org/abs/2407.08551",
                "title": "Say What? Speech Synthesis Without the Code-Cracking!",
                "institute": "The Chinese University of Hong Kong, Microsoft Corporation",
                "text": "This research proposes a new approach to speech synthesis that directly predicts continuous mel-spectrograms, bypassing the need for vector quantization, which is commonly used in other methods. This eliminates the need for a two-stage decoding process and improves robustness and speaker similarity.",
                "paper-title": "Autoregressive Speech Synthesis without Vector Quantization",
                "image-path": ""
            },

            {
                "startTime": "04:13",
                "arxivId": "2407.08694",
                "arxivLink": "https://arxiv.org/abs/2407.08694",
                "title": "Cloud Atlas: Fault Finding with AI and a Dash of Causality",
                "institute": "Stanford University, CMU, Microsoft",
                "text": "This research introduces Atlas, a novel approach to automatically synthesizing causal graphs for cloud systems. Unlike previous data-driven approaches, Atlas leverages large language models (LLMs) to generate causal graphs using system documentation, telemetry, and deployment feedback.",
                "paper-title": "Cloud Atlas: Efficient Fault Localization for Cloud Systems using Language Models and Causal Insight",
                "image-path": ""
            },

            {
                "startTime": "04:36",
                "arxivId": "2407.08585",
                "arxivLink": "https://arxiv.org/abs/2407.08585",
                "title": "Robots Get Spatial Awareness: Learning to Grasp, Poke, and Place Like a Pro!",
                "institute": "CMU, Meta",
                "text": "This research introduces spatially-grounded motion primitives for robot manipulation. Unlike previous work that uses primitives without spatial grounding, this method grounds each primitive on a specific point in the observed point cloud, improving the robot's ability to reason about spatial relationships and generalize to unseen objects.",
                "paper-title": "HACMan++: Spatially-Grounded Motion Primitives for Manipulation",
                "image-path": ""
            },

            {
                "startTime": "05:04",
                "arxivId": "2407.08185",
                "arxivLink": "https://arxiv.org/abs/2407.08185",
                "title": "Censorship Sleuths: AI Uncovers Hidden Web Blocks",
                "institute": "CMU, \u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne, University of British Columbia",
                "text": "This research introduces an automated method for generating probe lists, which are used to identify websites that are blocked due to censorship. Unlike previous manual or crowdsourced approaches, this method leverages natural language processing and search engine queries to discover new potentially censored URLs.",
                "paper-title": "Automatic Generation of Web Censorship Probe Lists",
                "image-path": ""
            },

            {
                "startTime": "05:32",
                "arxivId": "2407.08681",
                "arxivLink": "https://arxiv.org/abs/2407.08681",
                "title": "FPGA-Powered Brains: Teaching Robots to Race with Neural Networks!",
                "institute": "University of Seville, TU Delft, ETH Zurich...",
                "text": "This research uses hardware FPGA neural networks trained to imitate NMPC controllers, achieving faster control rates and better performance than traditional NMPC methods.",
                "paper-title": "Hardware Neural Control of CartPole and F1TENTH Race Car",
                "image-path": ""
            },

            {
                "startTime": "05:53",
                "arxivId": "2407.08707",
                "arxivLink": "https://arxiv.org/abs/2407.08707",
                "title": "Vision Models: Spilling Secrets From Training Data!",
                "institute": "Google, University of Oxford, ETH Zurich",
                "text": "This research investigates the ability of document-based visual question answering (DocVQA) models to memorize and regurgitate training data, even when the relevant visual information is removed. This differs from previous work on training data extraction, which primarily focused on extracting entire training samples from generative models for text and images.",
                "paper-title": "Extracting Training Data from Document-Based VQA Models",
                "image-path": ""
            },

            {
                "startTime": "06:23",
                "arxivId": "2407.08159",
                "arxivLink": "https://arxiv.org/abs/2407.08159",
                "title": "Backdoor Buster: How to Outsmart Sneaky AI Attacks in Cybersecurity",
                "institute": "Northeastern University, MIT Lincoln Laboratory, Peraton Labs",
                "text": "This research proposes a novel defense mechanism against clean-label backdoor attacks in cybersecurity environments. Unlike previous work, it doesn't require access to clean trusted data or knowledge of the victim's model architecture.",
                "paper-title": "Model-agnostic clean-label backdoor mitigation in cybersecurity environments",
                "image-path": ""
            },

            {
                "startTime": "06:47",
                "arxivId": "2407.08188",
                "arxivLink": "https://arxiv.org/abs/2407.08188",
                "title": "Stop Saying \"Diverse\" - Measure It!",
                "institute": "Stanford University",
                "text": "This paper proposes using measurement theory, a framework commonly used in social sciences, to define and evaluate diversity in machine learning datasets. This approach differs from previous work by focusing on the data collection process itself as a measurement tool, rather than solely relying on downstream model performance.",
                "paper-title": "Position: Measure Dataset Diversity, Don't Just Claim It",
                "image-path": ""
            },

            {
                "startTime": "07:12",
                "arxivId": "2407.08223",
                "arxivLink": "https://arxiv.org/abs/2407.08223",
                "title": "RAG's New Trick: Drafting Answers with a Smaller Brain!",
                "institute": "UC San Diego, Google",
                "text": "This paper introduces SPECULATIVE RAG, a new approach to retrieval augmented generation (RAG) that uses a smaller, specialized language model to generate multiple answer drafts in parallel. These drafts are then verified by a larger, generalist language model, which selects the most accurate answer. This differs from previous work that focuses on improving retrieval outcomes or instruction-tuning entire LLMs.",
                "paper-title": "Speculative RAG: Enhancing Retrieval Augmented Generation through Drafting",
                "image-path": ""
            },

            {
                "startTime": "07:44",
                "arxivId": "2407.07580",
                "arxivLink": "https://arxiv.org/abs/2407.07580",
                "title": "Layout Synthesis Gets a Semantic Makeover: Graph Diffusion Models Take the Stage!",
                "institute": "Peking University, ByteDance",
                "text": "This research introduces INSTRUCTLAYOUT, a generative framework for 2D and 3D layout synthesis that incorporates a semantic graph prior. Unlike previous methods that implicitly model object relations, INSTRUCTLAYOUT explicitly represents these relationships using a graph, enhancing controllability and fidelity in layout generation.",
                "paper-title": "InstructLayout: Instruction-Driven 2D and 3D Layout Synthesis with Semantic Graph Prior",
                "image-path": ""
            },

            {
                "startTime": "08:21",
                "arxivId": "2407.08699",
                "arxivLink": "https://arxiv.org/abs/2407.08699",
                "title": "Language Models: Forget the Past, Learn the Future!",
                "institute": "INSAIT, Sofia University, LogicStar.ai...",
                "text": "This research introduces Branch-and-Merge (BAM), a novel method for adapting large language models to new languages while minimizing the loss of previously learned capabilities. Unlike previous methods that rely on experience replay or reduced learning rates, BAM iteratively merges multiple models fine-tuned on subsets of the training data, leading to lower magnitude but higher quality weight changes.",
                "paper-title": "Mitigating Catastrophic Forgetting in Language Transfer via Model Merging",
                "image-path": ""
            },

            {
                "startTime": "09:14",
                "arxivId": "2407.08462",
                "arxivLink": "https://arxiv.org/abs/2407.08462",
                "title": "Self-Driving Cars Learn to Talk Less, Drive Smarter: New AI Technique Makes Gradient Quantization a Breeze!",
                "institute": "Jiangnan University, Tsinghua University, University of Kent...",
                "text": "This research proposes a distributed deep reinforcement learning (DRL) based quantization level allocation scheme for federated learning (FL) in vehicle edge computing (VEC). Unlike previous work, this approach dynamically adjusts the quantization level for each vehicle based on its individual state, including channel conditions and mobility, to optimize both training time and quantization error.",
                "paper-title": "Distributed Deep Reinforcement Learning Based Gradient Quantization for Federated Learning Enabled Vehicle Edge Computing",
                "image-path": ""
            },

            {
                "startTime": "09:45",
                "arxivId": "2407.08414",
                "arxivLink": "https://arxiv.org/abs/2407.08414",
                "title": "MeshAvatar: Turning Videos into 3D Humans, One Triangle at a Time!",
                "institute": "Tsinghua University, NNKosmos Technology",
                "text": "This paper proposes a novel approach to learning human avatars using triangular meshes, a departure from the popular NeRF-based methods. This representation allows for more efficient editing and manipulation of the avatar within traditional graphics pipelines.",
                "paper-title": "MeshAvatar: Learning High-quality Triangular Human Avatars from Multi-view Videos",
                "image-path": ""
            },

            {
                "startTime": "10:13",
                "arxivId": "2407.08730",
                "arxivLink": "https://arxiv.org/abs/2407.08730",
                "title": "Deep Learning's Trust Issues: A Replicability Study of DNN Reliability Tools",
                "institute": "CMU, National Aeronautics and Space Administration, IEEE Computer Society",
                "text": "This research focuses on the replicability and comparative analysis of recent techniques for evaluating the reliability of deep neural networks (DNNs) in deployment. It highlights the challenges in reproducing results and comparing the effectiveness of these approaches due to inconsistencies in evaluation metrics and data preparation methods. The study proposes a unified framework, TrustDNN, to address these issues and facilitate future research in this area.",
                "paper-title": "Evaluating Deep Neural Networks in Deployment (A Comparative and Replicability Study)",
                "image-path": ""
            },

            {
                "startTime": "10:39",
                "arxivId": "2407.08642",
                "arxivLink": "https://arxiv.org/abs/2407.08642",
                "title": "AI's New Trick: Being a Super-Specialized Generalist!",
                "institute": "Tsinghua University",
                "text": "This paper proposes a new approach to Artificial General Intelligence (AGI) called Specialized Generalist AI (SGI). Unlike previous work that focused on scaling general abilities, SGI emphasizes achieving expert-level performance in at least one specific task while maintaining general capabilities across a wider range of tasks.",
                "paper-title": "Towards Building Specialized Generalist AI with System 1 and System 2 Fusion",
                "image-path": ""
            },

            {
                "startTime": "11:12",
                "arxivId": "2407.07912",
                "arxivLink": "https://arxiv.org/abs/2407.07912",
                "title": "GNNs Get a Ranking Makeover: Directly Optimizing Recommendation Metrics!",
                "institute": "Conservatoire National des Arts et M\u00e9tiers, Sorbonne University",
                "text": "This research explores the use of ranking loss functions to directly optimize evaluation metrics for message-passing-based GNNs in top-k recommendation tasks, an area not extensively investigated in the GNN community for collaborative filtering.",
                "paper-title": "ITEM: Improving Training and Evaluation of Message-Passing based GNNs for top-k recommendation",
                "image-path": ""
            },

            {
                "startTime": "11:35",
                "arxivId": "2407.08083",
                "arxivLink": "https://arxiv.org/abs/2407.08083",
                "title": "MambaVision: When Transformers Met Mamba, Vision Got a Boost!",
                "institute": "Nvidia",
                "text": "This research proposes a hybrid architecture combining Mamba and Transformer blocks, specifically tailored for vision tasks. Unlike previous Mamba-based models, it integrates self-attention blocks at the final layers to capture long-range spatial dependencies, improving performance.",
                "paper-title": "MambaVision: A Hybrid Mamba-Transformer Vision Backbone",
                "image-path": ""
            },

            {
                "startTime": "11:57",
                "arxivId": "2407.08711",
                "arxivLink": "https://arxiv.org/abs/2407.08711",
                "title": "OmniNOCS: A Dataset So Big, It's Like a 3D Object Party!",
                "institute": "Google Research, Georgia Institute of Technology, Google DeepMind",
                "text": "This research introduces OmniNOCS, a large-scale dataset for 3D object lifting, which surpasses existing datasets in terms of the number of object classes and instances. It also proposes a novel transformer-based model, NOCSformer, trained on OmniNOCS, that can predict accurate 3D object poses and shapes from 2D object detections.",
                "paper-title": "OmniNOCS: A unified NOCS dataset and model for 3D lifting of 2D objects",
                "image-path": ""
            },

            {
                "startTime": "12:26",
                "arxivId": "2407.08022",
                "arxivLink": "https://arxiv.org/abs/2407.08022",
                "title": "Deep Learning Auctions: Bidding Wars Get a Neural Network Upgrade!",
                "institute": "Harvard University",
                "text": "This research proposes a new deep reinforcement learning framework tailored for sequential combinatorial auctions. Unlike traditional RL methods, it leverages first-order gradients to improve computational efficiency and convergence, especially in large and continuous action spaces.",
                "paper-title": "Deep Reinforcement Learning for Sequential Combinatorial Auctions",
                "image-path": ""
            },

            {
                "startTime": "12:57",
                "arxivId": "2407.08250",
                "arxivLink": "https://arxiv.org/abs/2407.08250",
                "title": "Boosting Brains: How Trees Conquered Reinforcement Learning",
                "institute": "Nvidia",
                "text": "This paper introduces Gradient-Boosting Reinforcement Learning (GBRL), a framework that extends the advantages of Gradient Boosting Trees (GBT) to the reinforcement learning domain. Unlike previous work that focused on using GBTs in off-policy RL methods, GBRL demonstrates the scalability and effectiveness of GBTs in complex, high-dimensional RL environments requiring extensive interactions.",
                "paper-title": "Gradient Boosting Reinforcement Learning",
                "image-path": ""
            },

            {
                "startTime": "13:18",
                "arxivId": "2407.08039",
                "arxivLink": "https://arxiv.org/abs/2407.08039",
                "title": "LLMs: When Facts Get Overshadowed, Hallucinations Bloom!",
                "institute": "University of Illinois Urbana-Champaign, The Hong Kong Polytechnic University, Stanford University",
                "text": "This research identifies a specific type of hallucination in LLMs called \"knowledge overshadowing,\" where the model prioritizes one condition over others in a query, leading to incorrect outputs. This phenomenon is shown to be caused by data imbalance during training, a factor not fully explored in previous research.",
                "paper-title": "Knowledge Overshadowing Causes Amalgamated Hallucination in Large Language Models",
                "image-path": ""
            },

            {
                "startTime": "13:55",
                "arxivId": "2407.08176",
                "arxivLink": "https://arxiv.org/abs/2407.08176",
                "title": "Foundation Models: From Code to Crisis, Engineering a Solution",
                "institute": "Peking University, University of Texas at Dallas",
                "text": "This paper proposes a new framework called \"Foundation Model Engineering\" (FME) to address the growing complexity of developing and managing foundation models. Unlike previous work that focuses on individual model improvements, FME aims to create a comprehensive ecosystem for managing data, models, and their evolution.",
                "paper-title": "Foundation Model Engineering: Engineering Foundation Models Just as Engineering Software",
                "image-path": ""
            },

            {
                "startTime": "14:24",
                "arxivId": "2407.08231",
                "arxivLink": "https://arxiv.org/abs/2407.08231",
                "title": "Silicon Retina Sees Color: Diffusion Models Bring Event Cameras to Life!",
                "institute": "Peking University",
                "text": "This research introduces diffusion models to the field of event-to-video reconstruction. Unlike previous regression-based methods, which often produce deterministic and unrealistic results, diffusion models allow for the generation of diverse and perceptually superior video reconstructions from achromatic event data.",
                "paper-title": "E2VIDiff: Perceptual Events-to-Video Reconstruction using Diffusion Priors",
                "image-path": ""
            },

            {
                "startTime": "14:47",
                "arxivId": "2407.08150",
                "arxivLink": "https://arxiv.org/abs/2407.08150",
                "title": "Brainwaves & Eye-Tracking: Unlocking the Secrets of Video Ads!",
                "institute": "Peking University",
                "text": "This research introduces a new dataset, SRI-ADV, which includes real-time EEG and eye-tracking data from diverse demographics watching advertisements. This dataset is unique because it captures both objective and subjective responses to video content, allowing for a more comprehensive understanding of how people engage with videos.",
                "paper-title": "Hypergraph Multi-modal Large Language Model: Exploiting EEG and Eye-tracking Modalities to Evaluate Heterogeneous Responses for Video Understanding",
                "image-path": ""
            },

            {
                "startTime": "15:15",
                "arxivId": "2407.08296",
                "arxivLink": "https://arxiv.org/abs/2407.08296",
                "title": "Training Giant Language Models on a Tiny Laptop? Q-GaLore Makes It Possible!",
                "institute": "University of Texas at Austin, University of Surrey, University of Oxford...",
                "text": "This research introduces Q-GaLore, a method that combines quantization and low-rank projection to reduce memory usage during training of large language models. Unlike previous methods, Q-GaLore adaptively updates the gradient subspace based on its convergence statistics, reducing the number of SVD operations and training time.",
                "paper-title": "Q-GaLore: Quantized GaLore with INT4 Projection and Layer-Adaptive Low-Rank Gradients",
                "image-path": ""
            },

            {
                "startTime": "15:44",
                "arxivId": "2407.08716",
                "arxivLink": "https://arxiv.org/abs/2407.08716",
                "title": "LLMs: Cheating on Tests? A Taxonomy of Data Contamination",
                "institute": "CMU",
                "text": "This research proposes a formal taxonomy for categorizing different types of data contamination in large language models (LLMs), going beyond previous work that focused on full-dataset contamination.",
                "paper-title": "A Taxonomy for Data Contamination in Large Language Models",
                "image-path": ""
            },

            {
                "startTime": "16:09",
                "arxivId": "2407.08303",
                "arxivLink": "https://arxiv.org/abs/2407.08303",
                "title": "Million-Word Images: A New Dataset for Super-Smart AI Vision",
                "institute": "Chinese Academy of Sciences, Peking University",
                "text": "This research proposes a new method for generating detailed image descriptions using a \"perceptual fusion\" pipeline. This pipeline combines information from various vision experts, such as object detectors and text recognition models, to create more comprehensive captions than traditional methods.",
                "paper-title": "DenseFusion-1M: Merging Vision Experts for Comprehensive Multimodal Perception",
                "image-path": ""
            },

            {
                "startTime": "16:33",
                "arxivId": "2407.08571",
                "arxivLink": "https://arxiv.org/abs/2407.08571",
                "title": "Stop the Stereotype Machine: New Metric Makes Image Search More Fair",
                "institute": "Harvard University",
                "text": "This research introduces a new metric called Multi-group Proportional Representation (MPR) to measure how well image search results represent diverse groups of people. Unlike previous methods that focus on individual attributes like gender or race, MPR considers combinations of attributes, capturing the representation of intersectional groups.",
                "paper-title": "Multi-Group Proportional Representation",
                "image-path": ""
            },

            {
                "startTime": "16:56",
                "arxivId": "2407.08516",
                "arxivLink": "https://arxiv.org/abs/2407.08516",
                "title": "AI's New BFF: LLMs and Symbolic AI Join Forces for Smarter Agents",
                "institute": "Microsoft, University of Virginia",
                "text": "This research explores the convergence of connectionist and symbolic AI paradigms in the context of LLM-empowered autonomous agents (LAAs). It contrasts LAAs with Knowledge Graphs (KGs) within the neuro-symbolic AI theme, highlighting the unique strengths of LAAs in mimicking human-like reasoning processes, scaling effectively with large datasets, and leveraging in-context samples without explicit re-training.",
                "paper-title": "Converging Paradigms: The Synergy of Symbolic and Connectionist AI in LLM-Empowered Autonomous Agents",
                "image-path": ""
            },

            {
                "startTime": "17:20",
                "arxivId": "2407.08044",
                "arxivLink": "https://arxiv.org/abs/2407.08044",
                "title": "RoLoRA: Spinning LLMs for Better Quantization, No Outliers Allowed!",
                "institute": "Hong Kong University of Science and Technology, Meta",
                "text": "This research proposes RoLoRA, a new method for fine-tuning large language models (LLMs) that integrates rotation to eliminate outliers in activation distributions. Unlike previous work that focuses on post-training quantization, RoLoRA tackles the outlier problem during the fine-tuning process, leading to more robust weight-activation quantization.",
                "paper-title": "RoLoRA: Fine-tuning Rotated Outlier-free LLMs for Effective Weight-Activation Quantization",
                "image-path": ""
            },

            {
                "startTime": "17:48",
                "arxivId": "2407.08086",
                "arxivLink": "https://arxiv.org/abs/2407.08086",
                "title": "Kernels on Manifolds: A Software Package for Smooth Data",
                "institute": "University of Cambridge, University of Oxford, Karlsruhe Institute of Technology...",
                "text": "This paper introduces the GeometricKernels package, a software library that implements heat and Mat\u00e9rn kernels for a wide range of geometric spaces, including manifolds, meshes, and graphs. This is different from previous work because it provides a unified framework for working with these kernels in various geometric settings, making it easier to apply them in machine learning tasks.",
                "paper-title": "The GeometricKernels Package: Heat and Mat\'ern Kernels for Geometric Learning on Manifolds, Meshes, and Graphs",
                "image-path": ""
            },

            {
                "startTime": "18:12",
                "arxivId": "2407.08056",
                "arxivLink": "https://arxiv.org/abs/2407.08056",
                "title": "Low-Rank Adapters: Pareto Front Learning Gets a Memory Makeover!",
                "institute": "\u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne, University of Geneva",
                "text": "This paper introduces PaLoRA, a new method for Pareto Front Learning that uses low-rank adapters to efficiently parameterize the Pareto Front. Unlike previous methods, PaLoRA dedicates the original model to learning general features and the adapters to learning task-specific features, resulting in a significant reduction in memory overhead.",
                "paper-title": "Pareto Low-Rank Adapters: Efficient Multi-Task Learning with Preferences",
                "image-path": ""
            },

            {
                "startTime": "18:35",
                "arxivId": "2407.07921",
                "arxivLink": "https://arxiv.org/abs/2407.07921",
                "title": "Indoor Localization Gets a Blockchain Boost: No More Single-Point Failures!",
                "institute": "Nanyang Technological University",
                "text": "This research proposes a decentralized federated learning framework called DFLoc for indoor localization. Unlike previous work, DFLoc addresses both privacy and security concerns by using blockchain technology to decentralize the system and mitigate the impact of malicious attacks.",
                "paper-title": "A Trustworthy AIoT-enabled Localization System via Federated Learning and Blockchain",
                "image-path": ""
            },

            {
                "startTime": "19:02",
                "arxivId": "2407.08672",
                "arxivLink": "https://arxiv.org/abs/2407.08672",
                "title": "Vision-Language Reasoning Gets a Continuous Upgrade: Neural ODEs to the Rescue!",
                "institute": "Southern University of Science and Technology, University of Cambridge",
                "text": "This paper proposes NODE-Adapter, a method that uses Neural Ordinary Differential Equations (Neural ODEs) to refine prototypes for vision-language reasoning tasks. Unlike previous methods that rely on single-modality fine-tuning or excessive learnable parameters, NODE-Adapter leverages both visual and textual modalities for more accurate prototype estimation.",
                "paper-title": "NODE-Adapter: Neural Ordinary Differential Equations for Better Vision-Language Reasoning",
                "image-path": ""
            },

            {
                "startTime": "19:30",
                "arxivId": "2407.07959",
                "arxivLink": "https://arxiv.org/abs/2407.07959",
                "title": "LLMs for Code: Are We Summarizing Too Much?",
                "institute": "Nanyang Technological University, University of New South Wales, Chongqing University...",
                "text": "This research goes beyond simply using LLMs for code summarization. It delves into the effectiveness of different prompting techniques, model settings, and even explores the suitability of LLMs as evaluators for code summaries.",
                "paper-title": "Source Code Summarization in the Era of Large Language Models",
                "image-path": ""
            },

            {
                "startTime": "20:01",
                "arxivId": "2407.08546",
                "arxivLink": "https://arxiv.org/abs/2407.08546",
                "title": "Brain Shrinkage? Let's Map It! New Tool Evaluates AI's Understanding of Alzheimer's",
                "institute": "CMU, University of Illinois",
                "text": "This research introduces a new metric, Brain Volume Change Score (VCS), to evaluate the saliency maps of Alzheimer's disease classifiers. Unlike previous methods that focus on specific brain regions, VCS considers the entire brain's volume changes, reflecting the disease's global impact.",
                "paper-title": "Quantitative Evaluation of the Saliency Map for Alzheimer's Disease Classifier with Anatomical Segmentation",
                "image-path": ""
            },

            {
                "startTime": "20:32",
                "arxivId": "2407.07995",
                "arxivLink": "https://arxiv.org/abs/2407.07995",
                "title": "Flow4D: LiDAR Scene Flow Gets a 4D Makeover!",
                "institute": "Daegu Gyeongbuk Institute of Science and Technology, CMU",
                "text": "This research introduces Flow4D, a LiDAR scene flow framework that uses a 4D voxel network to explicitly extract spatio-temporal features from multiple point clouds. This differs from previous methods that primarily relied on 2D representations and channel-wise fusion for temporal information.",
                "paper-title": "Flow4D: Leveraging 4D Voxel Network for LiDAR Scene Flow Estimation",
                "image-path": ""
            },

            {
                "startTime": "20:56",
                "arxivId": "2407.08239",
                "arxivLink": "https://arxiv.org/abs/2407.08239",
                "title": "Fake Audio Forensics: When Experts Disagree, Entropy Wins!",
                "institute": "Chinese Academy of Sciences, Tsinghua University",
                "text": "This research proposes an unsupervised domain adaptation method called SDE for locating manipulated regions in partially fake audio. Unlike previous methods that rely on data augmentation, SDE leverages a collection of diverse experts trained on the source domain to identify the most informative samples from the target domain.",
                "paper-title": "An Unsupervised Domain Adaptation Method for Locating Manipulated Region in partially fake Audio",
                "image-path": ""
            },

            {
                "startTime": "21:26",
                "arxivId": "2407.08572",
                "arxivLink": "https://arxiv.org/abs/2407.08572",
                "title": "Skeleton-Based Action Recognition: When AI Gets Tricked by a Little Jiggle!",
                "institute": "Hefei University of Technology, University of Science and Technology of China, University College London",
                "text": "This research focuses on adversarial transferability in skeleton-based human activity recognition (S-HAR). Unlike previous work that primarily focused on white-box attacks, this paper proposes a new post-train Dual Bayesian Attack (PDBA) strategy to improve adversarial transferability against unknown S-HAR models.",
                "paper-title": "Boosting Adversarial Transferability for Skeleton-based Action Recognition via Exploring the Model Posterior Space",
                "image-path": ""
            },

            {
                "startTime": "21:56",
                "arxivId": "2407.08459",
                "arxivLink": "https://arxiv.org/abs/2407.08459",
                "title": "Deep Learning's New Trick: Graph Expansions for Universal Scaling Limits",
                "institute": "University of Oxford, University of California Berkeley",
                "text": "This research introduces a novel approach to studying scaling limits of neural networks using the genus expansion technique from random matrix theory. Unlike previous work, which often relied on specific techniques for different architectures and weight distributions, this method provides a unified framework for analyzing a wide range of neural network settings.",
                "paper-title": "Graph Expansions of Deep Neural Networks and their Universal Scaling Limits",
                "image-path": ""
            },

            {
                "startTime": "22:28",
                "arxivId": "2407.08625",
                "arxivLink": "https://arxiv.org/abs/2407.08625",
                "title": "Cell Morphology: The Secret Weapon for Cancer Detection?",
                "institute": "ETH Zurich",
                "text": "This research proposes a novel DeepCMorph model that pre-trains on cell morphology, specifically nuclei segmentation and cell type annotation, before being applied to histopathological image classification. This approach differs from previous work that typically trains models directly on histopathology images or uses unsupervised pre-training methods.",
                "paper-title": "Histopathological Image Classification with Cell Morphology Aware Deep Neural Networks",
                "image-path": ""
            },

            {
                "startTime": "22:49",
                "arxivId": "2407.07916",
                "arxivLink": "https://arxiv.org/abs/2407.07916",
                "title": "Lightning Network: GNNs Crack the Code for Faster Bitcoin Payments",
                "institute": "ETH Zurich",
                "text": "This research distinguishes itself by benchmarking Graph Neural Networks (GNNs) on real-world Lightning Network data, demonstrating their effectiveness in predicting various network properties. Unlike previous studies that focused on analyzing the network's structure, this paper explores the potential of GNNs for practical applications within the Lightning Network.",
                "paper-title": "Benchmarking GNNs Using Lightning Network Data",
                "image-path": ""
            },

            {
                "startTime": "23:12",
                "arxivId": "2407.08675",
                "arxivLink": "https://arxiv.org/abs/2407.08675",
                "title": "AI Gets a Design Makeover: CAD-Prompted Images for Feasible Engineering Concepts",
                "institute": "MIT",
                "text": "This research introduces a novel method for improving the feasibility of designs generated by text-to-image models. Unlike previous approaches that focus on prompting with specific words or integrating with CAD software, this method utilizes CAD images as prompts alongside text prompts to guide the image generation process.",
                "paper-title": "CAD-Prompted Generative Models: A Pathway to Feasible and Novel Engineering Designs",
                "image-path": ""
            },

            {
                "startTime": "23:45",
                "arxivId": "2407.08607",
                "arxivLink": "https://arxiv.org/abs/2407.08607",
                "title": "Empathy Detection: It's Not Just About Saying \"I Feel You\"",
                "institute": "Birla Institute of Technology and Science, National University of Singapore",
                "text": "This research goes beyond traditional empathy detection methods that rely on surface-level features like sentiment or keywords. It focuses on six psychological indicators, like emotional language and perspective-taking, to provide a more nuanced understanding of empathy.",
                "paper-title": "Turn-Level Empathy Prediction Using Psychological Indicators",
                "image-path": ""
            },

            {
                "startTime": "24:11",
                "arxivId": "2407.08221",
                "arxivLink": "https://arxiv.org/abs/2407.08221",
                "title": "Neural Rendering: From Blurry to Beautiful, No Matter the Mess!",
                "institute": "Indian Institute of Technology Madras, University of California San Diego, Massachusetts Institute of Technology",
                "text": "This research introduces a novel neural rendering method called GAURA that can reconstruct 3D scenes from imperfect images, such as those captured in low light or with motion blur. Unlike previous methods that focus on specific degradation types, GAURA generalizes to various degradations by incorporating learnable latent codes that encode information about the imperfection type.",
                "paper-title": "GAURA: Generalizable Approach for Unified Restoration and Rendering of Arbitrary Views",
                "image-path": ""
            },

            {
                "startTime": "24:44",
                "arxivId": "2407.07958",
                "arxivLink": "https://arxiv.org/abs/2407.07958",
                "title": "Crowdsourcing Object Detection: When Annotators Disagree, Bayes Steps In!",
                "institute": "University of Surrey, University of Oxford",
                "text": "This research proposes a Bayesian Detector Combination (BDC) framework for object detection using noisy crowdsourced annotations. Unlike previous methods that rely on pre-defined annotator skill levels or specific object detection models, BDC infers annotator reliability automatically and is model-agnostic.",
                "paper-title": "Bayesian Detector Combination for Object Detection with Crowdsourced Annotations",
                "image-path": ""
            },

            {
                "startTime": "25:14",
                "arxivId": "2407.08488",
                "arxivLink": "https://arxiv.org/abs/2407.08488",
                "title": "Lynx: The LLM That Sniffs Out Lies in AI Answers!",
                "institute": "Patronus AI, Contextual AI, Stanford University",
                "text": "This research introduces LYNX, an open-source LLM specifically designed to detect hallucinations in Retrieval Augmented Generation (RAG) systems. Unlike previous work that relies on closed-source LLMs or heuristic-based metrics, LYNX offers a transparent and accessible solution for evaluating the faithfulness of AI-generated answers.",
                "paper-title": "Lynx: An Open Source Hallucination Evaluation Model",
                "image-path": ""
            },

            {
                "startTime": "25:33",
                "arxivId": "2407.08029",
                "arxivLink": "https://arxiv.org/abs/2407.08029",
                "title": "LLMs: Causal Reasoning or Just Clever Parrots?",
                "institute": "University of Oxford",
                "text": "This research critically reviews existing benchmarks for evaluating causal reasoning in large language models (LLMs). It highlights how many benchmarks rely on knowledge retrieval rather than true causal reasoning, and proposes criteria for designing more robust benchmarks that assess LLMs' ability to handle interventions and counterfactuals.",
                "paper-title": "A Critical Review of Causal Reasoning Benchmarks for Large Language Models",
                "image-path": ""
            },

            {
                "startTime": "25:59",
                "arxivId": "2407.08130",
                "arxivLink": "https://arxiv.org/abs/2407.08130",
                "title": "Spiking Tucker Fusion Transformer: Zero-Shot Learning Gets a Brain Boost!",
                "institute": "Harbin Institute of Technology, Peking University",
                "text": "This research introduces a novel Spiking Tucker Fusion Transformer (STFT) for audio-visual zero-shot learning. Unlike previous methods, STFT dynamically measures the significance of each time step in influencing the SNN's output, leading to improved performance.",
                "paper-title": "Spiking Tucker Fusion Transformer for Audio-Visual Zero-Shot Learning",
                "image-path": ""
            },

            {
                "startTime": "26:27",
                "arxivId": "2407.07934",
                "arxivLink": "https://arxiv.org/abs/2407.07934",
                "title": "Unmasking Macro Mysteries: D-Separation and Do-Calculus in Summary Causal Graphs",
                "institute": "Sorbonne Universit\u00b4e, INSERM, ENS de Lyon",
                "text": "This research focuses on identifying macro conditional independencies and macro total effects in summary causal graphs (SCGs), which are partially specified causal graphs that omit temporal information. This is different from previous work that focused on fully specified causal graphs or micro queries in SCGs.",
                "paper-title": "Identifying macro conditional independencies and macro total effects in summary causal graphs with latent confounding",
                "image-path": ""
            },

            {
                "startTime": "26:55",
                "arxivId": "2407.08678",
                "arxivLink": "https://arxiv.org/abs/2407.08678",
                "title": "Bayesian Adversaries: How to Train Your AI to Outsmart the Sneaky Stats",
                "institute": "Princeton University, University of Manchester, Delft University of Technology",
                "text": "This research explores a new type of adversarial attack in machine learning, where the adversary uses a Bayesian statistical approach instead of traditional optimization methods.",
                "paper-title": "How to beat a Bayesian adversary",
                "image-path": ""
            },

            {
                "startTime": "27:22",
                "arxivId": "2407.08608",
                "arxivLink": "https://arxiv.org/abs/2407.08608",
                "title": "FlashAttention-3: Attention, But Make It Asynchronous!",
                "institute": "Meta, Nvidia",
                "text": "This paper introduces FlashAttention-3, a new approach to speeding up attention on GPUs by leveraging asynchronous execution and low-precision computation. Unlike previous FlashAttention versions, FlashAttention-3 takes advantage of the Hopper GPU architecture's specialized hardware units for matrix multiplication and memory loading.",
                "paper-title": "FlashAttention-3: Fast and Accurate Attention with Asynchrony and Low-precision",
                "image-path": ""
            },

            {
                "startTime": "27:55",
                "arxivId": "2407.08726",
                "arxivLink": "https://arxiv.org/abs/2407.08726",
                "title": "Mapping the World: From Street View to Bird's Eye, One Million Images at a Time!",
                "institute": "Carnegie Mellon University, University at Buffalo",
                "text": "This research introduces a new data engine called MIA (Map It Anywhere) that leverages crowd-sourced platforms like Mapillary and OpenStreetMap to automatically curate large-scale datasets for training and benchmarking BEV (Bird's Eye View) map prediction models. This approach differs from previous work that relied on smaller, manually collected datasets from autonomous vehicles.",
                "paper-title": "Map It Anywhere (MIA): Empowering Bird's Eye View Mapping using Large-scale Public Data",
                "image-path": ""
            },

            {
                "startTime": "28:21",
                "arxivId": "2407.08689",
                "arxivLink": "https://arxiv.org/abs/2407.08689",
                "title": "AI Bill of Rights: From Blueprint to Reality - A Guide for the Confused",
                "institute": "Harvard University",
                "text": "This research paper differs from previous work by providing a practical guide for operationalizing the principles outlined in the Blueprint for an AI Bill of Rights. It summarizes existing research on topics like fairness, privacy, and explainability, making it accessible to practitioners who may not have a deep technical background.",
                "paper-title": "Operationalizing the Blueprint for an AI Bill of Rights: Recommendations for Practitioners, Researchers, and Policy Makers",
                "image-path": ""
            },

            {
                "startTime": "28:43",
                "arxivId": "2407.08735",
                "arxivLink": "https://arxiv.org/abs/2407.08735",
                "title": "Robots Get a Brain: LLMs Detect Anomalies in Real-Time!",
                "institute": "Stanford University, Nvidia",
                "text": "This research proposes a two-stage anomaly detection system using large language models (LLMs) for real-time control of robots. Unlike previous work that focuses on offline or quasi-static settings, this approach integrates LLMs into a closed-loop control framework, accounting for their inference latency.",
                "paper-title": "Real-Time Anomaly Detection and Reactive Planning with Large Language Models",
                "image-path": ""
            },

            {
                "startTime": "29:03",
                "arxivId": "2407.08105",
                "arxivLink": "https://arxiv.org/abs/2407.08105",
                "title": "AI Act's Got a New BFF: Federated Learning! Who's the Boss?",
                "institute": "Technical University of Munich, University of Bayreuth, University of Toronto",
                "text": "This research explores the legal and technical challenges of applying Federated Learning (FL) within the framework of the European Union's Artificial Intelligence Act (AI Act). It specifically focuses on clarifying the responsibilities of both the FL server operator and the clients participating in the training process.",
                "paper-title": "Federated Learning and AI Regulation in the European Union: Who is liable? An Interdisciplinary Analysis",
                "image-path": ""
            },

            {
                "startTime": "29:35",
                "arxivId": "2407.08384",
                "arxivLink": "https://arxiv.org/abs/2407.08384",
                "title": "LiDAR-Powered Roadside Units: Giving Self-Driving Cars a Helping Hand!",
                "institute": "University of Tokyo",
                "text": "This research proposes a cooperative localization system that uses roadside LiDAR units (RSUs) to enhance the accuracy of autonomous vehicle localization, particularly in areas with limited map features. This approach differs from previous work by leveraging V2I communication to transmit vehicle dimensions to the RSUs, enabling more precise position estimation.",
                "paper-title": "Accurate Cooperative Localization Utilizing LiDAR-equipped Roadside Infrastructure for Autonomous Driving",
                "image-path": ""
            },

            {
                "startTime": "30:00",
                "arxivId": "2407.08388",
                "arxivLink": "https://arxiv.org/abs/2407.08388",
                "title": "AI's Got Feelings? The Trouble with Measuring Machine Confidence",
                "institute": "Google Research",
                "text": "This paper examines the practice of attributing \"credence\" - a measure of confidence - to large language models (LLMs). It argues that while attributing credence to LLMs is common in the field, the theoretical basis for doing so is unclear. The paper explores the semantic interpretation of LLM credence attributions, the metaphysical question of whether LLMs actually have credences, and the epistemic challenges of measuring LLM credences using current techniques.",
                "paper-title": "On the attribution of confidence to large language models",
                "image-path": ""
            },

            {
                "startTime": "30:29",
                "arxivId": "2407.08458",
                "arxivLink": "https://arxiv.org/abs/2407.08458",
                "title": "NR-V2X Gets a NOMA Makeover: Deep Learning for Smarter Car Communication",
                "institute": "Jiangnan University, Tsinghua University",
                "text": "This research explores the use of NOMA (Non-Orthogonal Multiple Access) in NR-V2X (New Radio Vehicle-to-Everything) communication to mitigate resource collisions and improve the age of information (AoI). Unlike previous work, it focuses on jointly optimizing AoI and energy consumption using a deep reinforcement learning (DRL) approach.",
                "paper-title": "Joint Optimization of Age of Information and Energy Consumption in NR-V2X System Based on Deep Reinforcement Learning",
                "image-path": ""
            },

            {
                "startTime": "30:53",
                "arxivId": "2407.08722",
                "arxivLink": "https://arxiv.org/abs/2407.08722",
                "title": "Robot Control From Vision: No More Modeling Needed!",
                "institute": "MIT",
                "text": "This research introduces Neural Jacobian Fields, a deep learning approach that learns to control robots from vision alone. Unlike previous methods that rely on expert-designed models and sensors, this approach directly learns the robot's 3D geometry and kinematics from a single camera stream.",
                "paper-title": "Unifying 3D Representation and Control of Diverse Robots with a Single Camera",
                "image-path": ""
            },

            {
                "startTime": "31:17",
                "arxivId": "2407.08442",
                "arxivLink": "https://arxiv.org/abs/2407.08442",
                "title": "Deep Learning for Medical Time-Series Imputation: A Taxonomy of Inductive Biases",
                "institute": "King\u2019s College London, University of Warwick, University College London...",
                "text": "This research introduces a novel taxonomy of deep learning imputation strategies for medical time-series data, classifying existing methods based on their inductive biases and suitability for specific imputation scenarios. It also highlights the importance of bridging the gap between computational methodologies and medical insights to achieve clinically sound imputation models.",
                "paper-title": "How Deep is your Guess? A Fresh Perspective on Deep Learning for Medical Time-Series Imputation",
                "image-path": ""
            },

            {
                "startTime": "31:42",
                "arxivId": "2407.08659",
                "arxivLink": "https://arxiv.org/abs/2407.08659",
                "title": "Deepfakes Get a Density Makeover: Controlling Generative Model Fidelity and Diversity",
                "institute": "\u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne, City University of Hong Kong",
                "text": "This research introduces a novel metric called \"pseudo density\" to estimate the density of image data, which is then used to control the fidelity and diversity of generated images. Unlike previous approaches that focus on manipulating the latent space, this method directly manipulates the probability density of the generated data.",
                "paper-title": "Controlling the Fidelity and Diversity of Deep Generative Models via Pseudo Density",
                "image-path": ""
            },

            {
                "startTime": "32:13",
                "arxivId": "2407.08019",
                "arxivLink": "https://arxiv.org/abs/2407.08019",
                "title": "Inpainting with a Twist: Optimizing Latent Spaces for Realistic Image Edits",
                "institute": "Xi\u2019an Jiaotong University, EPFL",
                "text": "This research introduces PILOT, a novel inpainting framework that optimizes latent vectors during the reverse diffusion process. Unlike previous methods that rely on model fine-tuning or simple latent blending, PILOT directly manipulates the latent space to generate coherent and high-quality inpainted regions.",
                "paper-title": "Coherent and Multi-modality Image Inpainting via Latent Space Optimization",
                "image-path": ""
            },

            {
                "startTime": "32:39",
                "arxivId": "2407.08169",
                "arxivLink": "https://arxiv.org/abs/2407.08169",
                "title": "Forget Me Not: A Speedy New Way to Delete Data from Machine Learning Models",
                "institute": "MIT",
                "text": "This research proposes a new algorithm for machine unlearning that leverages Natural Gradient Descent (NGD). Unlike previous methods that rely on the computationally expensive Newton step, NGD offers a faster and more efficient way to remove data from trained models.",
                "paper-title": "Faster Machine Unlearning via Natural Gradient Descent",
                "image-path": ""
            },

            {
                "startTime": "33:05",
                "arxivId": "2407.08074",
                "arxivLink": "https://arxiv.org/abs/2407.08074",
                "title": "Latent Space: Where Geometry Meets Stiffness in 3D Printing",
                "institute": "Carnegie Mellon University, The Pennsylvania State University",
                "text": "This research explores the use of a hybrid Variational Autoencoder (VAE) that incorporates both geometric and mechanical property data to design multi-lattice structures in additive manufacturing. This approach differs from previous work that primarily relied on geometric data alone.",
                "paper-title": "Smooth Like Butter: Evaluating Multi-lattice Transitions in Property-Augmented Latent Spaces",
                "image-path": ""
            },

            {
                "startTime": "33:31",
                "arxivId": "2407.08693",
                "arxivLink": "https://arxiv.org/abs/2407.08693",
                "title": "Robots Get Brainy: New AI Makes Them Think Before They Act!",
                "institute": "University of Warsaw, UC Berkeley",
                "text": "This research introduces Embodied Chain-of-Thought Reasoning (ECoT) for vision-language-action models (VLAs). Unlike previous VLAs that directly map observations to actions, ECoT trains VLAs to reason through a task step-by-step, grounding their reasoning in visual observations and the robot's state.",
                "paper-title": "Robotic Control via Embodied Chain-of-Thought Reasoning",
                "image-path": ""
            }
    ],
    "stats": {
        "num_pick": 73,
        "num_total": 313,
    },
    "audio": "https://d2irtorupa9e8g.cloudfront.net/daily_podcast/202407120905_audio.mp3"
}