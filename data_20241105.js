
daily_data = {
    "date": "2024-11-05",
    "tweets": [
        
        {
            "startTime": "01:13",
            "arxivId": "2411.01111",
            "arxivLink": "https://arxiv.org/abs/2411.01111",
            "title": "AI Safety Rules: No More Overly Cautious Bots!",
            "institute": "OpenAI",
            "text": "This research proposes a novel approach to training large language models (LLMs) for safety, using AI feedback instead of solely relying on human annotations. The method, called Rule-Based Rewards (RBRs), breaks down desired behaviors into specific rules that are then used to directly guide the model's training. This differs from previous methods that rely on distilling these rules into datasets for training.",
            "paper-title": "Rule Based Rewards for Language Model Safety",
            "image-path": "flux_paper_image/2411.01111_1730839002.png"
        },

        {
            "startTime": "01:37",
            "arxivId": "2411.01035",
            "arxivLink": "https://arxiv.org/abs/2411.01035",
            "title": "Short-Memory Models with Long-Term Vision: Spectral Filtering Cracks the Length Generalization Code!",
            "institute": "Google",
            "text": "This research introduces a new metric called Asymmetric-Regret to measure how well a model trained on short sequences can predict long sequences. It then shows that spectral filtering algorithms can achieve low Asymmetric-Regret for certain linear dynamical systems.",
            "paper-title": "Provable Length Generalization in Sequence Prediction via Spectral Filtering",
            "image-path": "flux_paper_image/2411.01035_1730840571.png"
        },

        {
            "startTime": "01:56",
            "arxivId": "2411.01208",
            "arxivLink": "https://arxiv.org/abs/2411.01208",
            "title": "MultiPull: Pulling Surfaces Out of Point Clouds with Multi-Level Features!",
            "institute": "Tsinghua University, Tencent, Wayne State University",
            "text": "This research proposes a new method called MultiPull that learns detailed signed distance functions (SDFs) from raw point clouds by progressively pulling query points onto the surface at multiple steps. Unlike previous methods that rely on overfitting to a single point cloud, MultiPull leverages multi-level frequency features to guide the pulling process, resulting in more accurate and detailed surface reconstructions.",
            "paper-title": "MultiPull: Detailing Signed Distance Functions by Pulling Multi-Level Queries at Multi-Step",
            "image-path": "flux_paper_image/2411.01208_1730840019.png"
        },

        {
            "startTime": "02:15",
            "arxivId": "2411.01438",
            "arxivLink": "https://arxiv.org/abs/2411.01438",
            "title": "AI Models on a Budget: Serving with Spot Instances Across Clouds",
            "institute": "UC Berkeley, ICSI",
            "text": "This research introduces SkyServe, a system that dynamically manages a mixture of spot and on-demand replicas across regions and clouds to serve AI models. Unlike previous work that focuses on single-region deployments or static spot-on-demand mixtures, SkyServe leverages the availability of spot instances across multiple regions and clouds to improve availability and reduce costs.",
            "paper-title": "SkyServe: Serving AI Models across Regions and Clouds with Spot Instances",
            "image-path": "flux_paper_image/2411.01438_1730840354.png"
        },

        {
            "startTime": "02:39",
            "arxivId": "2411.01813",
            "arxivLink": "https://arxiv.org/abs/2411.01813",
            "title": "Autonomous Robot Learning: Don't Get Your Hopes Up!",
            "institute": "Stanford University",
            "text": "This research investigates the effectiveness of autonomous imitation learning (IL) for scaling up robot learning in real-world tasks. Unlike previous work that suggests autonomous IL can significantly reduce human supervision effort, this study finds that simply collecting more human data often yields better results.",
            "paper-title": "So You Think You Can Scale Up Autonomous Robot Data Collection?",
            "image-path": "flux_paper_image/2411.01813_1730839188.png"
        },

        {
            "startTime": "02:56",
            "arxivId": "2411.01142",
            "arxivLink": "https://arxiv.org/abs/2411.01142",
            "title": "LLMs: Out of Memory? CPU to the Rescue!",
            "institute": "Peking University",
            "text": "This research proposes NEO, a system that offloads part of the attention computation and KV cache states from the GPU to the CPU during online LLM inference. This differs from previous work by focusing on partial offloading to avoid overloading the CPU, and by using a load-aware scheduling policy to adapt to dynamically changing workloads.",
            "paper-title": "NEO: Saving GPU Memory Crisis with CPU Offloading for Online LLM Inference",
            "image-path": "flux_paper_image/2411.01142_1730840773.png"
        },

        {
            "startTime": "03:23",
            "arxivId": "2411.01796",
            "arxivLink": "https://arxiv.org/abs/2411.01796",
            "title": "AI Helpers for Everyone: New Challenge Tests Robots' Social Skills with Real-World Constraints",
            "institute": "CMU, Peking University, University of Massachusetts",
            "text": "This research introduces a new benchmark called Constrained Human-AI Cooperation (CHAIC) that focuses on embodied agents' ability to perceive and cooperate with humans who have physical constraints, such as wheelchair users or children. This differs from previous work by explicitly incorporating accessibility challenges into the design of the benchmark.",
            "paper-title": "Constrained Human-AI Cooperation: An Inclusive Embodied Social Intelligence Challenge",
            "image-path": "flux_paper_image/2411.01796_1730840729.png"
        },

        {
            "startTime": "03:54",
            "arxivId": "2411.01644",
            "arxivLink": "https://arxiv.org/abs/2411.01644",
            "title": "Neural Networks: Knowing When to Say \"I Don't Know\"",
            "institute": "CMU, Dartmouth College",
            "text": "This paper introduces \"knowledge continuity,\" a new way to measure the robustness of neural networks. Unlike previous methods that focus on input perturbations, knowledge continuity examines how a model's performance changes with respect to its internal representations.",
            "paper-title": "Achieving Domain-Independent Certified Robustness via Knowledge Continuity",
            "image-path": "flux_paper_image/2411.01644_1730841637.png"
        },

        {
            "startTime": "04:17",
            "arxivId": "2411.01791",
            "arxivLink": "https://arxiv.org/abs/2411.01791",
            "title": "Minder: The AI Doctor That Fixes Faulty Machines in Large Language Models",
            "institute": "Tsinghua University, ByteDance, Northeastern University...",
            "text": "This research proposes Minder, a system that uses unsupervised learning to detect faulty machines in large-scale distributed model training. Unlike previous work that relies on supervised learning or manual inspection, Minder leverages the similarity and continuity of monitoring metrics to identify faulty machines quickly and accurately.",
            "paper-title": "Minder: Faulty Machine Detection for Large-scale Distributed Model Training",
            "image-path": "flux_paper_image/2411.01791_1730839460.png"
        },

        {
            "startTime": "04:43",
            "arxivId": "2411.01783",
            "arxivLink": "https://arxiv.org/abs/2411.01783",
            "title": "Million-Token Models: How to Make LLMs Talk for Hours Without Breaking a Sweat!",
            "institute": "Meta",
            "text": "This research focuses on context parallelism for long-context LLM inference, a system optimization technique that distributes input tokens across multiple GPUs to improve latency and scalability. Unlike previous work that primarily focused on training, this paper addresses the unique challenges of inference, including multi-turn prefill and decoding, latency optimization, and compute and memory load balancing.",
            "paper-title": "Context Parallelism for Scalable Million-Token Inference",
            "image-path": "flux_paper_image/2411.01783_1730841542.png"
        },

        {
            "startTime": "05:11",
            "arxivId": "2411.01751",
            "arxivLink": "https://arxiv.org/abs/2411.01751",
            "title": "RAGViz: Seeing How LLMs Think, One Token at a Time!",
            "institute": "CMU",
            "text": "This research introduces RAGViz, a tool that visualizes how retrieval-augmented generation (RAG) models use retrieved documents to generate answers. Unlike previous tools that focus on analyzing input tokens, RAGViz specifically examines the interaction between retrieved context documents and language generation.",
            "paper-title": "RAGViz: Diagnose and Visualize Retrieval-Augmented Generation",
            "image-path": "flux_paper_image/2411.01751_1730841132.png"
        },

        {
            "startTime": "05:33",
            "arxivId": "2411.01098",
            "arxivLink": "https://arxiv.org/abs/2411.01098",
            "title": "AI: Microbes' New BFF for a Healthier Planet",
            "institute": "Harvard University",
            "text": "This research provides a comprehensive overview of AI applications in microbiology and microbiome research, focusing on machine learning and deep learning techniques. It systematically reviews various applications across diverse research areas, including taxonomic profiling, functional annotation & prediction, microbe-X interactions, microbial ecology, metabolic modeling, precision nutrition, clinical microbiology, and prevention & therapeutics.",
            "paper-title": "Artificial Intelligence for Microbiology and Microbiome Research",
            "image-path": "flux_paper_image/2411.01098_1730839483.png"
        },

        {
            "startTime": "05:54",
            "arxivId": "2411.01792",
            "arxivLink": "https://arxiv.org/abs/2411.01792",
            "title": "Green's Function Gets a Makeover: A Faster, More Stable Way to Learn on Big Graphs",
            "institute": "Tsinghua University, Northwestern Polytechnical University",
            "text": "This research proposes a novel interpretation of the Green-function method for semi-supervised learning on graphs. The authors analyze the method's limitations on non-fully connected graphs and introduce a perturbation strategy to improve its performance.",
            "paper-title": "Fast Semi-supervised Learning on Large Graphs: An Improved Green-function Method",
            "image-path": "flux_paper_image/2411.01792_1730840398.png"
        },

        {
            "startTime": "06:17",
            "arxivId": "2411.01780",
            "arxivLink": "https://arxiv.org/abs/2411.01780",
            "title": "Clustering Chaos: How Density Propagation Tames Wild Data",
            "institute": "Northwestern Polytechnical University, Tsinghua University",
            "text": "This research introduces a novel density-based clustering method called DPSM, which utilizes a propagation process to determine node density. Unlike traditional methods that rely on global distance calculations, DPSM focuses on local neighborhoods, making it more suitable for graph-structured data.",
            "paper-title": "Clustering Based on Density Propagation and Subcluster Merging",
            "image-path": "flux_paper_image/2411.01780_1730841323.png"
        },

        {
            "startTime": "06:39",
            "arxivId": "2411.02019",
            "arxivLink": "https://arxiv.org/abs/2411.02019",
            "title": "Speech Enhancement on a Budget: How to Make Your AI Hear Better Without Breaking the Bank!",
            "institute": "University of Zurich, Meta",
            "text": "This research introduces the SlowFast framework, which uses two separate branches to process speech data. The slow branch analyzes the acoustic environment at a lower frame rate, while the fast branch performs speech enhancement at a higher frame rate. This approach reduces computation costs, especially when low-latency enhancement is needed.",
            "paper-title": "Modulating State Space Model with SlowFast Framework for Compute-Efficient Ultra Low-Latency Speech Enhancement",
            "image-path": "flux_paper_image/2411.02019_1730839331.png"
        },

        {
            "startTime": "07:04",
            "arxivId": "2411.02068",
            "arxivLink": "https://arxiv.org/abs/2411.02068",
            "title": "Unlearning Without Breaking: How to Fix Diffusion Models' Forgetfulness",
            "institute": "Google",
            "text": "This research introduces a new metric, \"I,\" to assess the integrity of diffusion models after unlearning. It directly compares the outputs of the original and unlearned models, addressing the limitations of FID and CLIPScore in capturing subtle changes.",
            "paper-title": "Model Integrity when Unlearning with T2I Diffusion Models",
            "image-path": "flux_paper_image/2411.02068_1730841363.png"
        },

        {
            "startTime": "07:24",
            "arxivId": "2411.02063",
            "arxivLink": "https://arxiv.org/abs/2411.02063",
            "title": "Low-Rank Language Models: A Slimmer, Smarter Way to Talk!",
            "institute": "Tsinghua University",
            "text": "This research explores the direct application of low-rank decomposition to the matrices within a large language model (LLM) during pre-training, rather than focusing on changes in weights or gradients. It identifies the attention layer as the optimal location for incorporating low-dimensional modules, leading to a new architecture called Low-dimensional Projected Attention (LPA).",
            "paper-title": "Scalable Efficient Training of Large Language Models with Low-dimensional Projected Attention",
            "image-path": "flux_paper_image/2411.02063_1730840577.png"
        },

        {
            "startTime": "07:52",
            "arxivId": "2411.01093",
            "arxivLink": "https://arxiv.org/abs/2411.01093",
            "title": "Tabular Truth: Natural Logic Gets Arithmetic",
            "institute": "University of Cambridge",
            "text": "This research extends natural logic inference, a symbolic reasoning paradigm for textual evidence, to handle tabular evidence by incorporating arithmetic reasoning capabilities. Previous natural logic systems were unable to handle tabular evidence because the semantic relationships captured between aligned claim-evidence spans did not extend to arithmetic functions.",
            "paper-title": "TabVer: Tabular Fact Verification with Natural Logic",
            "image-path": "flux_paper_image/2411.01093_1730840496.png"
        },

        {
            "startTime": "08:21",
            "arxivId": "2411.01455",
            "arxivLink": "https://arxiv.org/abs/2411.01455",
            "title": "Forget Mind Readers, This AI Predicts Your Next Move (and Your Friends')",
            "institute": "University of Illinois, CMU",
            "text": "This research introduces HiMemFormer, a transformer-based model that incorporates both global and agent-specific memory for multi-agent action anticipation. Unlike previous models that focus solely on temporal or social dependencies, HiMemFormer leverages a hierarchical memory structure to capture both long-term historical context and short-term agent-specific information.",
            "paper-title": "HiMemFormer: Hierarchical Memory-Aware Transformer for Multi-Agent Action Anticipation",
            "image-path": "flux_paper_image/2411.01455_1730840477.png"
        },

        {
            "startTime": "08:48",
            "arxivId": "2411.00820",
            "arxivLink": "https://arxiv.org/abs/2411.00820",
            "title": "AI Agents Learn to Click: AutoGLM Makes Browsing and Phones a Breeze!",
            "institute": "Zhipu AI, Tsinghua University",
            "text": "This research introduces AUTOGLM, a series of foundation agents built upon the ChatGLM model family, designed to autonomously control digital devices through GUIs. The key innovation lies in the development of an intermediate interface that separates planning and grounding behaviors, and a self-evolving online curriculum RL approach for robust error recovery and performance improvement.",
            "paper-title": "AutoGLM: Autonomous Foundation Agents for GUIs",
            "image-path": "flux_paper_image/2411.00820_1730839413.png"
        },

        {
            "startTime": "09:11",
            "arxivId": "2411.00836",
            "arxivLink": "https://arxiv.org/abs/2411.00836",
            "title": "VLMs: Math Whizzes or Just Good at Guessing?",
            "institute": "UC Berkeley, University of Illinois",
            "text": "This research introduces DYNAMATH, a dynamic benchmark that evaluates the robustness of vision-language models (VLMs) in solving math problems. Unlike previous benchmarks, DYNAMATH generates variations of the same question, testing how well VLMs handle changes in visual context and numerical values.",
            "paper-title": "DynaMath: A Dynamic Visual Benchmark for Evaluating Mathematical Reasoning Robustness of Vision Language Models",
            "image-path": "flux_paper_image/2411.00836_1730842738.png"
        },

        {
            "startTime": "09:40",
            "arxivId": "2411.01850",
            "arxivLink": "https://arxiv.org/abs/2411.01850",
            "title": "Bounding Boxes: The Secret Weapon for Robot Grasping!",
            "institute": "Tsinghua University, National University of Singapore",
            "text": "This research introduces ManiBox, a method that uses bounding boxes to guide robot grasping, focusing on state-based policy generalization rather than relying solely on visual information. This approach aims to overcome the limitations of visual generalization and improve spatial understanding for robots.",
            "paper-title": "ManiBox: Enhancing Spatial Grasping Generalization via Scalable Simulation Data Generation",
            "image-path": "flux_paper_image/2411.01850_1730841961.png"
        },

        {
            "startTime": "10:03",
            "arxivId": "2411.01226",
            "arxivLink": "https://arxiv.org/abs/2411.01226",
            "title": "Single Image, 3D Planes: MonoPlane Makes Plane Reconstruction a Breeze!",
            "institute": "Tsinghua University, Pennsylvania State University, Bytedance Inc.",
            "text": "This paper introduces MonoPlane, a framework that leverages monocular geometric cues (depth and surface normals) from a single image to reconstruct 3D planes. Unlike previous methods that rely on multiple images or RGB-D input, MonoPlane achieves generalizability by incorporating these cues into a proximity-guided RANSAC framework.",
            "paper-title": "MonoPlane: Exploiting Monocular Geometric Cues for Generalizable 3D Plane Reconstruction",
            "image-path": "flux_paper_image/2411.01226_1730840628.png"
        },

        {
            "startTime": "10:29",
            "arxivId": "2411.01842",
            "arxivLink": "https://arxiv.org/abs/2411.01842",
            "title": "Time-Series Forecasting Gets Elastic: A Transformer That Can See the Future (and the Past)",
            "institute": "Microsoft, Hong Kong University of Science and Technology",
            "text": "This research introduces ElasTST, a Transformer model that can handle varied forecasting horizons without needing to be retrained for each specific horizon. This is different from previous models that often require per-horizon training and tuning.",
            "paper-title": "ElasTST: Towards Robust Varied-Horizon Forecasting with Elastic Time-Series Transformer",
            "image-path": "flux_paper_image/2411.01842_1730839042.png"
        },

        {
            "startTime": "10:56",
            "arxivId": "2411.01790",
            "arxivLink": "https://arxiv.org/abs/2411.01790",
            "title": "LLMs: Thinking Backwards to Plan Better!",
            "institute": "Princeton University, Physical Intelligence, Google DeepMind",
            "text": "This research explores the effectiveness of backward planning with LLMs, a novel approach compared to previous work that primarily focused on forward reasoning. The paper demonstrates that LLMs can benefit from planning backward, especially when the problem structure makes it easier to reason from the goal state.",
            "paper-title": "Thinking Forward and Backward: Effective Backward Planning with Large Language Models",
            "image-path": "flux_paper_image/2411.01790_1730842580.png"
        },

        {
            "startTime": "11:14",
            "arxivId": "2411.00889",
            "arxivLink": "https://arxiv.org/abs/2411.00889",
            "title": "Energy-Saving Language Models: Picking the Right Tool for the Job!",
            "institute": "Technical University of Munich, IBM, University of Toronto",
            "text": "This research introduces MESS+, an online stochastic optimization algorithm for selecting the most energy-efficient language model from a model zoo based on individual inference requests and service level agreements (SLAs). Unlike previous work that focuses on dynamic inference within a single model or scheduling requests for a fixed model, MESS+ dynamically chooses the best model for each request, ensuring both accuracy and energy efficiency.",
            "paper-title": "MESS+: Energy-Optimal Inferencing in Language Model Zoos with Service Level Guarantees",
            "image-path": "flux_paper_image/2411.00889_1730839454.png"
        },

        {
            "startTime": "11:38",
            "arxivId": "2411.01222",
            "arxivLink": "https://arxiv.org/abs/2411.01222",
            "title": "LLM Watermarks: A Black-Box Attack That's Not So Black and White",
            "institute": "Peking University, UC Santa Barbara",
            "text": "This research proposes a new watermark scrubbing attack method called B4 that operates under a black-box threat model, meaning it doesn't require any prior knowledge about the specific watermarking algorithm used. This sets it apart from previous work, which typically relies on strong assumptions about the victim LLM.",
            "paper-title": "$B^4$: A Black-Box Scrubbing Attack on LLM Watermarks",
            "image-path": "flux_paper_image/2411.01222_1730842167.png"
        },

        {
            "startTime": "12:03",
            "arxivId": "2411.01829",
            "arxivLink": "https://arxiv.org/abs/2411.01829",
            "title": "LLMs Learn to Prove Theorems Like Mathematicians: Decomposing Proofs for Better Reasoning",
            "institute": "Stanford University",
            "text": "This research focuses on training LLMs to write formal proofs by decomposing them into lemmas, a more natural approach than providing pre-written lemmas. This method encourages the model to propose and prove new lemmas, which is not common in previous work.",
            "paper-title": "Formal Theorem Proving by Rewarding LLMs to Decompose Proofs Hierarchically",
            "image-path": "flux_paper_image/2411.01829_1730841734.png"
        },

        {
            "startTime": "12:28",
            "arxivId": "2411.01295",
            "arxivLink": "https://arxiv.org/abs/2411.01295",
            "title": "Frugal Flows: Causal Inference Gets a Flow-er Power Makeover!",
            "institute": "University of Oxford",
            "text": "This paper introduces Frugal Flows, a novel likelihood-based machine learning model that uses normalizing flows to learn the data-generating process while directly inferring marginal causal quantities from observational data. This differs from previous work by explicitly parameterizing the causal margin, allowing for more flexible and accurate inference.",
            "paper-title": "Marginal Causal Flows for Validation and Inference",
            "image-path": "flux_paper_image/2411.01295_1730842396.png"
        },

        {
            "startTime": "12:49",
            "arxivId": "2411.01611",
            "arxivLink": "https://arxiv.org/abs/2411.01611",
            "title": "Stop the Data Shuffle: How to Train Recommendation Systems Faster with Smart Caching",
            "institute": "UC Berkeley, Texas A&M University",
            "text": "This research proposes a framework to analyze communication costs in distributed systems that use lookup tables, specifically focusing on recommendation systems. It then introduces algorithms that minimize communication costs by leveraging embedding overlap and caching frequently accessed embeddings on the GPU. This approach differs from previous work by explicitly addressing the memory and communication challenges of large embedding tables in recommendation systems.",
            "paper-title": "Stochastic Communication Avoidance for Recommendation Systems",
            "image-path": "flux_paper_image/2411.01611_1730842637.png"
        },

        {
            "startTime": "13:12",
            "arxivId": "2411.01123",
            "arxivLink": "https://arxiv.org/abs/2411.01123",
            "title": "X-DRIVE: Making LiDAR and Cameras See Eye-to-Eye!",
            "institute": "UC Berkeley, UT Austin, Toyota",
            "text": "This research proposes a novel framework, X-DRIVE, for jointly generating LiDAR point clouds and multi-view images, ensuring cross-modality consistency. Unlike previous methods that focus on single-modality data, X-DRIVE models the joint distribution of both modalities, addressing the challenge of spatial ambiguity during the denoising process.",
            "paper-title": "X-Drive: Cross-modality consistent multi-sensor data synthesis for driving scenarios",
            "image-path": "flux_paper_image/2411.01123_1730839474.png"
        },

        {
            "startTime": "13:37",
            "arxivId": "2411.01580",
            "arxivLink": "https://arxiv.org/abs/2411.01580",
            "title": "Federated Learning: Clustering Clients Like a Boss, Even When Data Drifts!",
            "institute": "Harvard University, Northwestern University, Amazon...",
            "text": "This paper introduces Fielding, a new clustered federated learning framework that dynamically adjusts the number of clusters and re-clusters clients based on their label distribution vectors, addressing the challenge of data drifts. Unlike previous work, Fielding handles all drifted clients, not just selected ones, and combines per-client adjustment with selective global re-clustering.",
            "paper-title": "Federated Learning Clients Clustering with Adaptation to Data Drifts",
            "image-path": "flux_paper_image/2411.01580_1730840985.png"
        },

        {
            "startTime": "14:00",
            "arxivId": "2411.01171",
            "arxivLink": "https://arxiv.org/abs/2411.01171",
            "title": "Video Diffusion: Making AI Videos Lighter Than Air!",
            "institute": "Northeastern University, Harvard University, University of Georgia",
            "text": "This research introduces a training-free framework called Streamlined Inference, which leverages the temporal and spatial properties of video diffusion models to reduce peak memory and computational demands during inference. This approach differs from previous work by focusing on optimizing inference rather than retraining or compressing the model.",
            "paper-title": "Fast and Memory-Efficient Video Diffusion Using Streamlined Inference",
            "image-path": "flux_paper_image/2411.01171_1730841943.png"
        },

        {
            "startTime": "14:26",
            "arxivId": "2411.01775",
            "arxivLink": "https://arxiv.org/abs/2411.01775",
            "title": "Robots Learn Parkour with AI-Generated Obstacle Courses!",
            "institute": "University of Pennsylvania",
            "text": "This research uses large language models (LLMs) to automatically generate a curriculum of increasingly challenging environments for robot training, unlike previous methods that rely on manual design or limited environment variations.",
            "paper-title": "Eurekaverse: Environment Curriculum Generation via Large Language Models",
            "image-path": "flux_paper_image/2411.01775_1730840270.png"
        },

        {
            "startTime": "14:49",
            "arxivId": "2411.01593",
            "arxivLink": "https://arxiv.org/abs/2411.01593",
            "title": "Virtual Try-On Gets a Fashion Makeover: Unpaired Learning Makes Clothes Fit Like a Glove!",
            "institute": "ETH Zurich, Zhejiang University, Nanyang Technological University",
            "text": "This research introduces a novel framework called Boosted Virtual Try-On (BVTON) that leverages large-scale unpaired learning to improve the fidelity of virtual try-on results. Unlike previous methods that rely heavily on paired data, BVTON constructs pseudo try-on pairs from readily available fashion images, enabling it to generate more realistic and detailed try-on results.",
            "paper-title": "High-Fidelity Virtual Try-on with Large-Scale Unpaired Learning",
            "image-path": "flux_paper_image/2411.01593_1730839054.png"
        },

        {
            "startTime": "15:16",
            "arxivId": "2411.01602",
            "arxivLink": "https://arxiv.org/abs/2411.01602",
            "title": "DreamPolish: Polishing 3D Models with a Touch of Magic",
            "institute": "Tsinghua University, Peking University",
            "text": "DreamPolish introduces a novel domain score distillation (DSD) objective for text-to-3D generation, which balances the quality and stability of the distillation process by incorporating guidance from both the unconditional image domain and the variational domain. This approach differs from previous methods that rely solely on either the unconditional image domain or the variational domain.",
            "paper-title": "DreamPolish: Domain Score Distillation With Progressive Geometry Generation",
            "image-path": "flux_paper_image/2411.01602_1730840511.png"
        },

        {
            "startTime": "15:41",
            "arxivId": "2411.01800",
            "arxivLink": "https://arxiv.org/abs/2411.01800",
            "title": "Sparse Tuning Gets a Memory Makeover: SNELL Makes Big Models Tiny!",
            "institute": "Chinese Academy of Sciences, Tsinghua University",
            "text": "This paper proposes SNELL, a method for sparse tuning that uses low-rank matrices and a competition-based sparsification mechanism to reduce memory usage. Unlike previous methods, SNELL avoids storing the tunable weight indexes, which significantly reduces memory demands.",
            "paper-title": "Expanding Sparse Tuning for Low Memory Usage",
            "image-path": "flux_paper_image/2411.01800_1730841630.png"
        },

        {
            "startTime": "16:06",
            "arxivId": "2411.01136",
            "arxivLink": "https://arxiv.org/abs/2411.01136",
            "title": "LLMs: Copyright Cops or Copycats?",
            "institute": "Stanford University, Stevens Institute of Technology",
            "text": "This research focuses on how LLMs handle copyrighted content provided by users, specifically examining whether they respect copyright notices within user input. Previous work primarily focused on copyright violations in the output generated by LLMs.",
            "paper-title": "Do LLMs Know to Respect Copyright Notice?",
            "image-path": "flux_paper_image/2411.01136_1730841352.png"
        },

        {
            "startTime": "16:28",
            "arxivId": "2411.01909",
            "arxivLink": "https://arxiv.org/abs/2411.01909",
            "title": "Self-Driving Cars: Learning from Human Mistakes (But Not the Bad Ones!)",
            "institute": "Mercedes Benz AG, University of L\u00a8ubeck, University of Freiburg",
            "text": "This research compares different datasets used to train autonomous vehicles, focusing on identifying and filtering out undesirable human driving behaviors. It goes beyond simply analyzing driving patterns and delves into the specific traffic rules and safety violations present in each dataset.",
            "paper-title": "Traffic and Safety Rule Compliance of Humans in Diverse Driving Situations",
            "image-path": "flux_paper_image/2411.01909_1730842706.png"
        },

        {
            "startTime": "16:54",
            "arxivId": "2411.01458",
            "arxivLink": "https://arxiv.org/abs/2411.01458",
            "title": "AI Content on the Edge: Caching Models Like a Pro with Diffusion!",
            "institute": "Xiamen University, University of Hong Kong, University at Buffalo...",
            "text": "This research introduces a novel two-timescale deep reinforcement learning (T2DRL) algorithm for optimizing edge-enabled AI-generated content (AIGC) services. Unlike previous work, it leverages diffusion models within the deep deterministic policy gradient (D3PG) algorithm to determine optimal resource allocation decisions.",
            "paper-title": "Two-Timescale Model Caching and Resource Allocation for Edge-Enabled AI-Generated Content Services",
            "image-path": "flux_paper_image/2411.01458_1730842245.png"
        },

        {
            "startTime": "17:16",
            "arxivId": "2411.01974",
            "arxivLink": "https://arxiv.org/abs/2411.01974",
            "title": "Matrix Denoising: Beyond Rotational Invariance, It's a Wild Ride!",
            "institute": "International Centre for Theoretical Physics, University of Waterloo, University of Tokyo",
            "text": "This research explores Bayesian matrix denoising when the hidden signal is not rotationally invariant, a scenario rarely studied before. It introduces a new phase transition, the \"denoising-factorisation transition,\" which separates a phase where the rotational invariant estimator (RIE) is optimal from one where it is not.",
            "paper-title": "On the phase diagram of extensive-rank symmetric matrix denoising beyond rotational invariance",
            "image-path": "flux_paper_image/2411.01974_1730841441.png"
        },

        {
            "startTime": "17:45",
            "arxivId": "2411.01643",
            "arxivLink": "https://arxiv.org/abs/2411.01643",
            "title": "LLMs Get Smart: Tool Registration Gets a Brain!",
            "institute": "Pennsylvania State University, Microsoft, The University of Washington...",
            "text": "This research introduces EcoAct, a tool-using algorithm that allows LLMs to selectively register tools as needed, optimizing context use. Unlike previous methods that indiscriminately incorporate all candidate tools, EcoAct integrates tool registration into the reasoning procedure, giving LLMs the ability to reason about which tools are necessary.",
            "paper-title": "EcoAct: Economic Agent Determines When to Register What Action",
            "image-path": "flux_paper_image/2411.01643_1730838832.png"
        },

        {
            "startTime": "18:07",
            "arxivId": "2411.01535",
            "arxivLink": "https://arxiv.org/abs/2411.01535",
            "title": "Drug Interactions: A Recipe for Customized Subgraph Search!",
            "institute": "Northwestern Polytechnical University, Tsinghua University",
            "text": "This research proposes a method to automatically design subgraph-based pipelines for drug-drug interaction prediction. Unlike previous methods that rely on fixed subgraph selection strategies and hand-designed encoding functions, this approach uses neural architecture search (NAS) to customize these components for each dataset.",
            "paper-title": "Customized Subgraph Selection and Encoding for Drug-drug Interaction Prediction",
            "image-path": "flux_paper_image/2411.01535_1730839093.png"
        },

        {
            "startTime": "18:27",
            "arxivId": "2411.01200",
            "arxivLink": "https://arxiv.org/abs/2411.01200",
            "title": "GarmentLab: Simulating Clothes, Folding Robots, and Real-World Chaos!",
            "institute": "Peking University, Tsinghua University",
            "text": "This research introduces GarmentLab, a new benchmark and simulation environment for garment manipulation. Unlike previous work, GarmentLab offers a wider range of tasks, more realistic simulation behavior, and a comprehensive sim-to-real framework.",
            "paper-title": "GarmentLab: A Unified Simulation and Benchmark for Garment Manipulation",
            "image-path": "flux_paper_image/2411.01200_1730841340.png"
        },

        {
            "startTime": "18:43",
            "arxivId": "2411.01859",
            "arxivLink": "https://arxiv.org/abs/2411.01859",
            "title": "Brain Mapping Gets a Multimodal Makeover: Deep Learning Meets fMRI and dMRI!",
            "institute": "University of Electronic Science and Technology of China, Harvard University",
            "text": "This research introduces a novel deep learning framework, DMVFC, for fiber clustering in white matter (WM) parcellation. Unlike previous methods that rely solely on geometric information from diffusion MRI (dMRI), DMVFC integrates both dMRI and functional MRI (fMRI) data, enabling functionally consistent WM parcellation.",
            "paper-title": "A Novel Deep Learning Tractography Fiber Clustering Framework for Functionally Consistent White Matter Parcellation Using Multimodal Diffusion MRI and Functional MRI",
            "image-path": "flux_paper_image/2411.01859_1730842430.png"
        },

        {
            "startTime": "19:09",
            "arxivId": "2411.00835",
            "arxivLink": "https://arxiv.org/abs/2411.00835",
            "title": "GNNs Go Deep: No Attention Needed for Large Graphs!",
            "institute": "University of Oxford",
            "text": "This paper proposes Scalable Message Passing Neural Networks (SMPNNs), which replace the attention mechanism in Graph Transformers with standard convolutional message passing. This modification allows for deep and scalable architectures that outperform the best Graph Transformers in the literature without the computational and memory overhead of attention.",
            "paper-title": "Scalable Message Passing Neural Networks: No Need for Attention in Large Graph Representation Learning",
            "image-path": "flux_paper_image/2411.00835_1730841062.png"
        },

        {
            "startTime": "19:36",
            "arxivId": "2411.01625",
            "arxivLink": "https://arxiv.org/abs/2411.01625",
            "title": "Explaining Black Boxes: It's Not Just About Correlation, It's About Causation!",
            "institute": "University of Southern California, University of Cambridge",
            "text": "This paper introduces a new concept called \"counterfactual explainability\" for black-box prediction models. Unlike existing methods that focus on associations, this approach leverages causal relationships between input factors to provide more meaningful explanations.",
            "paper-title": "Counterfactual explainability of black-box prediction models",
            "image-path": "flux_paper_image/2411.01625_1730840365.png"
        },

        {
            "startTime": "19:58",
            "arxivId": "2411.00915",
            "arxivLink": "https://arxiv.org/abs/2411.00915",
            "title": "Vision Models Get a Knowledge Boost: LoRA Makes Them Smarter and Faster!",
            "institute": "Nanjing University, Tsinghua University",
            "text": "This research introduces V-LoRA, a system that efficiently integrates external knowledge into large multimodal models (LMMs) for vision tasks. Unlike previous LoRA-based systems, V-LoRA addresses the challenges of accuracy, efficiency, and flexibility in serving vision applications.",
            "paper-title": "V-LoRA: An Efficient and Flexible System Boosts Vision Applications with LoRA LMM",
            "image-path": "flux_paper_image/2411.00915_1730841090.png"
        },

        {
            "startTime": "20:22",
            "arxivId": "2411.01419",
            "arxivLink": "https://arxiv.org/abs/2411.01419",
            "title": "Time Series Forecasting Gets a Makeover: PSformer Shares the Love (and Parameters)",
            "institute": "Tsinghua University, Chinese Academy of Sciences",
            "text": "This paper introduces PSformer, a transformer architecture for time series forecasting that incorporates parameter sharing and a novel Spatial-Temporal Segment Attention mechanism. Unlike previous work that focuses on either temporal or spatial dependencies, PSformer aims to capture both by merging patches from different variables into segments.",
            "paper-title": "PSformer: Parameter-efficient Transformer with Segment Attention for Time Series Forecasting",
            "image-path": "flux_paper_image/2411.01419_1730839709.png"
        },

        {
            "startTime": "20:50",
            "arxivId": "2411.02083",
            "arxivLink": "https://arxiv.org/abs/2411.02083",
            "title": "Numbers, Don't Guess: A New Loss Function for Language Models to Ace Math",
            "institute": "IBM",
            "text": "This research introduces a new loss function called Number Token Loss (NTL) that specifically addresses the challenge of representing and reasoning over numbers in language models. Unlike traditional cross-entropy loss, NTL considers the numerical proximity between tokens, allowing the model to better understand the relationships between numbers.",
            "paper-title": "Regress, Don't Guess -- A Regression-like Loss on Number Tokens for Language Models",
            "image-path": "flux_paper_image/2411.02083_1730840084.png"
        },

        {
            "startTime": "21:09",
            "arxivId": "2411.00841",
            "arxivLink": "https://arxiv.org/abs/2411.00841",
            "title": "Decoding Decoded: Unveiling the Secrets of Speculative Decoding",
            "institute": "Princeton University, Northwestern University",
            "text": "This paper provides a theoretical framework for understanding the efficiency of speculative decoding, a technique used to speed up large language model inferences. Unlike previous work that focused on empirical observations, this research delves into the theoretical limits of speculative decoding and explores the trade-offs between inference acceleration and output quality.",
            "paper-title": "A Theoretical Perspective for Speculative Decoding Algorithm",
            "image-path": "flux_paper_image/2411.00841_1730839764.png"
        },

        {
            "startTime": "21:33",
            "arxivId": "2411.01589",
            "arxivLink": "https://arxiv.org/abs/2411.01589",
            "title": "Sleep Stage Sleuth: New AI Model Sniffs Out Sleep Patterns with Bi-Directional Mamba!",
            "institute": "Nanyang Technological University, Queen Mary University of London",
            "text": "This research introduces BiT-MamSleep, a novel architecture that integrates the Triple-Resolution CNN (TRCNN) with the Bidirectional Mamba (BiMamba) mechanism. This approach addresses the limitations of Transformer-based models in capturing bidirectional temporal dependencies and handling class imbalance.",
            "paper-title": "BiT-MamSleep: Bidirectional Temporal Mamba for EEG Sleep Staging",
            "image-path": "flux_paper_image/2411.01589_1730840721.png"
        },

        {
            "startTime": "21:58",
            "arxivId": "2411.00855",
            "arxivLink": "https://arxiv.org/abs/2411.00855",
            "title": "Vision Models Learn to Think Like Humans, But With More Mistakes!",
            "institute": "Nanjing University, Tsinghua University",
            "text": "This research explores a self-training framework for vision-language models (VLMs) that focuses on improving reasoning abilities by reflecting on generated chain-of-thought (CoT) rationales. Unlike previous work that relies on curated CoT data, this approach leverages the VLM's own reasoning capabilities to iteratively bootstrap both positive and negative CoT solutions.",
            "paper-title": "Vision-Language Models Can Self-Improve Reasoning via Reflection",
            "image-path": "flux_paper_image/2411.00855_1730840881.png"
        },

        {
            "startTime": "22:16",
            "arxivId": "2411.01803",
            "arxivLink": "https://arxiv.org/abs/2411.01803",
            "title": "Gradient Descent Gets a Speed Boost: Online Learning Makes Optimization Fly!",
            "institute": "Stanford University",
            "text": "This research introduces a framework called the Online Scaled Gradient Method (OSGM) that accelerates gradient-based optimization algorithms by learning to scale the gradient at each iteration. Unlike previous work, OSGM provides a strong convergence guarantee with respect to the scaling matrix optimized for the iteration trajectory, rather than worst-case analysis.",
            "paper-title": "Gradient Methods with Online Scaling",
            "image-path": "flux_paper_image/2411.01803_1730842286.png"
        },

        {
            "startTime": "22:41",
            "arxivId": "2411.01076",
            "arxivLink": "https://arxiv.org/abs/2411.01076",
            "title": "AI's Speed Demons: How Fast Text Generation Can Leak Your Secrets",
            "institute": "University of Toronto",
            "text": "This research explores the privacy risks of speculative decoding, a technique used to speed up text generation in large language models (LLMs). Unlike previous work focusing on side-channel attacks in LLMs, this paper specifically investigates the vulnerabilities introduced by speculative decoding.",
            "paper-title": "Privacy Risks of Speculative Decoding in Large Language Models",
            "image-path": "flux_paper_image/2411.01076_1730841194.png"
        },

        {
            "startTime": "23:03",
            "arxivId": "2411.01250",
            "arxivLink": "https://arxiv.org/abs/2411.01250",
            "title": "Clustering for Causes: Finding the Right Treatment for the Right Person",
            "institute": "Korea University, Seoul National University, CMU",
            "text": "This research expands on the causal k-means clustering framework by incorporating hierarchical and density-based clustering algorithms. Unlike k-means, which requires specific assumptions about the data, these new methods are more flexible and robust, allowing for the identification of subgroups with varying sizes and shapes.",
            "paper-title": "Hierarchical and Density-based Causal Clustering",
            "image-path": "flux_paper_image/2411.01250_1730842472.png"
        },

        {
            "startTime": "23:30",
            "arxivId": "2411.01344",
            "arxivLink": "https://arxiv.org/abs/2411.01344",
            "title": "AI Assistants: Can We Trust Them With Our Secrets?",
            "institute": "Northeastern University, University of Washington",
            "text": "This research investigates how people oversee the privacy implications of language model agents (LM agents) that handle tasks on their behalf, focusing on asynchronous interpersonal communication. Unlike previous work that mainly focuses on measuring privacy leakage and addressing it with model alignment, this study examines human users' privacy awareness, preferences, and trust in LM agents.",
            "paper-title": "Can Humans Oversee Agents to Prevent Privacy Leakage? A Study on Privacy Awareness, Preferences, and Trust in Language Model Agents",
            "image-path": "flux_paper_image/2411.01344_1730840070.png"
        },

        {
            "startTime": "23:53",
            "arxivId": "2411.01410",
            "arxivLink": "https://arxiv.org/abs/2411.01410",
            "title": "PageRank Bandits: Link Prediction Gets a Boost from Graph Structure!",
            "institute": "University of Illinois, Meta, University of Rochester",
            "text": "This paper reformulates link prediction as a sequential decision-making process, using contextual bandits and PageRank to balance exploitation and exploration. Unlike previous work, it incorporates graph connectivity into the reward function, allowing for more informed link predictions.",
            "paper-title": "PageRank Bandits for Link Prediction",
            "image-path": "flux_paper_image/2411.01410_1730839293.png"
        },

        {
            "startTime": "24:16",
            "arxivId": "2411.00816",
            "arxivLink": "https://arxiv.org/abs/2411.00816",
            "title": "AI Researchers Build a Robot Scientist That Can Write Papers and Get Them Published!",
            "institute": "Microsoft, Westlake University",
            "text": "This research differs from previous work by focusing on automating the entire research process, including peer review, using open-source LLMs. Previous efforts have primarily used commercial LLMs for specific tasks like idea generation or experiment design.",
            "paper-title": "CycleResearcher: Improving Automated Research via Automated Review",
            "image-path": "flux_paper_image/2411.00816_1730839048.png"
        },

        {
            "startTime": "24:41",
            "arxivId": "2411.02041",
            "arxivLink": "https://arxiv.org/abs/2411.02041",
            "title": "LLMs: Not Just for Text, They Can Recommend Your Next Kindle Book!",
            "institute": "Tsinghua University, Meituan",
            "text": "This research explores the use of Large Language Models (LLMs) for ID-based recommendation, a type of recommendation system that relies solely on user and item IDs, unlike previous work that primarily focused on textual data.",
            "paper-title": "Enhancing ID-based Recommendation with Large Language Models",
            "image-path": "flux_paper_image/2411.02041_1730840430.png"
        },

        {
            "startTime": "25:03",
            "arxivId": "2411.01391",
            "arxivLink": "https://arxiv.org/abs/2411.01391",
            "title": "Quantum Computing: Not Just for Breaking Codes, Now for Controlling Your Toaster!",
            "institute": "University of Maryland",
            "text": "This research introduces a quantum algorithm for solving linear-quadratic control problems, a fundamental task in engineering design. Unlike previous approaches that rely on classical methods like matrix factorization, this algorithm leverages a quantum-assisted differentiable simulator for faster gradient estimation, achieving a super-quadratic speedup.",
            "paper-title": "Differentiable Quantum Computing for Large-scale Linear Control",
            "image-path": "flux_paper_image/2411.01391_1730838728.png"
        },

        {
            "startTime": "25:23",
            "arxivId": "2411.00850",
            "arxivLink": "https://arxiv.org/abs/2411.00850",
            "title": "LLMs on a Diet: New Method Makes Big Language Models Tiny and Smart!",
            "institute": "Peking University",
            "text": "This research proposes a new weight quantization method called Gradient-Aware Weight Quantization (GWQ) for compressing large language models (LLMs). Unlike previous methods that rely on the Hessian matrix, GWQ leverages gradients to identify outlier weights, which are then preserved at higher precision while the remaining weights are quantized to lower precision.",
            "paper-title": "GWQ: Gradient-Aware Weight Quantization for Large Language Models",
            "image-path": "flux_paper_image/2411.00850_1730841115.png"
        },

        {
            "startTime": "25:55",
            "arxivId": "2411.00800",
            "arxivLink": "https://arxiv.org/abs/2411.00800",
            "title": "Building Brains: Can AI Crack the Code of Heat Transfer?",
            "institute": "Zhejiang University, UC Berkeley",
            "text": "This research explores the use of Kolmogorov\u2013Arnold Networks (KANs) for solving inverse problems in building physics, focusing on predictive modeling, knowledge discovery, and continuous learning. KANs are a type of symbolic neural network that can be used to discover interpretable equations from data, which is a significant departure from traditional neural networks that are often considered \"black boxes.\"",
            "paper-title": "Integrating Symbolic Neural Networks with Building Physics: A Study and Proposal",
            "image-path": "flux_paper_image/2411.00800_1730839059.png"
        },

        {
            "startTime": "26:15",
            "arxivId": "2411.01055",
            "arxivLink": "https://arxiv.org/abs/2411.01055",
            "title": "Building Energy Models: When Physics Meets AI, Temperatures Get Real!",
            "institute": "\u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne",
            "text": "This research compares four different hybrid approaches for building energy modeling, focusing on their performance in real-world scenarios with varying levels of building documentation and sensor availability. It also uses hierarchical Shapley values to analyze the explainability of these models.",
            "paper-title": "Combining Physics-based and Data-driven Modeling for Building Energy Systems",
            "image-path": "flux_paper_image/2411.01055_1730841767.png"
        },

        {
            "startTime": "26:41",
            "arxivId": "2411.01679",
            "arxivLink": "https://arxiv.org/abs/2411.01679",
            "title": "AI Automates the Art of Optimization: LLMs Build Models, Not Just Solve Them",
            "institute": "University of Cambridge, University of Hawaii at Manoa",
            "text": "This research introduces a novel approach to autoformulation, using LLMs within a Monte-Carlo Tree Search framework to systematically explore the space of possible optimization model formulations. This differs from previous work by decomposing the formulation process into stages and employing LLMs for both hypothesis generation and evaluation of formulation correctness.",
            "paper-title": "Autoformulation of Mathematical Optimization Models Using LLMs",
            "image-path": "flux_paper_image/2411.01679_1730842443.png"
        },

        {
            "startTime": "27:06",
            "arxivId": "2411.01114",
            "arxivLink": "https://arxiv.org/abs/2411.01114",
            "title": "INFANT AGENT: A Baby Step Towards Smarter AI, With Less Cash!",
            "institute": "University of Connecticut, AIGCode, TikTok...",
            "text": "This research introduces INFANT AGENT, a multi-agent system that integrates task-aware functions, operators, a hierarchical management system, and a memory retrieval mechanism. This approach differs from previous work by focusing on enhancing the efficiency and scalability of task execution while reducing API costs.",
            "paper-title": "Infant Agent: A Tool-Integrated, Logic-Driven Agent with Cost-Effective API Usage",
            "image-path": "flux_paper_image/2411.01114_1730838991.png"
        },

        {
            "startTime": "27:33",
            "arxivId": "2411.01086",
            "arxivLink": "https://arxiv.org/abs/2411.01086",
            "title": "Quantum Key Distribution: A Hybrid Approach to Secure Communication",
            "institute": "University of Chicago",
            "text": "This research proposes hybrid protocols that combine quantum key distribution (QKD) and post-quantum cryptography (PQC) to enhance both security and performance in key distribution networks. The paper introduces a method for analyzing the security of these hybrid protocols, considering various combinations of QKD and PQC across network elements.",
            "paper-title": "Practical hybrid PQC-QKD protocols with enhanced security and performance",
            "image-path": "flux_paper_image/2411.01086_1730839538.png"
        },

        {
            "startTime": "28:01",
            "arxivId": "2411.01081",
            "arxivLink": "https://arxiv.org/abs/2411.01081",
            "title": "Quantum Key Distribution: A Love Story of QKD and PQC",
            "institute": "University of Chicago",
            "text": "This research proposes a hybrid approach to quantum-classical communication networks, combining quantum key distribution (QKD) with post-quantum cryptography (PQC) to achieve higher security and performance. This differs from previous work that focused on either QKD or PQC alone.",
            "paper-title": "Towards efficient and secure quantum-classical communication networks",
            "image-path": "flux_paper_image/2411.01081_1730839992.png"
        },

        {
            "startTime": "28:24",
            "arxivId": "2411.01492",
            "arxivLink": "https://arxiv.org/abs/2411.01492",
            "title": "AI's Got a Circuit Problem: New Benchmark Tests AI's Engineering Smarts",
            "institute": "University of Tokyo, University of Southern California, Boston University...",
            "text": "This research introduces EEE-Bench, a new benchmark specifically designed to evaluate the capabilities of large multimodal models (LMMs) in solving electrical and electronics engineering (EEE) problems. Unlike previous benchmarks, EEE-Bench focuses on problems that require both visual understanding and logical reasoning, making it a more challenging and realistic test of LMMs' abilities in this domain.",
            "paper-title": "EEE-Bench: A Comprehensive Multimodal Electrical And Electronics Engineering Benchmark",
            "image-path": "flux_paper_image/2411.01492_1730840863.png"
        },

        {
            "startTime": "28:48",
            "arxivId": "2411.00785",
            "arxivLink": "https://arxiv.org/abs/2411.00785",
            "title": "Robots Learn to \"Move\" Like Humans: New AI Framework Unifies Action Space",
            "institute": "Microsoft",
            "text": "This research introduces Image-GOal Representations (IGOR), a framework that learns a unified action space for both humans and robots. Unlike previous work that focuses on specific control buttons in 2D games, IGOR aims to capture semantic movements in open-world scenarios.",
            "paper-title": "IGOR: Image-GOal Representations are the Atomic Control Units for Foundation Models in Embodied AI",
            "image-path": "flux_paper_image/2411.00785_1730839262.png"
        },

        {
            "startTime": "29:11",
            "arxivId": "2411.01844",
            "arxivLink": "https://arxiv.org/abs/2411.01844",
            "title": "Tired of Toxic Tweets? DeMod's Got Your Back (and Your Grammar)!",
            "institute": "Fudan University, Shanghai Key Laboratory of Data Science, Independent",
            "text": "This research goes beyond just detecting toxic content. It also provides explanations for why something is toxic and offers personalized suggestions for how to revise it. This holistic approach sets it apart from previous work that focused solely on detection.",
            "paper-title": "DeMod: A Holistic Tool with Explainable Detection and Personalized Modification for Toxicity Censorship",
            "image-path": "flux_paper_image/2411.01844_1730841649.png"
        },

        {
            "startTime": "29:34",
            "arxivId": "2411.00945",
            "arxivLink": "https://arxiv.org/abs/2411.00945",
            "title": "Untangling the Web of Influence: New Method Estimates Treatment Effects in Complex Networks",
            "institute": "Stanford University, Emory University",
            "text": "This research introduces a new class of estimators called Higher-Order Causal Message Passing (HO-CMP) that can estimate treatment effects in settings with unknown and pervasive interference. Unlike previous methods that rely on simplifying assumptions about the interference structure, HO-CMP leverages higher-order moments of unit outcomes and treatment probabilities to capture complex interactions.",
            "paper-title": "Higher-Order Causal Message Passing for Experimentation with Complex Interference",
            "image-path": "flux_paper_image/2411.00945_1730839906.png"
        },

        {
            "startTime": "29:59",
            "arxivId": "2411.00893",
            "arxivLink": "https://arxiv.org/abs/2411.00893",
            "title": "Blind Time-of-Flight Imaging: No Kernel, No Problem!",
            "institute": "Imperial College London",
            "text": "This research introduces a novel blind ToF imaging technique that does not require kernel calibration, unlike previous approaches. It recovers sparse spikes on a continuum rather than a discrete grid, leveraging the Strang-Fix conditions from approximation theory.",
            "paper-title": "Blind Time-of-Flight Imaging: Sparse Deconvolution on the Continuum with Unknown Kernels",
            "image-path": "flux_paper_image/2411.00893_1730840705.png"
        },

        {
            "startTime": "30:20",
            "arxivId": "2411.01077",
            "arxivLink": "https://arxiv.org/abs/2411.01077",
            "title": "Emoji Attack: How to Trick AI Judges into Thinking Harmful Content is Safe",
            "institute": "UC Berkeley",
            "text": "This research focuses on a specific bias in AI models used to judge the safety of other AI models' outputs. It's called \"token segmentation bias,\" and it happens when the AI judge breaks down words into smaller parts, which can change how it understands the meaning and potentially lead to misclassifications.",
            "paper-title": "Emoji Attack: A Method for Misleading Judge LLMs in Safety Risk Detection",
            "image-path": "flux_paper_image/2411.01077_1730840211.png"
        },

        {
            "startTime": "30:41",
            "arxivId": "2411.01604",
            "arxivLink": "https://arxiv.org/abs/2411.01604",
            "title": "LLM Supply Chain: Don't Get Hacked, It's Not Just the Model!",
            "institute": "The University of Tokyo, Singapore Management University, Tianjin University...",
            "text": "This research goes beyond the model itself, focusing on the entire LLM supply chain, analyzing dependencies and security risks across all components, from data providers to end users.",
            "paper-title": "Large Language Model Supply Chain: Open Problems From the Security Perspective",
            "image-path": "flux_paper_image/2411.01604_1730840230.png"
        },

        {
            "startTime": "31:01",
            "arxivId": "2411.01218",
            "arxivLink": "https://arxiv.org/abs/2411.01218",
            "title": "Endoscopic Surgery Gets a 4D Makeover: Gaussian Splatting Makes Dynamic Scenes a Breeze!",
            "institute": "University of Liverpool, Xi\u2019an Jiaotong-Liverpool University, University of Cambridge",
            "text": "This research introduces a novel framework called ST-Endo4DGS that utilizes 4D Gaussian Splatting (4DGS) to model dynamic endoscopic scenes. Unlike previous methods that focused on static representations or struggled with temporal resolution, ST-Endo4DGS captures the complex spatio-temporal dynamics of deformable tissues in real-time.",
            "paper-title": "Real-Time Spatio-Temporal Reconstruction of Dynamic Endoscopic Scenes with 4D Gaussian Splatting",
            "image-path": "flux_paper_image/2411.01218_1730840976.png"
        },

        {
            "startTime": "31:25",
            "arxivId": "2411.01088",
            "arxivLink": "https://arxiv.org/abs/2411.01088",
            "title": "Deep Learning Gets a Convex Makeover: CRONOS Solves the Big Data Blues!",
            "institute": "Stanford University",
            "text": "This research introduces CRONOS, an algorithm that utilizes convex optimization to train two-layer neural networks. Unlike previous work, CRONOS can handle high-dimensional datasets like ImageNet, which are common in modern deep learning.",
            "paper-title": "CRONOS: Enhancing Deep Learning with Scalable GPU Accelerated Convex Neural Networks",
            "image-path": "flux_paper_image/2411.01088_1730842674.png"
        },

        {
            "startTime": "31:44",
            "arxivId": "2411.01212",
            "arxivLink": "https://arxiv.org/abs/2411.01212",
            "title": "Warping Noise for Video Generation: A Brownian Bridge to Faster, Smoother Results",
            "institute": "Stanford University, Netflix, Stony Brook University",
            "text": "This research introduces a new noise-warping algorithm that significantly reduces the computational cost of existing methods while preserving the Gaussian white noise distribution. The key innovation lies in leveraging the limiting-case behavior of the previous algorithm, which allows for a more efficient computation using Brownian bridges.",
            "paper-title": "Infinite-Resolution Integral Noise Warping for Diffusion Models",
            "image-path": "flux_paper_image/2411.01212_1730840203.png"
        },

        {
            "startTime": "32:09",
            "arxivId": "2411.01542",
            "arxivLink": "https://arxiv.org/abs/2411.01542",
            "title": "FactorizePhys: Unveiling the Heartbeat in Your Face with Multidimensional Attention!",
            "institute": "University College London, City University of New York",
            "text": "This research proposes a novel Factorized Self-Attention Module (FSAM) that jointly computes attention across spatial, temporal, and channel dimensions using nonnegative matrix factorization (NMF). Unlike previous methods that compute attention separately for each dimension, FSAM leverages NMF to derive a comprehensive understanding of the multidimensional feature space.",
            "paper-title": "FactorizePhys: Matrix Factorization for Multidimensional Attention in Remote Physiological Sensing",
            "image-path": "flux_paper_image/2411.01542_1730839582.png"
        },

        {
            "startTime": "32:35",
            "arxivId": "2411.01819",
            "arxivLink": "https://arxiv.org/abs/2411.01819",
            "title": "Tired of Hand-Labeling Images? This AI Makes Segmentation a Breeze!",
            "institute": "Sun Yat-sen University, Harvard Medical School, University of Luxembourg",
            "text": "This research introduces a novel approach called DiffuMask-Editor, which combines a diffusion model for segmentation with image editing. Unlike previous methods that generate single-object images, DiffuMask-Editor can generate images with multiple objects and their corresponding masks, making it more adaptable to real-world scenarios.",
            "paper-title": "DiffuMask-Editor: A Novel Paradigm of Integration Between the Segmentation Diffusion Model and Image Editing to Improve Segmentation Ability",
            "image-path": "flux_paper_image/2411.01819_1730841614.png"
        },

        {
            "startTime": "32:58",
            "arxivId": "2411.01683",
            "arxivLink": "https://arxiv.org/abs/2411.01683",
            "title": "Road Trip! New Dataset Makes Autonomous Driving Smarter (and Safer)",
            "institute": "Oxford Brookes University, MAZUST, University of Oxford...",
            "text": "This research introduces ROAD-Waymo, a new dataset for autonomous driving that focuses on action and event detection. Unlike previous datasets that primarily focus on object detection, ROAD-Waymo provides comprehensive annotations for agents, actions, and locations, enabling the development of more sophisticated perception systems.",
            "paper-title": "ROAD-Waymo: Action Awareness at Scale for Autonomous Driving",
            "image-path": "flux_paper_image/2411.01683_1730840607.png"
        },

        {
            "startTime": "33:23",
            "arxivId": "2411.01898",
            "arxivLink": "https://arxiv.org/abs/2411.01898",
            "title": "Unimodal Bandits: When the Best Arm is a Peak, Not a Valley!",
            "institute": "Bocconi University, EPFL, Univ. Lille...",
            "text": "This paper focuses on the \"best-arm identification\" problem in a specific type of bandit setting called \"unimodal bandits,\" where the rewards of the arms increase up to a maximum and then decrease. This is different from previous work that typically assumes unstructured bandits, where there's no relationship between the rewards of different arms.",
            "paper-title": "Best-Arm Identification in Unimodal Bandits",
            "image-path": "flux_paper_image/2411.01898_1730841855.png"
        },

        {
            "startTime": "33:46",
            "arxivId": "2411.01453",
            "arxivLink": "https://arxiv.org/abs/2411.01453",
            "title": "Denoising Fisher Training: A New Trick for Sampling from Un-Normalized Distributions",
            "institute": "Peking University",
            "text": "This paper introduces Denoising Fisher Training (DFT), a novel training approach for neural implicit samplers. DFT minimizes the Fisher divergence between the implicit sampler and the target distribution by introducing a tractable yet equivalent loss function. This differs from previous work that focused on minimizing the Kullback-Leibler divergence or Stein discrepancy.",
            "paper-title": "Denoising Fisher Training For Neural Implicit Samplers",
            "image-path": "flux_paper_image/2411.01453_1730841620.png"
        },

        {
            "startTime": "34:19",
            "arxivId": "2411.01030",
            "arxivLink": "https://arxiv.org/abs/2411.01030",
            "title": "Birdie: State Space Models Learn to Remember Like Champions!",
            "institute": "George Mason University, Stanford University",
            "text": "This research proposes a novel training procedure called Birdie that significantly improves the in-context retrieval capabilities of state space models (SSMs) without altering their architecture. Unlike previous work that focused on architectural modifications, Birdie combines bidirectional input processing with dynamic mixtures of specialized pre-training objectives, optimized via reinforcement learning.",
            "paper-title": "Birdie: Advancing State Space Models with Reward-Driven Objectives and Curricula",
            "image-path": "flux_paper_image/2411.01030_1730840796.png"
        },

        {
            "startTime": "34:41",
            "arxivId": "2411.01746",
            "arxivLink": "https://arxiv.org/abs/2411.01746",
            "title": "Neural Networks Learn to Predict Shocks, But Don't Get Shocked by Noise!",
            "institute": "Dartmouth College, University of Maryland",
            "text": "This research introduces an entropy-stable conservative flux form neural network (CFN) that incorporates the Kurganov-Tadmor (KT) scheme, a second-order accurate non-oscillatory method, to improve the accuracy and stability of predictions for hyperbolic conservation laws. This differs from previous work that did not explicitly consider entropy stability in the design of the neural network.",
            "paper-title": "Entropy stable conservative flux form neural networks",
            "image-path": "flux_paper_image/2411.01746_1730841842.png"
        },

        {
            "startTime": "35:02",
            "arxivId": "2411.00890",
            "arxivLink": "https://arxiv.org/abs/2411.00890",
            "title": "Tiny AI, Big Results: Fine-Tuning Open-Source LLMs for Social Science Research",
            "institute": "Harvard University",
            "text": "This research explores the efficacy of fine-tuning smaller, open-source LLMs for social science research, demonstrating that they can achieve performance comparable to or better than larger, closed-source models. The study also proposes a hybrid workflow for creating labeled datasets that leverages both LLMs and human oversight.",
            "paper-title": "Rethinking Scale: The Efficacy of Fine-Tuned Open-Source LLMs in Large-Scale Reproducible Social Science Research",
            "image-path": "flux_paper_image/2411.00890_1730842606.png"
        },

        {
            "startTime": "35:31",
            "arxivId": "2411.01292",
            "arxivLink": "https://arxiv.org/abs/2411.01292",
            "title": "Causal Reasoning: Difference Graphs Get a Makeover!",
            "institute": "Sorbonne University, INSERM, Institut Pierre Louis d\u2019\u00c9pid\u00e9miologie et de Sant\u00e9 Publique",
            "text": "This paper explores how difference graphs, which visually represent causal variations between populations, can be used to identify causal changes and effects. Unlike previous work that focused on constructing these graphs, this research delves into how they can be leveraged for causal reasoning.",
            "paper-title": "Causal reasoning in difference graphs",
            "image-path": "flux_paper_image/2411.01292_1730839968.png"
        },

        {
            "startTime": "35:51",
            "arxivId": "2411.00830",
            "arxivLink": "https://arxiv.org/abs/2411.00830",
            "title": "Fluoroscopy's Fuzzy Friend: Unsupervised Denoising for X-ray Clarity",
            "institute": "Ewha Womans University, Stanford University",
            "text": "This research proposes an unsupervised training framework for dynamic context-aware denoising of fluoroscopy image sequences. Unlike previous methods that rely on paired clean and noisy images, this approach utilizes a two-step training process that leverages multi-frame inputs and motion compensation to effectively reduce noise without requiring clean data.",
            "paper-title": "Unsupervised Training of a Dynamic Context-Aware Deep Denoising Framework for Low-Dose Fluoroscopic Imaging",
            "image-path": "flux_paper_image/2411.00830_1730839080.png"
        },

        {
            "startTime": "36:09",
            "arxivId": "2411.00997",
            "arxivLink": "https://arxiv.org/abs/2411.00997",
            "title": "AI's Got a Bias Problem: Can We Teach It to Be Fair?",
            "institute": "MIT, University of Virginia",
            "text": "This research goes beyond previous work by proposing a new taxonomy called So-B-IT, which categorizes 374 words across ten types of bias. This allows for a more comprehensive analysis of social biases in vision-language models, including biases associated with discrimination based on the model's implicit assumptions about images of faces.",
            "paper-title": "Identifying Implicit Social Biases in Vision-Language Models",
            "image-path": "flux_paper_image/2411.00997_1730841233.png"
        },

        {
            "startTime": "36:33",
            "arxivId": "2411.00970",
            "arxivLink": "https://arxiv.org/abs/2411.00970",
            "title": "IVF Index Maintenance: A Lazy Approach to Keeping Your Vectors in Line!",
            "institute": "Apple, University of Wisconsin-Madison",
            "text": "This research introduces Ada-IVF, an incremental indexing methodology for IVF indexes that utilizes partition access patterns to minimize maintenance overhead. Unlike previous approaches, Ada-IVF prioritizes reindexing frequently accessed partitions, making it more efficient for dynamic datasets.",
            "paper-title": "Incremental IVF Index Maintenance for Streaming Vector Search",
            "image-path": "flux_paper_image/2411.00970_1730841819.png"
        },

        {
            "startTime": "36:55",
            "arxivId": "2411.01220",
            "arxivLink": "https://arxiv.org/abs/2411.01220",
            "title": "Making AI Explain Itself: A New Trick for Unmasking Hidden Features",
            "institute": "University of Oxford, MILA, Tangentic",
            "text": "This research introduces Mutual Feature Regularization (MFR), a technique that encourages multiple Sparse Autoencoders (SAEs) trained on the same data to learn similar features. This differs from previous work by focusing on improving feature learning within SAEs, rather than solely on optimizing reconstruction loss.",
            "paper-title": "Enhancing Neural Network Interpretability with Feature-Aligned Sparse Autoencoders",
            "image-path": "flux_paper_image/2411.01220_1730841527.png"
        },

        {
            "startTime": "37:23",
            "arxivId": "2411.00869",
            "arxivLink": "https://arxiv.org/abs/2411.00869",
            "title": "Diabetic Retinopathy Diagnosis: Federated Learning to the Rescue!",
            "institute": "Harvard University",
            "text": "This research explores the use of federated learning to improve diabetic retinopathy diagnosis in under-resourced regions. Unlike traditional centralized approaches, federated learning allows institutions to train a shared model without sharing their patient data, addressing privacy concerns.",
            "paper-title": "Federated Learning for Diabetic Retinopathy Diagnosis: Enhancing Accuracy and Generalizability in Under-Resourced Regions",
            "image-path": "flux_paper_image/2411.00869_1730839556.png"
        },

        {
            "startTime": "37:49",
            "arxivId": "2411.01717",
            "arxivLink": "https://arxiv.org/abs/2411.01717",
            "title": "SVD: The Secret Sauce for Stable Graph Neural Networks",
            "institute": "Tel-Aviv University, University of Cambridge",
            "text": "This paper proposes a general method to make any GNN architecture contractive by applying SVD regularization, enhancing stability and preventing overfitting. This approach differs from previous work by deriving a sufficient condition for the update step in GNNs to be contractive and introducing constraints over network parameters that guarantee contractiveness.",
            "paper-title": "A General Recipe for Contractive Graph Neural Networks -- Technical Report",
            "image-path": "flux_paper_image/2411.01717_1730841380.png"
        },

        {
            "startTime": "38:08",
            "arxivId": "2411.01195",
            "arxivLink": "https://arxiv.org/abs/2411.01195",
            "title": "Finetuning LLMs: Transfer Learning is the New Black!",
            "institute": "University of Freiburg, ELLIS Institute T\u00fcbingen",
            "text": "This research explores transfer learning for finetuning large language models (LLMs) by meta-learning performance and cost surrogate models. Unlike previous work, it proposes to rely solely on transfer learning for new datasets, disabling task-specific Bayesian optimization.",
            "paper-title": "Transfer Learning for Finetuning Large Language Models",
            "image-path": "flux_paper_image/2411.01195_1730840261.png"
        },

        {
            "startTime": "38:32",
            "arxivId": "2411.00948",
            "arxivLink": "https://arxiv.org/abs/2411.00948",
            "title": "Multiplexed Imaging in Pathology: A Computational Revolution in a Slide!",
            "institute": "Harvard University, Cornell University",
            "text": "This research focuses on the computational analysis of multiplexed imaging data in pathology, highlighting the need for robust workflows that integrate various techniques, including image preprocessing, cell segmentation, feature extraction, and phenotyping. This differs from previous work by emphasizing the importance of end-to-end workflows and introducing PathML, a modular platform designed to streamline these processes.",
            "paper-title": "Multiplex Imaging Analysis in Pathology: a Comprehensive Review on Analytical Approaches and Digital Toolkits",
            "image-path": "flux_paper_image/2411.00948_1730840711.png"
        },

        {
            "startTime": "39:01",
            "arxivId": "2411.01144",
            "arxivLink": "https://arxiv.org/abs/2411.01144",
            "title": "Learning Fine-Grained Changes from Coarse Labels: A Contrastive Learning Approach to Patient Monitoring",
            "institute": "Carnegie Mellon University, LSUHSC Internal Medicine",
            "text": "This research explores the use of contrastive learning to train models that can detect subtle changes in patient scans, even when trained on data showing larger differences. This approach differs from previous work by leveraging inter-patient data to improve intra-patient predictions.",
            "paper-title": "LEARNER: Learning Granular Labels from Coarse Labels using Contrastive Learning",
            "image-path": "flux_paper_image/2411.01144_1730838749.png"
        },

        {
            "startTime": "39:26",
            "arxivId": "2411.01720",
            "arxivLink": "https://arxiv.org/abs/2411.01720",
            "title": "No-Regret Learning: How Many Iterations Until We're All Rich?",
            "institute": "CMU, Yale University",
            "text": "This paper explores the computational complexity of finding a near-optimal \"sparse\" coarse correlated equilibrium (CCE) in two-player games. Unlike previous work that focused on the existence of such equilibria, this research investigates the number of iterations required for no-regret learning algorithms to converge to a near-optimal solution.",
            "paper-title": "Barriers to Welfare Maximization with No-Regret Learning",
            "image-path": "flux_paper_image/2411.01720_1730840952.png"
        },

        {
            "startTime": "39:53",
            "arxivId": "2411.01721",
            "arxivLink": "https://arxiv.org/abs/2411.01721",
            "title": "Game Theory's New Frontier: How Many Iterations Does It Take to Reach an Equilibrium?",
            "institute": "CMU, Yale University",
            "text": "This research explores the computational complexity of finding a correlated equilibrium in normal-form games, focusing on the sparsity of the equilibrium distribution. It extends the sum-of-squares (SoS) framework previously used for Nash equilibria to analyze the computational limitations of finding sparse correlated equilibria.",
            "paper-title": "Computational Lower Bounds for Regret Minimization in Normal-Form Games",
            "image-path": "flux_paper_image/2411.01721_1730838841.png"
        },

        {
            "startTime": "40:20",
            "arxivId": "2411.00853",
            "arxivLink": "https://arxiv.org/abs/2411.00853",
            "title": "AI Inference: Taking Shortcuts to Speed Up Your Models!",
            "institute": "Intel, University of Oxford",
            "text": "This research focuses on dynamic execution techniques that optimize the computation flow based on input, allowing AI models to take shortcuts during inference and improve throughput without compromising accuracy. This differs from previous work that primarily focused on model compression techniques like quantization and sparsity.",
            "paper-title": "Accelerated AI Inference via Dynamic Execution Methods",
            "image-path": "flux_paper_image/2411.00853_1730840835.png"
        },

        {
            "startTime": "40:45",
            "arxivId": "2411.01228",
            "arxivLink": "https://arxiv.org/abs/2411.01228",
            "title": "AI Parenting Coach: Can We Talk?",
            "institute": "University of Oxford, Kings College London, World Health Organisation",
            "text": "This research explores how to co-design interactions between parents and AI-powered wellbeing assistants, specifically focusing on Large Language Models (LLMs). The study uses a unique approach called Asynchronous Remote Communities (ARC) to gather feedback from parents and iteratively improve the chatbot's design.",
            "paper-title": "The Interaction Layer: An Exploration for Co-Designing User-LLM Interactions in Parental Wellbeing Support Systems",
            "image-path": "flux_paper_image/2411.01228_1730839325.png"
        },

        {
            "startTime": "41:08",
            "arxivId": "2411.01653",
            "arxivLink": "https://arxiv.org/abs/2411.01653",
            "title": "Data Maps: Can We Diagnose Medical Datasets with Training Dynamics?",
            "institute": "University of Cambridge",
            "text": "This research replicates a previous study on training dynamics, known as Data Maps, using a medical question-answering dataset. The study aims to assess the framework's feasibility and transferability to the medical domain.",
            "paper-title": "Diagnosing Medical Datasets with Training Dynamics",
            "image-path": "flux_paper_image/2411.01653_1730839405.png"
        },

        {
            "startTime": "41:32",
            "arxivId": "2411.01375",
            "arxivLink": "https://arxiv.org/abs/2411.01375",
            "title": "Scaling Laws: When Machine Learning Gets a Hidden Makeover!",
            "institute": "Inria, Potsdam University, C3AI...",
            "text": "This research explores how neural networks can learn more efficiently by exploiting hidden factorial structures in discrete data. Unlike previous work that focused on continuous data, this study delves into the discrete nature of data, particularly relevant for text processing.",
            "paper-title": "Scaling Laws with Hidden Structure",
            "image-path": "flux_paper_image/2411.01375_1730840236.png"
        },

        {
            "startTime": "42:02",
            "arxivId": "2411.01821",
            "arxivLink": "https://arxiv.org/abs/2411.01821",
            "title": "IRS-Enhanced Secure Semantic Communication: A Codebook for Your Secrets!",
            "institute": "Nanjing University of Posts and Telecommunications, Tsinghua University",
            "text": "This research introduces a novel multi-layer codebook for semantic communication, enabling adaptive bit allocation for different levels of semantic richness. This approach differs from previous work by considering the trade-off between security requirements, semantic differences, task performance, and resource limitations.",
            "paper-title": "IRS-Enhanced Secure Semantic Communication Networks: Cross-Layer and Context-Awared Resource Allocation",
            "image-path": "flux_paper_image/2411.01821_1730839356.png"
        },

        {
            "startTime": "42:35",
            "arxivId": "2411.00913",
            "arxivLink": "https://arxiv.org/abs/2411.00913",
            "title": "AI's Secret Sauce: Unlocking the Black Box with Two Simple Equations",
            "institute": "Wuhan Institute of Physical Education, Peking University",
            "text": "This research differs from previous work by introducing two mathematical equations that precisely link AI model performance to the ratio of minority to majority samples in a dataset. This provides a quantitative framework for understanding how dataset imbalance affects model performance, which is a crucial factor in many real-world applications.",
            "paper-title": "Ratio law: mathematical descriptions for a universal relationship between AI performance and input samples",
            "image-path": "flux_paper_image/2411.00913_1730841308.png"
        },

        {
            "startTime": "42:54",
            "arxivId": "2411.01827",
            "arxivLink": "https://arxiv.org/abs/2411.01827",
            "title": "Risk-Sensitive Control: A New Way to Make AI Decisions Less Risky",
            "institute": "University of Tokyo, Kyoto University",
            "text": "This paper introduces a new approach to control as inference (CaI) using R\u00e9nyi divergence, a more flexible measure than the traditional Kullback-Leibler (KL) divergence. This allows for the optimization of risk-sensitive control problems, which are not addressed by standard CaI.",
            "paper-title": "Risk-sensitive control as inference with R\\'enyi divergence",
            "image-path": "flux_paper_image/2411.01827_1730838917.png"
        },

        {
            "startTime": "43:15",
            "arxivId": "2411.00863",
            "arxivLink": "https://arxiv.org/abs/2411.00863",
            "title": "Proofs in Reverse: LLMs Learn Better When Steps Are Backwards!",
            "institute": "UC San Diego, Microsoft, Vanderbilt University",
            "text": "This research explores the impact of data order on the training efficiency of large language models (LLMs) for proof generation tasks. Unlike previous work that focused on the overall structure of proofs, this study investigates the optimal order of individual steps within a proof, arguing that placing intermediate supervision steps earlier in the sequence improves model performance.",
            "paper-title": "Next-Token Prediction Task Assumes Optimal Data Ordering for LLM Training in Proof Generation",
            "image-path": "flux_paper_image/2411.00863_1730840823.png"
        },

        {
            "startTime": "43:39",
            "arxivId": "2411.01583",
            "arxivLink": "https://arxiv.org/abs/2411.01583",
            "title": "Federated Learning: Keeping Your Data Safe While AI Learns!",
            "institute": "HiThink Research, Carnegie Mellon University, Kyushu University...",
            "text": "This research provides a comprehensive overview of security and privacy issues in Federated Learning (FL), focusing on the vulnerabilities of communication links and potential cyber threats. It also proposes a universal FL system architecture and explores various defense strategies to mitigate these risks.",
            "paper-title": "Trustworthy Federated Learning: Privacy, Security, and Beyond",
            "image-path": "flux_paper_image/2411.01583_1730842218.png"
        },

        {
            "startTime": "44:03",
            "arxivId": "2411.01629",
            "arxivLink": "https://arxiv.org/abs/2411.01629",
            "title": "Denoising Diffusions: Curvature Complexity Makes the Difference!",
            "institute": "The University of Chicago",
            "text": "This research introduces a multi-scale complexity measure to analyze the effectiveness of denoising in diffusion models. Unlike previous work that focused on worst-case curvature, this paper examines average-case curvature across different signal-to-noise ratio scales.",
            "paper-title": "Denoising Diffusions with Optimal Transport: Localization, Curvature, and Multi-Scale Complexity",
            "image-path": "flux_paper_image/2411.01629_1730840615.png"
        },

        {
            "startTime": "44:24",
            "arxivId": "2411.00983",
            "arxivLink": "https://arxiv.org/abs/2411.00983",
            "title": "Attention Schemas: Making AI Agents More Sociable!",
            "institute": "Princeton Neuroscience Institute, Princeton University",
            "text": "This research explores the impact of adding an \"attention schema\" to artificial neural networks, a mechanism that allows agents to predict and model their own attention, potentially improving their ability to understand and interact with other agents. This differs from previous work by focusing on the specific benefits of attention schemas for social tasks, rather than general improvements in network performance.",
            "paper-title": "Improving How Agents Cooperate: Attention Schemas in Artificial Neural Networks",
            "image-path": "flux_paper_image/2411.00983_1730839755.png"
        },

        {
            "startTime": "44:45",
            "arxivId": "2411.01161",
            "arxivLink": "https://arxiv.org/abs/2411.01161",
            "title": "Fairness for All? Nope, Just the Right Amount!",
            "institute": "University of Tokyo",
            "text": "This research proposes a federated learning framework that focuses on relative fairness, aiming to minimize the disparity in model performance between client subgroups, rather than just guaranteeing minimum performance for all. This approach differs from previous work that primarily focused on absolute fairness.",
            "paper-title": "Federated Learning with Relative Fairness",
            "image-path": "flux_paper_image/2411.01161_1730842359.png"
        },

        {
            "startTime": "45:09",
            "arxivId": "2411.01533",
            "arxivLink": "https://arxiv.org/abs/2411.01533",
            "title": "Garbling Your Way to Better LLMs: A New Trick for Evaluating Reasoning Power",
            "institute": "OpenAI, Google",
            "text": "This paper introduces a novel method for evaluating LLMs by introducing a \"garbling trick\" that systematically introduces noise into the text of existing evaluation datasets. This approach allows researchers to assess the reasoning abilities of LLMs by observing how their performance degrades as the level of garbling increases.",
            "paper-title": "Enhancing LLM Evaluations: The Garbling Trick",
            "image-path": "flux_paper_image/2411.01533_1730841201.png"
        },

        {
            "startTime": "45:33",
            "arxivId": "2411.02095",
            "arxivLink": "https://arxiv.org/abs/2411.02095",
            "title": "Volumetric Video: From Big Data to Big Fun!",
            "institute": "Adobe, athenahealth",
            "text": "This research focuses on smart transcoding techniques for volumetric video, specifically exploring AI-driven solutions to optimize the entire pipeline from capture to display. It differs from previous work by emphasizing the use of machine learning to dynamically adapt to network conditions, device capabilities, and user preferences.",
            "paper-title": "The Evolution of Volumetric Video: A Survey of Smart Transcoding and Compression Approaches",
            "image-path": "flux_paper_image/2411.02095_1730840173.png"
        },

        {
            "startTime": "45:52",
            "arxivId": "2411.01238",
            "arxivLink": "https://arxiv.org/abs/2411.01238",
            "title": "Dropout's Got Speed: Structured Sparsity Makes Deep Learning Faster!",
            "institute": "University of Cambridge",
            "text": "This research explores structured dropout, a technique that introduces sparsity in a way that's compatible with GPU hardware, unlike traditional dropout. Previous work focused on using sparsity for faster inference, while this paper focuses on speeding up training.",
            "paper-title": "Efficient Sparse Training with Structured Dropout",
            "image-path": "flux_paper_image/2411.01238_1730841019.png"
        },

        {
            "startTime": "46:23",
            "arxivId": "2411.01411",
            "arxivLink": "https://arxiv.org/abs/2411.01411",
            "title": "Global Flood Watch: 10 Years of Satellite Radar Data Reveal Wet Secrets!",
            "institute": "Microsoft, University of Wisconsin-Madison",
            "text": "This research uses a deep learning model to analyze nearly 10 years of Sentinel-1 SAR data, creating a global flood extent dataset that is unaffected by cloud cover. This is different from previous work that relied on optical imagery, which is limited by cloud cover.",
            "paper-title": "Mapping Global Floods with 10 Years of Satellite Radar Data",
            "image-path": "flux_paper_image/2411.01411_1730841041.png"
        },

        {
            "startTime": "46:45",
            "arxivId": "2411.01348",
            "arxivLink": "https://arxiv.org/abs/2411.01348",
            "title": "Three Frames to Catch a Fight: Optimizing Violence Detection in Video",
            "institute": "Harvard University",
            "text": "This research explores the impact of the number of frames analyzed at a time on the accuracy of a 3D convolutional neural network (CNN) for violence detection in video. Unlike previous work that focused on analyzing two consecutive frames, this study investigates the effectiveness of analyzing one, two, three, ten, and twenty frames.",
            "paper-title": "Optimizing Violence Detection in Video Classification Accuracy through 3D Convolutional Neural Networks",
            "image-path": "flux_paper_image/2411.01348_1730840745.png"
        },

        {
            "startTime": "47:03",
            "arxivId": "2411.00796",
            "arxivLink": "https://arxiv.org/abs/2411.00796",
            "title": "RoBERTa's Amazon Reviews: Sentiment Analysis Gets a Makeover!",
            "institute": "University of Paris 1: Panthe\u00b4on-Sorbonne\u00b4",
            "text": "This research uses RoBERTa, an enhanced version of BERT, to analyze Amazon product reviews. The study goes beyond simply calculating sentiment scores, exploring how these scores align with behavioral economics principles like electronic word-of-mouth and confirmation bias.",
            "paper-title": "Sentiment Analysis Based on RoBERTa for Amazon Review: An Empirical Study on Decision Making",
            "image-path": "flux_paper_image/2411.00796_1730840906.png"
        },

        {
            "startTime": "47:23",
            "arxivId": "2411.00885",
            "arxivLink": "https://arxiv.org/abs/2411.00885",
            "title": "Cancer Vaccines Get a Brain Boost: AI Predicts Perfect Neoepitopes",
            "institute": "McCallie School, Zhejiang University, Harvard University",
            "text": "This research introduces a novel approach to predicting neoepitope-MHC binding using a two-branched ensemble model that combines feed-forward neural networks (FFNNs) and recurrent neural networks (RNNs) with LSTM architecture. This approach differs from previous models by incorporating sequential data from peptide sequences, which allows the model to learn from the order of amino acids in the epitopes.",
            "paper-title": "Revolutionizing Personalized Cancer Vaccines with NEO: Novel Epitope Optimization Using an Aggregated Feed Forward and Recurrent Neural Network with LSTM Architecture",
            "image-path": "flux_paper_image/2411.00885_1730840641.png"
        },

        {
            "startTime": "47:50",
            "arxivId": "2411.01006",
            "arxivLink": "https://arxiv.org/abs/2411.01006",
            "title": "Time-Series Shapespeak: A Model That Understands Your Data's Curves",
            "institute": "Stony Brook Medicine, Rensselaer, IBM...",
            "text": "This research introduces VQShape, a pre-trained model that learns to represent time-series data using abstracted shapes. Unlike previous models that rely on black-box representations, VQShape provides interpretable tokens that can be understood by humans.",
            "paper-title": "Abstracted Shapes as Tokens -- A Generalizable and Interpretable Model for Time-series Classification",
            "image-path": "flux_paper_image/2411.01006_1730840688.png"
        },

        {
            "startTime": "48:16",
            "arxivId": "2411.00967",
            "arxivLink": "https://arxiv.org/abs/2411.00967",
            "title": "Raspberry PhenoSet: A Dataset for Fruit-Picking Robots!",
            "institute": "Toronto Metropolitan University",
            "text": "This research introduces a new dataset called Raspberry PhenoSet, which is unique because it classifies raspberries based on their developmental stages, or \"phenology,\" rather than just color. This allows for more precise yield estimation and harvest timing.",
            "paper-title": "Raspberry PhenoSet: A Phenology-based Dataset for Automated Growth Detection and Yield Estimation",
            "image-path": "flux_paper_image/2411.00967_1730841025.png"
        }
    ],
    "stats": {
        "num_pick": 119,
        "num_total": 525,
    },
    "audio": "https://d2irtorupa9e8g.cloudfront.net/daily_podcast/202411051418_audio.mp3"
}
