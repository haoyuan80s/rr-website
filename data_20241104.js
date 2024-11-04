
daily_data = {
    "date": "2024-11-04",
    "tweets": [
        
        {
            "startTime": "01:16",
            "arxivId": "2411.00284",
            "arxivLink": "https://arxiv.org/abs/2411.00284",
            "title": "SimpleFSDP: Sharding Models, Boosting Speed, and Keeping it Simple!",
            "institute": "UC San Diego, Meta",
            "text": "This research introduces SimpleFSDP, a PyTorch-native compiler-based framework for Fully Sharded Data Parallel (FSDP) training. Unlike previous FSDP implementations, SimpleFSDP leverages existing PyTorch primitives like parametrization, selective activation checkpointing, and DTensor API to achieve full-graph tracing, enabling compiler-based optimizations for improved performance.",
            "paper-title": "SimpleFSDP: Simpler Fully Sharded Data Parallel with torch.compile",
            "image-path": "flux_paper_image/2411.00284_1730749892.png"
        },

        {
            "startTime": "01:44",
            "arxivId": "2411.00119",
            "arxivLink": "https://arxiv.org/abs/2411.00119",
            "title": "Ranking Agents: Condorcet's Revenge on Elo!",
            "institute": "Google DeepMind, University of Waterloo, Mila...",
            "text": "This paper introduces a new ranking scheme called SoftCondorcetOptimization (SCO) that uses a differentiable loss function to find the optimal ranking of agents. Unlike traditional methods like Elo, SCO is designed to handle incomplete data and is more robust to score values and agent population.",
            "paper-title": "Soft Condorcet Optimization for Ranking of General Agents",
            "image-path": "flux_paper_image/2411.00119_1730749082.png"
        },

        {
            "startTime": "02:08",
            "arxivId": "2411.00743",
            "arxivLink": "https://arxiv.org/abs/2411.00743",
            "title": "Hunting for Dark Matter Features: A New Lens for Foundation Model Interpretability",
            "institute": "CMU",
            "text": "This research introduces Specialized Sparse Autoencoders (SSAEs), a novel approach for extracting rare, subdomain-specific features from foundation models. Unlike previous work that focuses on general-purpose data, SSAEs target specific subdomains, allowing for efficient capture of rare concepts without needing to scale the number of features to billions.",
            "paper-title": "Decoding Dark Matter: Specialized Sparse Autoencoders for Interpreting Rare Concepts in Foundation Models",
            "image-path": "flux_paper_image/2411.00743_1730749836.png"
        },

        {
            "startTime": "02:38",
            "arxivId": "2411.00705",
            "arxivLink": "https://arxiv.org/abs/2411.00705",
            "title": "Dynamic Scene Reconstruction: Flow Matching Makes It Flow!",
            "institute": "Nvidia",
            "text": "This paper introduces the ReMatching framework, a novel approach for incorporating deformation priors into dynamic reconstruction models. Unlike previous methods that rely on numerical simulations, ReMatching leverages velocity fields and a flow-matching loss to achieve simulation-free training.",
            "paper-title": "ReMatching Dynamic Reconstruction Flow",
            "image-path": "flux_paper_image/2411.00705_1730750070.png"
        },

        {
            "startTime": "03:03",
            "arxivId": "2411.00593",
            "arxivLink": "https://arxiv.org/abs/2411.00593",
            "title": "Token Translation: A New Way to Teach Language Models New Tricks!",
            "institute": "Carnegie Mellon University, Microsoft Research",
            "text": "This research introduces Sparse Sinkhorn Token Translation (S2T2), a method for adapting language models to new domains without requiring parallel data. Unlike previous approaches that rely on parallel data, S2T2 learns a translation between tokens from the original training domain and the new target domain using only a sample of data from the target domain.",
            "paper-title": "Adapting Language Models via Token Translation",
            "image-path": "flux_paper_image/2411.00593_1730750046.png"
        },

        {
            "startTime": "03:29",
            "arxivId": "2411.00066",
            "arxivLink": "https://arxiv.org/abs/2411.00066",
            "title": "Ngram Models Get a Neural Makeover: Interpretable Language Models Go From Zero to Hero!",
            "institute": "Microsoft Research, Seoul National University, Stanford University",
            "text": "This research proposes Induction-Gram, a method that combines a traditional ngram model with a neural \"induction head\" to improve next-word prediction accuracy. This approach differs from previous work by leveraging the context of the input text to enhance the ngram model's ability to predict the next word.",
            "paper-title": "Interpretable Language Modeling via Induction-head Ngram Models",
            "image-path": "flux_paper_image/2411.00066_1730749037.png"
        },

        {
            "startTime": "03:52",
            "arxivId": "2411.00225",
            "arxivLink": "https://arxiv.org/abs/2411.00225",
            "title": "Virtual Try-On Goes Viral: Diffusion Model Makes Fashion Videos Fly!",
            "institute": "Google Research, University of Washington",
            "text": "This research introduces Fashion-VDM, a video diffusion model for virtual try-on that generates temporally consistent, high-quality try-on videos, even when video data is limited. Unlike previous methods that rely on warping techniques, Fashion-VDM uses a diffusion-based approach to synthesize realistic fabric dynamics and maintain temporal consistency.",
            "paper-title": "Fashion-VDM: Video Diffusion Model for Virtual Try-On",
            "image-path": "flux_paper_image/2411.00225_1730748634.png"
        },

        {
            "startTime": "04:13",
            "arxivId": "2411.00328",
            "arxivLink": "https://arxiv.org/abs/2411.00328",
            "title": "How Many Classifiers Does It Take to Make a Great Ensemble?",
            "institute": "UC Berkeley, University of Melbourne",
            "text": "This research introduces the concept of \"polarization\" to measure the dispersity of error rates in an ensemble of classifiers. This goes beyond previous work that focused solely on disagreement, providing a more nuanced understanding of ensemble performance.",
            "paper-title": "How many classifiers do we need?",
            "image-path": "flux_paper_image/2411.00328_1730749861.png"
        },

        {
            "startTime": "04:35",
            "arxivId": "2411.00390",
            "arxivLink": "https://arxiv.org/abs/2411.00390",
            "title": "Machine Translation Metrics Get a Tune-Up: Human Preferences Take the Wheel!",
            "institute": "University of Toronto, Boston University, Monash University...",
            "text": "This research proposes METAMETRICS-MT, a new machine translation (MT) metric that uses Bayesian optimization with Gaussian Processes to fine-tune the weights of existing metrics, aligning them more closely with human preferences. This differs from previous work that often relies on a single metric or a fixed combination of metrics.",
            "paper-title": "MetaMetrics-MT: Tuning Meta-Metrics for Machine Translation via Human Preference Calibration",
            "image-path": "flux_paper_image/2411.00390_1730748317.png"
        },

        {
            "startTime": "05:05",
            "arxivId": "2411.00038",
            "arxivLink": "https://arxiv.org/abs/2411.00038",
            "title": "Meeting Minutes: Are They Actually Relevant?",
            "institute": "Microsoft",
            "text": "This research introduces a new dataset, Topic-Conversation Relevance (TCR), specifically designed to measure how relevant meeting conversations are to their pre-defined agendas. Unlike previous work focusing on meeting summarization, TCR focuses on the alignment between planned topics and actual discussions.",
            "paper-title": "Topic-Conversation Relevance (TCR) Dataset and Benchmarks",
            "image-path": "flux_paper_image/2411.00038_1730749697.png"
        },

        {
            "startTime": "05:23",
            "arxivId": "2411.00200",
            "arxivLink": "https://arxiv.org/abs/2411.00200",
            "title": "Tabularizing EHR Data: MEDS-Tab Makes Baselines a Breeze!",
            "institute": "MIT, Harvard University",
            "text": "This research introduces MEDS-Tab, a tool that automates the process of converting irregularly sampled time-series data from electronic health records (EHRs) into a tabular format suitable for machine learning models. This differs from previous work by leveraging the MEDS framework for data standardization and employing sparse matrix representations and data sharding techniques to handle large-scale datasets efficiently.",
            "paper-title": "MEDS-Tab: Automated tabularization and baseline methods for MEDS datasets",
            "image-path": "flux_paper_image/2411.00200_1730750250.png"
        },

        {
            "startTime": "05:45",
            "arxivId": "2411.00403",
            "arxivLink": "https://arxiv.org/abs/2411.00403",
            "title": "Flying High on Encrypted Data: How Knowledge Distillation Makes Secure UAV Navigation a Reality",
            "institute": "University at Buffalo, IBM",
            "text": "This research proposes a novel approach to secure UAV navigation by combining reinforcement learning with fully homomorphic encryption (FHE). Unlike previous work that prioritizes security at the expense of computational feasibility, this paper leverages knowledge distillation to compress the network, resulting in a significant speedup without compromising performance.",
            "paper-title": "Towards Building Secure UAV Navigation with FHE-aware Knowledge Distillation",
            "image-path": "flux_paper_image/2411.00403_1730749021.png"
        },

        {
            "startTime": "06:07",
            "arxivId": "2411.00192",
            "arxivLink": "https://arxiv.org/abs/2411.00192",
            "title": "Lens-ing Trouble: How a Simple Lens Can Trick Self-Driving Cars",
            "institute": "Michigan State University, University of South Florida, Peking University",
            "text": "This research introduces a novel physical attack, LensAttack, that uses optical lenses to manipulate the perceived depth of objects in images used by monocular depth estimation (MDE) algorithms. Unlike previous digital attacks, LensAttack is effective in the real world and can be applied to a wide range of MDE models.",
            "paper-title": "Optical Lens Attack on Monocular Depth Estimation for Autonomous Driving",
            "image-path": "flux_paper_image/2411.00192_1730749939.png"
        },

        {
            "startTime": "06:28",
            "arxivId": "2411.00147",
            "arxivLink": "https://arxiv.org/abs/2411.00147",
            "title": "Pruning Neural Networks: A Mutual Information Love Story!",
            "institute": "University College London",
            "text": "This research introduces Mutual Information Preserving Pruning (MIPP), a structured pruning technique that focuses on maintaining the mutual information (MI) between activations of adjacent layers in a neural network. Unlike previous methods that rank nodes and select the top-k, MIPP dynamically prunes nodes based on their ability to transfer entropy to the downstream layer.",
            "paper-title": "Mutual Information Preserving Neural Network Pruning",
            "image-path": "flux_paper_image/2411.00147_1730749275.png"
        },

        {
            "startTime": "06:54",
            "arxivId": "2411.00177",
            "arxivLink": "https://arxiv.org/abs/2411.00177",
            "title": "LLMs for Materials: A New Benchmark for Predicting Properties with a Twist!",
            "institute": "Princeton University, Vertaix, University of Toronto...",
            "text": "This research introduces LLM4Mat-Bench, a new benchmark dataset for evaluating the performance of large language models (LLMs) in predicting material properties. Unlike previous benchmarks, LLM4Mat-Bench includes a wider range of materials, properties, and input modalities, including crystal composition, CIF files, and textual descriptions of crystal structures.",
            "paper-title": "LLM4Mat-Bench: Benchmarking Large Language Models for Materials Property Prediction",
            "image-path": "flux_paper_image/2411.00177_1730748499.png"
        },

        {
            "startTime": "07:19",
            "arxivId": "2411.00299",
            "arxivLink": "https://arxiv.org/abs/2411.00299",
            "title": "Radiology Reports: AI's Got a Case of the Hallucinations, But RadFlag's Got the Cure!",
            "institute": "Stanford University, Harvard University",
            "text": "This research introduces RadFlag, a black-box method for detecting hallucinations in AI-generated radiology reports. Unlike previous work that often requires access to the model's internal workings, RadFlag relies solely on comparing multiple report samples generated at different temperatures.",
            "paper-title": "RadFlag: A Black-Box Hallucination Detection Method for Medical Vision Language Models",
            "image-path": "flux_paper_image/2411.00299_1730749830.png"
        },

        {
            "startTime": "07:40",
            "arxivId": "2411.00427",
            "arxivLink": "https://arxiv.org/abs/2411.00427",
            "title": "Multi-Agent Chatbots: The Future of Customer Service is Here!",
            "institute": "CMU, Amazon",
            "text": "This research proposes a multi-agent framework called DARD (Domain Assigned Response Delegation) for task-oriented dialogue systems. Unlike previous approaches that rely on a single model, DARD utilizes specialized agents for each domain, allowing for greater flexibility and composability.",
            "paper-title": "DARD: A Multi-Agent Approach for Task-Oriented Dialog Systems",
            "image-path": "flux_paper_image/2411.00427_1730748758.png"
        },

        {
            "startTime": "08:05",
            "arxivId": "2411.00205",
            "arxivLink": "https://arxiv.org/abs/2411.00205",
            "title": "Reinforcement Learning Gets a Flowchart Makeover: DFAs for Temporal Tasks",
            "institute": "UC Berkeley",
            "text": "This research proposes using compositional deterministic finite automata (cDFAs) to represent temporal goals in goal-conditioned reinforcement learning. Unlike previous work that relies on target states or natural language, cDFAs offer a more formal and unambiguous way to specify tasks, making them particularly suitable for safety-critical applications.",
            "paper-title": "Compositional Automata Embeddings for Goal-Conditioned Reinforcement Learning",
            "image-path": "flux_paper_image/2411.00205_1730748822.png"
        },

        {
            "startTime": "08:29",
            "arxivId": "2411.00221",
            "arxivLink": "https://arxiv.org/abs/2411.00221",
            "title": "Robot Picking: From Bin to Drop-Off in a Flash!",
            "institute": "UC Berkeley, Carnegie Mellon University",
            "text": "This research introduces BOMP, a motion planning framework that uses a deep neural network to warm-start the optimization process, making it significantly faster than traditional methods. Unlike previous work, BOMP considers the changing environment of a bin, where boxes are constantly being removed, by incorporating the dimensions of the grasped box and a height map of the environment into the neural network's input.",
            "paper-title": "BOMP: Bin-Optimized Motion Planning",
            "image-path": "flux_paper_image/2411.00221_1730748779.png"
        },

        {
            "startTime": "08:54",
            "arxivId": "2411.00081",
            "arxivLink": "https://arxiv.org/abs/2411.00081",
            "title": "Robots Need a Roommate: New Benchmark Tests AI Collaboration Skills",
            "institute": "FAIR Meta",
            "text": "This research introduces PARTNR, a benchmark for evaluating embodied AI agents' ability to collaborate with humans on everyday tasks. Unlike previous benchmarks, PARTNR focuses on multi-agent tasks described in natural language, incorporating spatial, temporal, and heterogeneous constraints.",
            "paper-title": "PARTNR: A Benchmark for Planning and Reasoning in Embodied Multi-agent Tasks",
            "image-path": "flux_paper_image/2411.00081_1730749714.png"
        },

        {
            "startTime": "09:22",
            "arxivId": "2411.00348",
            "arxivLink": "https://arxiv.org/abs/2411.00348",
            "title": "LLMs Got Distracted? Attention Tracker Catches Prompt Injection Attacks!",
            "institute": "National Taiwan University, IBM",
            "text": "This research focuses on the attention mechanisms within LLMs to understand how prompt injection attacks work. It introduces the \"distraction effect,\" where specific attention heads shift focus from the original instruction to the injected instruction. This is different from previous work that focused on training-based detection methods or using LLMs themselves for detection.",
            "paper-title": "Attention Tracker: Detecting Prompt Injection Attacks in LLMs",
            "image-path": "flux_paper_image/2411.00348_1730748595.png"
        },

        {
            "startTime": "09:43",
            "arxivId": "2411.00437",
            "arxivLink": "https://arxiv.org/abs/2411.00437",
            "title": "Tired of AI Hallucinations? This Model Filters Out Fake News!",
            "institute": "Peking University",
            "text": "This research proposes an end-to-end model called E2E-AFG that integrates answer existence judgment with text generation. Unlike previous methods that rely on separate models for filtering and generation, E2E-AFG learns both tasks simultaneously, improving efficiency and accuracy.",
            "paper-title": "E2E-AFG: An End-to-End Model with Adaptive Filtering for Retrieval-Augmented Generation",
            "image-path": "flux_paper_image/2411.00437_1730750115.png"
        },

        {
            "startTime": "10:07",
            "arxivId": "2411.00204",
            "arxivLink": "https://arxiv.org/abs/2411.00204",
            "title": "Can AI Forget What It Learned? New Research Tests \"Restorative Unlearning\"",
            "institute": "University of Maryland, University of Washington",
            "text": "This research focuses on \"restorative unlearning,\" which aims to not only remove unwanted information from a language model but also restore its original knowledge about specific concepts. This differs from previous work that primarily focused on forgetting unwanted information.",
            "paper-title": "RESTOR: Knowledge Recovery through Machine Unlearning",
            "image-path": "flux_paper_image/2411.00204_1730749626.png"
        },

        {
            "startTime": "10:31",
            "arxivId": "2411.00190",
            "arxivLink": "https://arxiv.org/abs/2411.00190",
            "title": "ICU Mortality Models: Fairer Than a Coma-Induced GCS Score?",
            "institute": "Microsoft, Philips",
            "text": "This research goes beyond traditional accuracy metrics to assess the fairness of machine learning models predicting ICU mortality, specifically focusing on how well models perform for different patient groups based on race, sex, and medical diagnoses. It also investigates the impact of documentation bias in clinical measurements, highlighting how this can affect model performance.",
            "paper-title": "Monitoring fairness in machine learning models that predict patient mortality in the ICU",
            "image-path": "flux_paper_image/2411.00190_1730748422.png"
        },

        {
            "startTime": "10:49",
            "arxivId": "2411.00062",
            "arxivLink": "https://arxiv.org/abs/2411.00062",
            "title": "LLMs Get Smarter by Asking Themselves Better Questions",
            "institute": "Google",
            "text": "This research introduces a new framework for aligning large language models (LLMs) called \"Evolving Alignment via Asymmetric Self-Play\" (eva). Unlike previous methods that rely on fixed sets of prompts, eva allows LLMs to continuously generate new, more challenging prompts for themselves, leading to improved performance on alignment benchmarks.",
            "paper-title": "Evolving Alignment via Asymmetric Self-Play",
            "image-path": "flux_paper_image/2411.00062_1730748442.png"
        },

        {
            "startTime": "11:13",
            "arxivId": "2411.00337",
            "arxivLink": "https://arxiv.org/abs/2411.00337",
            "title": "EV Charging Demand: Predicting the Future, One Plug at a Time!",
            "institute": "Tsinghua University",
            "text": "This research proposes a novel deep learning-based framework for probabilistic forecasting of EV charging demand, incorporating hierarchical coherency and addressing the quantile crossing problem. Unlike previous work, it utilizes PICNN and DCL layers for probabilistic modeling and scenario reconciliation, respectively.",
            "paper-title": "Coherent Hierarchical Probabilistic Forecasting of Electric Vehicle Charging Demand",
            "image-path": "flux_paper_image/2411.00337_1730750167.png"
        },

        {
            "startTime": "11:38",
            "arxivId": "2411.00186",
            "arxivLink": "https://arxiv.org/abs/2411.00186",
            "title": "Machine Learning Gets a Doctor: Self-Healing AI Fixes Its Own Problems!",
            "institute": "University of Cambridge",
            "text": "This research introduces a new paradigm called \"self-healing machine learning\" (SHML) that goes beyond simply detecting changes in data distributions. SHML equips machine learning models with the ability to diagnose the root cause of performance degradation and then take targeted corrective actions. This differs from previous approaches that rely on pre-defined actions without considering the underlying reason for the performance drop.",
            "paper-title": "Self-Healing Machine Learning: A Framework for Autonomous Adaptation in Real-World Environments",
            "image-path": "flux_paper_image/2411.00186_1730750110.png"
        },

        {
            "startTime": "12:08",
            "arxivId": "2411.00247",
            "arxivLink": "https://arxiv.org/abs/2411.00247",
            "title": "Deep Learning's Secret Sauce: A Telescoping Lens Reveals the Hidden Truth",
            "institute": "University of Cambridge",
            "text": "This research introduces a novel \"telescoping model\" that incrementally approximates the functional updates made during neural network training, providing a more accurate representation of the network's behavior compared to previous linearization approaches.",
            "paper-title": "Deep Learning Through A Telescoping Lens: A Simple Model Provides Empirical Insights On Grokking, Gradient Boosting&Beyond",
            "image-path": "flux_paper_image/2411.00247_1730750031.png"
        },

        {
            "startTime": "12:32",
            "arxivId": "2411.00585",
            "arxivLink": "https://arxiv.org/abs/2411.00585",
            "title": "LLMs: Role-Playing Reveals Their Hidden Biases!",
            "institute": "Nanyang Technological University, Peking University, King\u2019s College London...",
            "text": "This research focuses on identifying biases in LLMs during role-playing, a widely used technique to enhance their performance. Unlike previous work that focused on general biases, this study specifically examines how biases manifest when LLMs are asked to assume different roles.",
            "paper-title": "Benchmarking Bias in Large Language Models during Role-Playing",
            "image-path": "flux_paper_image/2411.00585_1730750340.png"
        },

        {
            "startTime": "12:54",
            "arxivId": "2411.00527",
            "arxivLink": "https://arxiv.org/abs/2411.00527",
            "title": "Radar vs. Light: A Head-to-Head Depth Sensing Showdown!",
            "institute": "Friedrich-Alexander-Universit\u00e4t Erlangen-N\u00fcrnberg, University College London",
            "text": "This research directly compares the performance of near-field radar and optical depth sensors, a novel approach that hasn't been explored extensively before.",
            "paper-title": "MAROON: A Framework for the Joint Characterization of Near-Field High-Resolution Radar and Optical Depth Imaging Techniques",
            "image-path": "flux_paper_image/2411.00527_1730748357.png"
        },

        {
            "startTime": "13:15",
            "arxivId": "2411.00359",
            "arxivLink": "https://arxiv.org/abs/2411.00359",
            "title": "Diffusion Models Get a Constraint Makeover: Faster, More Accurate Inverse Problem Solving!",
            "institute": "University of Washington, Cornell University",
            "text": "This paper introduces Constrained Diffusion Implicit Models (CDIM), which modify the diffusion updates to enforce constraints on the final output. Unlike previous methods that rely on task-specific training or introduce additional network evaluations during inference, CDIM uses a single pretrained diffusion model and integrates measurement constraints directly into the diffusion process.",
            "paper-title": "Constrained Diffusion Implicit Models",
            "image-path": "flux_paper_image/2411.00359_1730750257.png"
        },

        {
            "startTime": "13:35",
            "arxivId": "2411.00168",
            "arxivLink": "https://arxiv.org/abs/2411.00168",
            "title": "AI Makes Designs Weirder, Not Necessarily Better: A Study on Creativity and GenAI",
            "institute": "University of Washington",
            "text": "This research goes beyond simply looking at whether AI can generate creative outputs. It examines how AI impacts the *inherent creativity* of designers and how that varies based on their experience with AI and native language.",
            "paper-title": "Creativity in the Age of AI: Evaluating the Impact of Generative AI on Design Outputs and Designers' Creative Thinking",
            "image-path": "flux_paper_image/2411.00168_1730749343.png"
        },

        {
            "startTime": "13:56",
            "arxivId": "2411.00566",
            "arxivLink": "https://arxiv.org/abs/2411.00566",
            "title": "AI-Powered Math: Finding Hidden Patterns with PatternBoost!",
            "institute": "Meta, University of Wisconsin-Madison, Worcester Polytechnic Institute...",
            "text": "This research introduces PatternBoost, a method that combines classical search algorithms with transformer neural networks to find interesting mathematical constructions. Unlike previous work that primarily relied on local search or simpler neural networks, PatternBoost leverages the power of transformers to learn global patterns and suggest better starting points for the local search.",
            "paper-title": "PatternBoost: Constructions in Mathematics with a Little Help from AI",
            "image-path": "flux_paper_image/2411.00566_1730749264.png"
        },

        {
            "startTime": "14:28",
            "arxivId": "2411.00666",
            "arxivLink": "https://arxiv.org/abs/2411.00666",
            "title": "PPO Gets a Tune-Up: Beyond the Boundaries of Proximal Policy Optimization",
            "institute": "University of Oxford, University College London, Meta...",
            "text": "This research proposes a novel framework called \"outer-PPO\" that decouples the estimation and application of updates in PPO, allowing for the use of arbitrary gradient-based optimizers in the outer loop. This differs from standard PPO, which uses a fixed learning rate of 1.",
            "paper-title": "Beyond the Boundaries of Proximal Policy Optimization",
            "image-path": "flux_paper_image/2411.00666_1730750359.png"
        },

        {
            "startTime": "15:01",
            "arxivId": "2411.00053",
            "arxivLink": "https://arxiv.org/abs/2411.00053",
            "title": "Debate Club for LLMs: Training AI to Argue (and Get It Right)",
            "institute": "ByteDance, Meta, UC Santa Cruz",
            "text": "This paper proposes a novel framework, ACC-Debate, for training a team of LLMs to collaboratively solve problems through iterative discussion. Unlike previous work that relies on off-the-shelf models, ACC-Debate specifically trains models to collaborate, rather than treating collaboration as an emergent behavior.",
            "paper-title": "ACC-Debate: An Actor-Critic Approach to Multi-Agent Debate",
            "image-path": "flux_paper_image/2411.00053_1730750102.png"
        },

        {
            "startTime": "15:25",
            "arxivId": "2411.00028",
            "arxivLink": "https://arxiv.org/abs/2411.00028",
            "title": "LLMs and Knowledge Graphs: A Match Made in Socioeconomic Prediction Heaven!",
            "institute": "Tsinghua University",
            "text": "This research proposes a framework that synergizes large language models (LLMs) and knowledge graphs (KGs) for socioeconomic prediction in location-based social networks (LBSNs). Unlike previous approaches that rely on heuristic methods to extract task-relevant knowledge, this study leverages the reasoning capabilities of LLMs to automatically discover meta-paths within the LBKG.",
            "paper-title": "Synergizing LLM Agents and Knowledge Graph for Socioeconomic Prediction in LBSN",
            "image-path": "flux_paper_image/2411.00028_1730749702.png"
        },

        {
            "startTime": "15:47",
            "arxivId": "2411.00031",
            "arxivLink": "https://arxiv.org/abs/2411.00031",
            "title": "Solving Algebra Problems: A State of the Art Review (and a State of Mind)",
            "institute": "Tsinghua University",
            "text": "This paper introduces a new theoretical framework for reviewing algorithms that solve algebra problems. Unlike previous work, which focused primarily on the techniques used to solve problems, this research emphasizes the role of \"states\" \u2013 intermediate representations generated during the problem-solving process.",
            "paper-title": "A Theoretical Review on Solving Algebra Problems",
            "image-path": "flux_paper_image/2411.00031_1730749542.png"
        },

        {
            "startTime": "16:10",
            "arxivId": "2411.00568",
            "arxivLink": "https://arxiv.org/abs/2411.00568",
            "title": "Constrained Sampling: When Your Data Needs to Behave!",
            "institute": "University of Stuttgart, ETH Zurich, National School of Statistics and Economic Administration",
            "text": "This paper introduces a new algorithm, Primal-Dual Langevin Monte Carlo (PD-LMC), for sampling from a probability distribution while satisfying statistical constraints. Unlike previous methods that focus on support constraints, PD-LMC directly tackles constraints on the distribution itself, allowing for more general requirements like fairness or moment constraints.",
            "paper-title": "Constrained Sampling with Primal-Dual Langevin Monte Carlo",
            "image-path": "flux_paper_image/2411.00568_1730749818.png"
        },

        {
            "startTime": "16:35",
            "arxivId": "2411.00388",
            "arxivLink": "https://arxiv.org/abs/2411.00388",
            "title": "Data's Got Structure, Shapley's Got an Upgrade!",
            "institute": "University of Washington, Xi\u2019an Jiaotong University, Virginia Tech",
            "text": "This paper extends the traditional data Shapley framework to incorporate inherent structures within datasets, addressing the limitations of the symmetry axiom.",
            "paper-title": "Towards Data Valuation via Asymmetric Data Shapley",
            "image-path": "flux_paper_image/2411.00388_1730748882.png"
        },

        {
            "startTime": "16:55",
            "arxivId": "2411.00027",
            "arxivLink": "https://arxiv.org/abs/2411.00027",
            "title": "LLMs Get Personal: A Taxonomy for Tailoring AI to You",
            "institute": "Dartmouth College, Adobe Research, Stanford University...",
            "text": "This research unifies two separate lines of work on personalized LLMs, offering a taxonomy that categorizes efforts into personalized text generation and downstream task personalization. It also provides a formalization of personalized LLMs, defining and discussing novel facets of personalization, usage, and desiderata.",
            "paper-title": "Personalization of Large Language Models: A Survey",
            "image-path": "flux_paper_image/2411.00027_1730748520.png"
        },

        {
            "startTime": "17:17",
            "arxivId": "2411.00418",
            "arxivLink": "https://arxiv.org/abs/2411.00418",
            "title": "LLMs Learn to Love Themselves: Self-Evolved Reward Learning for Better Bots",
            "institute": "Fudan University, Peking University, Microsoft",
            "text": "This paper introduces a novel approach called Self-Evolved Reward Learning (SER) where the reward model (RM) iteratively improves itself by generating feedback on its own predictions, reducing the reliance on human-annotated data. Unlike previous methods that rely heavily on human feedback or heuristic assumptions about LLMs providing high-quality feedback, SER leverages the LLM's ability to evaluate and provide feedback on its own outputs.",
            "paper-title": "Self-Evolved Reward Learning for LLMs",
            "image-path": "flux_paper_image/2411.00418_1730749922.png"
        },

        {
            "startTime": "17:48",
            "arxivId": "2411.00722",
            "arxivLink": "https://arxiv.org/abs/2411.00722",
            "title": "Query Generation Gets a Token-Level Tune-Up: LLMs Learn to Speak the Language of Search!",
            "institute": "Zhejiang University, Microsoft",
            "text": "This research introduces a novel approach called Token-level Proximal Policy Optimization (TPPO) for query generation. Unlike traditional methods that assign rewards at the end of a sentence, TPPO assigns rewards to individual tokens within a sentence, providing more granular feedback to the language model.",
            "paper-title": "Token-level Proximal Policy Optimization for Query Generation",
            "image-path": "flux_paper_image/2411.00722_1730749218.png"
        },

        {
            "startTime": "18:15",
            "arxivId": "2411.00278",
            "arxivLink": "https://arxiv.org/abs/2411.00278",
            "title": "Time Series Anomaly Detection: A Fourier Series of Fun!",
            "institute": "Chinese Academy of Sciences, ZTE Corporation, Tsinghua University",
            "text": "This research introduces KAN-AD, a novel time series anomaly detection method that leverages the Kolmogorov-Arnold representation theorem and Fourier series to model normal patterns in time series data. Unlike previous methods that directly model the relationship between time points, KAN-AD focuses on learning the coefficients of univariate functions, which are specifically designed to capture global temporal patterns and mitigate the influence of local anomalies.",
            "paper-title": "KAN-AD: Time Series Anomaly Detection with Kolmogorov-Arnold Networks",
            "image-path": "flux_paper_image/2411.00278_1730748510.png"
        },

        {
            "startTime": "18:37",
            "arxivId": "2411.00248",
            "arxivLink": "https://arxiv.org/abs/2411.00248",
            "title": "AI Doctors: Teamwork Makes the Dream Work!",
            "institute": "MIT, Columbia University, Google...",
            "text": "This research introduces MDAgents, a framework that dynamically adjusts the collaboration structure of large language models (LLMs) based on the complexity of medical queries. This differs from previous work that often uses static multi-agent setups or single-agent LLMs.",
            "paper-title": "A Demonstration of Adaptive Collaboration of Large Language Models for Medical Decision-Making",
            "image-path": "flux_paper_image/2411.00248_1730748959.png"
        },

        {
            "startTime": "19:03",
            "arxivId": "2411.00213",
            "arxivLink": "https://arxiv.org/abs/2411.00213",
            "title": "Unmasking the Hidden Hand: Learning Causal Relationships from Noisy Interventions",
            "institute": "Microsoft, MIT",
            "text": "This research tackles the challenge of disentangling mixed interventional and observational data in linear structural equation models (SEMs) with Gaussian noise. Unlike previous work that assumes segregated datasets or knowledge of the causal graph, this paper proposes an efficient algorithm to uniquely recover the individual components of the mixture, even when the intervention targets are unknown.",
            "paper-title": "Learning Mixtures of Unknown Causal Interventions",
            "image-path": "flux_paper_image/2411.00213_1730749385.png"
        },

        {
            "startTime": "19:24",
            "arxivId": "2411.00006",
            "arxivLink": "https://arxiv.org/abs/2411.00006",
            "title": "Code With Personality: Can Giving AI a \"Type\" Make It a Better Programmer?",
            "institute": "Peking University, Nanyang Technological University, King\u2019s College London",
            "text": "This research explores the impact of assigning personality traits to large language models (LLMs) when they are tasked with generating code. Unlike previous work that focuses on LLMs role-playing as programmers, this study investigates whether assigning specific personality types, based on the Myers-Briggs Type Indicator (MBTI), can improve code generation accuracy.",
            "paper-title": "Personality-Guided Code Generation Using Large Language Models",
            "image-path": "flux_paper_image/2411.00006_1730749997.png"
        },

        {
            "startTime": "19:53",
            "arxivId": "2411.00408",
            "arxivLink": "https://arxiv.org/abs/2411.00408",
            "title": "Neural Network Traffic Cop: A Bypass Co-processor for Smarter Networks",
            "institute": "National University of Defense Technology, Peking University",
            "text": "This research proposes Kaleidoscope, a co-processor that sits on the \"bypass\" of the data plane, allowing for flexible and high-performance neural network inference without impacting the data plane's performance. This differs from previous work that either modifies neural networks for existing data planes or integrates accelerators directly into the forwarding pipeline, sacrificing flexibility and potentially harming performance.",
            "paper-title": "Inference-to-complete: A High-performance and Programmable Data-plane Co-processor for Neural-network-driven Traffic Analysis",
            "image-path": "flux_paper_image/2411.00408_1730749424.png"
        },

        {
            "startTime": "20:17",
            "arxivId": "2411.00161",
            "arxivLink": "https://arxiv.org/abs/2411.00161",
            "title": "Deep Learning Goes Deep: Gaussian Processes on Manifolds Get a Residual Makeover",
            "institute": "University of Oxford, ETH Zurich",
            "text": "This paper introduces residual deep Gaussian processes on Riemannian manifolds, a novel model class that generalizes deep GPs to non-Euclidean domains. Unlike previous work, this approach uses Gaussian vector fields (GVFs) to represent manifold-to-manifold hidden layers, enabling the modeling of scalar-valued, vector-valued, and manifold-valued functions, as well as vector fields.",
            "paper-title": "Residual Deep Gaussian Processes on Manifolds",
            "image-path": "flux_paper_image/2411.00161_1730750222.png"
        },

        {
            "startTime": "20:48",
            "arxivId": "2411.00056",
            "arxivLink": "https://arxiv.org/abs/2411.00056",
            "title": "Negation Nation: A New Method for Generating Diverse Negations from Affirmative Sentences",
            "institute": "University College London",
            "text": "This research introduces NegVerse, a method that generates a wider range of negation types (verbal, non-verbal, and affixal) from affirmative sentences compared to previous methods. It uses a masking strategy to maintain sentence fluency and structural preservation, resulting in outputs that align lexically better with the original sentences.",
            "paper-title": "Generating Diverse Negations from Affirmative Sentences",
            "image-path": "flux_paper_image/2411.00056_1730748389.png"
        },

        {
            "startTime": "21:14",
            "arxivId": "2411.00453",
            "arxivLink": "https://arxiv.org/abs/2411.00453",
            "title": "Diffusion Models: The New Network Optimization Wizards!",
            "institute": "Northwestern Polytechnical University, Xidian University, University of Oslo...",
            "text": "This research explores using generative diffusion models (GDMs) as network optimizers, a novel approach compared to traditional discriminative models. The paper provides theoretical proof and experimental validation for this method, demonstrating its effectiveness in handling complex optimization problems.",
            "paper-title": "Diffusion Models as Network Optimizers: Explorations and Analysis",
            "image-path": "flux_paper_image/2411.00453_1730749460.png"
        },

        {
            "startTime": "21:36",
            "arxivId": "2411.00775",
            "arxivLink": "https://arxiv.org/abs/2411.00775",
            "title": "Mean Estimation: Dimension-Free Privacy for Anisotropic Data",
            "institute": "Tel Aviv University, UC Berkeley",
            "text": "This research introduces a new approach to private mean estimation that achieves dimension-independent sample complexity for anisotropic distributions. Unlike previous work, which relied on a\ufb03ne-invariant Mahalanobis distance, this study focuses on the Euclidean distance, leading to improved bounds for real-world data that often exhibits anisotropy.",
            "paper-title": "Dimension-free Private Mean Estimation for Anisotropic Distributions",
            "image-path": "flux_paper_image/2411.00775_1730749763.png"
        },

        {
            "startTime": "22:06",
            "arxivId": "2411.00196",
            "arxivLink": "https://arxiv.org/abs/2411.00196",
            "title": "Elephant Pose Estimation: Drones Get a Leg Up on Behavior!",
            "institute": "Form Bio, Colossal Biosciences, Save the Elephants...",
            "text": "This research explores the use of two pose estimation workflows, DeepLabCut and YOLO-NAS-Pose, to analyze elephant behavior from drone footage. This differs from previous work by focusing on low-resolution subjects and applying YOLO-NAS-Pose, a model not previously used for wildlife behavioral studies.",
            "paper-title": "Whole-Herd Elephant Pose Estimation from Drone Data for Collective Behavior Analysis",
            "image-path": "flux_paper_image/2411.00196_1730748673.png"
        },

        {
            "startTime": "22:30",
            "arxivId": "2411.00138",
            "arxivLink": "https://arxiv.org/abs/2411.00138",
            "title": "Soft Robots Learn to Bend Like a Pro: New Model Makes Them Smarter!",
            "institute": "Delft University of Technology, MIT",
            "text": "This research introduces a method for automatically learning low-dimensional strain models for soft robots directly from image data. Unlike previous approaches that rely on expert knowledge and simplifications, this method uses a kinematic fusion algorithm to identify the minimal necessary segments for describing the robot's movement and a dynamic regression and strain sparsification algorithm to identify relevant strains and define the model's dynamics.",
            "paper-title": "Learning Low-Dimensional Strain Models of Soft Robots by Looking at the Evolution of Their Shape with Application to Model-Based Control",
            "image-path": "flux_paper_image/2411.00138_1730750040.png"
        },

        {
            "startTime": "23:03",
            "arxivId": "2411.00426",
            "arxivLink": "https://arxiv.org/abs/2411.00426",
            "title": "GWP Prediction: It's Not Just About the Molecules, It's About the Process!",
            "institute": "King\u2019s College London",
            "text": "This research incorporates process information, such as production titles, descriptions, and locations, alongside molecular descriptors to improve GWP prediction accuracy. Previous studies primarily focused on molecular structure alone.",
            "paper-title": "A KAN-based Interpretable Framework for Process-Informed Prediction of Global Warming Potential",
            "image-path": "flux_paper_image/2411.00426_1730748709.png"
        },

        {
            "startTime": "23:25",
            "arxivId": "2411.00773",
            "arxivLink": "https://arxiv.org/abs/2411.00773",
            "title": "LogiCity: Simulating Cities, Reasoning Like Humans",
            "institute": "CMU",
            "text": "This research introduces LogiCity, a simulator that uses first-order logic (FOL) to model urban environments with multiple dynamic agents. Unlike previous benchmarks, LogiCity allows for customizable abstractions, enabling researchers to explore various aspects of neuro-symbolic AI (NeSy AI) in more complex scenarios.",
            "paper-title": "LogiCity: Advancing Neuro-Symbolic AI with Abstract Urban Simulation",
            "image-path": "flux_paper_image/2411.00773_1730748505.png"
        },

        {
            "startTime": "23:46",
            "arxivId": "2411.00144",
            "arxivLink": "https://arxiv.org/abs/2411.00144",
            "title": "Self-Ensembling Gaussian Splatting: 3D Rendering with Fewer Views, More Detail!",
            "institute": "\u00c9cole Polytechnique F\u00e9d\u00e9rale de Lausanne",
            "text": "This paper introduces a new approach to 3D Gaussian Splatting (3DGS) that uses self-ensembling to improve the quality of novel view synthesis when trained on sparse views. Unlike previous methods that train multiple models, this approach dynamically perturbs a single model based on uncertainties in the rendered images, creating an ensemble of temporal samples.",
            "paper-title": "Self-Ensembling Gaussian Splatting for Few-shot Novel View Synthesis",
            "image-path": "flux_paper_image/2411.00144_1730749447.png"
        },

        {
            "startTime": "24:16",
            "arxivId": "2411.00688",
            "arxivLink": "https://arxiv.org/abs/2411.00688",
            "title": "Skipping the Hard Work: How to Speed Up Image Reconstruction",
            "institute": "Finden Ltd, University College London, Queen Mary University of London",
            "text": "This research introduces ProxSkip, an algorithm that skips regularisation steps in iterative methods for solving imaging inverse problems. This approach differs from previous work by randomly skipping these steps, reducing computational time without affecting convergence.",
            "paper-title": "Why do we regularise in every iteration for imaging inverse problems?",
            "image-path": "flux_paper_image/2411.00688_1730749224.png"
        },

        {
            "startTime": "24:36",
            "arxivId": "2411.00266",
            "arxivLink": "https://arxiv.org/abs/2411.00266",
            "title": "Dataset Chaos: A NeurIPS Study Uncovers the Messy Truth About Data Management",
            "institute": "University of Texas at Austin, University of Minnesota, MIT",
            "text": "This research stands out by systematically reviewing dataset papers published at the NeurIPS Datasets and Benchmarks track, focusing on four key aspects: provenance, distribution, ethical disclosure, and licensing. It goes beyond individual reflections on ethical data management and examines practices at scale.",
            "paper-title": "A Systematic Review of NeurIPS Dataset Management Practices",
            "image-path": "flux_paper_image/2411.00266_1730749195.png"
        },

        {
            "startTime": "24:59",
            "arxivId": "2411.00621",
            "arxivLink": "https://arxiv.org/abs/2411.00621",
            "title": "Hawkes Processes Get a Kernel Makeover: Nonparametric Estimation with RKHSs",
            "institute": "Sorbonne Universit\u00e9, Universit\u00e9 Paris Cit\u00e9, CNRS",
            "text": "This paper proposes a nonparametric estimation method for nonlinear multivariate Hawkes processes using reproducing kernel Hilbert spaces (RKHSs). Unlike previous methods that rely on specific kernel functions or strong approximations, this approach allows for more flexible and complex interaction functions.",
            "paper-title": "Nonparametric estimation of Hawkes processes with RKHSs",
            "image-path": "flux_paper_image/2411.00621_1730749350.png"
        },

        {
            "startTime": "25:24",
            "arxivId": "2411.00446",
            "arxivLink": "https://arxiv.org/abs/2411.00446",
            "title": "LHC Gets a Lorentz-Boost: New AI Makes Particle Physics a Breeze!",
            "institute": "CuspAI, Universit\u00e4t Heidelberg, CERN...",
            "text": "This research introduces a new type of neural network called the Lorentz-Equivariant Geometric Algebra Transformer (L-GATr). Unlike previous networks, L-GATr explicitly incorporates the principles of special relativity, making it more efficient and accurate for tasks involving particles moving at high speeds.",
            "paper-title": "A Lorentz-Equivariant Transformer for All of the LHC",
            "image-path": "flux_paper_image/2411.00446_1730748839.png"
        },

        {
            "startTime": "25:49",
            "arxivId": "2411.00238",
            "arxivLink": "https://arxiv.org/abs/2411.00238",
            "title": "VLMs: Visionaries or Vision-Challenged? The Binding Problem Strikes Again!",
            "institute": "Princeton University, EPFL, Dartmouth College...",
            "text": "This research investigates the limitations of vision language models (VLMs) in multi-object reasoning tasks, drawing a parallel to the \"binding problem\" in cognitive science. The study explores how VLMs struggle with tasks like counting and visual analogies, suggesting that their failures stem from an inability to manage representational interference.",
            "paper-title": "Understanding the Limits of Vision Language Models Through the Lens of the Binding Problem",
            "image-path": "flux_paper_image/2411.00238_1730749976.png"
        },

        {
            "startTime": "26:20",
            "arxivId": "2411.00263",
            "arxivLink": "https://arxiv.org/abs/2411.00263",
            "title": "Space-Age Learning: How Satellites Can Train AI Without Downloading Data",
            "institute": "Stanford University, University of Cambridge",
            "text": "This research introduces a novel framework for \"space-ifying\" existing federated learning algorithms, making them suitable for use in satellite constellations. It also proposes AutoFLSat, a fully autonomous FL algorithm that leverages inter- and intra-satellite links for efficient model training.",
            "paper-title": "Space for Improvement: Navigating the Design Space for Federated Learning in Satellite Constellations",
            "image-path": "flux_paper_image/2411.00263_1730749806.png"
        },

        {
            "startTime": "26:42",
            "arxivId": "2411.00588",
            "arxivLink": "https://arxiv.org/abs/2411.00588",
            "title": "Disentangled Representations: More Than Just a Pretty Face, They're Diverse Too!",
            "institute": "TUDelft, University of Edinburgh, Google DeepMind...",
            "text": "This paper introduces \u03b1-TCVAE, a variational autoencoder that optimizes a novel total correlation (TC) lower bound. This bound maximizes disentanglement and latent variable informativeness, unlike previous methods that only focus on information bottlenecks.",
            "paper-title": "\u03b1TC-VAE: On the relationship between Disentanglement and Diversity",
            "image-path": "flux_paper_image/2411.00588_1730749168.png"
        },

        {
            "startTime": "27:08",
            "arxivId": "2411.00560",
            "arxivLink": "https://arxiv.org/abs/2411.00560",
            "title": "Eye Spy a New Loss Function: Helping AI See Ocular Myasthenia Gravis Better!",
            "institute": "Beijing University of Technology, Sorbonne Universit\u00b4e, CNRS...",
            "text": "This research introduces a new loss function called TIU loss, which incorporates topological constraints and intersection-union relationships between eye regions. This approach is distinct from previous work that primarily focused on pixel-level accuracy without considering the spatial relationships between different eye structures.",
            "paper-title": "Topology and Intersection-Union Constrained Loss Function for Multi-Region Anatomical Segmentation in Ocular Images",
            "image-path": "flux_paper_image/2411.00560_1730748281.png"
        },

        {
            "startTime": "27:34",
            "arxivId": "2411.00702",
            "arxivLink": "https://arxiv.org/abs/2411.00702",
            "title": "Unmasking Political Narratives: How Graphs Can Decode Public Discourse",
            "institute": "Max Planck Institute for Mathematics in the Sciences, \u00c9cole Normale Sup\u00e9rieure, Sciences Po...",
            "text": "This research uses Abstract Meaning Representation (AMR) to extract narrative signals from text, focusing on meaning rather than syntax, which sets it apart from previous work that relied on dependency parsing or semantic role labeling.",
            "paper-title": "A graph-based approach to extracting narrative signals from public discourse",
            "image-path": "flux_paper_image/2411.00702_1730749854.png"
        },

        {
            "startTime": "27:52",
            "arxivId": "2411.00471",
            "arxivLink": "https://arxiv.org/abs/2411.00471",
            "title": "Shrinking Coefficients Like a Boss: A New Prior for Model Selection",
            "institute": "Google Inc., University of Washington",
            "text": "This paper introduces Dirichlet process mixtures of block g priors, which allow for differential shrinkage across coefficients while fully accounting for the predictors\u2019 correlation structure. This approach differs from previous work by treating the blocks of covariates as an unknown parameter that must be inferred from the data.",
            "paper-title": "Dirichlet process mixtures of block $g$ priors for model selection and prediction in linear models",
            "image-path": "flux_paper_image/2411.00471_1730749016.png"
        },

        {
            "startTime": "28:12",
            "arxivId": "2411.00725",
            "arxivLink": "https://arxiv.org/abs/2411.00725",
            "title": "Multimodal Fusion: When One Size Doesn't Fit All!",
            "institute": "University of Cambridge",
            "text": "This research extends the Multimodal Dynamics algorithm, originally designed for tabular genetic data, to image data. The paper also includes a more thorough analysis of the algorithm's components, including ablation studies.",
            "paper-title": "Exploring Multi-Modality Dynamics: Insights and Challenges in Multimodal Fusion for Biomedical Tasks",
            "image-path": "flux_paper_image/2411.00725_1730748734.png"
        },

        {
            "startTime": "28:45",
            "arxivId": "2411.00297",
            "arxivLink": "https://arxiv.org/abs/2411.00297",
            "title": "Predicting Survey Dropouts: Can Machine Learning Save the Day?",
            "institute": "University College London",
            "text": "This research focuses on predicting non-responses in the ELSA COVID-19 Substudy, a unique dataset collected during the pandemic. Unlike previous studies on ELSA, this paper investigates the impact of COVID-19-related factors on response rates.",
            "paper-title": "Analysis of ELSA COVID-19 Substudy response rate using machine learning algorithms",
            "image-path": "flux_paper_image/2411.00297_1730749365.png"
        },

        {
            "startTime": "29:01",
            "arxivId": "2411.00317",
            "arxivLink": "https://arxiv.org/abs/2411.00317",
            "title": "CNNs Go Long: Predicting Death with 1D Convolutional Networks",
            "institute": "University of Oxford, NatCen",
            "text": "This study uses a 1D-CNN to predict mortality in longitudinal data, a novel approach compared to traditional methods like GLMMs and ensemble trees.",
            "paper-title": "Forecasting Mortality in the Middle-Aged and Older Population of England: A 1D-CNN Approach",
            "image-path": "flux_paper_image/2411.00317_1730748668.png"
        },

        {
            "startTime": "29:23",
            "arxivId": "2411.00326",
            "arxivLink": "https://arxiv.org/abs/2411.00326",
            "title": "SpineFM: AI's New Trick for X-Ray Spine Segmentation",
            "institute": "University of Oxford, Big Data Institute",
            "text": "This research introduces SpineFM, a novel pipeline that leverages a foundation model called Med-SA for automatic segmentation of vertebrae in spine X-rays. Unlike previous methods that rely on convolutional neural networks (CNNs), SpineFM utilizes an inductive approach, sequentially inferring the location of each vertebra along the spinal column.",
            "paper-title": "SpineFM: Leveraging Foundation Models for Automatic Spine X-ray Segmentation",
            "image-path": "flux_paper_image/2411.00326_1730748490.png"
        },

        {
            "startTime": "29:45",
            "arxivId": "2411.00609",
            "arxivLink": "https://arxiv.org/abs/2411.00609",
            "title": "MRI Reports: The Secret Weapon for Brain Tumor Diagnosis?",
            "institute": "University of Toronto",
            "text": "This research introduces a novel contrastive learning framework that leverages tumor location information alongside MRI scans and radiology reports to improve the explainability and performance of brain tumor diagnosis models. This approach differs from previous work by incorporating tumor location as an external variable in the contrastive learning process, enhancing the representation learning and generalizability of the model.",
            "paper-title": "Tumor Location-weighted MRI-Report Contrastive Learning: A Framework for Improving the Explainability of Pediatric Brain Tumor Diagnosis",
            "image-path": "flux_paper_image/2411.00609_1730749006.png"
        },

        {
            "startTime": "30:12",
            "arxivId": "2411.00257",
            "arxivLink": "https://arxiv.org/abs/2411.00257",
            "title": "Can AI See Charts Like We Do? A Zero-Shot Test of Vision-Language Models",
            "institute": "Harvard University, NYU, Georgia Institute of Technology",
            "text": "This research evaluates the ability of Vision-Language Models (VLMs) to perform graphical perception tasks, comparing their performance to established human benchmarks. Unlike previous work that focused on more complex tasks like chart generation, this study delves into the fundamental perceptual abilities of VLMs.",
            "paper-title": "Understanding Graphical Perception in Data Visualization through Zero-shot Prompting of Vision-Language Models",
            "image-path": "flux_paper_image/2411.00257_1730748337.png"
        },

        {
            "startTime": "30:37",
            "arxivId": "2411.00759",
            "arxivLink": "https://arxiv.org/abs/2411.00759",
            "title": "Discrete Flows: Smoother Paths, Less Jumping Around!",
            "institute": "MetaDialog Research",
            "text": "This paper introduces a new way to optimize discrete flow models by minimizing the number of state transitions during generation. This is achieved by using a dynamic-optimal-transport-like objective function and deriving its equivalent Kantorovich formulation. This approach differs from previous work by explicitly incorporating a similarity metric between states, allowing for more nuanced control over the flow dynamics.",
            "paper-title": "Minibatch Optimal Transport and Perplexity Bound Estimation in Discrete Flow Matching",
            "image-path": "flux_paper_image/2411.00759_1730748601.png"
        },

        {
            "startTime": "30:56",
            "arxivId": "2411.00611",
            "arxivLink": "https://arxiv.org/abs/2411.00611",
            "title": "Coresets Get a Smaller, Smarter Makeover with DPPs!",
            "institute": "\u00c9cole Normale Sup\u00e9rieure",
            "text": "This research demonstrates that Determinantal Point Processes (DPPs) can create coresets with significantly smaller cardinalities than those built using independent sampling, achieving the same accuracy. This is a significant improvement over previous work, which only suggested that DPPs might be better.",
            "paper-title": "Small coresets via negative dependence: DPPs, linear statistics, and concentration",
            "image-path": "flux_paper_image/2411.00611_1730749668.png"
        },

        {
            "startTime": "31:25",
            "arxivId": "2411.00042",
            "arxivLink": "https://arxiv.org/abs/2411.00042",
            "title": "Math Problems? No Problem! LLMs Get a Boost from Problem Categorization",
            "institute": "Westwood High School",
            "text": "This research explores the effectiveness of categorizing math problems before feeding them to Large Language Models (LLMs). Unlike previous work that focuses on general hints or feedback, this study uses problem categories to determine the best problem-solving strategy for the LLM.",
            "paper-title": "Problem Categorization Can Help Large Language Models Solve Math Problems",
            "image-path": "flux_paper_image/2411.00042_1730749470.png"
        },

        {
            "startTime": "31:50",
            "arxivId": "2411.00653",
            "arxivLink": "https://arxiv.org/abs/2411.00653",
            "title": "Node Embeddings: Decoding the Whispers of Relationships",
            "institute": "Purdue University, Microsoft",
            "text": "This research introduces a new method called Node Coherence Rate for Representation Interpretation (NCI) to evaluate how well node representations capture relationships between nodes in a graph. Unlike previous work that focused on explaining model decisions, NCI focuses on interpreting the learned node representations themselves.",
            "paper-title": "Rethinking Node Representation Interpretation through Relation Coherence",
            "image-path": "flux_paper_image/2411.00653_1730749395.png"
        },

        {
            "startTime": "32:12",
            "arxivId": "2411.00195",
            "arxivLink": "https://arxiv.org/abs/2411.00195",
            "title": "AI Can Tell If Your Cover Song Is a Hit (Or a Miss)",
            "institute": "Stanford University",
            "text": "This research goes beyond simple audio comparisons, using advanced features like MFCCs, Chroma, Spectral Contrast, and Temporal characteristics to predict audience sentiment for music covers.",
            "paper-title": "Machine Learning Framework for Audio-Based Content Evaluation using MFCC, Chroma, Spectral Contrast, and Temporal Feature Engineering",
            "image-path": "flux_paper_image/2411.00195_1730749720.png"
        },

        {
            "startTime": "32:32",
            "arxivId": "2411.00107",
            "arxivLink": "https://arxiv.org/abs/2411.00107",
            "title": "Drifting Made Easy: How AI Learns to Handle Cars at the Limit",
            "institute": "Toyota Research Institute, University of California Santa Barbara, Rensselaer Polytechnic Institute",
            "text": "This research introduces a Bayesian meta-learning approach for vehicle dynamics modeling, which allows for rapid online adaptation of the model. Unlike previous work that relies solely on online adaptation, this method actively gathers informative data to refine the model before deployment, leading to more reliable control in challenging scenarios.",
            "paper-title": "First, Learn What You Don't Know: Active Information Gathering for Driving at the Limits of Handling",
            "image-path": "flux_paper_image/2411.00107_1730748790.png"
        },

        {
            "startTime": "32:56",
            "arxivId": "2411.00288",
            "arxivLink": "https://arxiv.org/abs/2411.00288",
            "title": "Sparsity's Secret Weapon: How to Make CNNs Run Faster Without Losing a Beat!",
            "institute": "ETH Zurich",
            "text": "This paper proposes a novel method for learning semi-structured sparsity patterns in convolutional kernels, specifically focusing on 2:4 sparsity, which leverages readily available hardware accelerations for efficient inference. This approach differs from previous work by learning the sparsity patterns directly from the training data, rather than relying on heuristics or pruning techniques.",
            "paper-title": "Inducing Semi-Structured Sparsity by Masking for Efficient Model Inference in Convolutional Networks",
            "image-path": "flux_paper_image/2411.00288_1730750296.png"
        },

        {
            "startTime": "33:14",
            "arxivId": "2411.00179",
            "arxivLink": "https://arxiv.org/abs/2411.00179",
            "title": "Who's the Real Expert? AI's Definition of Expertise Needs a Reality Check!",
            "institute": "Google, University of Texas at Austin",
            "text": "This research stands out by systematically reviewing how ML publications define \"expert\" and \"expertise.\" It goes beyond simply looking at how experts are used in ML development, but also examines the underlying assumptions about knowledge and its role in AI systems.",
            "paper-title": "What Makes An Expert? Reviewing How ML Researchers Define\"Expert\"",
            "image-path": "flux_paper_image/2411.00179_1730749928.png"
        }
    ],
    "stats": {
        "num_pick": 80,
        "num_total": 307,
    },
    "audio": "https://d2irtorupa9e8g.cloudfront.net/daily_podcast/202411041240_audio.mp3"
}
