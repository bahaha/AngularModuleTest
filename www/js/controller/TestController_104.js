module.exports= function($scope, $state, TestService){
		console.log('enter controller_104')
		$scope.test = TestService.getTest()
	}
